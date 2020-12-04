import React, { useState } from "react";
import tel from "../assets/tel.png";
import mail from "../assets/mail.png";
import discord from "../assets/discord.png";
import { copyToClipboard } from "../utils/copyToClipboard";

const ContactList: React.FC = () => {
  const [isMailCopied, setIsMailCopied] = useState(false);
  const [isDCopied, setIsDCopied] = useState(false);
  const handleCopy = (e: React.ChangeEvent<any>) => {
    if (e.target.id === "mail") {
      setIsMailCopied(true);
      setTimeout(() => {
        setIsMailCopied(false);
      }, 1000);
      copyToClipboard("iamtheef_th@protonmail.com");
    } else {
      setIsDCopied(true);
      setTimeout(() => {
        setIsDCopied(false);
      }, 1000);
      copyToClipboard("Th#1833");
    }
  };

  return (
    <div className="contact-list">
      <div className="container">
        <div className="col-12 float-left">
          <ul className="nobull" style={{ marginTop: "30px" }}>
            <li onClick={handleCopy}>
              <img src={mail} alt="mail icon" className="footer-icon" />
              <span className={`${isMailCopied && "blink"}`} id="mail">
                {isMailCopied ? "mail copied" : "iamtheef_th@protonmail.com"}
              </span>
            </li>
            <li>
              {" "}
              <img src={tel} alt="tel" className="footer-icon" />
              +30 6980970012 (WhatsApp, Viber)
            </li>

            <li onClick={handleCopy}>
              {" "}
              <img src={discord} alt="dscr" className="footer-icon" />
              <span className={`${isDCopied && "blink"}`} id="discord">
                {isDCopied ? "discord copied" : "Discord Th#1833"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
