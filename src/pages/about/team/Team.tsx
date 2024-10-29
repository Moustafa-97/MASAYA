import styles from "./team.module.css";
import ChefSlider from "../../../components/Slider/chefSlider/ChefSlider";

export default function Gallery() {
  return (
    <>
      <section>
        <section className={styles.teamSection}>
          <div className={styles.teamHeader}>
            <p className={"yllaaaMiniHeader"}>OUR TEAM</p>
            <h2 className={"yllaaaLargeHeader"}>Meet Our Top Chefs</h2>
            <p className={"yllaaaParagraph"}>
              At Masaya, our dedicated team is passionate about sharing the
              authentic flavors of Lebanon with you. Each member brings a unique
              skill set, ensuring that your dining experience is nothing short
              of exceptiona
            </p>
          </div>
        </section>
        <div className={styles.teamCard}>
          <ChefSlider />
        </div>
      </section>
    </>
  );
}
