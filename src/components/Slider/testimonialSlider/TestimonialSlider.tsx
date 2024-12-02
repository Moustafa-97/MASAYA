import { useState } from "react";
import styles from "./testimonialS.module.css";
import { useKeenSlider } from "keen-slider/react";
import TestimonialCard from "../../cards/testimonialCard/TestimonialCard";
import testi1 from "../../../assets/testimg.png";
import testi2 from "../../../assets/testimg2.png";

export default function TestimonialSlider() {
  const cards = [
    {
      id: 1,
      name: "Patricia O'Keefe",
      image: testi1,
      rating: 5,
      comment:
        "The service and the food was excellent. Very nice lebanese couple managing the place. I am lebanese myself and it was like having a taste from home. I 100% recommend!!",
    },

    {
      id: 2,
      name: "Linda williams",
      image: testi2,
      rating: 5,
      comment:
        "The food at this establishment is exceptional, with the owners showing great care for their customers and making it a must-try if in Barcelona.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const perView = 1;
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
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
    <div className={styles.carouselContainer}>
      <div ref={sliderRef} className={`${styles.keenSlider} keen-slider`}>
        {cards.map((card) => (
          <div key={card.id} className="keen-slider__slide">
            <TestimonialCard card={card} />
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
  );
}
