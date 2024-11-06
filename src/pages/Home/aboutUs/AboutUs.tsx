// done

import { BsArrowRightCircle } from "react-icons/bs";
import styles from "./aboutus.module.css";
import aboutimg from "../../../assets/about.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.aboutHeader}>
          <div className={styles.TextaboutHeader}>
            <p className={"yllaaaMiniHeader"}>{t("about.title")}</p>
            <h2 className={"yllaaaLargeHeader"}>{t("about.bigTitle")}</h2>
            <p className={"yllaaaParagraph"}>{t("about.paragraph")}</p>
          </div>
          <div className={styles.btnaboutHeader}>
            <Link to="/about_us">
              <BsArrowRightCircle />
            </Link>
          </div>
        </div>
        <div className={styles.aboutimg}>
          <img src={aboutimg} alt="abbb" />
        </div>
      </section>
    </>
  );
}
