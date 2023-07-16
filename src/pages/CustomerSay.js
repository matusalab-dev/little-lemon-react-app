import React from "react";
import { FaStar } from "react-icons/fa";
import dish2 from "../assets/bruchetta.svg";
import { GridLayout } from "../layouts/GridLayout";
const dish1 = require("../assets/greek salad.jpg");
const dish3 = require("../assets/lemon dessert.jpg");

export const CustomerSay = () => {
  const testimonials = [
    {
      firstName: "john ",
      lastName: "smith",
      rating: <FaStar />,
      imageUrl: dish1,
      review:
        "I had an incredible experience at Little-Lemon restaurant. The staff was incredibly welcoming and attentive, and the food was simply amazing. Overall, I highly recommend Little-Lemon restaurant for a memorable dining experience.",
    },
    {
      firstName: "smith",
      lastName: "carry",
      rating: <FaStar />,
      imageUrl: dish2,
      review:
        "I was really disappointed with my experience at Little-Lemon restaurant. The service was slow and unresponsive, and my food arrived cold. I hope the restaurant can improve in these areas in the future.",
    },
    {
      firstName: "matusalab",
      lastName: "A.",
      rating: <FaStar />,
      imageUrl: dish3,
      review:
        "I recently visited Little-Lemon restaurant and was blown away by the delicious food and friendly service.  I would definitely recommend LMN restaurant to anyone looking for a great Italian meal.",
    },
  ];

  return (
    <section className="h-min bg-secondary-100 py-16">
      <h2 className="text-center font-primary text-6xl font-bold sm:py-1">
        Testimonials
      </h2>
      {/*testimonials grid  */}
      <GridLayout
        className={`custom-container  gap-x-6 gap-y-12 lg:px-4 md:px-6 sm:mt-12`}
      >
        {/* <div className="custom-container mt-16 sm:mt-12 grid grid-cols-galleryCol  grid-flow-row-dense gap-x-6 gap-y-12"> */}
        {/* looping through the customers */}
        {testimonials.map((testimonial, index) => {
          return (
            <div
              key={index}
              className=" cursor-pointer bg-red-200 px-5 py-6 transition-all hover:scale-105 hover:shadow-md"
            >
              <div className="flex flex-col  space-y-8">
                <span className="flex font-primary text-4xl font-bold text-primary-100">
                  {testimonial.rating}
                  {testimonial.rating}
                  {testimonial.rating}
                  {testimonial.rating}
                  {/*testimonial.rating} */}
                </span>

                <div className="flex content-center space-x-6">
                  <img
                    className="h-[100px] w-[100px] rounded-full  object-cover"
                    src={testimonial.imageUrl}
                    alt="Title"
                  />
                  <p className="self-center text-xl font-bold">
                    {`${
                      testimonial.firstName[0].toUpperCase() +
                      testimonial.firstName.slice(
                        1,
                        testimonial.firstName.length
                      )
                    } ${testimonial.lastName[0].toUpperCase()}.`}
                  </p>
                </div>

                <p className=" font-semibold text-primary-200">
                  {testimonial.review}
                </p>
              </div>
            </div>
          );
        })}

        {/* {/each} */}
        {/* </div> */}
      </GridLayout>
    </section>
  );
};
