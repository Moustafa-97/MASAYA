import styles from "./signature.module.css";
import signatureimg from "../../../assets/about/falafel.png";

export default function Signature() {
  return (
    <>
      <section className={styles.signatureSection}>
        <div className={styles.signatureHeader}>
          <div className={styles.TextsignatureHeader}>
            <p className={"yllaaaMiniHeader"}>OUR SIGNATURE</p>
            <h2 className={"yllaaaLargeHeader"}>Falafel</h2>
            <p className={"yllaaaParagraph"}>
              At Masaya, our falafel is a true celebration of Lebanese
              tradition, offering a crispy, golden bite packed with vibrant
              flavors. Made from a blend of chickpeas, fresh herbs, and a secret
              mix of spices, our falafel is always freshly prepared and served
              with authentic sides like tahini, pickles, and pita bread. Whether
              you're a seasoned falafel lover or trying it for the first time,
              each bite brings you closer to the essence of Lebanon, right here
              in Barcelona. Perfect as a light snack or part of a hearty mezze,
              Masaya’s falafel is the ultimate taste of the Middle East!
            </p>
          </div>
        </div>
        <div className={styles.signatureimg}>
          <img src={signatureimg} alt="abbb" />
        </div>
      </section>
    </>
  );
}
