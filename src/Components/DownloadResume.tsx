import React, { FC, useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext } from "../Context/ThemeContext";

const DownloadResume: FC = () => {
  const { language, getContent } = useContext(LanguageContext);
  const { getTheme } = useContext(ThemeContext);

  const linksColor = getTheme!().linksColor;
  return (
    <>
      <div
        style={{
          marginTop: "1.5rem",
        }}
      >
        <p style={{ marginBottom: "0.5rem" }}>{getContent().DOWNLOAD_CV}</p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <a
            href={`${process.env.PUBLIC_URL}/thergiakis-eftichios_cv_${language}.pdf`}
            download
            style={{
              color: linksColor,
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            PDF
          </a>

          <a
            href={`${process.env.PUBLIC_URL}/thergiakis-eftichios_cv_${language}.docx`}
            download
            style={{
              color: linksColor,
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            DOCX
          </a>
        </div>
      </div>
    </>
  );
};

export default DownloadResume;
