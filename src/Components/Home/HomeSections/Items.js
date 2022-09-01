import React from "react";
import Loading from "../../Shared/Loading";
import { useQuery } from "react-query";
import './Home.css'

import "./Home.css";
import { useNavigate } from "react-router-dom";

const Items = () => {
  const navigate = useNavigate()
  const {
    data: items,
    isLoading,
    refetch,
  } = useQuery("fruit", () =>
    fetch(`http://localhost:5000/fruits`, {
      method: "GET",
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div style={{marginTop: "100px"}}>
      <h1 className="text-center text-5xl">Items</h1>
      <div className="items container">
        {items.slice(0,6).map((item) => (
          <div className="single-item-inventories" key={item._id}>
            <img style={{ height: 200, width: 250 }} src={item.img} alt="" />

            <div className="price-quantity-name">
              <div className="name-div">
                <p className="item-name-p my-3">Name</p>
                <p className="item-value-p">{item.name}</p>
              </div>

              <div className="price-div">
                <p className="item-name-p my-3">Price</p>
                <p className="item-value-p">$ {item.price} (Per KG)</p>
              </div>
              <div className="quantity-div">
                <p className="item-name-p my-3">Quantity</p>
                <p className="item-value-p">{item.avlQuantity} KG</p>
              </div>
            </div>

            <div className="single-item-top">
              <hr />
              <p className="text" style={{ textAlign: "center" }}>
                {item.description}{" "}
              </p>
            </div>

            <div className="single-item-bottom">
              <button
                onClick={() => {
                  navigate(`/home/${item._id}`);
                }}
                className="update-btn-inventories"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>navigate('/allItems')} className="manage-inventories-btn">
        View All Items
      </button>
    </div>
  );
};

export default Items;
