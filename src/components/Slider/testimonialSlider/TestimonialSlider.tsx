import { useState } from "react";
import styles from "./testimonialS.module.css";
import { useKeenSlider } from "keen-slider/react";
import TestimonialCard from "../../cards/testimonialCard/TestimonialCard";

export default function TestimonialSlider() {
  const cards = [
    {
      id: 1,
      name: "Joe Doe",
      comment: "The best service I’ve ever experienced!",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "Quality and professionalism at its finest.",
    },
    {
      id: 3,
      name: "Sam Brown",
      comment: "Exceeded my expectations in every way!",
    },
    {
      id: 4,
      name: "Lisa Ray",
      comment: "Truly impressed by the attention to detail.",
    },
    {
      id: 5,
      name: "Mike Johnson",
      comment: "A fantastic experience from start to finish.",
    },
    {
      id: 6,
      name: "Emily Clark",
      comment: "Highly recommend to anyone looking for quality!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const perView = 1;
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
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
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}
