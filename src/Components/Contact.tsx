import React from "react";
import loadable from "@loadable/component";

const ContactList = loadable(() => import("./ContactList"));
const Footer = loadable(() => import("./Footer"));
const DownloadResume = loadable(() => import("./DownloadResume"));

const Contact: React.FC = () => {
  return (
    <div>
      <div className="container marginTop">
        <div className="row paragraph">
          <div className="col">
            <ContactList />
            <DownloadResume />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
