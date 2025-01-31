import React, { useState } from "react";
import "./ProfileEdit.css";

const ProfileSettings = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [occupation, setOccupation] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    linkedin: "",
  });

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  // Remove profile picture
  const removeProfilePic = () => {
    setProfilePic(null);
  };

  // Handle input change for social links
  const handleSocialLinkChange = (platform, value) => {
    setSocialLinks((prevLinks) => ({ ...prevLinks, [platform]: value }));
  };

  // Handle Save Changes
  const handleSaveChanges = () => {
    alert("Profile updated successfully!");
    // Here you can send the updated data to an API for persistence.
  };

  // Handle Account Deletion
  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone!")) {
      alert("Account deleted successfully!");
      // API call to delete account
    }
  };

  return (
    <div className={`profile-settings-container ${darkMode ? "dark-mode" : ""}`}>
      <h2>Profile Settings</h2>
      
      {/* Profile Picture Section */}
      <div className="profile-pic-section">
        <label htmlFor="profile-pic-input">
          <img src={profilePic || 'https://via.placeholder.com/150'} alt="Profile" className="profile-pic" />
          <input type="file" id="profile-pic-input" accept="image/*" onChange={handleProfilePicChange} hidden />
        </label>
        {profilePic && <button className="remove-btn" onClick={removeProfilePic}>Remove</button>}
      </div>

      {/* Profile Fields */}
      <div className="profile-fields">
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <textarea placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} />
        <input type="text" placeholder="Occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        
        {/* Password Change */}
        <input type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        
        {/* Social Media Links */}
        <input type="text" placeholder="Facebook Link" value={socialLinks.facebook} onChange={(e) => handleSocialLinkChange("facebook", e.target.value)} />
        <input type="text" placeholder="Twitter Link" value={socialLinks.twitter} onChange={(e) => handleSocialLinkChange("twitter", e.target.value)} />
        <input type="text" placeholder="LinkedIn Link" value={socialLinks.linkedin} onChange={(e) => handleSocialLinkChange("linkedin", e.target.value)} />

        {/* Theme Toggle */}
        <label className="theme-switch">
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <span className="slider round"></span> Dark Mode
        </label>
      </div>

      {/* Buttons */}
      <button className="save-btn" onClick={handleSaveChanges}>Save Changes</button>
      <button className="delete-btn" onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
};

export default ProfileSettings;
