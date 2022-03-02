import { wrapper, new__wrapper, date } from "./newsSection.module.scss";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function NewsSection() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsNews {
        nodes {
          date
          title
          image {
            gatsbyImageData(
              imgixParams: { fit: "crop", w: "450", h: "334", auto: "format" }
            )
          }
        }
      }
    }
  `);

  return (
    <section>
      <h2>Aktualności</h2>
      <div className={wrapper}>
        {data.allDatoCmsNews.nodes.map((singleNew) => (
          <div className={new__wrapper}>
            <GatsbyImage
              image={singleNew.image.gatsbyImageData}
              objectFit="contain"
            />
            <p className={date}>{singleNew.date}</p>
            <h3>{singleNew.title}</h3>
            <p>Więcej</p>
          </div>
        ))}
      </div>
    </section>
  );
}
