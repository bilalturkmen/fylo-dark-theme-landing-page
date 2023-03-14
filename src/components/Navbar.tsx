import { useSticky } from "./";
import { Navlinks } from "./";

const Navbar = () => {
  // sticky navbar hooks
  const stickyClass = useSticky();

  return (
    <div className={`navbar ${stickyClass}`}>
      <a href="#" className="notLink">
        <img src="./images/logo.svg" alt="Fylo Logo" width={176} height={52} />
      </a>
      <Navlinks />
    </div>
  );
};

export default Navbar;
