import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const data = useLoaderData();
  const { photo, name, price, supplier, taste, details, chef, _id } = data;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());
    console.log(updateCoffee);

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log("after updated", data);
      });
  };
  return (
    <div className="p-24  space-y-5 bg-[#F4F3F0] min-h-[calc(100vh-117px)] mb-20 rounded-2xl my-20 max-w-6xl mx-auto">
      <div className="text-center px-12  space-y-2">
        <h1 className="text-2xl font-bold">Update coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleUpdateCoffee} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Name</label>
            <input
              defaultValue={name}
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter coffee name"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Chef</label>
            <input
              defaultValue={chef}
              type="text"
              className="input w-full"
              name="chef"
              placeholder="Enter coffee chef"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label">Supplier</label>
            <input
              defaultValue={supplier}
              type="text"
              className="input w-full"
              name="supplier"
              placeholder="Enter coffee supplier"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Taste</label>
            <input
              defaultValue={taste}
              type="text"
              className="input w-full"
              name="taste"
              placeholder="Enter coffee taste"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">price</label>
            <input
              defaultValue={price}
              type="text"
              className="input w-full"
              name="price"
              placeholder="Enter coffee Price"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Details</label>
            <input
              defaultValue={details}
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
            defaultValue={photo}
            className="input w-full"
            name="photo"
            placeholder="Photo Url"
          />
        </fieldset>

        <input className="btn w-full" type="submit" value="Update Coffee" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
