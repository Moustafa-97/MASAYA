// done

import styles from "./signature.module.css";
import signatureimg from "../../../assets/about/falafel.png";
import { useTranslation } from "react-i18next";

export default function Signature() {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.signatureSection}>
        <div className={styles.signatureHeader}>
          <div className={styles.TextsignatureHeader}>
            <p className={"yllaaaMiniHeader"}>{t("signature.title")}</p>
            <h2 className={"yllaaaLargeHeader"}>{t("signature.bigTitle")}</h2>
            <p className={"yllaaaParagraph"}>{t("signature.paragraph")}</p>
          </div>
        </div>
        <div className={styles.signatureimg}>
          <img src={signatureimg} alt="signatureimg" />
        </div>
      </section>
    </>
  );
}
