import React from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import styles from "./pagination.module.css";

type PaginationProps = {
  totalItems: number;
  cardsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = React.memo(
  ({ totalItems, cardsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / cardsPerPage);

    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };

    const handlePrevious = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };

    return (
      <div className={styles.pagination}>
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          <BiArrowFromRight />
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          <BiArrowFromLeft />
        </button>
      </div>
    );
  }
);

export default Pagination;
