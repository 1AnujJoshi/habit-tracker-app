import React from "react";
import { Home } from "./components/Home";
import { AddHabit } from "./components/AddHabit";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/habit-tracker-app" element={<Home />} />
        <Route exact path="/addHabit" element={<AddHabit />} />
      </Routes>
    </Router>
  );
}

export default App;
