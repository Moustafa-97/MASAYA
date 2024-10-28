import styles from "./aboutHeader.module.css"

export default function AboutHeader() {
  return (
    <>
      <section className={styles.headerSection}>
        <div className={styles.headerH}>
          <h2>ABOUT MASAYA</h2>
        </div>
        <div className={styles.headerParagraph1}>
          <p>
            where the authentic taste of Lebanon meets the vibrant heart of
            Barcelona.
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
