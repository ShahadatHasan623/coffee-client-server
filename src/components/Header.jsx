import React from "react";
import "./Header.css";
import logoImg from "../assets/more/logo1.png";
import { NavLink } from "react-router";
const Header = () => {
  return (
    <div className="header-img navbar bg-base-100 shadow-sm lg:px-20 px-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          <NavLink className={({isActive})=>isActive ? "btn btn-primary text-white underline":""} to='/'>Home</NavLink>
          <NavLink className={({isActive})=>isActive ? " btn btn-primary  text-white underline":""} to='/users'>Login User</NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-2"><img className="h-15" src={logoImg} alt="" />
        <h1 className="text-3xl text-white lg:block hidden">Espresso Emporium</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-2">
          <NavLink className={({isActive})=>isActive ? "btn text-blue-500 underline":""} to='/'>Home</NavLink>
          <NavLink className={({isActive})=>isActive ? "btn text-blue-500 underline":""} to='/users'>Login User</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to='/signIn' className="btn m-2">Sign In</NavLink>
        <NavLink to='/signUp' className="btn">Sign Up</NavLink>
      </div>
    </div>
  );
};

export default Header;
