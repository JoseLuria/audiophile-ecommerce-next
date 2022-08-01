import { useEffect, useState } from "react";

export const useAutoHideNavbar = () => {
  const [screenPosition, setScreenPosition] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const navControl = () => {
    if (window.scrollY > screenPosition) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setScreenPosition(window.scrollY);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", navControl);

      return () => {
        window.removeEventListener("scroll", navControl);
      };
    }
  });

  return {
    showNavbar,
  };
};
