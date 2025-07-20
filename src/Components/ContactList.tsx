import React, { useState, useContext } from "react";
import { copyToClipboard } from "../utils/copyToClipboard";
import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext } from "../Context/ThemeContext";

// images
import tel from "../assets/tel.png";
import mail from "../assets/mail.png";
import discord from "../assets/discord.png";

const ContactList: React.FC = () => {
  const { getContent } = useContext(LanguageContext);
  const { isDark } = useContext(ThemeContext);
  const [isMailCopied, setIsMailCopied] = useState(false);
  const [isDCopied, setIsDCopied] = useState(false);

  const handleCopy = (e: React.ChangeEvent<any>) => {
    if (e.target.id === "mail") {
      setIsMailCopied(true);
      setTimeout(() => setIsMailCopied(false), 1000);
    } else if (e.target.id === "discord") {
      setIsDCopied(true);
      setTimeout(() => setIsDCopied(false), 1000);
    }
    copyToClipboard(e);
  };

  return (
    <>
      <div>{getContent().CONTACT_PROMPT}</div>
      <div className="contact-list" style={{ marginTop: "1.5rem" }}>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            color: isDark ? "#ccc" : "#333",
          }}
        >
          <li
            onClick={handleCopy}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              cursor: "pointer",
            }}
          >
            <img
              src={mail}
              alt="mail icon"
              style={{
                width: 22,
                height: 22,
                filter: isDark ? "invert(1)" : "invert(0)",
              }}
            />
            <span
              className={`${isMailCopied && "blink"} contact-list-item`}
              id="mail"
            >
              {isMailCopied ? "mail copied" : "iamtheef_th@protonmail.com"}
            </span>
          </li>

          <li
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <img
              src={tel}
              alt="tel"
              style={{
                width: 22,
                height: 22,
                filter: isDark ? "invert(1)" : "invert(0)",
              }}
            />
            <span className="contact-list-item">
              +30 6980970012 (Telegram, Viber)
            </span>
          </li>

          <li
            onClick={handleCopy}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              cursor: "pointer",
            }}
          >
            <img
              src={discord}
              alt="discord icon"
              style={{
                width: 22,
                height: 22,
                filter: isDark ? "invert(1)" : "invert(0)",
              }}
            />
            <span
              className={`${isDCopied && "blink"} contact-list-item`}
              id="discord"
            >
              {isDCopied ? "discord copied" : "Th#1833"}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactList;
