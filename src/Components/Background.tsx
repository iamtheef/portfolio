import React, { useEffect, useState } from "react";
import { makeTable } from "../utils/makeTable";

const Background: React.FC = (props) => {
  const [table, setTable] = useState(<div></div>);

  useEffect(() => {
    setInterval(() => {
      setTable(makeTable());
    }, 100);
  }, [setTable]);

  return (
    <div
      className="container background nopadding"
      style={{ position: "absolute" }}
    >
      <div className="row">
        <div className="col-sm">{table}</div>
      </div>
      {props.children}
    </div>
  );
};

export default Background;
