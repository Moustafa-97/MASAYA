import { useEffect } from "react";
import styles from "./largeNav.module.css";
import lebLogo from "../../../assets/lebLogo.svg";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../../redux/features/location/locationSlice";
import { useTranslation } from "react-i18next";
import spain from "../spain.svg";
import england from "../england.svg";

type Props = {
  navbarElements: {
    name: string;
    path: string;
  }[];
};

export default function LargeNav(props: Props) {
  const { navbarElements } = props;
  const dispatch = useDispatch();
  const location = useLocation();
  const locationSelector = useSelector(
    (state: { location: { location: string } }) => state.location.location
  );

  useEffect(() => {
    dispatch(setLocation(location.pathname));
  }, [location.pathname, dispatch]);

  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const currentLanguage = i18n.language;

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarUl}>
        <Link
          onClick={() => dispatch(setLocation("/"))}
          to="/"
          className={styles.navbarLinkLogo}
        >
          <li className={styles.navbarLi}>
            <img src={lebLogo} alt="logo" />
          </li>
        </Link>
        {navbarElements.map((element, key) => (
          <Link
            key={key}
            to={element.path}
            className={`${styles.navbarLink} ${
              locationSelector === element.path ? styles.active : ""
            }`}
            onClick={() => dispatch(setLocation(element.path))}
          >
            <li className={styles.navbarLi}>{element.name}</li>
          </Link>
        ))}
      </ul>
      {/* switch language btn */}
      <div
        onClick={() => changeLanguage(currentLanguage === "en" ? "es" : "en")}
        className={styles.langBtn}
      >
        <p>
          {" "}
          {currentLanguage === "en" ? (
            <img src={spain} alt="spanish" />
          ) : (
            <img src={england} alt="english" />
          )}
        </p>
      </div>
    </nav>
  );
}
