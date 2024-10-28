import useScreenWidth from "../../hooks/screen/useScreenWidth";
import LargeNav from "./largeNav/LargeNav";
import ResponsiveNav from "./responsiveNav/ResponsiveNav";

export default function Navbar() {
  const screenWidth = useScreenWidth();

  const navbarElements = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about_us",
    },
    {
      name: "Our Menu",
      path: "/our_menu",
    },
    {
      name: "Reserve",
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
