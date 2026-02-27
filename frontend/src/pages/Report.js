import React, { useState } from "react";
import "../styles/Report.css";

function Report({ addReport }) {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);
  const newReport = {
  type,
  location,
  description,
  timestamp: new Date().toLocaleString(),
  lat: 13.0827 + (Math.random() - 0.5) * 0.02,
  lng: 80.2707 + (Math.random() - 0.5) * 0.02
};

const handleSubmit = (e) => {
  e.preventDefault();

  const newReport = {
    type,
    location,
    description,
    timestamp: new Date().toLocaleString(),
    lat: 13.0827 + (Math.random() - 0.5) * 0.02,
    lng: 80.2707 + (Math.random() - 0.5) * 0.02,

  status: "active"
  };

  addReport(newReport);

  setSuccess(true);
  setType("");
  setLocation("");
  setDescription("");

  setTimeout(() => {
    setSuccess(false);
  }, 3000);
};

  return (
    <div className="report-container">
      <div className="report-card">
        <h2>🚨 Report a Disruption</h2>

        {success && (
          <p className="success">
            ✅ Report submitted successfully!
          </p>
        )}

        <form className="report-form" onSubmit={handleSubmit}>
          
          <label>Type of Disruption</label>
          <select value={type} onChange={(e) => setType(e.target.value)} required>
            <option value="">Select Type</option>
            <option value="Railway Crossing">Railway Crossing</option>
            <option value="Accident">Accident</option>
            <option value="Roadblock">Roadblock</option>
            <option value="Public Event">Public Event</option>
          </select>

          <label>Location</label>
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <label>Description</label>
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button type="submit">Submit Report</button>
        </form>
      </div>
    </div>
  );
}

export default Report;