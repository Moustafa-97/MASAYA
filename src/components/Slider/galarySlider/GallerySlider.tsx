import { useState } from "react";
import styles from "./gallerySlider.module.css";
import { useKeenSlider } from "keen-slider/react";
import about1 from "../../../assets/about/8423bf06991f6c9fd0c91dec1484e4c5.jpg";
import useScreenWidth from "../../../hooks/screen/useScreenWidth";

export default function GallerySlider() {
  const cards = [
    {
      id: 1,
      image: about1,
    },
    {
      id: 2,

      image: about1,
    },
    {
      id: 3,

      image: about1,
    },
    {
      id: 4,

      image: about1,
    },
    {
      id: 5,

      image: about1,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const screenWidth = useScreenWidth();

  const perView = screenWidth <= 775 ? 1 : 3;

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const dotsCount = Math.max(0, cards.length - perView) + 1;

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
              ></div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
