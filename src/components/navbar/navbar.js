import { Link } from "gatsby";
import React from "react";
import {
  wrapper,
  pushedIcons,
  icon,
  iconWrapper,
  fb,
  moved,
  logo,
  links,
  logo__wrapper,
  hidden,
} from "./navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

export default function Navbar() {
  return (
    <nav className={wrapper}>
      <div className={logo}>
        <StaticImage
          className={logo__wrapper}
          src="../../images/Logo.png"
          alt="logo"
          width={135}
          height={67}
          layout="fixed"
        />
      </div>
      <div className={hidden}>
        <div className={links}>
          <Link to="/">Poznaj przestrzeń</Link>
          <Link to="/">Oferta</Link>
          <Link to="/">Lokalizacja</Link>
          <div className={moved}>
            <Link to="/">Własne biuro</Link>
            <Link to="/">Kontakt</Link>
          </div>
        </div>
        <div className={pushedIcons}>
          <div className={iconWrapper}>
            <FontAwesomeIcon icon={faFacebookF} className={(icon, fb)} />
          </div>
          <div className={iconWrapper}>
            <FontAwesomeIcon icon={faInstagram} className={icon} />
          </div>
        </div>
      </div>
    </nav>
  );
}
