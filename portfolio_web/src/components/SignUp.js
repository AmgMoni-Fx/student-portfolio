import React, { useState } from "react";
import "./SignUp.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("Please accept the Terms and Conditions to proceed.");
      return;
    }
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Let's get you registered!</h2>
        <h2 className="access">
          Already have an account? <a href="/login">Login</a>
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Enter your country"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              id="acceptTnC"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            <h5>I agree to receiving a newsletter and updates.</h5>
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignupPage;
