import { menuLinks } from "./";

const Navlinks = () => {
  // get menu links and add scroll id
  const renderNavLink = (content: any) => {
    const scrollToId: string = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      (document.getElementById(scrollToId) as HTMLAnchorElement).scrollIntoView(
        {
          behavior: "smooth",
        }
      );
    };
    return (
      <a key={content} onClick={handleClickNav}>
        {content}
      </a>
    );
  };
  return <nav>{menuLinks.map((nav) => renderNavLink(nav))}</nav>;
};

export default Navlinks;
