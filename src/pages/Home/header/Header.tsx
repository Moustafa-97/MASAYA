// done

import { lazy, Suspense } from "react";
import styles from "./header.module.css";
const HeaderSlider = lazy(() =>
  import("../../../components/Slider/headerSlider/HeaderSlider")
);
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.headerSection}>
        <div className={styles.headerH}>
          <h2>{t("homeHeader.title")}</h2>
        </div>
        <div className={styles.headerParagraph}>
          <p>{t("homeHeader.bigTitle")}</p>
        </div>
        <div className={styles.headerBtns}>
          <Link to={"/reserve"} className={styles.reserveNow}>
            {t("homeHeader.reserveNow")}
          </Link>
          <div className={styles.rate}>
            <p>4.8</p>
            <span>{t("homeHeader.topRated")}</span>
            <br />
            <span>{t("homeHeader.onGoogle")}</span>
          </div>
        </div>
        <div className={styles.headerSlider}>
          <Suspense fallback={<div>Loading...</div>}>
            <HeaderSlider />
          </Suspense>
        </div>
      </section>
    </>
  );
}
