import { BsArrowRightCircle } from "react-icons/bs";
import styles from "./aboutus.module.css";
import aboutimg from "../../../assets/about.jpg";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.aboutHeader}>
          <div className={styles.TextaboutHeader}>
            <p className={"yllaaaMiniHeader"}>About us</p>
            <h2 className={"yllaaaLargeHeader"}>
              Experience Lebanese Tradition in Barcelona
            </h2>
            <p className={"yllaaaParagraph"}>
              Masaya is more than just a restaurant; it is the meeting place of
              Lebanese history and Barcelona's dynamic spirit. We bring the real
              flavors of Lebanon to your plate, providing a gourmet experience
              that combines tradition and innovation. Inspired by traditional
              recipes and made with fresh, local ingredients, our menu captures
              the spirit of Lebanese cuisine in every bite.
            </p>
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
