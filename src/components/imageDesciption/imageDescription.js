import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { wrapper, image, lower__text } from "./imageDescription.module.scss";

export default function ImageDescription() {
  return (
    <div className={wrapper}>
      <StaticImage
        className={image}
        src="../../images/Firma.png"
        alt="Firma"
        width={196}
        height={91}
      />
      <div>
        <h1>
          Lorem ipsum dolor sit amet<span>,</span>
          <br></br>{" "}
          <p className={lower__text}>
            consectetur adipiscing elit. <span>Ut auctor</span>
          </p>
        </h1>
      </div>
    </div>
  );
}
