import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { Confirm } from "react-st-modal";
import { auth } from "../../firebase/firebase.init";
import { deleteMyItem, getMyItems } from "../../ReduxServices/Actions/myItemsActions";
import MyItemEditModal from "../Modals/MyItemEditModal";
import RequireAuth from "../RequireAuth/RequireAuth";

import Loading from "../Shared/Loading";
import useMyItemsTable from "../Tables/useMyItemsTable";
import { useTableStyles } from "../Tables/useTableStyles";
import "./securedRoutes.css";

const MyItems = () => {
  const [isEditing, setEditing] = useState(null)
  const [user, loading, Uerror] = useAuthState(auth);
  const email = user?.email;
  const { myItemData, isMyItemLoading, myItemError } = useSelector((state) => state.myItem);



  const dispatch = useDispatch()
  useEffect(() => {
    if (email) {

      dispatch(getMyItems(email))
    }
  }, [dispatch, email])


  const handleDispatch = () => {
    dispatch(getMyItems(email))

  }

  const handleItem = async (item) => {
    const id = item._id;

    if (item.method === "edit") {
      setEditing(item)
    } else if (item.method === "delete") {
      const isConfirm = await Confirm(
        "You cannot undo this action",
        "Are you sure you want to delete the item?"
      );
      if (isConfirm) {

        dispatch(deleteMyItem(id))

        setTimeout(() => {
          dispatch(getMyItems(email))

        }, 1000);

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
      {
        isEditing && <RequireAuth><MyItemEditModal isEditing={isEditing} setEditing={setEditing} action={handleDispatch}></MyItemEditModal></RequireAuth>
      }
    </div>
  );
};

export default MyItems;
