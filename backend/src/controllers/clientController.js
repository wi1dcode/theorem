const User = require("../models/userModel");
const Pro = require("../models/proModel");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");
const axios = require("axios");
const Form = require("../models/formModel");
const mailService = require("../services/mailService");
const { validationResult } = require("express-validator");
const authService = require("../services/authService");
const logService = require("../services/logService");
const questions = require("../services/questions.json");
const path = require("path");
const Project = require("../models/projectModel");

const createAccount = async (email, password, name, city, tel) => {
  try {
    const hashPassword = bcrypt.hashSync(password, 7);
    const activationLink = uuid.v4();
    const userRole = "USER";

    const user = new User({
      email: email,
      password: hashPassword,
      roles: [userRole],
      name: name,
      city: city,
      tel: tel,
      activationLink: activationLink,
    });

    await user.save();
    await mailService.sendActivationMail(
      email,
      `${process.env.CLIENT_URL}/activate/${activationLink}`,
      name
    );

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating user: " + error);
  }
};

const getData = async (req, res) => {
  try {
    const { formId, responseId, password, city } = req.body;
    const token = process.env.TYPEFORM_TOKEN;

    const typeformResponse = await axios.get(
      `https://api.typeform.com/forms/${formId}/responses?included_response_ids=${responseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const responseData = typeformResponse?.data;
    const answers = responseData.items[0]?.answers;

    const answersData = {};
    const addressFieldsToExclude = [
      "61470d8a-35e0-43ac-a276-ff3a3d564a8b",
      "1c5b8c97-e6b7-4704-8e63-caaf3d39ef1a",
      "5e43751b-f922-4ccb-98e9-24e2bfe7d39e",
      "d8ab1844-639a-4a73-9259-744281d90718",
      "baef9835-bb72-4461-aee5-0b2d43c3ad62",
      "47993c0f-b4a4-4a23-b81f-9a1d0b7bbea5",
    ];

    const addressFields = [];

    answers.forEach((answer) => {
      const { field, type, [type]: value, choice } = answer;
      const ref = field ? field.ref : "Unknown";

      if (addressFieldsToExclude.includes(ref)) {
        if (!answersData.address) {
          answersData.address = value || choice?.label || answer[type];
        } else {
          answersData.address += `, ${value || choice?.label || answer[type]}`;
        }
      } else {
        addressFields.push(ref);

        if (type === "choice") {
          answersData[ref] = choice.label;
        } else if (type === "boolean") {
          answersData[ref] = value ? true : false;
        } else if (type === "number") {
          answersData[ref] = value.toString();
        } else if (
          type === "text" ||
          type === "email" ||
          type === "phone_number"
        ) {
          answersData[ref] = answer[type];
        } else if (type === "date") {
          answersData[ref] = new Date(value).toISOString();
        } else {
          // handle other types as needed
          answersData[ref] = "Unhandled type";
        }
      }
    });

    let user = await User.findOne({ email: answersData.email });
    if (!user) {
      user = await createAccount(
        answersData.email,
        password,
        answersData.name,
        city,
        answersData.tel
      );
    }

    const client = new Form({
      author: answersData.email,
      renovation: answersData.renovation,
      search: answersData.search,
      sizes: answersData.sizes,
      type: answersData.type,
      havePhoto: answersData.havePhoto,
      help: answersData.help,
      surface: answersData.surface,
      products: answersData.products,
      budget: answersData.budget,
      documents: answersData.documents,
      photos: answersData.photos,
      residence: answersData.residence,
      when: answersData.when,
      about: answersData.about,
      name: answersData.name,
      email: answersData.email,
      tel: answersData.tel,
      adresse: answersData.address,
      password: password,
      status: "PENDING",
    });

    await client.save();
    user.forms.push(client._id);
    await user.save();

    res.json({ message: "request created successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error processing: " + error.message });
  }
};

const getResponses = async (req, res) => {
  try {
    const { formId, responseId, password, city } = req.body;
    const token = process.env.TYPEFORM_TOKEN;
    const clientIp =
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress;

    const typeformResponse = await axios.get(
      `https://api.typeform.com/forms/${formId}/responses?included_response_ids=${responseId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const answers = typeformResponse.data.items[0]?.answers;
    const keys = questions.keys;
    let formData = {
      renovation: "",
      search: "",
      budget: "",
      when: "",
      documents: [],
      photos: [],
      inspirationPhoto: [],
      profile: {},
      adresse: {},
      additionalInfo: [],
    };

    answers.forEach((answer) => {
      const { field, type, choice, choices, file_url } = answer;
      let answerValue =
        type === "choice"
          ? choice.label
          : choices
          ? choices.labels.join(", ")
          : answer[type];
      let key = Object.keys(keys).find(
        (key) => keys[key] === field.ref || keys[key] === field.id
      );
      if (key) {
        if (key.startsWith("profile") || key.startsWith("adresse")) {
          const profileOrAddressKey = key
            .replace("profile", "")
            .replace("adresse", "")
            .toLowerCase();
          formData[key.includes("profile") ? "profile" : "adresse"][
            profileOrAddressKey
          ] = answerValue;
        } else {
          formData[key] = answerValue;
        }
      } else {
        const questionText =
          questions.questions.find(
            (q) => q.id === field.id || q.ref === field.ref
          )?.title || "Unknown Question";
        formData.additionalInfo.push({
          question: questionText,
          answer: answerValue,
        });
      }
    });

    let user = await User.findOne({ email: formData.profile.email });
    if (!user) {
      user = await createAccount(
        formData.profile.email,
        password,
        `${formData.profile.firstname} ${formData.profile.lastname}`,
        city,
        formData.profile.phone
      );
    }

    const form = new Form({ ...formData, author: user._id });
    await form.save();

    user.forms.push(form._id);
    await user.save();
    await logService.logEvent(
      "user_registration",
      `Nouvel utilisateur enregistré: ${formData.profile.email} avec le projet ${formData.renovation}`,
      "SYSTEM",
      clientIp,
      req.headers["user-agent"]
    );

    await mailService.sendNewProjectNotification(
      "contact@theorem-concept.fr",
      formData
    );

    res.json({ message: "Form response recorded successfully", formData });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error processing: " + error.message });
  }
};

const createRequest = async (req, res) => {
  try {
    const clientIp =
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Create request error", errors });
    }
    const {
      author,
      renovation,
      search,
      sizes,
      type,
      havePhoto,
      photos,
      help,
      surface,
      products,
      budget,
      information,
      documents,
      adresse,
      residence,
      when,
      about,
      email,
      tel,
      name,
      city,
      password,
    } = req.body;

    const client = new Form({
      author,
      renovation,
      search,
      sizes,
      type,
      havePhoto,
      photos,
      help,
      surface,
      products,
      budget,
      information, // ?
      documents,
      adresse,
      residence,
      when,
      about,
      email,
      tel,
      password,
      status: "PENDING",
    });

    const user = await createAccount(email, password, name, city, tel);

    client.author = user.email;

    await user.save();
    await client.save();
    await logService.logEvent(
      "user_registration",
      `Nouvel utilisateur enregistré: ${email} avec le projet ${renovation}`,
      "SYSTEM",
      clientIp,
      req.headers["user-agent"]
    );

    res.json({ message: "request created successfully" });
  } catch (error) {
    res.status(400).json({
      message: "Error creating request and user" + error,
    });
  }
};

const getMe = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(403).json({ message: "Token is missing" });
    }

    const userData = authService.validateAccessToken(token.split("Bearer ")[1]);
    if (!userData) {
      return res.status(403).json({ message: "Token invalid" });
    }

    let user = await User.findById(userData.id)
      .select("-password -activationLink -activationLimit -username")
      .populate({
        path: "forms",
        select: "-documents.name",
      });

    if (!user) {
      user = await Pro.findById(userData.id).select(
        "-password -activationLink -activationLimit"
      );
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const token = req.headers.authorization.split(" ")[1];

    const userData = authService.validateAccessToken(token);
    if (!userData) {
      return res.status(403).json({ message: "Token invalid" });
    }

    let user;
    if (userData.roles.includes("PRO")) {
      user = await Pro.findById(userData.id);
    } else {
      user = await User.findById(userData.id);
    }

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mot de passe actuel incorrect" });
    }

    const hourAgo = new Date(Date.now() - 3600000);
    if (user.activationLimit > hourAgo) {
      return res.status(429).json({
        message: "Changement de mot de passe limité à une fois par heure.",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = hashedPassword;
    user.activationLimit = new Date();
    await user.save();

    res.json({ message: "Mot de passe changé avec succès" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

const uploadDocument = async (req, res) => {
  try {
    const { formId } = req.params;
    const token = req.headers.authorization.split(" ")[1];
    const userData = authService.validateAccessToken(token);

    if (!userData) {
      return res.status(403).json({ message: "Token invalid" });
    }

    const form = await Form.findById(formId);

    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }

    if (
      form.profile?.email !== userData.email &&
      !userData.roles.includes("ADMIN")
    ) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    form.documents.push({
      originalName: req.file.originalname,
      name: req.file.filename,
      path: `uploads/${form.profile?.email}/${req.file.filename}`,
    });

    await form.save();
    res.status(200).json({ message: "Document uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const uploadImages = async (req, res) => {
  try {
    const { formId } = req.params;
    const token = req.headers.authorization.split(" ")[1];
    const userData = authService.validateAccessToken(token);

    if (!userData) {
      return res.status(403).json({ message: "Token invalid" });
    }

    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }

    if (
      form.profile?.email !== userData.email &&
      !userData.roles.includes("ADMIN")
    ) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    req.files.forEach((file) => {
      form.photos.push({
        originalName: file.originalname,
        name: file.filename,
        path: `uploads/${form.profile?.email}/images/${file.filename}`,
      });
    });

    await form.save();
    res.status(200).json({ message: "Images uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const downloadDocument = async (req, res) => {
  try {
    const { formId, documentName } = req.params;
    const token = req.headers.authorization.split(" ")[1];

    const userData = authService.validateAccessToken(token);
    if (!userData) {
      return res.status(403).json({ message: "Token invalid" });
    }

    const form = await Form.findById(formId);
    if (!form) {
      return res.status(404).send("Form not found");
    }

    if (
      form.profile?.email !== userData.email &&
      !userData.roles.includes("ADMIN")
    ) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    const document = form.documents.find(
      (doc) => doc.originalName === documentName
    );
    if (!document) {
      return res.status(404).send("Document not found");
    }

    const filePath = path.join(__dirname, "../../public", document.path);
    res.download(filePath, document.originalName);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(400).json({ error: "Error fetching projects" });
  }
};

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    return res.status(200).json(project);
  } catch (error) {
    return res.status(400).json({ error: "Error fetching project" });
  }
};

const getProjectBySlug = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    return res.status(200).json(project);
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    return res.status(400).json({ error: "Error fetching project" });
  }
};

const getProjectsByIds = async (req, res) => {
  try {
    const { ids } = req.body; // Expect an array of project IDs
    const projects = await Project.find({ _id: { $in: ids } });
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ error: "Error fetching suggested projects" });
  }
};

module.exports = {
  createRequest,
  getData,
  getResponses,
  getMe,
  changePassword,
  uploadDocument,
  downloadDocument,
  uploadImages,
  getProjects,
  getProjectById,
  getProjectBySlug,
  getProjectsByIds,
};
