import React, { useEffect, useState } from "react";
import { makeTable } from "../utils/makeTable";

const Background: React.FC = () => {
  const [table, setTable] = useState(<div></div>);

  useEffect(() => {
    setInterval(() => {
      setTable(makeTable(window.location.pathname));
    }, 100);
  }, [setTable]);

  return (
    <div className="container background nopadding">
      <div className="row">
        <div className="col-sm">{table}</div>
      </div>
    </div>
  );
};

export default Background;
