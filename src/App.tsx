import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { LanguageProvider } from "./Context/LanguageContext";
import { ThemeProvider } from "./Context/ThemeContext";
import { Navbar } from "./Components/Navbar";
import loadable from "@loadable/component";

const Background = loadable(() => import("./Components/Background"));
const Intro = loadable(() => import("./Components/Intro"));
const About = loadable(() => import("./Components/About"));
const Experience = loadable(() => import("./Components/Experience"));
const Contact = loadable(() => import("./Components/Contact"));

function App() {
  return (
    <HashRouter>
      <Switch>
        <LanguageProvider>
          <ThemeProvider>
            <Navbar />
            <Background />
            <Route exact path="/" component={Intro} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </ThemeProvider>
        </LanguageProvider>
      </Switch>
    </HashRouter>
  );
}

export default App;
