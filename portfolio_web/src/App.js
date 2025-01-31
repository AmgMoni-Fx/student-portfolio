import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/Profile";
import CreateProjectPage from "./components/CreateProject";
import ProfileSettings from "./components/ProfileEdit";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<ProfileSettings />} />
        <Route path="/" element={<ProfilePage />} />
        <Route path="/create-project" element={<CreateProjectPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
