import styles from "./testimonialCard.module.css";
import bgImg from "../../../assets/review_bg.png";
type Props = {
  card: {
    comment: string;
    name: string;
    bgimg: string;
  };
};
export default function TestimonialCard(props: Props) {
  const { card } = props;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardBg}>
          <img src={bgImg} alt={card.bgimg} className={styles.cardBgImg} />
          <div className={`${styles.subCard}`}>
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
