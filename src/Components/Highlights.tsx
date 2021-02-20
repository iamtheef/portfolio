import React, { FC, useContext } from "react";
import loadable from "@loadable/component";
import { LanguageContext } from "../Context/LanguageContext";

// assets
import chatRoom from "../assets/chat-room.optimised.gif";
import ai from "../assets/ai-optimised.jpeg";
import graphql from "../assets/graphql.png";
import postit from "../assets/postit.gif";

const Highlights: FC = () => {
  const Highlight = loadable(() => import("./Highlight"));
  const IamAI = loadable(() => import("./iamAI"));

  const { getTags, getContent } = useContext(LanguageContext);
  const { CAT_OR_DOG, CHAT_ROOM, GRAPHQL, POSTIT } = getContent().PINNED;

  return (
    <div>
      <h3 className="intro">{getTags().experience.pinned}:</h3>
      <div className="row" style={{ marginTop: "-2%" }}>
        <IamAI />
        <Highlight
          title="Cat or Dog"
          description={CAT_OR_DOG.DESCRIPTION}
          image={ai}
          links={{
            frontEnd: "https://github.com/iamtheef/CNN-client",
            backEnd: "https://github.com/iamtheef/Flask-CNN-API",
            deployedAt: "http://iscatordog.co",
          }}
        />

        <Highlight
          title="Chat Room"
          description={CHAT_ROOM.DESCRIPTION}
          image={chatRoom}
          links={{
            repo: "https://github.com/iamtheef/chat-room",
            deployedAt: "https://iamtheef-chat-room.herokuapp.com/",
          }}
        />
        <Highlight
          title="GraphQL server boilerplate (SQL/NoSQL versions)"
          description={GRAPHQL.DESCRIPTION}
          image={graphql}
          links={{
            repo: "https://github.com/iamtheef/GraphQL_boilerplate",
            deployedAt: "",
          }}
        />
        <Highlight
          title="Postit"
          description={POSTIT.DESCRIPTION}
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
