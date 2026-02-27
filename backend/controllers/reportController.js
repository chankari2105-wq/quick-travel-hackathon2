const Report = require('../models/Report');

// Add report
exports.addReport = async (req, res) => {
  try {
    const { location, issue, description } = req.body;

    if (!location || !issue) {
      return res.status(400).json({ message: "Location and Issue required" });
    }

    const report = await Report.create({ location, issue, description });
    res.status(201).json(report);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all reports
exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};