import React from "react";
import Navbar from "./components/Navbar";
import CategoryBar from "./components/CategoryBar";

function App() {
  return (
    <div>
      <Navbar />
      <CategoryBar />

      <section className="hero">
        <h1>Find Your Perfect Ride</h1>

        <p>
          Rent a vehicle, hire a driver, or get both in one place.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search cars, bikes, SUVs, drivers and more..."
          />

          <button>Search</button>
        </div>

        <div className="hero-options">
          <div className="option-card">
            <span>🚗</span>
            <h2>Rent a Vehicle</h2>
            <p>Cars, bikes, SUVs, vans and more.</p>
            <button>Explore Vehicles</button>
          </div>

          <div className="option-card">
            <span>👨‍✈️</span>
            <h2>Hire a Driver</h2>
            <p>Professional drivers when you need them.</p>
            <button>Find Drivers</button>
          </div>

          <div className="option-card">
            <span>🚗 + 👨‍✈️</span>
            <h2>Vehicle + Driver</h2>
            <p>Book a vehicle with a driver together.</p>
            <button>Book Together</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
