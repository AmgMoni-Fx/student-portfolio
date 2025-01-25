import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  // Handle file input and preview
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle "Create Project" button click
  const handleCreateProjectClick = () => {
    navigate("/create-project"); // Navigate to the Create Project page
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
            <li><a href="#projects">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="intro">
          <h1>
            I'm <span className="highlight">Jenny</span>, <br />
            Product Designer
          </h1>
          <p>
            Jenny's exceptional product design ensures website success.
            Highly Recommended.
          </p>

          {/* Profile Picture Section */}
          <section id="profile-picture" className="profile-picture-section">
            <div className="profile-picture-wrapper">
              <label htmlFor="file-input" className="profile-picture-label">
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
                  id="file-input"
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  style={{ display: "none" }}
                />
              </label>
            </div>
          </section>

          <button className="btn portfolio-btn">Portfolio</button>
          <button className="btn hire-btn">Hire Me</button>
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
            onClick={handleCreateProjectClick}
          >
            Create Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
