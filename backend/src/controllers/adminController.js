require("dotenv").config();
const ExcelJS = require("exceljs");
const moment = require("moment");
const User = require("../models/userModel");
const Form = require("../models/formModel");
const Entrepreneur = require("../models/entrepreneurModel");
const Architecte = require("../models/architecteModel");
const Manager = require("../models/managerModel");
const logService = require("../services/logService");
const Log = require("../models/logModel");
const mailService = require("../services/mailService");
const Project = require("../models/projectModel");

const getUsers = async (req, res) => {
  const { page = 1, limit = 15, search = "" } = req.query;
  try {
    const query = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { tel: { $regex: search, $options: "i" } },
      ],
    };
    const users = await User.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit);
    const count = await User.countDocuments(query);
    res.json({
      users,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const project = await Form.find();
    res.json(project);
  } catch (e) {
    res.status(400).json({ message: "Get project error" });
  }
};

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Form.findOne({ _id: id });
    res.json(project);
  } catch (e) {
    res.status(400).json({ message: "Get project error" });
  }
};

const getProjectByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const project = await Form.findOne({ email });

    if (!project) {
      return res.status(404).json({ message: "project not found!" });
    }

    res.json(project);
  } catch (e) {
    res.status(400).json({ message: "Get project error" });
  }
};

const getProjectsByStatus = async (req, res) => {
  try {
    const { status } = req.query;

    const allowedStatusValues = [
      "PENDING",
      "ANALYSE",
      "REFUSED",
      "APPROVED",
      "PROGRESS",
      "PAYMENT",
      "FINISH",
    ];

    if (!allowedStatusValues.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const projects = await Form.find({ status });
    res.json(projects);
  } catch (e) {
    res.status(400).json({ message: "Error getting projects by status" });
  }
};

const changeProjectStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, comment } = req.body;
    const clientIp =
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress;

    const allowedStatusValues = [
      "PENDING",
      "ANALYSE",
      "REFUSED",
      "APPROVED",
      "PROGRESS",
      "PAYMENT",
      "FINISH",
    ];

    if (!allowedStatusValues.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const project = await Form.findOneAndUpdate(
      { _id: id },
      { status: status },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found!" });
    }

    const statusMessage = logService.customizeLogMessage(
      `L'administrateur a changé le statut du projet ( Email: ${
        project.profile?.email
      } ID:${project._id} ) à ${status} ${
        comment ? `, avec commentaire: ${comment}` : ""
      }`
    );

    await logService.logEvent(
      "project_status_change",
      statusMessage,
      "ADMIN",
      clientIp,
      req.headers["user-agent"]
    );

    const statusTranslations = {
      PENDING: "en attente de vérification",
      ANALYSE: "en étude",
      REFUSED: "refusé",
      APPROVED: "approuvé",
      PROGRESS: "en cours",
      PAYMENT: "en attente de paiement",
      FINISH: "terminé",
    };

    const linkToProject = `${process.env.CLIENT_URL}/dashboard/projects/${project._id}`;
    await mailService.sendProjectStatusUpdateMail(
      project.profile?.email,
      project.profile?.firstname,
      statusTranslations[status],
      linkToProject,
      comment
    );

    return res.json({
      message: "Project status updated successfully",
      project,
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: "Error updating project status" });
  }
};

const getUserBySlug = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username }).populate("forms");

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.json(user);
  } catch (e) {
    res.status(400).json({ message: "Get user error" });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.json(user);
  } catch (e) {
    res.status(400).json({ message: "Get user error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const clientIp =
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress;
    const { id } = req.params;
    const { name, city, tel, type, isActivated, roles } = req.body;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    let updatedFields = {};
    if (name && name !== user.name) {
      user.name = name;
      updatedFields.name = name;
    }
    if (city && city !== user.city) {
      user.city = city;
      updatedFields.city = city;
    }
    if (tel && tel !== user.tel) {
      user.tel = tel;
      updatedFields.tel = tel;
    }
    if (type && type !== user.type) {
      user.type = type;
      updatedFields.type = type;
    }
    if (isActivated !== undefined && isActivated !== user.isActivated) {
      user.isActivated = isActivated;
      updatedFields.isActivated = isActivated;
    }
    if (roles && !roles.every((role) => user.roles.includes(role))) {
      user.roles = roles;
      updatedFields.roles = roles;
    }

    await user.save();

    const updatedFieldsDescriptions = Object.entries(updatedFields)
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ");

    const logMessage = logService.customizeLogMessage(
      updatedFieldsDescriptions
        ? `L'administrateur a mis à jour l'utilisateur ${user.email} avec les valeurs ${updatedFieldsDescriptions}`
        : `L'administrateur a mis à jour l'utilisateur ${user.email} sans changements`
    );

    await logService.logEvent(
      "admin_update",
      logMessage,
      "ADMIN",
      clientIp,
      req.headers["user-agent"]
    );
    return res.json({ message: "User updated successfully" });
  } catch (e) {
    return res.status(400).json({ message: "Error in updating user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { email } = req.params;
    const deletedUser = await User.findOneAndDelete({
      email: email,
    });

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found!" });
    }

    return res.json({ message: "User deleted successfully" });
  } catch (e) {
    return res.status(400).json({ message: "Error in delete user" });
  }
};

const giveAdmin = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (user.roles.includes("ADMIN")) {
      return res.status(400).json({ message: "User is already an admin!" });
    }
    user.roles.push("ADMIN");
    await user.save();
    return res.json({ message: "User granted admin role successfully" });
  } catch (e) {
    return res.status(400).json({ message: "Error in granting admin role" });
  }
};

const givePro = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (user.roles.includes("PRO")) {
      return res.status(400).json({ message: "User is already PRO!" });
    }
    user.roles.push("PRO");
    await user.save();
    return res.json({ message: "User granted to PRO successfully" });
  } catch (e) {
    return res.status(400).json({ message: "Error in granting admin role" });
  }
};

const getPendingProUsers = async (req, res) => {
  try {
    const users = await User.find({ roles: "PRO", status: "PENDING" });
    res.json(users);
  } catch (e) {
    res.status(400).json({ message: "Get pending PRO users error" });
  }
};

const getApprovedProUsers = async (req, res) => {
  try {
    const users = await User.find({ roles: "PRO", status: "APPROVED" });
    res.json(users);
  } catch (e) {
    res.status(400).json({ message: "Get pending PRO users error" });
  }
};

const getPendingUsers = async (req, res) => {
  try {
    const users = await User.find({ roles: "USER", status: "PENDING" });
    res.json(users);
  } catch (e) {
    res.status(400).json({ message: "Get pending USER users error" });
  }
};

const getApprovedUsers = async (req, res) => {
  try {
    const users = await User.find({ roles: "USER", status: "APPROVED" });
    res.json(users);
  } catch (e) {
    res.status(400).json({ message: "Get pending USERs error" });
  }
};

const Approve = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (user.status === "APPROVED") {
      return res.status(400).json({ message: "User is already approved!" });
    }

    user.status = "APPROVED";
    await user.save();
    return res.json({ message: "User approved successfully" });
  } catch (e) {
    return res.status(400).json({ message: "Error in approving user" });
  }
};

const Pending = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (user.status === "PENDING") {
      return res.status(400).json({ message: "User is already pending!" });
    }

    user.status = "PENDING";
    await user.save();
    return res.json({ message: "User set pending successfully" });
  } catch (e) {
    return res.status(400).json({ message: "Error in set pending user" });
  }
};

const getPendingCategories = async (req, res) => {
  try {
    const pendingUsers = await User.find({ status: "PENDING" });

    const results = [];

    for (const user of pendingUsers) {
      let category = null;
      let categoryName = null;

      const architecte = await Architecte.findOne({ email: user.email });
      const entrepreneur = await Entrepreneur.findOne({ email: user.email });
      const manager = await Manager.findOne({ email: user.email });

      if (architecte) {
        category = architecte;
        categoryName = "Architecte";
      } else if (entrepreneur) {
        category = entrepreneur;
        categoryName = "Entrepreneur";
      } else if (manager) {
        category = manager;
        categoryName = "Manager";
      }

      if (category) {
        results.push({
          user,
          [categoryName.toLowerCase()]: category,
        });
      }
    }

    res.json(results);
  } catch (e) {
    res.status(400).json({ message: "Get pending users and categories error" });
  }
};

const getPendingArchitecte = async (req, res) => {
  try {
    const pendingUsers = await User.find({ status: "PENDING" });
    const pendingEmails = pendingUsers.map((user) => user.email);

    const pendingArchitecte = await Architecte.find({
      email: { $in: pendingEmails },
    });

    const results = pendingUsers.map((user) => {
      const userArchitecte = pendingArchitecte.find(
        (architecte) => architecte.email === user.email
      );

      if (userArchitecte) {
        return {
          user,
          architecte: userArchitecte,
        };
      }

      return null;
    });

    const filteredResults = results.filter((result) => result !== null);

    res.json(filteredResults);
  } catch (e) {
    res.status(400).json({ message: "Get pending architecte error" });
  }
};

const getPendingEntrepreneur = async (req, res) => {
  try {
    const pendingUsers = await User.find({ status: "PENDING" });
    const pendingEmails = pendingUsers.map((user) => user.email);

    const pendingEntrepreneur = await Entrepreneur.find({
      email: { $in: pendingEmails },
    });

    const results = pendingUsers.map((user) => {
      const userEntrepreneur = pendingEntrepreneur.find(
        (entrepreneur) => entrepreneur.email === user.email
      );

      if (userEntrepreneur) {
        return {
          user,
          entrepreneur: userEntrepreneur,
        };
      }

      return null;
    });

    const filteredResults = results.filter((result) => result !== null);

    res.json(filteredResults);
  } catch (e) {
    res.status(400).json({ message: "Get pending entrepreneur error" });
  }
};

const getPendingManager = async (req, res) => {
  try {
    const pendingUsers = await User.find({ status: "PENDING" });
    const pendingEmails = pendingUsers.map((user) => user.email);

    const pendingManager = await Manager.find({
      email: { $in: pendingEmails },
    });

    const results = pendingUsers.map((user) => {
      const userManager = pendingManager.find(
        (manager) => manager.email === user.email
      );

      if (userManager) {
        return {
          user,
          manager: userManager,
        };
      }

      return null;
    });

    const filteredResults = results.filter((result) => result !== null);

    res.json(filteredResults);
  } catch (e) {
    res.status(400).json({ message: "Get pending manager error" });
  }
};

const getLogs = async (req, res) => {
  try {
    const { page = 1, search = "" } = req.query;
    const logsPerPage = 10;

    const query = search
      ? { description: { $regex: search, $options: "i" } }
      : {};
    const logs = await Log.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * logsPerPage)
      .limit(logsPerPage);

    const totalLogs = await Log.countDocuments(query);
    const totalPages = Math.ceil(totalLogs / logsPerPage);

    res.json({ logs, totalPages });
  } catch (error) {
    res.status(500).json({ message: "Erreur du serveur" });
  }
};

const downloadLogs = async (req, res) => {
  const { period } = req.params;
  let startDate;

  switch (period) {
    case "7d":
      startDate = moment().subtract(7, "days");
      break;
    case "30d":
      startDate = moment().subtract(30, "days");
      break;
    case "all":
      startDate = moment().subtract(100, "years");
      break;
    default:
      return res.status(400).send("Invalid period");
  }

  const logs = await Log.find({
    createdAt: { $gte: startDate.toDate() },
  });

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Logs");

  sheet.columns = [
    { header: "Date", key: "date", width: 25 },
    { header: "Author", key: "author", width: 20 },
    { header: "Description", key: "description", width: 30 },
    { header: "IP", key: "ip", width: 20 },
    { header: "Browser", key: "browser", width: 20 },
  ];

  logs.forEach((log) => {
    sheet.addRow({
      date: moment(log.createdAt).format("YYYY-MM-DD HH:mm:ss"),
      author: log.author,
      description: log.description,
      ip: log.ip,
      browser: log.browser,
    });
  });

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="logs-${period}.xlsx"`
  );

  await workbook.xlsx.write(res);
  res.end();
};

const generateSlug = (title) => {
  return title
    .toLowerCase() // Convert to lowercase
    .normalize("NFD") // Normalize to split accentuated characters into base + accent
    .replace(/[\u0300-\u036f]/g, "") // Remove combining diacritical marks (accents)
    .replace(/['’]/g, "") // Remove apostrophes (both straight and curly)
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .replace(/[^\w\-]+/g, "") // Remove any remaining special characters
    .replace(/_+/g, "_") // Remove consecutive underscores
    .replace(/^_+|_+$/g, ""); // Remove leading or trailing underscores
};

const createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    newProject.slug = generateSlug(req.body.title);
    await newProject.save();
    return res.status(201).json(newProject);
  } catch (error) {
    console.error("Error creating project:", error);
    return res.status(400).json({ error: "Error creating project" });
  }
};

const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    return res.status(200).json(updatedProject);
  } catch (error) {
    console.error("Error updating project:", error);
    return res.status(400).json({ error: "Error updating project" });
  }
};

const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).json({ error: "Project not found" });
    }
    return res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    return res.status(400).json({ error: "Error deleting project" });
  }
};

module.exports = {
  getUsers,
  getUserBySlug,
  getUserByEmail,
  deleteUser,
  giveAdmin,
  givePro,
  updateUser,
  getPendingProUsers,
  getApprovedProUsers,
  getPendingUsers,
  getApprovedUsers,
  Approve,
  Pending,
  getPendingCategories,
  getPendingArchitecte,
  getPendingEntrepreneur,
  getPendingManager,
  getProjects,
  getProjectByEmail,
  getProjectById,
  changeProjectStatus,
  getProjectsByStatus,
  getLogs,
  downloadLogs,
  createProject,
  updateProject,
  deleteProject,
};
