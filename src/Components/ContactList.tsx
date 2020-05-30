import React from "react";
import tel from "../assets/tel.png";
import mail from "../assets/mail.png";
import discord from "../assets/discord.png";

const ContectList: React.FC = () => {
  return (
    <div className="contact-list">
      <div className="container">
        <div
          className="col-12 float-left"
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <ul className="nobull">
            <li>
              {" "}
              <img src={mail} alt="mail icon" className="footer-icon" />
              iamtheef_th@protonmail.com
            </li>
            <li>
              {" "}
              <img src={tel} alt="tel" className="footer-icon" />
              +30 6980970012 (WhatsApp, Viber)
            </li>

            <li>
              {" "}
              <img src={discord} alt="dscr" className="footer-icon" />
              Discord Th#1833
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContectList;
