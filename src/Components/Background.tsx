import React, { useEffect, useState } from "react";

const Background: React.FC = () => {
  function digit() {
    const digits = [0, 1];
    const num = () => Math.floor(Math.random() * digits.length);
    let string = "";
    for (let i = 0; i <= 43; i++) {
      string = string + digits[num()].toString();
    }
    return string;
  }

  const makeTable = () => {
    return (
      <div>
        <div className="header">{digit()}</div>
        <div className="header">{digit()}</div>
        <div className="header">{digit()}</div>
        <div className="header">{digit()}</div>
        <div className="header">{digit()}</div>
        <div className="header">{digit()}</div>
        <div className="header">{digit()}</div>
        <div className="header">{digit()}</div>
        <div className="header">{digit()}</div>
      </div>
    );
  };

  const [table, setTable] = useState(makeTable());
  useEffect(() => {
    setInterval(() => {
      setTable(makeTable());
    }, 2000);
  }, [setTable]);

  return (
    <div className="container background nopadding">
      <div className="col">
        <div className="row">{table}</div>
      </div>
    </div>
  );
};

export default Background;
