import { useState, useEffect, useCallback, useMemo } from "react";

const useScreenWidth = () => {
  // State to store width
  const [width, setWidth] = useState(window.innerWidth);

  // Callback to update width
  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  // Set up event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Memoized value to only re-render when width changes
  const screenWidth = useMemo(() => width, [width]);

  return screenWidth;
};

export default useScreenWidth;
