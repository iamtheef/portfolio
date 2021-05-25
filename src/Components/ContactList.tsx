import React, { useState, useContext } from "react";
import { copyToClipboard } from "../utils/copyToClipboard";
import { LanguageContext } from "../Context/LanguageContext";

// images
import tel from "../assets/tel.png";
import mail from "../assets/mail.png";
import discord from "../assets/discord.png";

const ContactList: React.FC = () => {
  const { getContent } = useContext(LanguageContext);
  const [isMailCopied, setIsMailCopied] = useState(false);
  const [isDCopied, setIsDCopied] = useState(false);

  const handleCopy = (e: React.ChangeEvent<any>) => {
    if (e.target.id === "mail") {
      setIsMailCopied(true);
      setTimeout(() => {
        setIsMailCopied(false);
      }, 1000);
    } else if (e.target.id === "discord") {
      setIsDCopied(true);
      setTimeout(() => {
        setIsDCopied(false);
      }, 1000);
    }
    copyToClipboard(e);
  };

  return (
    <>
      {getContent().CONTACT_PROMPT}
      <div className="contact-list">
        <div className="container">
          <div className="col-12 float-left">
            <ul className="nobull contact" style={{ marginTop: "30px" }}>
              <li onClick={handleCopy}>
                <img src={mail} alt="mail icon" className="footer-icon" />
                <span className={`${isMailCopied && "blink"}`} id="mail">
                  {isMailCopied ? "mail copied" : "iamtheef_th@protonmail.com"}
                </span>
              </li>
              <li>
                {" "}
                <img src={tel} alt="tel" className="footer-icon" />
                +30 6980970012 (Telegram, Viber)
              </li>

              <li onClick={handleCopy}>
                {" "}
                <img src={discord} alt="dscr" className="footer-icon" />
                <span className={`${isDCopied && "blink"}`} id="discord">
                  {isDCopied ? "discord copied" : "Th#1833"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
