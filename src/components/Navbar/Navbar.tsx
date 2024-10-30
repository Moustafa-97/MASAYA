// done

import { useTranslation } from "react-i18next";
import useScreenWidth from "../../hooks/screen/useScreenWidth";
import LargeNav from "./largeNav/LargeNav";
import ResponsiveNav from "./responsiveNav/ResponsiveNav";

export default function Navbar() {
  const screenWidth = useScreenWidth();
  const { t } = useTranslation();
  const navbarElements = [
    {
      name: `${t("navbar.home")}`,
      path: "/",
    },
    {
      name: `${t("navbar.about")}`,
      path: "/about_us",
    },
    {
      name: `${t("navbar.ourMenu")}`,
      path: "/our_menu",
    },
    {
      name: `${t("navbar.reserve")}`,
      path: "/reserve",
    },
  ];

  return (
    <>
      {screenWidth >= 775 ? (
        <LargeNav navbarElements={navbarElements} />
      ) : (
        <ResponsiveNav navbarElements={navbarElements} />
      )}
    </>
  );
}
