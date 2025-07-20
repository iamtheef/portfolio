import React, { useContext, useEffect, useState, useRef } from "react";

// assets
import github from "../assets/github.png";
import soundcloud from "../assets/sc.png";
import discord from "../assets/discord.png";
import linkedin from "../assets/linkedin.png";
import medium from "../assets/medium.png";
import PawIcon from "../assets/PawIcon";

import { ThemeContext } from "../Context/ThemeContext";

type Paw = {
  id: number;
  top: number;
  left: number;
};

const Footer: React.FC = () => {
  const { isDark } = useContext(ThemeContext);
  const [paws, setPaws] = useState<Paw[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);

  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 970);

    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 970);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
  };

  const iconStyle = {
    width: 24,
    height: 24,
    filter: isDark ? "invert(1)" : "invert(0)",
    transition: "transform 0.2s",
  };

  const isMobile = useIsMobile();
  const bgColor = isDark ? "#000000" : "#f7f7f7";
  const textColor = isDark ? "#ccc" : "#444";

  const spawnPaws = (e: React.MouseEvent<HTMLDivElement>) => {
    const footer = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - footer.left;
    const offsetY = e.clientY - footer.top;

    const stepCount = 4;
    const stepDistance = 35;

    // Angle straight up (π/2 downward → -π/2 upward)
    const angle = -Math.PI / 2;
    const dy = Math.sin(angle) * stepDistance; // ~ -stepDistance (up)

    const sideStep = 16;

    const newPaws: Paw[] = [];

    for (let i = 0; i < stepCount; i++) {
      const lateral = (i % 2 === 0 ? -1 : 1) * sideStep;

      newPaws.push({
        id: Date.now() + i,
        top: offsetY + dy * i,
        left: offsetX + lateral,
      });
    }

    setPaws(newPaws);
  };

  return (
    /* Styles */
    <footer
      ref={footerRef}
      onClick={spawnPaws}
      style={{
        background: bgColor,
        color: textColor,
        fontFamily: "monospace",
        fontSize: "0.85rem",
        paddingTop: "1.2rem",
        paddingBottom: "1.2rem",
        textAlign: "center",
        position: "relative",
        marginTop: isMobile ? "25vh" : "45vh",
        overflow: "hidden",
      }}
    >
      {/* Gradient */}
      <div
        style={{
          height: "3px",
          width: "100%",
          background:
            "linear-gradient(270deg, #3dc4eeff, #f06d8bff, #2deeceff, #d6ee20ff)",
          backgroundSize: "400% 400%",
          animation: "moveGradient 6s ease infinite",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.9,
        }}
      />

      {/* Paw steps */}
      {paws.map((paw, i) => (
        <PawIcon
          key={paw.id}
          size={18}
          color={isDark ? "#fff" : "#000"}
          style={{
            position: "absolute",
            top: `${paw.top}px`,
            left: `${paw.left}px`,
            opacity: 0, // prevent flicker
            transform: `rotate(${i % 2 === 0 ? "-10deg" : "10deg"})`,
            animation: `fadePaw 2.4s ease-out forwards`,
            animationDelay: `${i * 0.22}s`,

            pointerEvents: "none",
          }}
        />
      ))}

      {/* Footer */}
      <div className="container">
        <p style={{ marginBottom: "0.7rem" }}>
          Built with 💻, caffeine ☕, and deployed by sheer willpower on GitHub
          Pages.
          <br />
          &copy; {new Date().getFullYear()} Thergiakis Eftichios — All rights
          reserved.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "0.3rem",
          }}
        >
          <a
            href="https://github.com/iamtheef"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" style={iconStyle} />
          </a>
          <a
            href="https://www.linkedin.com/in/iamtheef/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" style={iconStyle} />
          </a>
          <a
            href="https://soundcloud.com/dj_theef"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={soundcloud} alt="SoundCloud" style={iconStyle} />
          </a>
          <a
            href="https://discordapp.com/users/469766971437613057"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={discord} alt="Discord" style={iconStyle} />
          </a>
          <a
            href="https://medium.com/@eftihis.riise"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={medium} alt="Medium" style={iconStyle} />
          </a>
        </div>

        <p style={{ fontSize: "0.7rem", opacity: 0.5 }}>
          Hosted on GitHub Pages • May contain traces of cats 🐈
        </p>
      </div>
    </footer>
  );
};
export default Footer;
