import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./navFooter.module.css";
import Footer from "../../components/footer/Footer";
import { FaWhatsapp } from "react-icons/fa";

export default function NavFooter() {
  // detect screen width using callback and useMemo

  return (
    <>
      <div
        style={{
          width: "5.5vw",
          height: "5.5vw",
          borderRadius: "50%",
          position: "fixed",
          bottom: "5%",
          right: "5%",
          backgroundColor: "var(--beij)",
          zIndex: "1000",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
      >
        <FaWhatsapp
          style={{
            width: "70%",
            height: "70%",
            margin: "auto",
            display: "block",
            color: "var(--red)",
          }}
        />
      </div>
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
