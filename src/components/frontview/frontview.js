import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Cards from "../cards/cards";
import Form from "../form/form";
import ImageDescription from "../imageDesciption/imageDescription";
import Navbar from "../navbar/navbar";
import ProgressBar from "../progressBar/progressBar";
import {
  wrapper,
  image,
  image__wrapper,
  arrow__wrapper,
  vsWlasneBiuroSection__wrapper,
  newsSection__wrapper,
  gallery__wrapper,
  footer__wrapper,
  main__section,
  desc__wrapper,
  form__wrapper,
  cards__wrapper,
  navbar__wrapper,
  progressBar__wrapper,
  first__arrow,
  second__arrow,
  learnMoreSection__wrapper,
  nextButton,
  prevButton,
} from "./frontview.module.scss";
import LearnMoreSection from "../learnMoreSection/learnMoreSection";
import VsWlasneBiuroSection from "../vsWlasneBiuroSection/vsWlasneBiuroSection";
import NewsSection from "../newsSection/newsSection";
import Gallery from "../gallery/gallery";
import Footer from "../footer/footer";
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";

export default function Frontview() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <section className={wrapper}>
      <HamburgerMenu></HamburgerMenu>
      <div className={main__section}>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          speed={500}
          navigation={{
            navigation: true,
            prevEl: ".frontview-module--first__arrow--L5q2O",
            nextEl: ".frontview-module--second__arrow--emUct",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => {
            setActiveSlideIndex(swiper.activeIndex);
          }}
        >
          <SwiperSlide>
            <StaticImage
              className={image}
              imgClassName={image__wrapper}
              src="../../images/shutterstock_615439679.png"
              alt="An office"
              quality={70}
              objectPosition="15% 50%"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              className={image}
              imgClassName={image__wrapper}
              src="../../images/shutterstock_1090078049.png"
              alt="An office"
              quality={70}
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              className={image}
              imgClassName={image__wrapper}
              src="../../images/shutterstock_1790190785.png"
              alt="An office"
              quality={70}
            />
          </SwiperSlide>
        </Swiper>
        <div className={desc__wrapper}>
          <ImageDescription></ImageDescription>
        </div>
        <div className={arrow__wrapper}>
          <div>
            <div className={prevButton}>
              <StaticImage
                className={first__arrow}
                src="../../images/Component 12 – 1.png"
                alt=""
                width={158}
                height={113}
              />
            </div>
            <div className={nextButton}>
              <StaticImage
                className={second__arrow}
                src="../../images/Component 11 – 1.png"
                alt=""
                width={145}
                height={113}
              />
            </div>
          </div>
          <div className={progressBar__wrapper}>
            <ProgressBar activeIndex={activeSlideIndex}></ProgressBar>
          </div>
        </div>
        <div className={navbar__wrapper}>
          <Navbar></Navbar>
        </div>
      </div>
      <div className={form__wrapper}>
        <Form></Form>
      </div>
      <div className={cards__wrapper}>
        <Cards></Cards>
      </div>
      <div className={learnMoreSection__wrapper}>
        <LearnMoreSection></LearnMoreSection>
      </div>
      <div className={vsWlasneBiuroSection__wrapper}>
        <VsWlasneBiuroSection></VsWlasneBiuroSection>
      </div>
      <div className={newsSection__wrapper}>
        <NewsSection></NewsSection>
      </div>
      <div className={gallery__wrapper}>
        <Gallery></Gallery>
      </div>
      <div className={footer__wrapper}>
        <Footer></Footer>
      </div>
    </section>
  );
}
