// done

import { useTranslation } from "react-i18next";
import GallerySlider from "../../../components/Slider/galarySlider/GallerySlider";
import styles from "./gallery.module.css";

export default function Gallery() {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.gallerySection}>
        <div className={styles.galleryHeader}>
          <p className={"yllaaaMiniHeader"}>{t("gallery.title")}</p>
          <h2 className={"yllaaaLargeHeader"}>{t("gallery.bigTitle")}</h2>
          <p className={"yllaaaParagraph"}>{t("gallery.paragraph")}</p>
        </div>
        <div className={styles.gallerySlider}>
          <GallerySlider />
        </div>
      </section>
    </>
  );
}
