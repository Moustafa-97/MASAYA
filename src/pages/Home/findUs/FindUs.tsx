import styles from "./findUs.module.css";
import lebanon from "../../../assets/findUs/Lebanon img.png";


export default function FindUs() {
  return (
    <>
      <section className={styles.findUsSection}>
        <div className={styles.findUsHeader}>
          <div className={styles.TextexplorefindUs}>
            <p className={"yllaaaMiniHeader"}>Find us</p>
            <h2 className={"yllaaaLargeHeader"}>
              Authentic Lebanese Flavors,Steps from Casa Batlló
            </h2>
            <p className={"yllaaaParagraph"}>
              Located just a 3-minute walk from the iconic Casa Batlló in
              Barcelona, Masaya brings the flavors of Lebanon to life in the
              heart of the city. Rooted in authentic Lebanese culinary
              traditions,
            </p>
          </div>
          <div className={styles.lebanonWord}>
            <img src={lebanon} alt="YLLLAleb" />
          </div>
        </div>
        
      </section>
    </>
  );
}
