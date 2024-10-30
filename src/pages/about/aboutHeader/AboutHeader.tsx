// done

import { useTranslation } from "react-i18next";
import styles from "./aboutHeader.module.css";

export default function AboutHeader() {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.headerSection}>
        <div className={styles.headerH}>
          <h2>{t("aboutHeader.title")}</h2>
        </div>
        <div className={styles.headerParagraph1}>
          <p>{t("aboutHeader.bigTitle")}</p>
        </div>
        <div className={styles.headerParagraph2}>
          <p>{t("aboutHeader.paragraph")}</p>
        </div>
      </section>
    </>
  );
}
