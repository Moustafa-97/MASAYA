import { useState } from "react";
import styles from "./menuCard.module.css";
import { BsArrowUpLeftCircle } from "react-icons/bs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Props = any;
export default function MenuCard(props: Props) {
  const { card } = props;
  const [openCardId, setOpenCardId] = useState<number | null>();

  const toggleDetails = (id: number) => {
    setOpenCardId(openCardId === id ? null : id);
  };
  return (
    <>
      <div className={`${styles.card}`}>
        <div className={styles.cardImage}>
          <img src={card.image} alt={card.name} />
        </div>
        <div className={`${styles.subCard}`}>
          <div className={styles.subCardText}>
            <h3>{card.name}</h3>
            <p>$ {card.price}</p>
          </div>
        </div>
        <div className={styles.cardBtn} onClick={() => toggleDetails(card.id)}>
          <BsArrowUpLeftCircle />
        </div>

        <div
          className={`${styles.detailCard} ${
            openCardId === card.id ? styles.detailCardOpen : ""
          }`}
        >
          <h3>{card.name}</h3>
          <p>{card.description}</p>
        </div>
      </div>
    </>
  );
}
