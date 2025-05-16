import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUp } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );
    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        const userProfile = {
          email,
          ...restFormData,
          creationTime:result.user.metadata.creationTime,
          lastSignInTime:result.user.metadata.lastSignInTime,
          
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your has been user db successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            console.log("after the user db", data);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="Address"
          />
          <label className="label">Phone</label>
          <input
            type="text"
            name="phone"
            className="input"
            placeholder="Phone"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="text"
            className="input"
            placeholder="Photo Url"
          />
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
          <button type="submit" className="btn btn-neutral mt-4">
            sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
