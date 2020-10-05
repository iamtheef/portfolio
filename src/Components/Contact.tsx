import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import loadable from "@loadable/component";

const ContactList = loadable(() => import("./ContactList"));
const Footer = loadable(() => import("./Footer"));

const Contact: React.FC = () => {
  const { isGreek } = useContext(LanguageContext);
  return (
    <div>
      <div className="container marginTop">
        <div className="row paragraph">
          <div className="col">
            {isGreek() ? (
              <p>
                Εάν έχω ξεχάσει να αναφέρω κάτι μπορείτε πάντα να επικοινωνήσετε
                μαζί μου με τους εξής τρόπους:
              </p>
            ) : (
              <p>
                Not sure what else I should mention so if I left anything out or
                you have further questions feel free to contact me.
              </p>
            )}

            <ContactList />

            {isGreek() ? (
              <div>
                <p>Kατεβάστε το παρόν βιογραφικό</p>
                <ul>
                  <li>
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        "/thergiakis-eftichios_cv_GR.pdf"
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
                        "/thergiakis-eftichios_cv_GR.docx"
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
                        process.env.PUBLIC_URL +
                        "/thergiakis-eftichios_cv_EN.pdf"
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
                        "/thergiakis-eftichios_cv_EN.docx"
                      }
                      download
                    >
                      Word
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
