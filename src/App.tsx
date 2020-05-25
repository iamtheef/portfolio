import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import Background from "./Components/Background";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./Components/Intro";
import About from "./Components/AboutMe";
import Projects from "./Components/Projects";
import { LanguageProvider } from "./Context/LanguageContext";

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Navbar />
        <div className="App">
          <Background />

          <Route exact path="/" component={Intro} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={About} />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
