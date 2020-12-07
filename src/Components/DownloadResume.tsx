import React, { FC, useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

const DownloadResume: FC = () => {
  const { language, getContent } = useContext(LanguageContext);
  return (
    <>
      <div>
        <p>{getContent().DOWNLOAD_CV}</p>
        <ul>
          <li>
            <a
              href={
                process.env.PUBLIC_URL +
                `/thergiakis-eftichios_cv_${language}.pdf`
              }
              download
            >
              PDF
            </a>
          </li>
          <li style={{ marginBottom: "120px" }}>
            {" "}
            <a
              href={
                process.env.PUBLIC_URL +
                `/thergiakis-eftichios_cv_${language}.docx`
              }
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
