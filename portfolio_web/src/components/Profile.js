import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null); // State for profile picture
  const [bannerImage, setBannerImage] = useState(null); // State for banner image
  const navigate = useNavigate();

  // Handle profile picture upload
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Log file to ensure it's selected correctly
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log("Profile picture loaded:", e.target.result); // Log when file is loaded
        setProfilePicture(e.target.result); // Set profile picture in state
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle banner image upload
  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log("Banner image loaded:", e.target.result); // Log when file is loaded
        setBannerImage(e.target.result); // Set banner image in state
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      {/* Hero Section with Banner Upload */}
      <section
        className="hero"
        style={{
          backgroundImage: bannerImage
            ? `url(${bannerImage})`
            : "linear-gradient(to bottom, #fcfcfc, #798bec)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative",
        }}
        onClick={() => document.getElementById("banner-upload").click()} // Trigger file input when banner is clicked
      >
        {/* Hidden Banner Upload Input */}
        <input
          type="file"
          accept="image/*"
          id="banner-upload"
          style={{ display: "none" }}
          onChange={handleBannerChange} // Handle banner image change
        />
        <div className="intro">
          <h1>
            UPLOAD <span className="highlight">BANNER</span> <br />
            IMAGE
          </h1>
          </div>
      </section>

      {/* Profile Picture Section */}
      <section id="profile-picture" className="profile-picture-section">
        <div className="profile-picture-wrapper">
          <label htmlFor="profile-picture-upload" className="profile-picture-label">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile"
                className="profile-picture-preview"
              />
            ) : (
              <div className="placeholder">Add Picture</div>
            )}
            <input
              id="profile-picture-upload"
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange} // Handle profile picture change
              style={{ display: "none" }}
            />
          </label>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>My Services</h2>
        <p>
          I offer top-notch services in various fields of design, ensuring your
          vision becomes a reality.
        </p>
        <div className="service-cards">
          <div className="card">
            <h3>UI/UX Design</h3>
            <p>Designing intuitive user interfaces for better experiences.</p>
          </div>
          <div className="card">
            <h3>Web Design</h3>
            <p>Crafting responsive websites tailored to your needs.</p>
          </div>
          <div className="card">
            <h3>Landing Page</h3>
            <p>Building impactful landing pages that convert visitors.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="create-project-box">
          <img
            src="/addLogo.png"
            alt="Add Project Logo"
            className="project-logo"
          />
          <button
            className="create-project-btn"
            onClick={() => navigate('/create-project')} // Replace with your project creation navigation
          >
            Create Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;