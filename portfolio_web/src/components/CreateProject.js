import React, { useState, useEffect } from "react";
import "./CreateProject.css";

const CreateProjectPage = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    video: null,
    image: null,
  });

  useEffect(() => {
    const savedDraft = localStorage.getItem("draftProject");
    if (savedDraft) {
      setProjectData(JSON.parse(savedDraft));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setProjectData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleDraft = () => {
    localStorage.setItem("draftProject", JSON.stringify(projectData));
    alert("Draft saved successfully!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Project submitted successfully!");
  };

  return (
    <div className="create-project-page">
      <header className="custom-header">
        <h1>🎨 Build Your Dream Project</h1>
        <p>
          Draft, refine, and showcase your creativity with an intuitive, sleek
          interface.
        </p>
      </header>
      <section className="create-project-card">
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <label htmlFor="title">Project Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="create-project-input"
              placeholder="Enter your project's title"
              value={projectData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-section">
            <label htmlFor="description">Project Description</label>
            <textarea
              id="description"
              name="description"
              className="create-project-textarea"
              placeholder="Describe your project in detail"
              value={projectData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-section file-upload">
            <label htmlFor="video" className="file-label">
              <div className="file-placeholder">
                {!projectData.video ? (
                  <span>Click to upload your project video</span>
                ) : (
                  <span>{projectData.video.name}</span>
                )}
              </div>
              <input
                type="file"
                id="video"
                name="video"
                accept="video/*"
                onChange={handleFileChange}
                className="file-input"
              />
            </label>
          </div>
          <div className="form-section file-upload">
            <label htmlFor="image" className="file-label">
              <div className="file-placeholder">
                {!projectData.image ? (
                  <span>Click to upload an image for your project</span>
                ) : (
                  <span>{projectData.image.name}</span>
                )}
              </div>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
              />
            </label>
          </div>
          <div className="button-group">
            <button
              type="button"
              className="create-project-action-btn create-project-draft-btn"
              onClick={handleDraft}
            >
              Save as Draft
            </button>
            <button type="submit" className="create-project-action-btn create-project-submit-btn">
              Submit Project
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateProjectPage;
