import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./navFooter.module.css";
import Footer from "../../components/footer/Footer";

export default function NavFooter() {
  // detect screen width using callback and useMemo

  return (
    <>
      <section className={styles.webpage}>
        <header className={styles.navbarElement}>
          <Navbar />
        </header>
        <body className={styles.bodyElement}>
          <Outlet />
        </body>
        <footer>
          <Footer />
        </footer>
      </section>
    </>
  );
}
