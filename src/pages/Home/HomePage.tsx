import ExploreMenu from "./explore/ExploreMenu";
import FindUs from "./findUs/FindUs";
import styles from "./homePage.module.css";
import image1 from "../../assets/findUs/ruggiero.jpg";
import AboutUs from "./aboutUs/AboutUs";
import Header from "./header/Header";
import Testimonial from "./testimonial/Testimonial";
// import useScreenWidth from "../../hooks/screen/useScreenWidth";
export default function HomePage() {
  // const screen = useScreenWidth();

  return (
    <>
      <section className={styles.home}>
        <div className={styles.homehero}>
          <div style={{ paddingTop: "10rem" }} className={styles.subHomeHero}>
            <Header />
          </div>
        </div>

        <div data-aos="fade-up" style={{ paddingTop: "4rem" }} className="yllaaaSection">
          <AboutUs />
        </div>
        <div data-aos="fade-up" className="yllaaaSection yllaaaP6">
          <ExploreMenu />
        </div>
        <div data-aos="fade-up" className="yllaaaFindUsSection">
          <div className="yllaaaFindSection">
            <FindUs />
          </div>
          <div className="yllaaaFindUsImgSection">
            <img src={image1} alt="YLLLAleb" />
          </div>
        </div>
        <div data-aos="fade-up" className="yllaaaSection">
          <Testimonial />
        </div>
      </section>
    </>
  );
}
