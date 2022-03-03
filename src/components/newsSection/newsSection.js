import { wrapper, new__wrapper, date, link } from "./newsSection.module.scss";
import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function NewsSection() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsNews {
        nodes {
          id
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
          <div className={new__wrapper} key={singleNew.id}>
            <GatsbyImage
              image={singleNew.image.gatsbyImageData}
              objectFit="contain"
              alt=""
            />
            <p className={date}>{singleNew.date}</p>
            <h3>{singleNew.title}</h3>
            <Link to={singleNew.id} className={link}>
              Więcej
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
