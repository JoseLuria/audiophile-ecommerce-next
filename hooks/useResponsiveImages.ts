import { useState, useEffect } from "react";
import { ResponsiveImages } from "@/interface";

export const useResponsiveImages = (ImagesObject: ResponsiveImages) => {
  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setScreenSize(window.innerWidth);
      });
      return () => {
        window.removeEventListener("resize", () => {
          setScreenSize(window.innerWidth);
        });
      };
    }
  }, []);

  if (screenSize < 768) {
    return {
      src: ImagesObject.mobile.src,
      width: ImagesObject.mobile.width,
      height: ImagesObject.mobile.height,
    };
  } else if (screenSize < 1024) {
    return {
      src: ImagesObject.tablet.src,
      width: ImagesObject.tablet.width,
      height: ImagesObject.tablet.height,
    };
  }
  return {
    src: ImagesObject.desktop.src,
    width: ImagesObject.desktop.width,
    height: ImagesObject.desktop.height,
  };
};
