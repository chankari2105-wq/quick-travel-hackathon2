import React, { useState } from "react";
import "../styles/Home.css";
import MapView from "../components/MapView";

function Home({ reports = [] }) {
  const [search, setSearch] = useState("");

  // Prevent error if location is undefined
  const filteredReports = reports.filter((report) =>
    report.location &&
    report.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="hero">
        <h1>Smart Traffic Monitoring 🚦</h1>
        <p>Report and track disruptions in real-time.</p>
      </div>

      <h3>Total Reports: {reports.length}</h3>

      {/* 🔥 MAP SECTION */}
      <div style={{ marginTop: "30px" }}>
        <MapView reports={filteredReports} />
      </div>

      {/* 🔍 SEARCH BAR */}
      <input
        type="text"
        placeholder="Search by location..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📋 REPORT CARDS */}
      {filteredReports.length === 0 ? (
        <p className="noData">No disruptions reported yet.</p>
      ) : (
        filteredReports.map((report, index) => (
          <div key={index} className="alert-card">
            <span
              className={`badge ${
                report.type
                  ? report.type.toLowerCase().replace(" ", "-")
                  : ""
              }`}
            >
              {report.type}
            </span>

            <h3>{report.location}</h3>
            <p>{report.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;