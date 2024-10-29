import styles from "./ReservationPHeader.module.css";

export default function ReservationPHeader() {
  return (
    <>
      {/* 3alam lebnan */}
      <h2 className={styles.h2}>BOOK YOUR TABLE AT MASAYA</h2>
      <p className={styles.p}>
        Enjoy authentic Lebanese cuisine at your convenience
      </p>
    </>
  );
}
