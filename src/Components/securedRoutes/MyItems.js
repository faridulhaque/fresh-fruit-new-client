import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Alert, Confirm } from "react-st-modal";
import { auth } from "../../firebase/firebase.init";
import { getAllItems } from "../../ReduxServices/Actions/AllItemsAction";
import Loading from "../Shared/Loading";
import useAllItemsTable from "../Tables/useAllItemsTable";
import useMyItemsTable from "../Tables/useMyItemsTable";
import { useTableStyles } from "../Tables/useTableStyles";
import "./securedRoutes.css";

const MyItems = () => {
  const navigate = useNavigate();
  const [user, loading, Uerror] = useAuthState(auth);
  const email = user?.email;
  const { isLoading, data, error } = useSelector((state) => state);

  // const myItems = data.filter(item => item.email === email)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllItems())
  }, [dispatch])


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
        console.log('done')
      }
    }
  };

  const myItems = data.filter(item => item?.email === email)

  console.log(myItems)

  const [customTableStyles] = useTableStyles()
  const [myItemsColumn] = useMyItemsTable({ handleItem })

  if (isLoading || loading) {
    return <Loading></Loading>;
  }


  return (

    <div className="app">
      <h2 className="text-center text-4xl mb-3 text-primary" style={{ marginTop: "100px" }}>
        All Items
      </h2>
      <div className="mx-20">
        <DataTable data={myItems} columns={myItemsColumn} pagination ></DataTable>
      </div>
    </div>
  );
};

export default MyItems;
