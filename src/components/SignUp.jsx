import React from "react";

const SignUp = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <form className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Address</label>
          <input type="text" name="address" className="input" placeholder="Address" />
          <label className="label">Phone</label>
          <input type="text" name="phone" className="input" placeholder="Phone" />
          <label className="label">Photo</label>
          <input type="email" name="text" className="input" placeholder="Photo Url" />
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
