import React from "react";
import { useParams } from "react-router-dom";

const SingleItem = () => {
  const { id } = useParams();
  return <div style={{marginTop: "100px"}}>{id}</div>;
};

export default SingleItem;
