
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// 🔥 Function to return colored marker based on issue
const getMarkerIcon = (issue) => {
  let iconUrl;

  switch ((issue || "").toLowerCase()) {
    case "accident":
      iconUrl = "https://maps.google.com/mapfiles/ms/icons/red-dot.png";
      break;
    case "traffic jam":
      iconUrl = "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
      break;
    case "road closed":
      iconUrl = "https://maps.google.com/mapfiles/ms/icons/blue-dot.png";
      break;
    default:
      iconUrl = "https://maps.google.com/mapfiles/ms/icons/green-dot.png";
  }

  return new L.Icon({
    iconUrl,
    iconSize: [32, 32],
  });
};

function MapView({ reports = [] }) {
  const [userLocation, setUserLocation] = useState(null);

  // 📍 Detect user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([
            position.coords.latitude,
            position.coords.longitude,
          ]);
        },
        () => {
          console.log("Location access denied");
        }
      );
    }
  }, []);

  return (
    <MapContainer
        center={userLocation || [13.0827, 80.2707]} // Default to Chennai
      zoom={12}
      scrollWheelZoom={true}
      zoomControl={true}
      style={{ height: "450px", width: "100%", marginTop: "30px" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* 🔥 User Location Marker */}
      {userLocation && (
        <Marker position={userLocation}>
          <Popup>You are here 📍</Popup>
        </Marker>
      )}

      {/* 🚦 Report Markers */}
      {reports.map((report, index) =>
        report.lat && report.lng ? (
          <Marker
            key={index}
            position={[report.lat, report.lng]}
            icon={getMarkerIcon(report.issue || report.type)}
          >
            <Popup>
              <strong>{report.issue || report.type}</strong>
              <br />
              {report.location}
              <br />
              {report.description}
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
}

export default MapView;