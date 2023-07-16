import { useState } from "react";
import Logo from "../assets/Logo-1.svg";
import hamburgerMenu from "../assets/🦆 icon _hamburger menu.svg";
import cart from "../assets/Basket.svg";
import { Link } from "react-router-dom";
import { NavLinkList } from "./NavList";
import { NavHashList } from "./NavList";
import { NavHashLink } from "react-router-hash-link";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    ["home", "/"],
    ["about", "/about"],
    ["menu", "/menu"],
    ["reservation", "/reserve"],
    ["order online", "/order"],
    ["log in", "/log-in"],
  ];

  // function RenderLinks({ ...display }) {
  //   const renderLinks = links.map((item) => {
  //     // console.log(item[0], item[1]);
  //     const title = item[0];
  //     const link = item[1];

  //     return <NavList title={title} link={link} display={display} />;
  //   });
  //   return renderLinks;
  // }

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="custom-container align-center flex h-20 justify-between bg-white text-primary-200 lg:blur-none"
      >
        <Link to="/" className="self-center  lg:-order-first lg:pl-8 sm:pl-0">
          <img src={Logo} className="h-24 w-48 sm:w-36" />
        </Link>
        <a
          href="#"
          className="hidden self-center lg:-order-first lg:mr-5 lg:inline-block"
        >
          <span className="relative h-[10rem] w-[10rem]">
            <img src={cart} className="h-10 w-10 sm:w-8 " />
            <span className=" absolute left-6 top-4 flex h-6 w-6  items-center justify-center rounded-full bg-primary-100 text-primary-200">
              2
            </span>
          </span>
        </a>

        <ul className="max-w-1/2 text-md  flex items-center justify-between font-secondary font-semibold capitalize">
          {/* {<RenderLinks desktop={"lg:hidden"} />} */}

          {/* rendering the Desktop Nav List */}
          {/* <NavLinkList title="Home" to="/" display="flex lg:hidden" /> */}
          <Link
            title="Home"
            to="/"
            className="transition-background flex px-6  py-2 transition-colors duration-100 ease-out hover:bg-primary-200 hover:text-primary-100 lg:hidden"
          >
            Home
          </Link>
          <NavHashList
            title={"About"}
            href={"#about"}
            display={"flex lg:hidden"}
          />
          <NavHashList
            title={"Menu"}
            href={"#menu"}
            display={"flex lg:hidden"}
          />
          {/* <NavLinkList
          title={"Reservation"}
          to="/reserve"
          display={"flex lg:hidden"}
        /> */}
          <Link
            title="Home"
            to="/reserve"
            className="transition-background flex px-6  py-2 transition-colors duration-100 ease-out hover:bg-primary-200 hover:text-primary-100 lg:hidden"
          >
            Reservation
          </Link>
          <NavLinkList
            title={"Order Online"}
            to={"/order"}
            display={"flex lg:hidden"}
          />
          <NavLinkList
            title={"Log In"}
            to={"/log-in"}
            display={"flex lg:hidden"}
          />

          {/* mobile-menu navigation */}
          <span
            onClick={() => setToggle(!toggle)}
            className="ml-8 hidden rounded-sm bg-secondary-300 px-3 py-2 hover:cursor-pointer lg:flex sm:ml-4"
          >
            <img src={hamburgerMenu} className="h-6 w-6" />
          </span>
        </ul>
      </nav>

      {/* Mobile-navigation */}
      <nav role="navigation" aria-label="Mobile Navigation" aria-hidden="true">
        <ul
          className={`${
            toggle
              ? "translate-x-0 opacity-100"
              : "-translate-x-[100rem] opacity-80"
          } text-md delay-10 fixed left-0 top-0 z-40 h-[calc(100vh-6rem)]  w-[20rem] flex-col items-center justify-between space-y-2 bg-primary-100  py-5 pt-24 font-secondary font-semibold capitalize text-secondary-400 transition-transform duration-[1200ms] ease-out`}
        >
          <button
            onClick={() => setToggle(!toggle)}
            className=" absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary-200 text-primary-100 transition-all hover:cursor-pointer"
          >
            X
          </button>
          {/* rendering the Mobile Nav List */}

          <NavLinkList title="Home" to="/" display="flex " />
          <NavHashList title={"About"} href={"#about"} display={"flex "} />
          <NavHashList title={"Menu"} href={"#menu"} display={"flex "} />
          <NavLinkList
            title={"Reservation"}
            to={"/reserve"}
            display={"flex "}
          />
          <NavLinkList title={"Order Online"} to={"/order"} display={"flex "} />
          <NavLinkList title={"Log In"} to={"/log-in"} display={"flex "} />

          {/* {<RenderLinks desktop={"flex"} />} */}
        </ul>
      </nav>
    </>
  );
};
