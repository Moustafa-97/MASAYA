import StarRating from "./starRating/StarRating";
import styles from "./testimonialCard.module.css";

// import useScreenWidth from "../../../hooks/screen/useScreenWidth";
type Props = {
  card: {
    id: number;
    comment: string;
    name: string;
    image: string;
    rating: number;
  };
};
export default function TestimonialCard(props: Props) {
  const { card } = props;
  // const screen = useScreenWidth();
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardBg}>
          <div className={`${styles.subCard}`}>
            <div className={styles.cardRate}>
              <StarRating rating={card.rating} />
            </div>

            <img src={card.image} alt="xx" className={styles.avatar} />
            <div className={styles.subCardText}>
              <p>{card.comment}</p>
              <h3>{card.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
