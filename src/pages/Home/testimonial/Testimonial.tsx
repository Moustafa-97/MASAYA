// done

import { useTranslation } from "react-i18next";
import TestimonialSlider from "../../../components/Slider/testimonialSlider/TestimonialSlider";
import styles from "./testimonial.module.css";

export default function Testimonial() {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialHeader}>
          <p className={"yllaaaMiniHeader"}>{t("testimonial.title")}</p>
          <h2 className={"yllaaaLargeHeader"}>{t("testimonial.bigTitle")}</h2>
          <p className={"yllaaaParagraph"}>{t("testimonial.paragraph")}</p>
        </div>
        <div className={styles.testimonialSlider}>
          <TestimonialSlider />
        </div>
      </section>
    </>
  );
}
