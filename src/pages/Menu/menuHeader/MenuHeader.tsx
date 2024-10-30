// done

import { useTranslation } from "react-i18next";
import styles from "./menuHeader.module.css";

export default function MenuHeader() {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.headerSection}>
        <div className={styles.headerH}>
          <h2>{t("menuHeader.title")}</h2>
        </div>
        <div className={styles.headerParagraph1}>
          <p>{t("menuHeader.bigTitle")}</p>
        </div>
        <div className={styles.headerParagraph2}>
          <p>{t("menuHeader.paragraph")}</p>
        </div>
      </section>
    </>
  );
}
