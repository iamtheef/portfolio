import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <div className="header">hello all possible worlds! 0010101</div>
      </div>
    </Router>
  );
}

export default App;
