import React, { useContext } from "react";
import Footer from "./Footer";
import { LanguageContext } from "../Context/LanguageContext";

const Contact: React.FC = () => {
  const { isGreek } = useContext(LanguageContext);
  return (
    <div>
      <div className="container">
        <div className="row marginTop paragraph">
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

            <div className="contact-list">
              <ul>
                <ul>
                  <li>iamtheef_th@protonmail.com</li>
                  <li>+30 6980970012 (WhatsApp, Viber)</li>
                  <li>Discord Th#1833</li>
                </ul>
              </ul>
            </div>
            {isGreek() ? (
              <div>
                <p>Kατεβάστε μια έντυπη έκδοση</p>
                <ul>
                  <li>
                    <a href="../assets/cv_GR.pdf" download>
                      PDF
                    </a>
                  </li>
                  <li style={{ marginBottom: "120px" }}>
                    {" "}
                    <a href="../assets/cv_GR.docx" download>
                      Word
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <p>Download a printable version</p>
                <ul>
                  <li>
                    <a href="../assets/cv_EN.pdf" download>
                      PDF
                    </a>
                  </li>
                  <li style={{ marginBottom: "120px" }}>
                    {" "}
                    <a href="../assets/cv_EN.docx" download>
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
