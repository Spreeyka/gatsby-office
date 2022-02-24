import { StaticImage } from "gatsby-plugin-image";
import { wrapper, date } from "./newsSection.module.scss";
import React from "react";

export default function NewsSection() {
  return (
    <section>
      <h2>Aktualności</h2>
      <div className={wrapper}>
        <div>
          <StaticImage
            src="../../images/shutterstock_1433594243.png"
            alt="icon"
            width={450}
            height={334}
            quality={90}
          />
          <p className={date}>01.01.2021</p>
          <h3>
            Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit.
          </h3>
          <p>Więcej</p>
        </div>
        <div>
          <StaticImage
            src="../../images/shutterstock_763511701@2x.png"
            alt="icon"
            width={450}
            height={334}
            quality={90}
          />
          <p className={date}>01.01.2021</p>
          <h3>
            Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit.
          </h3>
          <p>Więcej</p>
        </div>
        <div>
          <StaticImage
            src="../../images/shutterstock_763511701@2x.png"
            alt="icon"
            width={450}
            height={334}
            quality={90}
          />
          <p className={date}>01.01.2021</p>
          <h3>
            Lorem ipsum dolor sit amet,<br></br>consectetur adipiscing elit.
          </h3>
          <p>Więcej</p>
        </div>
      </div>
    </section>
  );
}
