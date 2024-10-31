import { useEffect, useRef, useState } from "react";
import styles from "./responsiveNav.module.css";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
type Props = {
  navbarElements: {
    name: string;
    path: string;
  }[];
};
export default function ResponsiveNav(props: Props) {
  const { navbarElements } = props;
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutsideMenu = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div ref={menuRef}>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          style={isOpen ? { color: "var(--red)" } : { color: "var(--beij)" }}
        >
          <IoMdMenu />
        </button>
        <div className={`${styles.menuContainer} ${isOpen ? styles.open : ""}`}>
          <div className={`${styles.menu}`}>
            <ul className={styles.menuUl}>
              <li>
                {navbarElements.map((element, index) => (
                  <Link key={index} to={`${element.path}`} className={styles.menuLink} onClick={() => setIsOpen(false)}>
                    <li className={styles.menuLi}>{element.name}</li>
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
