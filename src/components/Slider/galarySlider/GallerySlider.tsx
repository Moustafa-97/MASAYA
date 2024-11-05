import { useState } from "react";
import styles from "./gallerySlider.module.css";
import { useKeenSlider } from "keen-slider/react";
import gal1 from "../../../assets/about/gal1.jpg";
import gal2 from "../../../assets/about/gal2.jpg";
import gal3 from "../../../assets/about/gal3.jpg";
import useScreenWidth from "../../../hooks/screen/useScreenWidth";

export default function GallerySlider() {
  const cards = [
    {
      id: 1,
      image: gal1,
    },
    {
      id: 2,

      image: gal2,
    },
    {
      id: 3,

      image: gal3,
    },
    {
      id: 4,

      image: gal1,
    },
    {
      id: 5,

      image: gal2,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();

  const perView = screenWidth <= 775 ? 1 : 3;

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const dotsCount = Math.max(0, cards.length - perView) + 1;
  const handleDotClick = (index: number) => {
    slider.current?.moveToIdx(index);
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <div ref={sliderRef} className={`${styles.keenSlider} keen-slider`}>
          {cards.map((card) => (
            <div key={card.id} className="keen-slider__slide">
              <div className={styles.gallerySliderCard}>
                <img src={card.image} alt={`${card.id}`} />
              </div>
            </div>
          ))}
        </div>
        {dotsCount > 1 && (
          <div className={styles.dots}>
            {[...Array(dotsCount).keys()].map((_, idx) => (
              <div
                key={idx}
                className={`${styles.dot} ${
                  currentSlide === idx ? styles.active : ""
                }`}
                onClick={() => handleDotClick(idx)} // Handle dot click
              ></div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
