import { StaticImage } from "gatsby-plugin-image";
import { SRLWrapper } from "simple-react-lightbox";
import {
  section,
  wrapper,
  item1,
  item2,
  item3,
  item4,
  item5,
  title,
  image,
  leftArrow__wrapper,
  rightArrow__wrapper,
} from "./gallery.module.scss";
import React from "react";

export default function Gallery() {
  return (
    <section className={section}>
      <SRLWrapper>
        <div className={wrapper}>
          <StaticImage
            className={item1}
            imgClassName={image}
            src="https://serving.photos.photobox.com/77772246be10ea9c222ccdaf9ee5aed51336edf137384ffd07d4201959ee57fbbdbc9347.jpg"
            alt=""
          />
          <StaticImage
            className={item2}
            imgClassName={image}
            src="https://serving.photos.photobox.com/987607845c69d6d0b20d9894fd2cdd24fdc8104186756f253cdc801447b8fa8aadb97d20.jpg"
            alt=""
          />
          <StaticImage
            className={item3}
            imgClassName={image}
            src="https://serving.photos.photobox.com/4673938573e69c25a945d7dfd1415d935f03f8dfbb702fbd1f47b21c8de1be218398126e.jpg"
            alt=""
          />
          <div className={item4}>
            <p className={title}>Galeria</p>
          </div>
          <StaticImage
            className={item5}
            imgClassName={image}
            src="https://serving.photos.photobox.com/103160895bc57905b965d8313e0fedb5951960c69a1af3171b01ec952b4ee455359728ff.jpg"
            alt=""
            objectPosition="0%"
          />
        </div>
      </SRLWrapper>
      <div className={leftArrow__wrapper}>
        <StaticImage
          src="../../images/Component 15 – 1.svg"
          alt=""
          width={130}
          height={130}
        />
      </div>
      <div className={rightArrow__wrapper}>
        <StaticImage
          src="../../images/Component 15 – 1.svg"
          alt=""
          width={130}
          height={130}
        />
      </div>
    </section>
  );
}
