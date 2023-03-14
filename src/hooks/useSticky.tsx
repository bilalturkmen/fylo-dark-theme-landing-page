import React from "react";

export const useSticky = () => {
  // Sticky navbar add class
  const [stickyClass, setStickyClass] = React.useState<string>("");

  React.useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, [stickyClass]);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 150) {
        setStickyClass("sticky-nav");
      } else {
        setStickyClass("");
      }
    }
  };
  return [stickyClass];
};
