import React from "react";

function UserHome() {
  return (
    <main className="user-home">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section" id="home">

        <div className="hero-content">

          <div className="hero-badge">
            🚗 WHEELZY • YOUR JOURNEY PARTNER
          </div>

          <h1>
            RENT YOUR
            <span> PERFECT RIDE</span>
          </h1>

          <p>
            Cars, SUVs, Force Travellers and buses —
            rent with or without a professional driver.
          </p>

          {/* ================= SEARCH BOX ================= */}
          <div className="rental-search">

            <div className="search-item">
              <span>📍</span>
              <div>
                <small>Pick-up Location</small>
                <strong>Delhi, India</strong>
              </div>
            </div>

            <div className="search-item">
              <span>📅</span>
              <div>
                <small>Pick-up Date</small>
                <strong>Select Date</strong>
              </div>
            </div>

            <div className="search-item">
              <span>📅</span>
              <div>
                <small>Return Date</small>
                <strong>Select Date</strong>
              </div>
            </div>

            <button className="search-btn">
              SEARCH
            </button>

          </div>

          {/* ================= RENTAL OPTIONS ================= */}
          <div className="rental-options">

            <div className="option-card active-option">
              <span className="option-icon">🚘</span>
              <div>
                <h3>Self Drive</h3>
                <p>Drive yourself</p>
              </div>
            </div>

            <div className="option-card">
              <span className="option-icon">👨‍✈️</span>
              <div>
                <h3>With Driver</h3>
                <p>Professional driver</p>
              </div>
            </div>

            <div className="option-card">
              <span className="option-icon">🧑‍✈️</span>
              <div>
                <h3>Hire Driver</h3>
                <p>For your own vehicle</p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= POPULAR VEHICLES ================= */}
      <section className="vehicles-section" id="vehicles">

        <div className="section-heading">
          <div>
            <span className="section-label">
              EXPLORE OUR FLEET
            </span>

            <h2>
              Choose Your <span>Ride</span>
            </h2>
          </div>

          <button className="view-all-btn">
            View All →
          </button>
        </div>


        <div className="vehicle-grid">

          {/* Vehicle 1 */}
          <div className="vehicle-home-card">

            <div className="vehicle-image">
              🚗
            </div>

            <div className="vehicle-info">
              <span className="vehicle-type">
                SEDAN
              </span>

              <h3>Premium Sedan</h3>

              <div className="vehicle-details">
                <span>👥 5 Seats</span>
                <span>⚙️ Manual</span>
              </div>

              <div className="vehicle-bottom">
                <div>
                  <small>Starting from</small>
                  <strong>₹1,499/day</strong>
                </div>

                <button>Rent Now</button>
              </div>
            </div>

          </div>


          {/* Vehicle 2 */}
          <div className="vehicle-home-card">

            <div className="vehicle-image suv">
              🚙
            </div>

            <div className="vehicle-info">
              <span className="vehicle-type">
                SUV
              </span>

              <h3>7-Seater SUV</h3>

              <div className="vehicle-details">
                <span>👥 7 Seats</span>
                <span>⚙️ Automatic</span>
              </div>

              <div className="vehicle-bottom">
                <div>
                  <small>Starting from</small>
                  <strong>₹2,199/day</strong>
                </div>

                <button>Rent Now</button>
              </div>
            </div>

          </div>


          {/* Vehicle 3 */}
          <div className="vehicle-home-card">

            <div className="vehicle-image traveller">
              🚌
            </div>

            <div className="vehicle-info">
              <span className="vehicle-type">
                TRAVELLER
              </span>

              <h3>Force Traveller</h3>

              <div className="vehicle-details">
                <span>👥 12-26 Seats</span>
                <span>⚙️ Manual</span>
              </div>

              <div className="vehicle-bottom">
                <div>
                  <small>Starting from</small>
                  <strong>₹3,999/day</strong>
                </div>

                <button>Rent Now</button>
              </div>
            </div>

          </div>


          {/* Vehicle 4 */}
          <div className="vehicle-home-card">

            <div className="vehicle-image bus">
              🚌
            </div>

            <div className="vehicle-info">
              <span className="vehicle-type">
                BUS
              </span>

              <h3>Travel Bus</h3>

              <div className="vehicle-details">
                <span>👥 30+ Seats</span>
                <span>⚙️ Manual</span>
              </div>

              <div className="vehicle-bottom">
                <div>
                  <small>Starting from</small>
                  <strong>₹6,999/day</strong>
                </div>

                <button>Rent Now</button>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= DRIVER SECTION ================= */}
      <section className="driver-section" id="drivers">

        <div className="driver-content">

          <span className="section-label">
            NEED A DRIVER?
          </span>

          <h2>
            Your Vehicle.
            <span> Our Verified Driver.</span>
          </h2>

          <p>
            Don't want to drive? Hire a verified and licensed
            professional driver for your car, SUV or any personal vehicle.
          </p>

          <div className="driver-features">

            <div>
              <span>✓</span>
              Government Verified
            </div>

            <div>
              <span>✓</span>
              Licensed Drivers
            </div>

            <div>
              <span>✓</span>
              On-Demand Booking
            </div>

          </div>

          <button className="driver-main-btn">
            Find a Driver →
          </button>

        </div>

        <div className="driver-visual">
          <div className="driver-circle">
            👨‍✈️
          </div>

          <div className="verified-badge">
            ✓ VERIFIED DRIVER
          </div>
        </div>

      </section>


      {/* ================= WHY WHEELZY ================= */}
      <section className="why-section" id="about">

        <div className="section-heading center-heading">

          <span className="section-label">
            WHY WHEELZY?
          </span>

          <h2>
            Travel <span>Smarter</span>
          </h2>

          <p>
            Everything you need for a comfortable and reliable journey.
          </p>

        </div>


        <div className="why-grid">

          <div className="why-card">
            <div>🛡️</div>
            <h3>Verified Drivers</h3>
            <p>
              Government verified and licensed professional drivers.
            </p>
          </div>

          <div className="why-card">
            <div>🚘</div>
            <h3>Wide Vehicle Range</h3>
            <p>
              From cars to SUVs, Travellers and large buses.
            </p>
          </div>

          <div className="why-card">
            <div>💰</div>
            <h3>Transparent Pricing</h3>
            <p>
              Clear pricing with no hidden charges.
            </p>
          </div>

          <div className="why-card">
            <div>⚡</div>
            <h3>Easy Booking</h3>
            <p>
              Find and book your perfect ride in just a few clicks.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default UserHome;