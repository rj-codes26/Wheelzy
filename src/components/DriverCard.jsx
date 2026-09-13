import React from "react";

export default function DriverCard({ driver }) {
  return (
    <div className="driver-card">
      <div className="driver-avatar-wrapper">
        <img
          src={driver.avatar}
          alt={driver.name}
          className="driver-avatar"
        />
        <div className="verified-badge-mini">✓</div>
      </div>

      <h4 className="driver-name">{driver.name}</h4>
      <div className="driver-status-badge">
        <span>●</span> Government Verified
      </div>

      <div className="driver-meta">
        <div className="meta-item">
          <span className="meta-label">Experience</span>
          <span className="meta-val">{driver.experience}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Rating</span>
          <span className="meta-val">★ {driver.rating}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Trips</span>
          <span className="meta-val">{driver.trips}+</span>
        </div>
      </div>

      <p style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: "0.85rem" }}>
        {driver.speciality}
      </p>

      <button 
        className="btn-hire-driver"
        onClick={() => alert(`Driver ${driver.name} requested! A confirmation SMS will be sent.`)}
      >
        Book Driver ({driver.rate})
      </button>
    </div>
  );
}