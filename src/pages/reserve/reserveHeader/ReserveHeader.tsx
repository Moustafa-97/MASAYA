import styles from "./reserveHeader.module.css";

export default function ReserveHeader() {
  return (
    <>
      <section className={styles.headerSection}>
        <div className={styles.headerH}>
          <h2>RESERVATION</h2>
        </div>
        <div className={styles.headerParagraph1}>
          <p>
            Reserve Your Table Today And Indulge In The Flavors Of Lebanon,
            Right In The Heart Of Barcelona
          </p>
        </div>
        <div className={styles.headerParagraph2}>
          <p>
            Masaya offers a culinary experience showcasing Lebanese traditions
            and flavors, featuring signature mezze platters and grilled dishes,
            showcasing the warmth of Lebanese hospitality in an elegant, modern
            setting.
          </p>
        </div>
      </section>
    </>
  );
}
