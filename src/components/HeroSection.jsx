import React from "react";
import "./Header.css";
import iconPng1 from "../assets/icons/1.png";
import iconPng2 from "../assets/icons/2.png";
import iconPng3 from "../assets/icons/3.png";
import iconPng4 from "../assets/icons/4.png";
import img from "../assets/more/Vector.png";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div>
      <div className="banner-img flex flex-col items-center justify-center">
        <div className="lg:text-left text-center lg:w-180 space-y-4">
          <h1 className="text-4xl text-white font-bold">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-[#FFFFFF]">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn rounded-none border-none bg-[#E3B577] text-xl font-semibold">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-[#ECEAE3] px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-2">
          <img src={iconPng1} alt="" />
          <h1 className="text-2xl font-semibold">Awesome Aroma</h1>
          <p className="text-[#1B1A1A]">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="space-y-2">
          <img src={iconPng2} alt="" />
          <h1 className="text-2xl font-semibold">High Quality</h1>
          <p className="text-[#1B1A1A]">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="space-y-2">
          <img src={iconPng3} alt="" />
          <h1 className="text-2xl font-semibold">Pure Grades</h1>
          <p className="text-[#1B1A1A]">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="space-y-2">
          <img src={iconPng4} alt="" />
          <h1 className="text-2xl font-semibold">Proper Roasting</h1>
          <p className="text-[#1B1A1A]">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
      <div className="text-center my-20 space-y-2">
        <p className="text-xl">--- Sip & Savor ---</p>
        <h1 className="text-5xl font-semibold">Our Popular Products</h1>
        <Link to='/addCoffee' className="btn border-2 border-black bg-[#E3B577] text-white text-shadow-2xl text-2xl">
          Add Coffee <img src={img} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
