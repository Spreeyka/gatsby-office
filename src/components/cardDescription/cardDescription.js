import React from "react";
import { wrapper, title, desc } from "./cardDescription.module.scss";

export default function CardDescription({ w, h, content, description }) {
  //ten styl dla pierwszego wrappera style={{ width: w + "px", height: h + "px" }
  return (
    <div className={wrapper}>
      <div className={title}>{content}</div>
      <div></div>
      <div className={desc}>{description}</div>
    </div>
  );
}
