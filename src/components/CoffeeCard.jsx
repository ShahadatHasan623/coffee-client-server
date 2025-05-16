import React from "react";
import { FaRegEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, photo, price } = coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-nine-liard.vercel.app/coffees/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = coffees.filter((cof) => cof._id !== id);
              setCoffees(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-[#F5F4F1] shadow-sm">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-around items-center w-full">
          <div>
            <h2>Name : {name}</h2>
            <p>Chef : {chef}</p>
            <p>Price : {price}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-2">
              <Link
                to={`/details/${_id}`}
                className="btn join-item text-white bg-[#D2B48C]"
              >
                <FaRegEye size={30} />
              </Link>
              <Link
                to={`/update/${_id}`}
                className="btn join-item bg-[#3C393B]"
              >
                <MdEdit className="text-white" size={30} />
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item bg-red-400 border-none"
              >
                <MdDelete size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
