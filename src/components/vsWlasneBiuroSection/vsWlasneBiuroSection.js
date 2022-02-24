import { StaticImage } from "gatsby-plugin-image";
import {
  wrapper,
  logo,
  image__wrapper,
  image__overlay,
  desc,
} from "./vsWlasneBiuroSection.module.scss";
import React from "react";

export default function VsWlasneBiuroSection() {
  return (
    <section className={wrapper}>
      <StaticImage
        className={image__wrapper}
        imgClassName={image__overlay}
        src="../../images/Group 258@2x.png"
        alt="icon"
        quality={100}
      />
      <div className={logo}>
        <StaticImage
          src="../../images/Group 576.svg"
          alt="icon"
          width={290}
          height={145}
        />
      </div>
      <div className={desc}>
        Lorem ipsum<br></br>vs własne biuro
      </div>
    </section>
  );
}
