import React from "react";
import { button } from "./button.module.scss";

export default function Button({ formId }) {
  return (
    <button className={button} type="submit" form={formId}>
      <p>WYŚLIJ</p>
    </button>
  );
}
