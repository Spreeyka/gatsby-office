import React from "react";
import ArrowSlider from "../arrowSlider/arrowSlider";
import {
  wrapper,
  arrow,
  button,
  description,
} from "./learnMoreButton.module.scss";

export default function LearnMoreButton() {
  return (
    <button className={button}>
      <div className={wrapper}>
        <div className={description}>
          <p>Dowiedz się więcej</p>
        </div>
        <div className={arrow}>
          <ArrowSlider></ArrowSlider>
        </div>
      </div>
    </button>
  );
}
