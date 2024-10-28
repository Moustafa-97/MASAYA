import TestimonialSlider from "../../../components/Slider/testimonialSlider/TestimonialSlider";
import styles from "./testimonial.module.css";

export default function Testimonial() {
  return (
    <>
      <section className={styles.testimonialSection}>
        <div className={styles.testimonialHeader}>
          <p className={"yllaaaMiniHeader"}>what they say</p>
          <h2 className={"yllaaaLargeHeader"}>Our Testimonial</h2>
          <p className={"yllaaaParagraph"}>
            At Masaya, we pride ourselves on providing an exceptional dining
            experience infused with the rich flavors of Lebanese cuisine. But
            don't just take our word for it—here’s what our guests have to say:
          </p>
        </div>
        <div className={styles.testimonialSlider}>
          <TestimonialSlider />
        </div>
      </section>
    </>
  );
}
