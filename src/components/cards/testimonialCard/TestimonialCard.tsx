import styles from "./testimonialCard.module.css";
import testi from "../../../assets/testimg.png";
import useScreenWidth from "../../../hooks/screen/useScreenWidth";
type Props = {
  card: {
    id: number;
    comment: string;
    name: string;
  };
};
export default function TestimonialCard(props: Props) {
  const { card } = props;
  const screen = useScreenWidth();
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardBg}>
          <div className={`${styles.subCard}`}>
          <img src={testi} alt="xx" className={styles.avatar} />
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
