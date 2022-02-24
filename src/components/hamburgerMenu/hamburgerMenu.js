import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "./hamburgerMenu.scss"; //do not delete
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

export default function HamburgerMenu() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    let bar;
    if (typeof window === "undefined" || !window.document) {
      bar = document.querySelectorAll(".bm-burger-bars");
      window.addEventListener("scroll", handleScroll, { passive: true });
      if (scrollPosition > 450) {
        for (let i = 0; i < bar.length; i++) {
          bar[i].style.background = "black";
        }
      } else {
        for (let i = 0; i < bar.length; i++) {
          bar[i].style.background = "white";
        }
      }
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollPosition]);

  return (
    <Menu right>
      <Link to="/" className="menu-item">
        Poznaj przestrzeń
      </Link>
      <Link to="/" className="menu-item">
        Oferta
      </Link>
      <Link to="/" className="menu-item">
        Lokalizacja
      </Link>
      <Link to="/" className="menu-item">
        Własne biuro
      </Link>
      <Link to="/" className="menu-item">
        Kontakt
      </Link>
      <div className="logo">
        <StaticImage
          src="../../images/Group 576.svg"
          alt="icon"
          width={290}
          height={145}
        />
      </div>
      <div className="icons-wrapper">
        <div className="icon-shadow">
          <Link to="/" className="menu-item">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </Link>
        </div>
        <div className="icon-shadow">
          <Link to="/" className="menu-item">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </Link>
        </div>
      </div>
    </Menu>
  );
}
