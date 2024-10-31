import FindUs from "../Home/findUs/FindUs";
import styles from "./about.module.css";
import image1 from "../../assets/findUs/ruggiero.png";
import Signature from "./signature/Signature";
import Testimonial from "../Home/testimonial/Testimonial";
import Gallery from "./gallery/Gallery";
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
        <div  className="yllaaaSection">
          <Signature />
        </div>
        <div style={{ marginTop: "7vh" }} className="yllaaaFindUsSection">
          <div className="yllaaaFindSection">
            <FindUs />
          </div>
          <div className="yllaaaFindUsImgSection">
            <img src={image1} alt="YLLLAleb" />
          </div>
        </div>
        {/* <div className="yllaaaSection">
          <Team />
        </div> */}
        <div className="yllaaaSection">
          <Gallery />
        </div>
        <div className="yllaaaSection">
          <Testimonial />
        </div>
      </div>
    </>
  );
}
