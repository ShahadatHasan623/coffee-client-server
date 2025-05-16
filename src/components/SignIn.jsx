import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const { signInUser } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password).then((result) => {
      console.log(result.user);
      const newUser = {
        email,
        lastSignInTime: result.user.metadata.lastSignInTime,
      };
      fetch('http://localhost:3000/users',{
        method:"PATCH",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(newUser)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log("after db update",data)
      })
    });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <h1 className="text-center text-4xl font-semibold">Sign In Now </h1>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
