import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ArrowSlider from "../arrowSlider/arrowSlider";
import CardDescription from "../cardDescription/cardDescription";
import {
  wrapper,
  first__image,
  second__image,
  third__image,
  fourth__image,
  image__wrapper,
  description__wrapper,
  description__first,
  description__second,
  description__third,
  description__fourth,
  arrow__slider_wrapper,
  image,
} from "./cards.module.scss";

export default function Cards() {
  return (
    <section className={wrapper}>
      <div className={image__wrapper}>
        <StaticImage
          className={first__image}
          imgClassName={image}
          src="../../images/shutterstock_1877634640@2x.png"
          alt="office"
          width={770}
          height={495}
          quality={80}
        />
        <div className={`${description__first} ${description__wrapper}`}>
          <CardDescription
            content={"Biuro"}
            description={"od 1000 zł/msc"}
          ></CardDescription>
        </div>
        <div className={arrow__slider_wrapper}>
          <ArrowSlider></ArrowSlider>
        </div>
      </div>
      <div className={image__wrapper}>
        <StaticImage
          className={second__image}
          imgClassName={image}
          src="../../images/shutterstock_1723055614@2x.png"
          alt="office"
          width={770}
          height={495}
          quality={80}
        />
        <div className={`${description__second} ${description__wrapper}`}>
          <CardDescription
            w={241}
            h={194}
            content={"Lorem\nipsum"}
            description={"od 500 zł/msc"}
          ></CardDescription>
        </div>
        <div className={arrow__slider_wrapper}>
          <ArrowSlider></ArrowSlider>
        </div>
      </div>
      <div className={image__wrapper}>
        <StaticImage
          className={third__image}
          imgClassName={image}
          src="../../images/shutterstock_1677941275@2x.png"
          alt="office"
          width={770}
          height={362}
          quality={80}
        />
        <div className={`${description__third} ${description__wrapper}`}>
          <CardDescription
            content={"Biuro\nlorem"}
            description={"od 100 zł/h"}
          ></CardDescription>
        </div>
        <div className={arrow__slider_wrapper}>
          <ArrowSlider></ArrowSlider>
        </div>
      </div>
      <div className={image__wrapper}>
        <StaticImage
          className={fourth__image}
          imgClassName={image}
          src="../../images/shutterstock_1433594243@2x.png"
          alt="office"
          width={770}
          height={362}
          quality={80}
        />
        <div className={`${description__fourth} ${description__wrapper}`}>
          <CardDescription
            content={"Biuro lorem ipsum Lorem"}
            description={"od 100 zł/h"}
          ></CardDescription>
        </div>
        <div className={arrow__slider_wrapper}>
          <ArrowSlider></ArrowSlider>
        </div>
      </div>
    </section>
  );
}
