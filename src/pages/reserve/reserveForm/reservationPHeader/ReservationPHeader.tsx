import { useTranslation } from "react-i18next";
import styles from "./ReservationPHeader.module.css";
import tree from "../../../../assets/Teal.png";

export default function ReservationPHeader() {
  const { t } = useTranslation();
  return (
    <>
      <img className={styles.img} src={tree} alt="tree" />
      <h2 className={styles.h2}>{t("reservation.book")}</h2>
      <p className={styles.p}>{t("reservation.bookP")}</p>
    </>
  );
}
