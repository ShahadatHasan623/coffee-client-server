import React from "react";
import logoImg from "../assets/more/logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#D9D9D9] p-10">
        <aside className="space-y-2">
          <img className="h-25" src={logoImg} alt="" />
          <h1 className="text-4xl font-bold">Espresso Emporium</h1>
          <p>
            Always ready to be your friend. Come & Contact with us to share your
            <br /> memorable moments, to share with your best companion.
          </p>
          <div className="flex items-center gap-2">
            <a href="">
              <FaFacebook size={25} />
            </a>
            <a href="">
              <FaTwitter size={25} />
            </a>
            <a href="">
              <FaInstagram size={25} />
            </a>
            <a href="">
              <FaLinkedin size={25} />
            </a>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold">Get in Touch</h1>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xl font-semibold">
                <FaPhoneAlt size={25} />
                <a href="">01975663882</a>
              </div>
              <div className="flex items-center gap-2 text-xl font-semibold">
                <MdEmail size={25} />
                <a href="">mkdir@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 text-xl font-semibold">
                <FaLocationDot size={25} />
                <a href="">
                  Barisal Sadar Road ,Girja Moholla ,CNB Tower ,2nd floor
                </a>
              </div>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="text-black text-3xl font-bold">Contact With Us</h6>
          <div>
            <form className="grid grid-col gap-4">
              <input
                className="bg-[#FFFFFF] w-70 h-10 text-2xl p-2"
                type="text"
                placeholder="Name"
              />
              <input
                className="bg-[#FFFFFF] w-70 h-10 text-2xl p-2"
                type="email"
                placeholder="Email"
              />
              <textarea
                name="message"
                rows="4"
                className="w-full bg-[#FFFFFF] px-4 py-3 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-xl"
                id=""
                placeholder="Your message"
              ></textarea>
            </form>
            <input type='submit' value="send Message"  className="btn mt-2 bg-none rounded-4xl px-10 text-xl border-2 border-black"/>
          </div>
        </nav>
      </footer>
      <div className="footer-down flex justify-center items-center text-white">
        <p>Copyright Espresso Emporium ! All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
