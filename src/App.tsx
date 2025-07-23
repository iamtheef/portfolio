import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./Context/LanguageContext";
import { ThemeProvider } from "./Context/ThemeContext";
import { Navbar } from "./Components/Navbar";
import loadable from "@loadable/component";

const Background = loadable(() => import("./Components/Background"));
const ScrollPage = loadable(() => import("./Components/SinglePage"));

// const Intro = loadable(() => import("./Components/Intro"));
// const About = loadable(() => import("./Components/About"));
// const Experience = loadable(() => import("./Components/Experience"));
// const Contact = loadable(() => import("./Components/Contact"));

function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <ThemeProvider>
          <Navbar />
          <Background />
          <Routes>
            <Route path="/" element={<ScrollPage />} />
            <Route path="/experience" element={<ScrollPage />} />
            <Route path="/about" element={<ScrollPage />} />
            <Route path="/contact" element={<ScrollPage />} />
          </Routes>
        </ThemeProvider>
      </LanguageProvider>
    </HashRouter>
  );
}

export default App;
