import { useEffect, useState } from "react";
import { navLinks } from ".";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState<string>("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      if (windowHeight > 150) {
        setStickyClass("sticky-nav");
      } else {
        setStickyClass("");
      }
    }
  };

  return (
    <section id="home" className={`navbar ${stickyClass}`}>
      <a href="#" className="notLink">
        <img src="./images/logo.svg" alt="Fylo Logo" />
      </a>
      <nav>
        {navLinks.map((link, index) => {
          return (
            <a key={index} href={link.path}>
              {link.name}
            </a>
          );
        })}
      </nav>
    </section>
  );
};

export default Navbar;