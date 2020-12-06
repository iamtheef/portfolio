import React, { FC, useContext } from "react";
import loadable from "@loadable/component";
import { LanguageContext } from "../Context/LanguageContext";

// images and gifs
import chatRoom from "../assets/chat-room.optimised.gif";
import ai from "../assets/ai-optimised.jpeg";
import graphql from "../assets/graphql.png";
import postit from "../assets/postit.gif";

const Highlights: FC = () => {
  const Highlight = loadable(() => import("./Highlight"));
  const { isGreek } = useContext(LanguageContext);

  return (
    <div>
      <h3 className="intro">{isGreek() ? "Επιφανή" : "Spotlight"}:</h3>
      <div className="row" style={{ marginTop: "-2%" }}>
        <Highlight
          title="Cat or Dog"
          description="An AI model trained to recognize cats and dogs."
          image={ai}
          links={{
            frontEnd: "https://github.com/iamtheef/CNN-client",
            backEnd: "https://github.com/iamtheef/Flask-CNN-API",
            deployedAt: "http://18.158.52.156",
          }}
        />

        <Highlight
          title="Chat Room"
          description="Real-time messaging app with encrypted trail messages."
          image={chatRoom}
          links={{
            repo: "https://github.com/iamtheef/chat-room",
            deployedAt: "https://iamtheef-chat-room.herokuapp.com/",
          }}
        />
        <Highlight
          title="Chat Room"
          description="A fully functional and tested GraphQL server boilerplate container."
          image={graphql}
          links={{
            repo: "https://github.com/iamtheef/GraphQL_boilerplate",
            deployedAt: "",
          }}
        />
        <Highlight
          title="Chat Room"
          description="A smaller scale reddit, client and API"
          image={postit}
          links={{
            deployedAt: "",
            repo: "https://github.com/iamtheef/Post-It",
          }}
        />
      </div>
    </div>
  );
};

export default Highlights;
