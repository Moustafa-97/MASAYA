import { useTranslation } from "react-i18next";
import styles from "./ReservationFHeader.module.css";

export default function ReservationFHeader() {
  const { t } = useTranslation();
  return (
    <>
      {/* 3alam lebnan */}
      <h2 className={styles.h2}>{t("reservation.book")}</h2>
      <p className={styles.p}>{t("reservation.bookP")}</p>
    </>
  );
}
