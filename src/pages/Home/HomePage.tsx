import ExploreMenu from "./explore/ExploreMenu";
import FindUs from "./findUs/FindUs";
import styles from "./homePage.module.css";
import image1 from "../../assets/findUs/ruggiero.png";
import AboutUs from "./aboutUs/AboutUs";
import Header from "./header/Header";
import Testimonial from "./testimonial/Testimonial";
export default function HomePage() {
  return (
    <>
      <section>
        <div className={styles.homehero}>
          <div style={{ paddingTop: "15vh" }} className={styles.subHomeHero}>
            <Header />
          </div>
        </div>
        <div className={styles.homeSection}>
          <AboutUs />
        </div>
        <div className={styles.homeSection}>
          <ExploreMenu />
        </div>
        <div className={styles.findUsSection}>
          <div className={styles.findhomeSection}>
            <FindUs />
          </div>
          <div className={styles.findUsImage}>
            <img src={image1} alt="YLLLAleb" />
          </div>
        </div>
        <div className={styles.homeSection}>
          <Testimonial />
        </div>
      </section>
    </>
  );
}
