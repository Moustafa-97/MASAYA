// done

import styles from "./findUs.module.css";
import lebanon from "../../../assets/findUs/Lebanon img.png";
import { useTranslation } from "react-i18next";


export default function FindUs() {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.findUsSection}>
        <div className={styles.findUsHeader}>
          <div className={styles.TextexplorefindUs}>
            <p className={"yllaaaMiniHeader"}>{t("findUs.title")}</p>
            <h2 className={"yllaaaLargeHeader"}>
              {t("findUs.bigTitle")}
            </h2>
            <p className={"yllaaaParagraph"}>
              {t("findUs.paragraph")}
            </p>
          </div>
          <div className={styles.lebanonWord}>
            <img src={lebanon} alt="YLLLAleb" />
          </div>
        </div>
        
      </section>
    </>
  );
}
