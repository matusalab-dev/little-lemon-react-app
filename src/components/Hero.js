import { CustomContainer } from "../layouts/Custom-container";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const hero = require("../assets/restauranfood.jpg");

export const Herosection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/reserve", { replace: false });
  };
  // TODO: handle click
  return (
    <div className="  bg-primary-200 ">
      <CustomContainer>
        <div className="flex  max-w-sm flex-col  justify-start py-8 pl-8">
          <h1 className="text-left font-primary text-5xl font-semibold text-primary-100">
            Little Lemon
          </h1>
          <h3 className="font-primary text-4xl text-white">Chicago</h3>
          <p className=" mt-6 font-bold text-secondary-300">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          {/* <button
            onClick={handleClick}
            className=" mt-10 self-start rounded-md bg-primary-100 px-7 py-[0.5rem] text-center text-lg font-semibold text-secondary-400 transition-all  ease-in hover:shadow-2xl"
          >
            Reserve a Table
          </button> */}
          <Link
            to="/reserve"
            role="button"
            // replace={true}
            className=" mt-10 self-start rounded-md bg-primary-100 px-7 py-[0.5rem] text-center text-lg font-semibold text-secondary-400 transition-all  ease-in hover:shadow-2xl"
          >
            Reserve a Table
          </Link>
        </div>
        <div className="shrink-0 ">
          <img
            src={hero}
            alt="restaurant-food"
            className="h-80  w-[22rem] translate-y-10 rounded-lg object-cover sm:hidden"
            loading="lazy"
          />
        </div>
      </CustomContainer>
    </div>
  );
};
