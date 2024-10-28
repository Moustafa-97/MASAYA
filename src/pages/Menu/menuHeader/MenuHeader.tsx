import styles from "./menuHeader.module.css";

export default function MenuHeader() {
  return (
    <>
      <section className={styles.headerSection}>
        <div className={styles.headerH}>
          <h2>OUR MENU</h2>
        </div>
        <div className={styles.headerParagraph1}>
          <p>
            Discover the rich, flavorful essence of Lebanese cuisine, curated
            with passion and tradition.
          </p>
        </div>
        <div className={styles.headerParagraph2}>
          <p>
            Masaya invites you to savor the true essence of Lebanon with
            signature mezze platters and succulent grilled dishes, all crafted
            to deliver a rich culinary journey."
          </p>
        </div>
      </section>
    </>
  );
}
