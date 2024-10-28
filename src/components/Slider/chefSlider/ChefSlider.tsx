import { useState } from "react";
import styles from "./chefSlider.module.css";
import { useKeenSlider } from "keen-slider/react";
import about1 from "../../../assets/about/chef.png";
import useScreenWidth from "../../../hooks/screen/useScreenWidth";

export default function ChefSlider() {
  const cards = [
    {
      id: 1,
      image: about1,
      position: "Chef Marco",
    },
    {
      id: 2,
      image: about1,
      position: "Chef Marco",
    },
    {
      id: 3,
      image: about1,
      position: "Chef Lena",
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
  console.log(currentSlide);

  return (
    <>
      <div className={styles.carouselContainer}>
        <div ref={sliderRef} className={`${styles.keenSlider} keen-slider`}>
          {cards.map((card) => (
            <div key={card.id} className="keen-slider__slide">
              <div className={styles.card}>
                <div className={styles.cardName}>
                  <p>{card.position}</p>
                </div>
                <div className={styles.cardImage}>
                  <img src={card.image} alt={card.position} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
