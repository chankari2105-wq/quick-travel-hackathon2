const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true
    },
    issue: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Report', reportSchema);