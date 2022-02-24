import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import LearnMoreButton from "../learnMoreButton/learnMoreButton";
import {
  wrapper,
  description,
  image__wrapper,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  button__wrapper,
} from "./learnMoreSection.module.scss";

export default function LearnMoreSection() {
  return (
    <section className={wrapper}>
      <div className={description}>Lorem ipsum dolor sit amet, conse</div>
      <div className={`${image__wrapper} ${item1}`}>
        <StaticImage
          objectFit="contain"
          src="../../images/Group 603.svg"
          alt="icon"
          width={108}
          height={128.72}
        />
        <div>
          <p>Lorem ipsum</p>
        </div>
      </div>
      <div className={`${image__wrapper} ${item2}`}>
        <StaticImage
          objectFit="contain"
          src="../../images/Group 602.svg"
          alt="icon"
          width={120.24}
          height={119.19}
        />
        <p>
          Lorem ipsum <br></br> dolor sit amet conse
        </p>
      </div>
      <div className={`${image__wrapper} ${item3}`}>
        <StaticImage
          objectFit="contain"
          src="../../images/Group 601.svg"
          alt="icon"
          width={130}
          height={132.5}
        />
        <p>
          Lorem ipsum<br></br>dolor sit amet,
        </p>
      </div>
      <div className={`${image__wrapper} ${item4}`}>
        <StaticImage
          objectFit="contain"
          src="../../images/Group 604.svg"
          alt="icon"
          width={98.5}
          height={116}
        />
        <p>
          Lorem ipsum<br></br>dolor sit amet,
        </p>
      </div>
      <div className={`${image__wrapper} ${item5}`}>
        <StaticImage
          objectFit="contain"
          src="../../images/Group 598.svg"
          alt="icon"
          width={136}
          height={102.6}
        />
        <p>Lorem ipsum dolor sit amet, conse lorem ipsum lorem</p>
      </div>
      <div className={`${image__wrapper} ${item6}`}>
        <StaticImage
          objectFit="contain"
          src="../../images/Group 599.svg"
          alt="icon"
          width={121.25}
          height={118.08}
        />
        <p>Lorem ipsum dolor sit amet, conse lorem ipsum lorem</p>
      </div>
      <div className={`${image__wrapper} ${item7}`}>
        <StaticImage
          objectFit="contain"
          src="../../images/Group 600.svg"
          alt="icon"
          width={130}
          height={102}
        />
        <p>Lorem ipsum dolor sit amet, conse lorem ipsum</p>
      </div>
      <div className={button__wrapper}>
        <LearnMoreButton></LearnMoreButton>
      </div>
    </section>
  );
}
