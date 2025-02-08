import React, { useState, useRef, useEffect } from "react";
import "./ProfileEdit.css";

const sections = ["Basic Information", "About Me", "Work Experience", "Social Links"];

const ProfileSettings = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    occupation: "",
    aboutMe: "",
    workExperience: "",
    socialLink: "",
  });

  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.1 };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          setActiveSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToNext = () => {
    if (activeSection < sections.length - 1) {
      sectionRefs.current[activeSection + 1].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="profile-settings-container">
      {/* Sidebar */}
      <div className="sidebar">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`sidebar-item ${activeSection === index ? "active" : ""}`}
            onClick={() => sectionRefs.current[index].scrollIntoView({ behavior: "smooth" })}
          >
            {section}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="content">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="section"
          >
            <h3>{section}</h3>
            {section === "Basic Information" && (
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="occupation"
                  placeholder="Occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                />
                <button onClick={scrollToNext}>Next</button>
              </div>
            )}
            {section === "About Me" && (
              <textarea
                name="aboutMe"
                placeholder="Write your bio..."
                value={formData.aboutMe}
                onChange={handleChange}
              />
            )}
            {section === "Work Experience" && (
              <input
                type="text"
                name="workExperience"
                placeholder="Company Name"
                value={formData.workExperience}
                onChange={handleChange}
              />
            )}
            {section === "Social Links" && (
              <input
                type="text"
                name="socialLink"
                placeholder="LinkedIn URL"
                value={formData.socialLink}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSettings;
