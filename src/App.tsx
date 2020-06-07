import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { LanguageProvider } from "./Context/LanguageContext";
import { Navbar } from "./Components/Navbar";
import loadable from "@loadable/component";

const Background = loadable(() => import("./Components/Background"));
const Intro = loadable(() => import("./Components/Intro"));
const About = loadable(() => import("./Components/AboutMe"));
const Projects = loadable(() => import("./Components/Projects"));
const Contact = loadable(() => import("./Components/Contact"));

function App() {
  return (
    <HashRouter>
      <Switch>
        <LanguageProvider>
          <Navbar />
          <Background />
          <Route exact path="/" component={Intro} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </LanguageProvider>
      </Switch>
    </HashRouter>
  );
}

export default App;
