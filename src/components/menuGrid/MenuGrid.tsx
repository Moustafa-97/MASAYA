import React, { useState, useMemo, Suspense, lazy, useEffect } from "react";
import Pagination from "../pagination/Pagination";
import styles from "./menuGrid.module.css";

const MenuCard = lazy(() => import("../cards/menuCard/MenuCard"));

type MenuGridProps = {
  cards: {
    id: number;
    name: string;
    type: string;
    image: string;
    description: string;
    price: number;
  }[];
  currentFilter: string;
};

const MenuGrid: React.FC<MenuGridProps> = React.memo(
  ({ cards, currentFilter }) => {
    const cardsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => setCurrentPage(page);

    useEffect(() => {
      setCurrentPage(1);
    }, [currentFilter]);

    // Memoized calculation of paginated items
    const paginatedItems = useMemo(
      () =>
        cards.slice(
          (currentPage - 1) * cardsPerPage,
          currentPage * cardsPerPage
        ),
      [cards, currentPage]
    );

    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <div className={styles.menuGrid}>
            {paginatedItems.map((item) => (
              <div key={item.id}>
                <MenuCard card={item} />
              </div>
            ))}
          </div>
        </Suspense>
        <Pagination
          totalItems={cards.length}
          cardsPerPage={cardsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    );
  }
);

export default MenuGrid;
