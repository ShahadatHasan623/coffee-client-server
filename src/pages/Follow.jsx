import React from "react";
import imgCup1 from "../assets/cups/Rectangle 9.png";
import imgCup2 from "../assets/cups/Rectangle 10.png";
import imgCup3 from "../assets/cups/Rectangle 11.png";
import imgCup4 from "../assets/cups/Rectangle 12.png";
import imgCup5 from "../assets/cups/Rectangle 13.png";
import imgCup6 from "../assets/cups/Rectangle 14.png";
import imgCup7 from "../assets/cups/Rectangle 15.png";
import imgCup8 from "../assets/cups/Rectangle 16.png";

const Follow = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-xl font-semibold">Follow Us Now</p>
        <h1 className="text-4xl font-bold mb-3">Follow on Instagram Follow on Instagram</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
        <div>
          <img  className="rounded shadow hover:scale-105 transition" src={imgCup1} alt="" />
        </div>
        <div>
          <img  className="rounded shadow hover:scale-105 transition" src={imgCup2} alt="" />
        </div>
        <div>
          <img  className="rounded shadow hover:scale-105 transition" src={imgCup3} alt="" />
        </div>
        <div>
          <img   className="rounded shadow hover:scale-105 transition"src={imgCup4} alt="" />
        </div>
        <div>
          <img  className="rounded shadow hover:scale-105 transition" src={imgCup5} alt="" />
        </div>
        <div>
          <img  className="overflow-hidden rounded shadow hover:scale-105 transition" src={imgCup6} alt="" />
        </div>
        <div>
          <img  className="overflow-hidden rounded shadow hover:scale-105 transition" src={imgCup7} alt="" />
        </div>
        <div>
          <img className="overflow-hidden rounded shadow hover:scale-105 transition" src={imgCup8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Follow;
