import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Add coffee successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
        console.log("after coffee in the db", data);
      });
  };
  return (
    <div>
      <Link to='/' className="mt-20 ml-25 text-2xl flex items-center gap-1 mb-2"><IoIosArrowRoundBack /> Back To Home</Link>
      <div className="p-24  space-y-5 bg-[#F4F3F0] max-w-6xl mx-auto min-h-[calc(100vh-117px)] mb-20 rounded-2xl">
        <div className="text-center px-12  space-y-2">
          <h1 className="text-2xl font-bold">Add New Coffee</h1>
          <p>
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddCoffee} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter coffee name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Chef</label>
              <input
                type="text"
                className="input w-full"
                name="chef"
                placeholder="Enter coffee chef"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Supplier</label>
              <input
                type="text"
                className="input w-full"
                name="supplier"
                placeholder="Enter coffee supplier"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Taste</label>
              <input
                type="text"
                className="input w-full"
                name="taste"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">price</label>
              <input
                type="text"
                className="input w-full"
                name="price"
                placeholder="Enter coffee Price"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Details</label>
              <input
                type="text"
                className="input w-full"
                name="details"
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full"
              name="photo"
              placeholder="Photo Url"
            />
          </fieldset>

          <input className="btn w-full" type="submit" value="Add Coffee" />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
