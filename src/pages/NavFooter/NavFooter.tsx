import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./navFooter.module.css";
import Footer from "../../components/footer/Footer";
import { FaWhatsapp } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";

export default function NavFooter() {
  const whatsappNumber = "+201146598154";
  const message = "test my app";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
  };
  return (
    <>
      <div
        onClick={handleWhatsAppClick}
        className={styles.whatsappButton}
        style={{
          cursor: "pointer",
          padding: "1rem",

          zIndex: "1000",
        }}
      >
        <div className={styles.whatsappIcon}>
          <FaWhatsapp />
        </div>
        <div className={styles.whatsappText}>Book via whatsapp</div>
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
