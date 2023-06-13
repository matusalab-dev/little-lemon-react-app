import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, NavLink } from "react-router-dom";

export const NavLinkList = ({ title, link, display }) => {
  return (
    <li key={title} className="justify-center">
      <NavLink
        to={link}
        className={`${display}  transition-background  px-6 py-2 transition-colors duration-100 ease-out hover:bg-primary-200 hover:text-primary-100`}
      >
        {title}
      </NavLink>
    </li>
  );
};

export const NavHashList = ({ title, href, display }) => {
  return (
    <li key={title} className="justify-center">
      <AnchorLink
        href={href}
        smooth
        className={`${display}  transition-background  px-6 py-2 transition-colors duration-100 ease-out hover:bg-primary-200 hover:text-primary-100`}
      >
        {title}
      </AnchorLink>
    </li>
  );
};
