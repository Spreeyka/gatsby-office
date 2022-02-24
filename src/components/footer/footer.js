import { StaticImage } from "gatsby-plugin-image";
import {
  wrapper,
  borderImage,
  leftPart__wrapper,
  logo,
  address,
  phone,
  mail,
  policy,
  midPart__wrapper,
  aDreamLogo,
  image,
} from "./footer.module.scss";
import React from "react";

export default function Footer() {
  return (
    <footer className={wrapper}>
      <StaticImage
        className={borderImage}
        src="../../images/Group 586.svg"
        alt=""
        width={290}
        height={68}
        layout="fixed"
      />
      <div className={leftPart__wrapper}>
        <p className={logo}>LOGO</p>
        <p className={address}>
          ul. Towarowa 5/6<br></br>31-000 Kraków
        </p>
        <p className={phone}>
          +48 999 999 999<br></br>
          <span className={mail}>email@email.com</span>
        </p>
        <p className={policy}>Polityka prywatności</p>
      </div>
      <div className={midPart__wrapper}>
        <span>Strona główna</span>
        <span>Lokalizacja</span>
        <span>Poznaj przestrzeń</span>
        <span>Własne biuro</span>
        <span>Oferta</span>
        <span>Kontakt</span>
      </div>
      <div className={aDreamLogo}>
        <span>Proudly designed by</span>
        <StaticImage
          className={image}
          src="../../images/logo_adream.svg"
          alt="aDream"
          width={69.82}
          height={18.29}
        />
      </div>
    </footer>
  );
}
