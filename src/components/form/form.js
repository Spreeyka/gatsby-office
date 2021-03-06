import React from "react";
import Button from "../button/button";
import {
  wrapper,
  input,
  bold,
  faded,
  contact,
  input__wrapper,
  checkboxWrapper,
  button__wrapper,
} from "./form.module.scss";

export default function Form() {
  return (
    <form
      className={wrapper}
      name="Contact Form"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="Contact Form" />
      <p className={bold}>
        Lorem ipsum<br></br> Lorem ipsum lorem ipsum
      </p>
      <p className={faded}>consectetur adipiscing elit. Ut auctor arcu</p>
      <p className={contact}>Zostaw kontakt, zadzwonimy do Ciebie</p>
      <div className={input__wrapper}>
        <input
          className={input}
          placeholder="Imię i nazwisko"
          type="text"
          id="name"
          name="name"
        />
        <input
          className={input}
          placeholder="Telefon"
          type="tel"
          id="phone"
          name="phone"
        />
        <input
          className={input}
          placeholder="Email"
          type="email"
          id="mail"
          name="mail"
        />
        <input
          className={input}
          placeholder="Lorem ipsum lorem ipsum"
          type="text"
          id="desc"
          name="desc"
        />
        <div className={checkboxWrapper}>
          <input type="checkbox" id="term" name="term" required />
          <label htmlFor="term">
            Wyrażam dobrowolną zgodę na przetwarzanie moich danych osobowych
            więcej...
          </label>
        </div>
        <div className={button__wrapper}>
          <Button></Button>
        </div>
      </div>
    </form>
  );
}
