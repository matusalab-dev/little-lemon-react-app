import React from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
export const OrderDetail = () => {
  const menu = useOutletContext();

  console.log(menu);
  return (
    <div className="w-1/2  sm:w-full">
      <img
        src={menu.imageUrl}
        className=" h-[18rem] w-full rounded-tl-lg rounded-tr-lg object-cover sm:w-full"
      />

      <h2 className=" pt-4 text-3xl font-bold text-secondary-300">
        {menu.dishName}
      </h2>
      <h2 className=" pt-3 text-secondary-300">{menu.description}</h2>
      <h2 className="pt-3 font-bold text-secondary-300">{menu.price}</h2>
      <Link
        role="button"
        to="ConfirmedBooking"
        className="mt-3 inline-block rounded-sm bg-primary-100 px-4 py-2 text-lg font-semibold text-primary-200"
      >
        Order a Delivery
      </Link>
    </div>
  );
};
