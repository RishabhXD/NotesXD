import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import SignUp from "./SignUp";
import Footer from "./Footer";
import NoteState from "../context/notes/NoteState";
function App() {
  return (
    <div>
      <NoteState>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
