import React, { useEffect } from "react";


import Loading from "../Shared/Loading";
import { useSelector, useDispatch } from "react-redux"
import { getAllItems } from "../../ReduxServices/Actions/AllItemsAction";
import DataTable from "react-data-table-component";
import useAllItemsTable from "../Tables/useAllItemsTable";
import { useTableStyles } from "../Tables/useTableStyles";

const AllItems = () => {
  const { isLoading, data, error } = useSelector((state) => state);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllItems())
  }, [dispatch])



  const [allItemsColumn] = useAllItemsTable()
  const [customTableStyles] = useTableStyles()

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="app">
      <h2 className="text-center text-4xl mb-3 text-primary" style={{ marginTop: "100px" }}>
        All Items
      </h2>
      <div className="mx-20">
        <DataTable data={data} columns={allItemsColumn} pagination customStyles={customTableStyles}></DataTable>
      </div>
    </div>
  );
};

export default AllItems;
