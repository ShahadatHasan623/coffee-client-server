import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import HeroSection from "./HeroSection";
import "./Header.css";
import Follow from "../pages/Follow";

const Home = () => {
  const initialCoffeeData = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffeeData);
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="card-coffee">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto lg:px-0 p-5 ">
          {coffees.map((coffee) => (
            <CoffeeCard
              coffees={coffees}
              setCoffees={setCoffees}
              key={coffee._id}
              coffee={coffee}
            ></CoffeeCard>
          ))}
        </div>
      </div>
      <section className="max-w-6xl mx-auto my-20 lg:p-0 p-5">
        <Follow></Follow>
      </section>
    </div>
  );
};

export default Home;
