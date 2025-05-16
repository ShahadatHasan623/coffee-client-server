import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffeeDetails = useLoaderData();
  const { photo, chef, supplier, taste, details, price } = coffeeDetails;
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl mb-5 font-bold">Coffee View Details</h1>
      </div>
      <Link
        to="/"
        className="ml-25 text-2xl flex items-center gap-1 mb-2"
      >
        <IoIosArrowRoundBack /> Back To Home
      </Link>
      <div className="card card-side  bg-[#F5F4F1] shadow-2xl lg:mx-25 lg:p-0 mx-5">
        <figure>
          <img className="h-56" src={photo} alt="Movie" />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title text-3xl">chef : {chef}</h2>
          <p className="text-xl font-semibold text-gray-500">
            supplier : {supplier}
          </p>
          <p className="text-xl font-semibold text-gray-500">taste : {taste}</p>
          <p className="text-xl font-semibold text-gray-500">
            details : {details}
          </p>
          <p className="text-xl font-semibold text-gray-500">
            price : {price} tk
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
