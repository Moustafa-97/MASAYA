import Reservation from "./reserveForm/Reservation";
import styles from "./reserve.module.css";
import ReserveHeader from "./reserveHeader/ReserveHeader";

export default function Reserve() {
  return (
    <>
      <div>
        <div className={styles.reservehero}>
          <div style={{ paddingTop: "10rem" }}>
            <ReserveHeader />
          </div>
        </div>
        <div className={styles.reserveSection}>
          <Reservation isFor={"page"} />
        </div>
      </div>
    </>
  );
}
