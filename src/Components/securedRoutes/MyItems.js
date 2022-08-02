import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { auth } from "../../firebase/firebase.init";
import Loading from "../Shared/Loading";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);

  const email = user?.email;
  const { data: fruits, isLoading } = useQuery(["fruit", email], () =>
    fetch(`http://localhost:5000/fruit/${email}`, {
      method: "GET",
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-center text-3xl my-3">My Items</h2>
      {fruits.length === 0 ? (
        <p className="text-center my-3">
          You did not add any items yet! Please go to 'add new item' page to add
          an item.
        </p>
      ) : (
        <p className="text-center text-3xl my-5">
          You have added {fruits.length} items only!
        </p>
      )}
    </div>
  );
};

export default MyItems;
