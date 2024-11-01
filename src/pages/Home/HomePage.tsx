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

        <div className="yllaaaSection">
          <AboutUs />
        </div>
        <div style={{marginTop:"7vh"}} className="yllaaaSection">
          <ExploreMenu />
        </div>
        <div className="yllaaaFindUsSection">
          <div className="yllaaaFindSection">
            <FindUs />
          </div>
          <div className="yllaaaFindUsImgSection">
            <img src={image1} alt="YLLLAleb" />
          </div>
        </div>
        <div className="yllaaaSection">
          <Testimonial />
        </div>
      </section>
    </>
  );
}
