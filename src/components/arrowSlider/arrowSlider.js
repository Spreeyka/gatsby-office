import React from "react";
import { wrapper, arrow, right } from "./arrowSlider.module.scss";

export default function ArrowSlider() {
  return (
    <div className={wrapper}>
      <i className={`${arrow} ${right}`}></i>
    </div>
  );
}
