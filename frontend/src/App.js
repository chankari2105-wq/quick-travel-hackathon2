import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Report from "./pages/Report";
import Navbar from "./components/Navbar";
import MapView from "./components/MapView";

function App() {
  const [reports, setReports] = useState([]);

  // Add new report
  const addReport = (newReport) => {
    setReports((prevReports) => [...prevReports, newReport]);
  };

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <Home reports={reports}>
              <MapView reports={reports} />
            </Home>
          }
        />

        {/* Report Page */}
        <Route
          path="/report"
          element={<Report addReport={addReport} />}
        />
      </Routes>
    </Router>
  );
}

export default App;