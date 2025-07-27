import { useEffect, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

import Intro from "./Intro";
import Experience from "./Experience";
import About from "./About";
import Contact from "./Contact";

const ScrollPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobile } = useContext(ThemeContext);

  const sections = {
    "/": useRef(null),
    "/experience": useRef(null),
    "/about": useRef(null),
    "/contact": useRef(null),
  };

  const normalizedPath = location.pathname.replace(/\/$/, "") || "/";

  useEffect(() => {
    if (normalizedPath === "/") return; // disable autoscroll landing
    const target = sections[normalizedPath]?.current;
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter((e) => e.isIntersecting);

        if (intersectingEntries.length > 0) {
          const mostVisible = intersectingEntries.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );

          const path = mostVisible.target.getAttribute("data-path");
          if (location.pathname !== path) {
            navigate(path, { replace: true });
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-5% 0px -20% 0px",
      }
    );

    // Observe all sections
    Object.entries(sections).forEach(([path, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-path", path);
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      // Clear any existing timeout
      clearTimeout(timeoutId);

      // Only navigate to home if we've been at the top for a short moment
      timeoutId = setTimeout(() => {
        if (window.scrollY === 0 && location.pathname !== "/") {
          navigate("/", { replace: true });
        }
      }, 100); // Small delay
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [navigate, location.pathname]);

  const sectionStyle = {
    padding: "100px 24px",
    minHeight: "75vh", // Increased from 10vh to ensure sections are tall enough
    scrollMarginTop: "20px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: 200,
    marginBottom: "30px",
    color: "#444",
    opacity: 0.7,
    textAlign: "left",
    marginLeft: isMobile ? "6vw" : "14vw",
  };

  return (
    <main>
      <section ref={sections["/"]} style={sectionStyle}>
        {/* <h2 style={headingStyle}>• Welcome</h2> */}
        <Intro />
      </section>

      <section ref={sections["/experience"]} style={sectionStyle}>
        <h2 style={headingStyle}>Experience</h2>
        <Experience />
      </section>

      <section ref={sections["/about"]} style={sectionStyle}>
        <h2 style={headingStyle}>About</h2>
        <About />
      </section>

      <section ref={sections["/contact"]} style={sectionStyle}>
        <h2 style={headingStyle}>Contact</h2>
        <Contact />
      </section>
    </main>
  );
};

export default ScrollPage;
