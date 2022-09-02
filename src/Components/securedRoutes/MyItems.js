import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Confirm } from "react-st-modal";
import { auth } from "../../firebase/firebase.init";
import { getMyItems } from "../../ReduxServices/Actions/myItemsActions";

import Loading from "../Shared/Loading";
import useMyItemsTable from "../Tables/useMyItemsTable";
import { useTableStyles } from "../Tables/useTableStyles";
import "./securedRoutes.css";

const MyItems = () => {
  const navigate = useNavigate();
  const [user, loading, Uerror] = useAuthState(auth);
  const email = user?.email;
  const { myItemData, isMyItemLoading, myItemError } = useSelector((state) => state);


  const dispatch = useDispatch()
  useEffect(() => {
    if (email) {

      dispatch(getMyItems(email))
    }
  }, [dispatch])


  const handleItem = async (task) => {
    const id = task._id;

    if (task.method === "edit") {
      navigate(`/home/${id}`);
    } else if (task.method === "delete") {
      const isConfirm = await Confirm(
        "You cannot undo this action",
        "Are you sure you want to delete the item?"
      );
      if (isConfirm) {
        console.log('done')

      }
    }
  };

  // const myItems = data.filter(item => item?.email === email)



  const [customTableStyles] = useTableStyles()
  const [myItemsColumn] = useMyItemsTable({ handleItem })

  if (isMyItemLoading || loading) {
    return <Loading></Loading>;
  }


  return (

    <div className="app">
      <h2 className="text-center text-4xl mb-3 text-primary" style={{ marginTop: "100px" }}>
        My Items
      </h2>
      <div className="mx-20">
        <DataTable data={myItemData} columns={myItemsColumn} pagination ></DataTable>
      </div>
    </div>
  );
};

export default MyItems;
