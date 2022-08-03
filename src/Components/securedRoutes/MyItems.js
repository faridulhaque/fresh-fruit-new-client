import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Alert, Confirm } from "react-st-modal";
import { auth } from "../../firebase/firebase.init";
import Loading from "../Shared/Loading";
import "./securedRoutes.css";

const MyItems = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const email = user?.email;
  const {
    data: fruits,
    isLoading,
    refetch,
  } = useQuery(["fruit", email], () =>
    fetch(`http://localhost:5000/fruit/${email}`, {
      method: "GET",
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  const handleItem = async (data) => {
    const id = data._id;

    if (data.method === "edit") {
      navigate(`/home/${id}`);
    } else if (data.method === "delete") {
      const isConfirm = await Confirm(
        "You cannot undo this action",
        "Are you sure you want to delete the item?"
      );
      if (isConfirm) {
        fetch(`http://localhost:5000/fruit/del/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              refetch();
              Alert("Item successfully deleted", "done!");
            }
          });
      }
    }
  };

  return (
    <div>
      <h2 className="text-center text-3xl my-3">My Items</h2>
      {fruits.length === 0 ? (
        <p className="text-center my-3">
          You did not add any items yet! Please go to 'add new item' page to add
          an item.
        </p>
      ) : (
        <>
          <p className="text-center text-3xl my-5">
            You have added {fruits.length} items only!
          </p>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Available Quantity</th>
                  <th>Minimum Quantity</th>
                  <th>edit</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {fruits.map((fruit, i) => (
                  <tr key={fruit._id}>
                    <th>{parseInt(i) + 1}</th>
                    <td>{fruit.name}</td>
                    <td>{fruit.price}</td>
                    <td>{fruit.avlQuantity}</td>
                    <td>{fruit.minQuantity}</td>
                    <td
                      className="handleItem"
                      onClick={() => handleItem({ ...fruit, method: "edit" })}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </td>
                    <td
                      className="handleItem"
                      onClick={() => handleItem({ ...fruit, method: "delete" })}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyItems;
