import React, { useContext } from "react";
import loadable from "@loadable/component";
import { ThemeContext } from "../Context/ThemeContext";

const ContactList = loadable(() => import("./ContactList"));
const Footer = loadable(() => import("./Footer"));
const DownloadResume = loadable(() => import("./DownloadResume"));

const Contact: React.FC = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div>
      <div className="container marginTop">
        <div className={`row paragraph g-4 ${isDark ? "dark-paragraph" : ""}`}>
          <div className="col-12 col-lg-8">
            <ContactList />
          </div>
          <div className="col-12 col-lg-4">
            <DownloadResume />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
