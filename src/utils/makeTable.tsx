import { generateDigits } from "./generateDigits";
import React from "react";

export const makeTable = () => {
  console.log(document.body.clientHeight);
  const lines = Math.floor(document.documentElement.clientHeight / 100) + 2;

  const newTable: any = [];

  for (let i = 0; i < lines; i++) {
    newTable.push(
      <div className="header col" key={i}>
        {generateDigits()}
      </div>
    );
  }
  return <div>{newTable}</div>;
};
