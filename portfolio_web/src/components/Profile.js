import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPen } from "react-icons/fa"; // Import pencil icon
import Footer from "../components/Footer"; // Import Footer component
import "./Profile.css";

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState(null); // State for profile picture
  const [bannerImage, setBannerImage] = useState(null); // State for banner image
  const [projects, setProjects] = useState([]); // State to store the list of projects
  const navigate = useNavigate();

  // UseEffect to load saved profile picture from local storage or other source
  useEffect(() => {
    const savedProfilePicture = localStorage.getItem("profilePicture");
    if (savedProfilePicture) {
      setProfilePicture(savedProfilePicture); // Load saved profile picture from local storage
    }

    const savedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    setProjects(savedProjects); // Load saved projects from local storage
  }, []);

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

  // Handle profile editing redirection
  const handleEditProfileClick = () => {
    navigate("/ProfileEdit"); // Redirect to the profile settings page
  };

  return (
    <div className="profile-page">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Hero Section with Banner Upload */}
      <section
        className="hero"
        style={{
          backgroundImage: bannerImage
            ? `url(${bannerImage})`
            : "linear-gradient(to bottom, #cce7ff , #0056b3)",
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
          <div className="profile-picture-label">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile"
                className="profile-picture-preview"
              />
            ) : (
              <div className="placeholder">No Profile Picture</div>
            )}
          </div>

          {/* Pencil Icon Button for Editing Profile */}
          <button
            className="edit-profile-btn"
            onClick={handleEditProfileClick}
            title="Edit Profile"
          >
            <FaPen /> {/* Pencil Icon */}
          </button>
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
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div className="card" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))
          ) : (
            <p>No projects added yet. Create one now!</p>
          )}
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="create-project-box">
          <img
            src="/add logo.png"
            alt="Add Project Logo"
            className="project-logo"
          />
          <button
            className="create-project-btn"
            onClick={() => navigate("/create-project")} // Navigate to the Create Project page
          >
            Create Project
          </button>
        </div>
      </section>
      {/* Footer */}
      <Footer /> {/* Adding the Footer here */}
    </div>
  );
};

export default ProfilePage;
