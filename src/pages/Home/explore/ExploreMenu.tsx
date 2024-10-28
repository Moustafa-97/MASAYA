import { BsArrowDownRightCircle } from "react-icons/bs";
import MenuSlider from "../../../components/Slider/menuSlider/MenuSlider";
import styles from "./explore.module.css";
export default function ExploreMenu() {
  return (
    <>
      <section className={styles.exploreSection}>
        <div className={styles.exploreHeader}>
          <div className={styles.TextexploreHeader}>
            <p className={"yllaaaMiniHeader"}>
              Taste of Lebanese cuisine.
            </p>
            <h2 className={"yllaaaLargeHeader"}>
              Explore Our Flavorful Menu
            </h2>
            <p className={"yllaaaParagraph"}>
              At Masaya, we pride ourselves on providing an exceptional dining
              experience infused with the rich flavors of Lebanese cuisine. But
              don't just take our word for it—here’s what our guests have to
              say:
            </p>
          </div>
          <div className={styles.btnexploreHeader}>
            <BsArrowDownRightCircle />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <MenuSlider />
        </div>
      </section>
    </>
  );
}
