import { lazy, Suspense } from "react";
import styles from "./header.module.css";
const HeaderSlider = lazy(() =>
  import("../../../components/Slider/headerSlider/HeaderSlider")
);
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className={styles.headerSection}>
        <div className={styles.headerH}>
          <h2>Experience Culinary Excellence in the Heart of the City</h2>
        </div>
        <div className={styles.headerParagraph}>
          <p>
            Masaya, a unique dining experience in Brcelona, combines traditional
            flavors with modern elements for a memorable dining experience with
            signature dishes and a cozy ambiance.
          </p>
        </div>
        <div className={styles.headerBtns}>
          <Link to={"/reserve"} className={styles.reserveNow}>
            Reserve Now
          </Link>
          <div className={styles.rate}>
            <p>4.8</p>
            <span>Top Rated</span>
            <br />
            <span>on google</span>
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
