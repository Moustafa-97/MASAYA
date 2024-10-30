// done

import { BsArrowDownRightCircle } from "react-icons/bs";
import MenuSlider from "../../../components/Slider/menuSlider/MenuSlider";
import styles from "./explore.module.css";
import { Link } from "react-router-dom";
import useScreenWidth from "../../../hooks/screen/useScreenWidth";
import { useTranslation } from "react-i18next";
export default function ExploreMenu() {
  const { t } = useTranslation();
  const screen = useScreenWidth();
  return (
    <>
      <section className={styles.exploreSection}>
        <div className={styles.exploreHeader}>
          <div className={styles.TextexploreHeader}>
            <p className={"yllaaaMiniHeader"}>{t("explore.title")}</p>
            <h2 className={"yllaaaLargeHeader"}>{t("explore.bigTitle")}</h2>
            <p className={"yllaaaParagraph"}>{t("explore.paragraph")}</p>
          </div>
          {screen >= 768 && (
            <div className={styles.btnexploreHeader}>
              <Link to={"/our_menu"}>
                <BsArrowDownRightCircle />
              </Link>
            </div>
          )}
        </div>
        <div
          className={styles.menuSlider}
          style={{ width: "100%", minHeight: "fit-content" }}
        >
          <MenuSlider />
        </div>
      </section>
    </>
  );
}
