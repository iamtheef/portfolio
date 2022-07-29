import React, { FC, useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { ThemeContext } from "../Context/ThemeContext";

const DownloadResume: FC = () => {
  const { language, getContent } = useContext(LanguageContext);
  const { getTheme } = useContext(ThemeContext);

  return (
    <>
      <div>
        <p>{getContent().DOWNLOAD_CV}</p>
        <ul>
          <li>
            <a
              style={{ color: getTheme!().linksColor }}
              href={`${process.env.PUBLIC_URL}/thergiakis-eftichios_cv_${language}.pdf`}
              download
            >
              PDF
            </a>
          </li>
          <li>
            <a
              style={{ color: getTheme!().linksColor }}
              href={`${process.env.PUBLIC_URL}/thergiakis-eftichios_cv_${language}.docx`}
              download
            >
              Word
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DownloadResume;
