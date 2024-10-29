import { Link } from "react-router-dom";
import ReservationForm from "../../pages/reserve/reserveForm/Reservation";
import styles from "./footer.module.css";
import logo from "../../assets/map.png";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerReservation}>
          <ReservationForm isFor="footer" />
        </div>
        <div className={styles.info}>
          <h3 className={styles.infoH}>Info</h3>
          <ul className={styles.footerUl}>
            <Link to={"/"} className={styles.linkFooterli}>
              <li>Home</li>
            </Link>
            <Link to={"/about_us"} className={styles.linkFooterli}>
              <li>About us</li>
            </Link>
            <Link to={"/our_menu"} className={styles.linkFooterli}>
              <li>Our Menu</li>
            </Link>
            <Link to={"/reserve"} className={styles.linkFooterli}>
              <li>Reservation</li>
            </Link>
          </ul>
        </div>
        <div className={styles.about}>
          <h3 className={styles.aboutH}>ABOUT US</h3>
          <ul className={styles.footerUl}>
            <Link to={"/"} className={styles.linkFooterli}>
              <li>Gallery</li>
            </Link>
            <Link to={"/about_us"} className={styles.linkFooterli}>
              <li>Reviews</li>
            </Link>
            <Link to={"/reserve"} className={styles.linkFooterli}>
              <li>Find us</li>
            </Link>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3 className={styles.contactH}>Contact us</h3>
          <ul className={styles.footerUl}>
            <Link to={"#"} className={styles.linkFooterli}>
              <li>+1 (999) 999-99-99</li>
            </Link>
            <Link to={"#"} className={styles.linkFooterli}>
              <li>hello@logoipsum.com</li>
            </Link>
            <Link to={"#"} className={styles.linkFooterli}>
              <li>Barcelona</li>
            </Link>
          </ul>
        </div>
        <div className={styles.social}>
          <Link to={"#"} className={styles.linkFootersocial}>
            <FiFacebook />
          </Link>
          <Link to={"#"} className={styles.linkFootersocial}>
            <FiInstagram />
          </Link>
          <Link to={"#"} className={styles.linkFootersocial}>
            <FiTwitter />
          </Link>
        </div>
        <div className={styles.copyright}>
         <p>© 2023 — Copyright</p>
        </div>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </footer>
    </>
  );
}
