import React, { useState } from "react";
import "./ProfileEdit.css"

const ProfileEdit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState(""); // Bio state
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [socialLinks, setSocialLinks] = useState([{ title: "", url: "" }]);
  const [previewPic, setPreviewPic] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewPic(URL.createObjectURL(file));
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handleCancelChanges = () => {
    alert("Changes canceled!");
  };

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleChangeSkill = (e, index) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = e.target.value;
    setSkills(updatedSkills);
  };

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      { jobTitle: "", company: "", award: "" },
    ]);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = experience.filter((_, i) => i !== index);
    setExperience(updatedExperience);
  };

  const handleChangeExperience = (e, index, field) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = e.target.value;
    setExperience(updatedExperience);
  };

  const handleAddSocialLink = () => {
    setSocialLinks([...socialLinks, { title: "", url: "" }]);
  };

  const handleRemoveSocialLink = (index) => {
    const updatedLinks = socialLinks.filter((_, i) => i !== index);
    setSocialLinks(updatedLinks);
  };

  const handleChangeSocialLink = (e, index, field) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index][field] = e.target.value;
    setSocialLinks(updatedLinks);
  };

  return (
    <div className="profile-edit-container">
      <h2>Edit Your Profile</h2>
      <form onSubmit={handleSaveChanges}>
        <div className="profile-pic-container">
          <label htmlFor="profilePic" className="profile-pic-label">
            Upload Profile Picture:
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div className="profile-pic">
              {previewPic ? (
                <img src={previewPic} alt="Profile Preview" />
              ) : (
                <span>+</span>
              )}
            </div>
          </label>
        </div>

        <div className="personal-info">
          <div className="input-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Occupation:</label>
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Company:</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Country:</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/* Bio Section */}
          <div className="input-group">
            <label>About Me (Bio):</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about yourself..."
            />
          </div>
        </div>

        <div className="skills-experience">
          <div className="skills">
            <h3>Skills</h3>
            {skills.map((skill, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleChangeSkill(e, index)}
                />
                <button type="button" onClick={() => handleRemoveSkill(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddSkill}>
              Add Skill
            </button>
          </div>

          <div className="experience">
            <h3>Experience</h3>
            {experience.map((exp, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="Job Title"
                  value={exp.jobTitle}
                  onChange={(e) =>
                    handleChangeExperience(e, index, "jobTitle")
                  }
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) =>
                    handleChangeExperience(e, index, "company")
                  }
                />
                <input
                  type="text"
                  placeholder="Award"
                  value={exp.award}
                  onChange={(e) =>
                    handleChangeExperience(e, index, "award")
                  }
                />
                <button type="button" onClick={() => handleRemoveExperience(index)}>
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddExperience}>
              Add Experience
            </button>
          </div>
        </div>

        <div className="social-links">
          <h3>Social Links</h3>
          {socialLinks.map((link, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Link Title"
                value={link.title}
                onChange={(e) => handleChangeSocialLink(e, index, "title")}
              />
              <input
                type="url"
                placeholder="Enter URL"
                value={link.url}
                onChange={(e) => handleChangeSocialLink(e, index, "url")}
              />
              <button type="button" onClick={() => handleRemoveSocialLink(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddSocialLink}>
            Add Social Link
          </button>
        </div>

        <div className="buttons">
          <button type="submit">Save Changes</button>
          <button type="button" onClick={handleCancelChanges}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
