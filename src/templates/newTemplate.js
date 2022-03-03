import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { new__wrapper, text, link } from "./newTemplate.module.scss";

function NewTemplate({ pageContext: { data } }) {
  return (
    <div className={new__wrapper}>
      <GatsbyImage
        image={data.image.gatsbyImageData}
        objectFit="contain"
        alt=""
      />
      <h2>{data.content.value.document.children[0].children[0].value}</h2>
      <p>Published {data.date}</p>
      <p className={text}>
        {data.content.value.document.children[1].children[0].value}
      </p>
      <Link to="/" className={link}>
        Go back
      </Link>
    </div>
  );
}

export default NewTemplate;
