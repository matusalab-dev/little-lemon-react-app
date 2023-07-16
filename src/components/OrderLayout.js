import React, { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import { MenuContext } from "../Contexts/MenuContext";
import { Link } from "react-router-dom";

export const OrderLayout = () => {
  //   const location = useLocation();
  const { id, category } = useParams();
  //   console.log(location.state.search);
  console.log(id, category);
  const menuDetails = useContext(MenuContext);
  console.log(menuDetails);
  const menu = menuDetails.filter((menuDetail) => menuDetail.id === id);
  // console.log(menu[0]);

  return (
    <div className="custom-container  bg-primary-200 p-8 text-secondary-300">
      <Link
        to=".."
        // relative="path"
        //   this will return to the route not the current path
        // we don't set relative to 'path'
        className=" mt-2 font-semibold "
      >
        back to home
      </Link>
      <h2 className="mb-5 mt-6 text-4xl font-bold ">Orders Details </h2>
      <Outlet context={menu[0]} />
    </div>
  );
};
