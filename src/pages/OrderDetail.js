import React, { useContext } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import { MenuContext } from "../Contexts/MenuContext";
export const OrderDetail = () => {
  const menu = useOutletContext();
  return (
    <div className="w-1/2 p-4">
      <img src={menu.imageUrl} className=" h-[13rem] w-[15rem] rounded-lg" />

      <h2 className=" pt-4 text-3xl font-bold text-secondary-300">
        {menu.dishName}{" "}
      </h2>
      <h2 className=" pt-3 text-secondary-300">{menu.description}</h2>
      <h2 className="pt-3 font-bold text-secondary-300">{menu.price}</h2>
    </div>
  );
};
