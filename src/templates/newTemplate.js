import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

function NewTemplate({ pageContext: { data } }) {
  //teraz trzeba to ładnie ostylować.
  //Dodać nowe pole do DatoCMS "skrót" i pełny tekst
  //Trzeba wyświetlić layout w tle

  return (
    <div>
      <Link to="/">Go back</Link>
      <GatsbyImage image={data.image.gatsbyImageData} objectFit="contain" />
      Name: {data.title}
      Price: {data.date}
    </div>
  );
}

export default NewTemplate;
