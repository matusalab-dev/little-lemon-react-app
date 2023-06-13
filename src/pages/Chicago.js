import person2 from "../assets/Mario and Adrian A.jpg";
import person1 from "../assets/Mario and Adrian b.jpg";
import { CustomContainer } from "../layouts/Custom-container";

export const Chicago = () => {
  return (
    <CustomContainer id="about" className={`relative h-[468px] bg-primary-200`}>
      <div className="flex  max-w-sm flex-col  justify-start py-20 pl-8 ">
        <h1 className="text-left font-primary text-5xl font-semibold text-primary-100">
          Little Lemon
        </h1>
        <h3 className="font-primary text-4xl text-white">Chicago</h3>
        <p className=" mt-6 font-bold text-secondary-300 md:max-w-[28ch]">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className="shrink-0">
        <img
          src={person2}
          alt="restaurant-food"
          className="absolute right-64 top-[7.3rem] z-10  h-[20rem] w-[18rem] rounded-sm object-cover md:right-[10rem] md:h-[14rem] md:w-[12rem] sm:hidden"
        />
        <img
          src={person1}
          alt="restaurant-food"
          className="absolute right-[0.01rem] top-10 h-[20rem] w-[18rem]  rounded-sm object-cover md:h-[14rem] md:w-[12rem] sm:hidden"
        />
      </div>
    </CustomContainer>
  );
};
