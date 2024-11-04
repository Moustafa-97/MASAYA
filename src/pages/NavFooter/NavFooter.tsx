import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./navFooter.module.css";
import Footer from "../../components/footer/Footer";
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
        style={{
          cursor: "pointer",
          width: "fit-content",
          height: "fit-content",
          padding:"1rem",
          minWidth: "3rem",
          minHeight: "3rem",
          borderRadius: "5rem",
          position: "fixed",
          bottom: "5%",
          right: "5%",
          backgroundColor: "var(--beij)",
          zIndex: "1000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            width: "100%",
            height: "100%",
            margin: "auto 0",
            display: "block",
            color: "var(--red)",
            fontSize: "clamp(1rem, 4vw, 2rem)",
            fontWeight: "bold",
            textAlign: "center",
            alignSelf:"center",
            justifySelf:"center",

          }}
        >BOOK VIA WHATSAPP</p>
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
