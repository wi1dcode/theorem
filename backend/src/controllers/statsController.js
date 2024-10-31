const User = require("../models/userModel");
const Form = require("../models/formModel");
const os = require("os");

function formatPrice(price) {
  if (price >= 1_000_000) return `${(price / 1_000_000).toFixed(1)}M`;
  if (price >= 1_000) return `${(price / 1_000).toFixed(1)}k`;
  return price.toString();
}

const getStats = async (req, res) => {
  try {
    const [
      totalProjects,
      totalUsers,
      projectsByStatus,
      monthlyNewProjects,
      topRenovationTypes,
      recentUserRegistrations,
      recentProjects,
      completedProjects,
      totalProjectPrice,
    ] = await Promise.all([
      Form.countDocuments(), // Total number of projects
      User.countDocuments(), // Total number of users
      Form.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]), // Count projects by status
      Form.aggregate([
        {
          $group: {
            _id: {
              month: { $month: "$createdAt" },
              year: { $year: "$createdAt" },
            },
            count: { $sum: 1 },
          },
        },
        { $sort: { "_id.year": 1, "_id.month": 1 } },
      ]), // New projects per month
      Form.aggregate([
        { $group: { _id: "$renovation", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 5 },
      ]), // Top 5 renovation types
      User.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("name email createdAt"), // Recent user registrations
      Form.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("renovation profile.email status createdAt"), // Recent projects
      Form.countDocuments({ status: "FINISH" }), // Completed projects
      Form.aggregate([
        { $group: { _id: null, totalPrice: { $sum: "$priceTotal" } } },
      ]),
    ]);

    const stats = {
      totalProjects,
      totalUsers,
      projectsByStatus: projectsByStatus.map((item) => ({
        status: item._id,
        count: item.count,
      })),
      monthlyNewProjects,
      topRenovationTypes: topRenovationTypes.map((type) => ({
        renovation: type._id,
        count: type.count,
      })),
      recentUserRegistrations,
      recentProjects: recentProjects.map((project) => ({
        type: project.renovation,
        email: project.profile.email,
        status: project.status,
        createdAt: project.createdAt,
      })),
      completionRate: ((completedProjects / totalProjects) * 100).toFixed(2),
      totalProjectPrice: formatPrice(totalProjectPrice[0]?.totalPrice || 0),
    };

    res.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ message: "Error fetching stats" });
  }
};

const getServerStats = (req, res) => {
  try {
    const uptime = os.uptime(); // Uptime in seconds
    const memoryUsage = process.memoryUsage().rss / (1024 * 1024); // Memory usage in MB
    const totalMemory = os.totalmem() / (1024 * 1024); // Total memory in MB
    const loadAverage = os.loadavg(); // Load average for 1, 5, 15 minutes

    const serverStats = {
      uptime: (uptime / 3600).toFixed(2), // Uptime in hours
      memoryUsage: memoryUsage.toFixed(2), // Memory usage in MB
      totalMemory: totalMemory.toFixed(2), // Total memory in MB
      loadAverage: loadAverage.map((avg) => avg.toFixed(2)), // Load average
    };

    res.json(serverStats);
  } catch (error) {
    console.error("Error fetching server stats:", error);
    res.status(500).json({ message: "Error fetching server stats" });
  }
};

module.exports = { getStats, getServerStats };
