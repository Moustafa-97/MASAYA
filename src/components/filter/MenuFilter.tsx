import React from "react";
import styles from "./menufilter.module.css";
const menuTypes = ["All", "Appetizer", "Bakery", "Meat", "Chicken"];

type MenuFilterProps = {
  onFilterChange: (type: string) => void;
  currentFilter: string;
};

const MenuFilter: React.FC<MenuFilterProps> = React.memo(
  ({ onFilterChange, currentFilter }) => {
    return (
      <div className={styles.filterContainer}>
        {menuTypes.map((type) => (
          <button
            key={type}
            style={currentFilter === type ? { color: '#000' } : {}}
            className={styles.typesBtn}
            onClick={() => onFilterChange(type)}
          >
            {type}
          </button>
        ))}
      </div>
    );
  }
);

export default MenuFilter;
