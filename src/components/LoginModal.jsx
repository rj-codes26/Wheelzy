import React, { useState } from "react";

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginMethod, setLoginMethod] = useState("phone"); // 'phone' or 'email'
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpSent && loginMethod === "phone") {
      if (!phone) return alert("Please enter your phone number");
      setOtpSent(true);
      return;
    }

    // Simulate successful login
    const userName = name || (phone ? `User (+91 ${phone.slice(-4)})` : email.split("@")[0]);
    onLoginSuccess({ name: userName, phone, email });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>✕</button>

        {/* Header */}
        <div className="modal-header">
          <div className="brand-badge-icon" style={{ margin: "0 auto 0.75rem", width: 44, height: 44 }}>
            ⚡
          </div>
          <h2 className="modal-title">{isSignUp ? "Create Your Account" : "Welcome Back"}</h2>
          <p className="modal-subtitle">
            {isSignUp ? "Sign up to rent rides & hire verified chauffeurs" : "Log in to manage bookings, rides & invoices"}
          </p>
        </div>

        {/* Tab Switcher: Phone vs Email */}
        <div className="modal-tabs">
          <button
            type="button"
            className={`modal-tab ${loginMethod === "phone" ? "active" : ""}`}
            onClick={() => { setLoginMethod("phone"); setOtpSent(false); }}
          >
            📱 Mobile OTP
          </button>
          <button
            type="button"
            className={`modal-tab ${loginMethod === "email" ? "active" : ""}`}
            onClick={() => setLoginMethod("email")}
          >
            ✉️ Email ID
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          {isSignUp && (
            <div className="modal-input-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Dinesh Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          {loginMethod === "phone" ? (
            <>
              <div className="modal-input-group">
                <label>Mobile Number</label>
                <div className="phone-input-row">
                  <span className="country-code">+91</span>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              {otpSent && (
                <div className="modal-input-group">
                  <label>Enter 4-Digit OTP</label>
                  <input
                    type="text"
                    placeholder="• • • •"
                    maxLength={4}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    autoFocus
                  />
                  <span className="helper-text">Demo OTP: Enter any 4 digits</span>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="modal-input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="modal-input-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" required />
              </div>
            </>
          )}

          <button type="submit" className="btn-modal-primary">
            {loginMethod === "phone" && !otpSent ? "Send OTP →" : (isSignUp ? "Sign Up & Continue" : "Log In")}
          </button>
        </form>

        <div className="modal-footer">
          {isSignUp ? (
            <p>Already have an account? <span onClick={() => setIsSignUp(false)}>Log in</span></p>
          ) : (
            <p>New to Wheelzy? <span onClick={() => setIsSignUp(true)}>Create an account</span></p>
          )}
        </div>
      </div>
    </div>
  );
}