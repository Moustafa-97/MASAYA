// done

import { Link } from "react-router-dom";
import ReservationForm from "../../pages/reserve/reserveForm/Reservation";
import styles from "./footer.module.css";
import logo from "../../assets/map.png";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { LuFacebook } from "react-icons/lu";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerReservation}>
          <ReservationForm isFor="footer" />
        </div>
        <div className={styles.info}>
          <h3 className={styles.infoH}>{t("footer.info")}</h3>
          <ul className={styles.footerUl}>
            <Link to={"/"} className={styles.linkFooterli}>
              <li>{t("navbar.home")}</li>
            </Link>
            <Link to={"/about_us"} className={styles.linkFooterli}>
              <li>{t("navbar.about")}</li>
            </Link>
            <Link to={"/our_menu"} className={styles.linkFooterli}>
              <li>{t("navbar.ourMenu")}</li>
            </Link>
            <Link to={"/reserve"} className={styles.linkFooterli}>
              <li>{t("navbar.reserve")}</li>
            </Link>
          </ul>
        </div>
        <div className={styles.about}>
          <h3 className={styles.aboutH}>{t("about.title")}</h3>
          <ul className={styles.footerUl}>
            <Link to={"/"} className={styles.linkFooterli}>
              <li>{t("footer.gallery")}</li>
            </Link>
            <Link to={"/about_us"} className={styles.linkFooterli}>
              <li>{t("footer.reviews")}</li>
            </Link>
            <Link to={"/reserve"} className={styles.linkFooterli}>
              <li>{t("footer.findUs")}</li>
            </Link>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3 className={styles.contactH}>{t("footer.contactUs")}</h3>
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
            <LuFacebook />
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
