import React from "react";
import github from "../assets/github.png";
import background from "../assets/wavy.gif";
import mail from "../assets/mail.png";
import soundcloud from "../assets/sc.png";
import discord from "../assets/discord.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img src={background} className="footer-background" alt="background" />
      <div className="container footer-text">
        <div className="row">
          <div className="col">
            © Designed by Thergiakis Eftichios | May 2020
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <a href="https://github.com/iamtheef">
              <img
                title="iamtheef"
                alt="github icon"
                src={github}
                className="footer-icon mr-4"
              />
            </a>

            <a href="#/">
              <img
                title="Th#1833"
                alt="discord icon"
                src={discord}
                className="footer-icon mr-4"
              />
            </a>

            <a href="https://soundcloud.com/dj_theef">
              <img
                alt="soundcloud icon"
                src={soundcloud}
                className="footer-icon mr-4"
              />
            </a>
            <a href="mailto:iamtheef_th@gmail.com">
              <img
                title="iamtheef_th@protonmail.com"
                alt="mail icon"
                src={mail}
                className="footer-icon mr-4"
                style={{ color: "blue" }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
