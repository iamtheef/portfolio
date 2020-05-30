import React, { useContext } from "react";
import Footer from "./Footer";
import { LanguageContext } from "../Context/LanguageContext";
import ContactList from "./ContactList";

const Contact: React.FC = () => {
  const { isGreek } = useContext(LanguageContext);
  return (
    <div>
      <div className="container">
        <div className="row paragraph marginTop">
          <div className="col">
            {isGreek() ? (
              <p className="contact-line">
                Εάν έχω ξεχάσει να αναφέρω κάτι μπορείτε πάντα να επικοινωνήσετε
                μαζί μου με τους εξής τρόπους:
              </p>
            ) : (
              <p className="contact-line">
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
                <p>Download my resume</p>
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
