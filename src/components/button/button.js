import React from "react";
import { button } from "./button.module.scss";

export default function Button({ formId }) {
  return (
    //form={formId}
    <button className={button} type="submit">
      <p>WYŚLIJ</p>
    </button>
  );
}
