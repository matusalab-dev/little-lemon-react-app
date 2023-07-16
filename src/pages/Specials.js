import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";

import { MdDeliveryDining } from "react-icons/md";
import { GridLayout } from "../layouts/GridLayout";
import { MenuContext } from "../Contexts/MenuContext";
import { Link } from "react-router-dom";
export const Specials = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const menus = [
  //   {
  //     imageUrl: dish1,
  //     dishName: "Greek Salad",
  //     description:
  //       "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  //     price: "$12.99",
  //   },
  //   {
  //     imageUrl: dish2,
  //     dishName: "Bruschetta",
  //     description:
  //       "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  //     price: "$5.99",
  //   },
  //   {
  //     imageUrl: dish3,
  //     dishName: "Lemon desert",
  //     description:
  //       " This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  //     price: "$5.00",
  //   },
  // ];

  const menus = useContext(MenuContext);

  return (
    <main
      id="menu"
      className="custom-container pt-24 lg:px-4 md:mb-[5rem] sm:mb-[7.5rem]"
    >
      <header className="flex justify-between">
        <h2 className="font-primary text-5xl capitalize underline-offset-[6px] sm:mx-auto sm:underline ">
          this weeks specials!
        </h2>
        <button className="rounded-md bg-primary-100 px-8 py-2 text-lg font-semibold text-secondary-400 sm:hidden">
          Online Menu
        </button>
      </header>

      {/* Menu Gallery */}
      {/* <section className="my-16  h-min grid grid-cols-galleryCol grid-rows-galleryRow grid-flow-row-dense gap-x-8 gap-y-8"> */}
      {/* looping through dishes */}

      <GridLayout className={"h-min"}>
        {menus.map((menu) => {
          // console.log(menu.id);
          return (
            <Link
              to={`/order/${menu.id}/${menu.dishName}`}
              key={menu.id}
              state={{
                search: `${searchParams}`,
                // type: typeFilter
              }}
              className="group transition-all hover:scale-105 hover:shadow-sm"
            >
              <img
                className="h-[200px] w-full rounded-t-xl object-cover"
                src={menu.imageUrl}
                alt={menu.dishName}
                loading="lazy"
              />
              <div className="flex flex-col space-y-6  bg-secondary-300 p-5 ">
                <div className="mt-6 flex justify-between ">
                  <h4 className="font-primary text-2xl  text-secondary-400">
                    {menu.dishName}
                  </h4>
                  <p className="text-red-300">{menu.price}</p>
                </div>
                <p className="self-center font-semibold text-primary-200">
                  {menu.description}
                </p>
                <h3 className=" flex cursor-pointer  items-center font-secondary text-xl text-secondary-400">
                  Order a delivery{" "}
                  <MdDeliveryDining
                    size={40}
                    className="ml-8 transition-all ease-out group-hover:translate-x-6"
                  />
                </h3>
              </div>
            </Link>
          );
        })}

        {/* <div class="group cursor-pointer hover:shadow-md hover:scale-105 transition-all">
          <img
            class="rounded-t-xl w-full object-cover h-[200px]"
            src={dish2}
            alt="Title"
          />
          <div className="flex flex-col space-y-12 px-5 overflow-hidden bg-secondary-300 h-[calc(100%-200px)]">
            <div class="flex justify-between mt-8">
              <h4 class="font-primary  text-secondary-400 text-2xl">
                Bruchetta
              </h4>
              <p class="text-red-300">$5.99</p>
            </div>
            <p className="font-semibold text-primary-200 ">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <h3 className="flex text-xl font-secondary text-secondary-400 pb-5 cursor-pointer">
              Order a delivery <img src={order} className="ml-4 stroke-black" />
            </h3>
          </div>
        </div>

        <div class="cursor-pointer hover:shadow-md hover:scale-105 transition-all">
          <img
            class="rounded-t-xl w-full h-[200px]  object-cover"
            src={dish3}
            alt="Title"
          />
          <div className="flex flex-col space-y-12 px-5 overflow-hidden bg-secondary-300 h-[calc(100%-200px)]">
            <div class="flex justify-between mt-8">
              <h4 class="font-primary  text-secondary-400  text-2xl">
                Lemon Dessert
              </h4>
              <p class="text-red-300">$5.00</p>
            </div>
            <p className="font-semibold  text-primary-200 ">
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <h3 className="flex text-xl font-secondary text-secondary-400 pb-5 cursor-pointer">
              Order a delivery <img src={order} className="ml-4 stroke-black" />
            </h3>
          </div>
        </div> */}
      </GridLayout>

      {/* </section> */}
    </main>
  );
};
