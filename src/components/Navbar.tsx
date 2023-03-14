import { useSticky } from "./";
import { menuLinks } from "./";

const Navbar = () => {
  // sticky navbar hooks
  const stickyClass = useSticky();

  return (
    <div className={`navbar ${stickyClass}`}>
      <a href="#" className="notLink">
        <img src="./images/logo.svg" alt="Fylo Logo" width={176} height={52} />
      </a>
      <nav>
        {menuLinks.map((nav, i) => {
          return (
            <a key={i} href={nav.path}>
              {nav.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
