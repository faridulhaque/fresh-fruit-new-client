import React from "react";
import { useParams } from "react-router-dom";

const SingleItem = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default SingleItem;
