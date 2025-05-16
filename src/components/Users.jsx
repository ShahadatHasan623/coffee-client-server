import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initialUser = useLoaderData();
  const [users, setUsers] = useState(initialUser);

  const handleDelete = (id) => {
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
        console.log("delete id", id);
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const reaminingUser = users.filter((user) => user._id !== id);
              setUsers(reaminingUser);
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
    <div className="overflow-x-auto p-20">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.text}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.address}</div>
                  </div>
                </div>
              </td>
              <td>{user.phone}</td>
              <td>Purple</td>
              <th>
                <button className="btn btn-xs">Details</button>
                <button className="btn btn-xs">Veiw</button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="btn btn-xs"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
