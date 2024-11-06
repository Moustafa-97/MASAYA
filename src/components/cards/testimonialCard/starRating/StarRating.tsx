const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div style={{ display: "flex" }}>
      {stars.map((isFilled, index) => (
        <span
          key={index}
          style={{
            fontSize: "24px",
            color: isFilled ? "var(--red)" : "#79131580", // gold for filled, grey for shaded
            marginRight: "4px",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
