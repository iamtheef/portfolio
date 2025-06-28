import React, { useEffect, useState } from "react";
import { makeTable } from "../utils/makeTable";

const Background: React.FC = (props) => {
  const [table, setTable] = useState(<div></div>);

  useEffect(() => {
    let timer = setInterval(() => {
      setTable(makeTable());
    }, 800);
    return () => clearInterval(timer);
  }, [setTable]);

  return (
    <div
      className={`container background nopadding`}
      style={{
        position: "absolute",
      }}
    >
      <div className="row">
        <div className="col-sm">{table}</div>
      </div>
      {props.children}
    </div>
  );
};

export default Background;
