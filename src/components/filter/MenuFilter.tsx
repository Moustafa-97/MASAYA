// done

import React from "react";
import styles from "./menufilter.module.css";
import { useTranslation } from "react-i18next";

type MenuFilterProps = {
  onFilterChange: (type: string) => void;
  currentFilter: string;
};

const MenuFilter: React.FC<MenuFilterProps> = ({
  onFilterChange,
  currentFilter,
}) => {
  const { t } = useTranslation();
  const menuTypes = [
    `${t("menuFilter.all")}`,
    `${t("menuFilter.appetizer")}`,
    `${t("menuFilter.bakery")}`,
    `${t("menuFilter.meat")}`,
    `${t("menuFilter.chicken")}`,
  ];
  return (
    <div className={styles.filterContainer}>
      {menuTypes.map((type) => (
        <button
          key={type}
          style={currentFilter === type ? { color: "#000" } : {}}
          className={styles.typesBtn}
          onClick={() => onFilterChange(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default MenuFilter;
