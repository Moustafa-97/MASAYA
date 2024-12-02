import { useState } from "react";
import styles from "./headerSlider.module.css";
import { useKeenSlider } from "keen-slider/react";
import menu1 from "../../../assets/home/headerHome.png";
import menu2 from "../../../assets/home/headerHome2.png";
import menu3 from "../../../assets/home/headerHome3.png";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function HeaderSlider() {
  const cards = [
    {
      id: 1,
      name: "Humus",
      description: "Our Lebanese signature",
      image: menu1,
    },
    {
      id: 2,
      name: "Grilled Kebab",
      description: "Our Lebanese signature",
      image: menu2,
    },
    {
      id: 3,
      name: "Tabouleh",
      description: "Our Lebanese signature",
      image: menu3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const perView = 1;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });
  console.log(currentSlide);

  const goToPrevious = () => {
    instanceRef.current?.prev();
  };

  const goToNext = () => {
    instanceRef.current?.next();
  };

  return (
    <div className={styles.carouselContainer}>
      <div ref={sliderRef} className={`${styles.keenSlider} keen-slider`}>
        {cards.map((card) => (
          <div key={card.id} className="keen-slider__slide">
            <div className={styles.headerSliderCard}>
              <div className={styles.image}>
                <img src={card.image} alt={card.name} />
              </div>
              <div className={styles.desc}>
                <p>{card.description}</p>
              </div>
              <div className={styles.name}>
                <p>{card.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.navigation}>
        <button onClick={goToPrevious} className={styles.navButton}>
          <BsArrowLeftCircle />
        </button>
        <button onClick={goToNext} className={styles.navButton}>
          <BsArrowRightCircle />
        </button>
      </div>
    </div>
  );
}
