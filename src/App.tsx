import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import Background from "./Components/Background";
import { BrowserRouter as Router } from "react-router-dom";
import Hello from "./Components/Hello";
import Intro from "./Components/Intro";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Background />
        <Hello />
        <Intro />
      </div>
    </Router>
  );
}

export default App;
