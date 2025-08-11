// components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the document
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]); // Re-run effect when pathname changes

  return null; // This component doesn't render anything visually
};

export default ScrollToTop;
