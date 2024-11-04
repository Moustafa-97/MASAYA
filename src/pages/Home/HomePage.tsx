import ExploreMenu from "./explore/ExploreMenu";
import FindUs from "./findUs/FindUs";
import styles from "./homePage.module.css";
import image1 from "../../assets/findUs/ruggiero.png";
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
          <div style={{ paddingTop: "15rem" }} className={styles.subHomeHero}>
            <Header />
          </div>
        </div>

        <div style={{height:"50rem", paddingTop: "7vh"}}  className="yllaaaSection">
          <AboutUs />
        </div>
        <div
          // style={{ marginTop: screen >= 768 ? "117px" : "1500px" }}
          className="yllaaaSection"
        >
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
