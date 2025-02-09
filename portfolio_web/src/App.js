import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/Profile";
import CreateProjectPage from "./components/CreateProject";
import ProfileEdit from "./components/ProfileEdit"; // Import ProfileEdit component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/create-project" element={<CreateProjectPage />} />
        <Route path="/ProfileEdit" element={<ProfileEdit />} /> {/* Add this */}
      </Routes>
    </Router>
  );
};

export default App;
