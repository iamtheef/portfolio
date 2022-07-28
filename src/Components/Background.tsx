import React, { useEffect, useState, useContext } from "react";
import { makeTable } from "../utils/makeTable";
import { ThemeContext } from "../Context/ThemeContext";

const Background: React.FC = (props) => {
  const { getTheme } = useContext(ThemeContext);
  const [table, setTable] = useState(<div></div>);

  useEffect(() => {
    let timer = setInterval(() => {
      setTable(makeTable());
    }, 100);
    return () => clearInterval(timer);
  }, [setTable]);

  return (
    <div
      className={`container background nopadding`}
      style={{
        position: "absolute",
        opacity: getTheme!().bgNumsOpacity,
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
