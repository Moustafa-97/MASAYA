// done

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from "react";
import MenuFilter from "../../components/filter/MenuFilter";
import MenuGrid from "../../components/menuGrid/MenuGrid";
import menuImg from "../../assets/menu/menu1.jpg";
import styles from "./menuPage.module.css";
import Testimonial from "../Home/testimonial/Testimonial";
import MenuHeader from "./menuHeader/MenuHeader";
import { useTranslation } from "react-i18next";
const MenuPage: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState(t("menuFilter.all"));
  const cards = [
    {
      id: 1,
      name: "Hummus",
      type: t("menuFilter.appetizer"),
      image: menuImg,
      description:
        "Creamy blend of chickpeas, tahini, garlic, and lemon, served with olive oil and pita.",
      price: 5.0,
    },
    {
      id: 2,
      name: "Falafel",
      type: t("menuFilter.appetizer"),
      image: menuImg,
      description:
        "Crispy fried chickpea balls seasoned with herbs and spices, served with tahini sauce.",
      price: 4.5,
    },
    {
      id: 3,
      name: "Tabbouleh",
      type: t("menuFilter.appetizer"),
      image: menuImg,
      description:
        "Refreshing salad with parsley, bulgur, tomatoes, and mint, dressed with lemon juice and olive oil.",
      price: 6.0,
    },
    {
      id: 4,
      name: "Fattoush",
      type: t("menuFilter.appetizer"),
      image: menuImg,
      description:
        "Crispy salad with mixed greens, radishes, tomatoes, and fried pita bread, topped with sumac.",
      price: 6.5,
    },
    {
      id: 5,
      name: "Shish Tawook",
      type: t("menuFilter.chicken"),
      image: menuImg,
      description:
        "Grilled chicken skewers marinated in garlic, lemon, and spices, served with garlic sauce.",
      price: 12.0,
    },
    {
      id: 6,
      name: "Kibbeh Nayyeh",
      type: t("menuFilter.meat"),
      image: menuImg,
      description:
        "Traditional Lebanese raw minced lamb or beef mixed with bulgur and spices, served with pita.",
      price: 14.0,
    },
    {
      id: 7,
      name: "Lamb Kofta",
      type: t("menuFilter.meat"),
      image: menuImg,
      description:
        "Grilled lamb skewers mixed with parsley, onions, and spices, served with tahini sauce.",
      price: 13.0,
    },
    {
      id: 8,
      name: "Kafta",
      type: t("menuFilter.meat"),
      image: menuImg,
      description:
        "Minced lamb or beef mixed with parsley and onions, shaped into skewers and grilled.",
      price: 13.5,
    },
    {
      id: 9,
      name: "Manakish Zaatar",
      type: t("menuFilter.bakery"),
      image: menuImg,
      description:
        "Lebanese flatbread topped with a mixture of za'atar, olive oil, and sesame seeds.",
      price: 4.0,
    },
    {
      id: 10,
      name: "Batata Harra",
      type: t("menuFilter.appetizer"),
      image: menuImg,
      description:
        "Spicy roasted potatoes tossed with garlic, coriander, and chili, served warm.",
      price: 5.5,
    },
    {
      id: 11,
      name: "Warak Enab",
      type: t("menuFilter.appetizer"),
      image: menuImg,
      description:
        "Grape leaves stuffed with rice, tomatoes, and herbs, served cold.",
      price: 7.0,
    },
    {
      id: 12,
      name: "Foul Moudammas",
      type: t("menuFilter.appetizer"),
      image: menuImg,
      description:
        "Stewed fava beans with garlic, lemon, and olive oil, garnished with parsley and tomatoes.",
      price: 6.0,
    },
    {
      id: 13,
      name: "Mixed Grill",
      type: t("menuFilter.meat"),
      image: menuImg,
      description:
        "Selection of grilled meats, including lamb, chicken, and beef, served with rice and grilled vegetables.",
      price: 18.0,
    },
    {
      id: 14,
      name: "Chicken Shawarma",
      type: t("menuFilter.chicken"),
      image: menuImg,
      description:
        "Marinated chicken roasted on a vertical spit, served with garlic sauce and pickles.",
      price: 10.0,
    },
    {
      id: 15,
      name: "Baklava",
      type: t("menuFilter.bakery"),
      image: menuImg,
      description:
        "Sweet pastry made of layers of filo filled with nuts and honey syrup.",
      price: 5.0,
    },
    {
      id: 16,
      name: "Mouhallabieh",
      type: t("menuFilter.bakery"),
      image: menuImg,
      description:
        "Lebanese milk pudding flavored with rose water and garnished with pistachios.",
      price: 4.5,
    },
    {
      id: 17,
      name: "Sambousek",
      type: t("menuFilter.appetizer"),
      image: menuImg,
      description:
        "Fried pastry filled with spiced meat or cheese, served with yogurt dip.",
      price: 4.0,
    },
    {
      id: 18,
      name: "Arayes",
      type: t("menuFilter.meat"),
      image: menuImg,
      description:
        "Grilled pita stuffed with spiced minced meat, served with tahini dip.",
      price: 8.0,
    },
    {
      id: 19,
      name: "Lebanese Coffee",
      type: t("menuFilter.appetizer"),
      image: menuImg,
      description:
        "Rich and aromatic coffee brewed with cardamom, served in a traditional cup.",
      price: 3.0,
    },
    {
      id: 20,
      name: "Jallab",
      type: t("menuFilter.appetizer"),
      image: menuImg,
      description:
        "Traditional drink made with date molasses, rose water, and pine nuts.",
      price: 3.5,
    },
  ];

  const filteredCards = useMemo(() => {
    return filter === t("menuFilter.all")
      ? cards
      : cards.filter((item) => item.type === filter);
  }, [filter, cards]);

  return (
    <>
      <section>
        <div className={styles.menuhero}>
          <div style={{ paddingTop: "10rem" }}>
            {/* done */}
            <MenuHeader />
          </div>
        </div>
        <div data-aos="fade-up" className={styles.menuSection}>
          {/* done */}
          <MenuFilter onFilterChange={setFilter} currentFilter={filter} />
          <MenuGrid cards={filteredCards} currentFilter={filter} />
        </div>

        <div data-aos="fade-up" className={styles.menuSection}>
          {/* done */}
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default MenuPage;
