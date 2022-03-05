import React from "react";
import calsses from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={calsses.container}>
      <p className={calsses.title}>--Css Modules --</p>
      <button className={calsses.button}>Fight!</button>
    </div>
  );
};
