import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import SavingsPage from "./SavingsPage";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/savings" element={<SavingsPage />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
