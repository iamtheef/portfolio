import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import Background from "./Components/Background";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Intro from "./Components/Intro";
import About from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { LanguageProvider } from "./Context/LanguageContext";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <LanguageProvider>
          <Navbar />
          <div className="App">
            <Background />
            <Route exact path="/" component={Intro} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </LanguageProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
