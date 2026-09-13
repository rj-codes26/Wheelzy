import React from "react";

export default function VehicleCard({ vehicle }) {
  return (
    <div className="vehicle-card">
      <div className="vehicle-image-box">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="vehicle-image"
          loading="lazy"
        />
        <div className="vehicle-category-badge">{vehicle.category}</div>
        <div className="vehicle-rating-badge">
          <span>★</span> {vehicle.rating}
        </div>
      </div>

      <div className="vehicle-body">
        <h3 className="vehicle-title">{vehicle.name}</h3>

        <div className="vehicle-specs">
          <div className="spec-pill">
            <span>👥</span> {vehicle.seats} Seats
          </div>
          <div className="spec-pill">
            <span>⚙️</span> {vehicle.transmission}
          </div>
          <div className="spec-pill">
            <span>⛽</span> {vehicle.fuel}
          </div>
        </div>

        <div className="vehicle-footer">
          <div className="price-box">
            <span className="price-sub">Starting from</span>
            <div className="price-amount">
              ₹{vehicle.price.toLocaleString("en-IN")}
              <span>/day</span>
            </div>
          </div>
          <button 
            className="btn-rent"
            onClick={() => alert(`Selected ${vehicle.name}. Booking portal opening!`)}
          >
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}