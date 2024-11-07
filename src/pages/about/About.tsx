import FindUs from "../Home/findUs/FindUs";
import styles from "./about.module.css";
import image1 from "../../assets/findUs/ruggiero.jpg";
import Signature from "./signature/Signature";
import Testimonial from "../Home/testimonial/Testimonial";
import Gallery from "./gallery/Gallery";
import AboutHeader from "./aboutHeader/AboutHeader";
export default function About() {
  return (
    <>
      <div>
        <div className={styles.abouthero}>
          <div style={{ paddingTop: "10rem" }}>
            <AboutHeader />
          </div>
        </div>
        <div
          data-aos="fade-up"
          style={{ paddingTop: "4rem" }}
          className="yllaaaSection"
        >
          <Signature />
        </div>
        <div data-aos="fade-up" className="yllaaaFindUsSectionAbout">
          <div className="yllaaaFindSection">
            <FindUs />
          </div>
          <div className="yllaaaFindUsImgSection">
            <img src={image1} alt="YLLLAleb" />
          </div>
        </div>

        <div data-aos="fade-up" className="yllaaaSection yllaaaP6R">
          <Gallery />
        </div>
        <div data-aos="fade-up" className="yllaaaSection">
          <Testimonial />
        </div>
      </div>
    </>
  );
}
