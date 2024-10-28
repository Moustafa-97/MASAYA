import FindUs from "../Home/findUs/FindUs";
import styles from "./about.module.css";
import image1 from "../../assets/findUs/ruggiero.png";
import Signature from "./signature/Signature";
import Testimonial from "../Home/testimonial/Testimonial";
import Gallery from "./gallery/Gallery";
import Team from "./team/Team";
import AboutHeader from "./aboutHeader/AboutHeader";
export default function About() {
  return (
    <>
      <div>
        <div className={styles.abouthero}>
          <div style={{ paddingTop: "15vh" }}>
            <AboutHeader />
          </div>
        </div>
        <div className={styles.aboutSection}>
          <Signature />
        </div>
        <div className={styles.findUsSection}>
          <div className={styles.aboutSection}>
            <FindUs />
          </div>
          <div className={styles.findUsImage}>
            <img src={image1} alt="YLLLAleb" />
          </div>
        </div>
        <div className={styles.aboutSection}>
          <Team />
        </div>
        <div className={styles.aboutSection}>
          <Gallery />
        </div>
        <div className={styles.aboutSection}>
          <Testimonial />
        </div>
      </div>
    </>
  );
}
