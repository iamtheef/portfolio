import React, { FC, useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

const DownloadResume: FC = () => {
  const { isGreek } = useContext(LanguageContext);
  return (
    <>
      {isGreek() ? (
        <div>
          <p>Kατεβάστε το παρόν βιογραφικό</p>
          <ul>
            <li>
              <a
                href={
                  process.env.PUBLIC_URL + "/thergiakis-eftichios_cv_GR.pdf"
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
                  process.env.PUBLIC_URL + "/thergiakis-eftichios_cv_GR.docx"
                }
                download
              >
                Word
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <p>Download a printable document of my CV</p>
          <ul>
            <li>
              <a
                href={
                  process.env.PUBLIC_URL + "/thergiakis-eftichios_cv_EN.pdf"
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
                  process.env.PUBLIC_URL + "/thergiakis-eftichios_cv_EN.docx"
                }
                download
              >
                Word
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default DownloadResume;
