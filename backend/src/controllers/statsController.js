const User = require("../models/userModel");
const Form = require("../models/formModel");

const budgetMapping = {
  "Moins de 5k€": 2500,
  "Entre 5k€ et 15k€": 10000,
  "Entre 15k€ et 30k€": 22500,
  "Entre 30k€ et 50k€": 40000,
  "Entre 50k€ et 100k€": 75000,
  "Plus de 100k€": 100000,
};

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
      avgBudget,
      completedProjects,
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
      Form.aggregate([
        {
          $addFields: {
            budgetNumeric: {
              $cond: {
                if: { $in: ["$budget", Object.keys(budgetMapping)] },
                then: {
                  $arrayElemAt: [
                    Object.values(budgetMapping),
                    { $indexOfArray: [Object.keys(budgetMapping), "$budget"] },
                  ],
                },
                else: 0,
              },
            },
          },
        },
        { $match: { budgetNumeric: { $gt: 0 } } },
        { $group: { _id: null, avgBudget: { $avg: "$budgetNumeric" } } },
      ]), // Average budget
      Form.countDocuments({ status: "FINISH" }), // Completed projects
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
      avgBudget: avgBudget[0]?.avgBudget || 0,
      completionRate: ((completedProjects / totalProjects) * 100).toFixed(2),
    };

    res.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ message: "Error fetching stats" });
  }
};

module.exports = { getStats };
