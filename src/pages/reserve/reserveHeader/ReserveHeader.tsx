import { useTranslation } from "react-i18next";
import styles from "./reserveHeader.module.css";


export default function ReserveHeader() {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.headerSection}>
        <div className={styles.headerH}>
          
          <h2>{t("reservation.title")}</h2>
        </div>
        <div className={styles.headerParagraph1}>
          <p>{t("reservation.bigTitle")}</p>
        </div>
        <div className={styles.headerParagraph2}>
          <p>{t("reservation.paragraph")}</p>
        </div>
      </section>
    </>
  );
}
