import GallerySlider from "../../../components/Slider/galarySlider/GallerySlider";
import styles from "./gallery.module.css";

export default function Gallery() {
  return (
    <>
      <section className={styles.gallerySection}>
        <div className={styles.galleryHeader}>
          <p className={"yllaaaMiniHeader"}>GALLERY</p>
          <h2 className={"yllaaaLargeHeader"}>
            the Essence of Lebanese Cuisine
          </h2>
          <p className={"yllaaaParagraph"}>
            Step into a world where vibrant flavors meet exquisite artistry. Our
            gallery showcases the heart and soul of Masaya Lebanese Restaurant,
            featuring beautifully crafted dishes.
          </p>
        </div>
        <div className={styles.gallerySlider}>
          <GallerySlider />
        </div>
      </section>
    </>
  );
}
