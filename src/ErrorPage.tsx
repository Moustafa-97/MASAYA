import { Link, useRouteError } from "react-router-dom";
import styles from "./errorpage.module.css";
import err from "./assets/flafel .png";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "var(--red)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <div className={styles.notFoundContainer}>
        <h2 className={styles.notFound}>Page Not Found</h2>
        <img src={err} alt="error falafel" className={styles.notFoundImage} />
        <p className={styles.notFoundParagraph}>
          Looks like this page has gone missing, but don’t worry—we’re here to
          guide you back. Explore our menu or make a reservation and dive into
          the flavors of Lebanon."
        </p>
        <Link to={"/"} className={styles.btn}>
          <button>Back to Home</button>
        </Link>
      </div>
    </section>
  );
}
