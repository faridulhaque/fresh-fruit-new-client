import React from "react";
import { Alert } from "react-st-modal";
import "./securedRoutes.css";

const AddNewItem = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.product.value;
    const price = e.target.price.value;
    const avlQuantity = e.target.avlQuantity.value;
    const minQuantity = e.target.minQuantity.value;
    const description = e.target.description.value;
    const img = e.target.img.value;
    const newData = {
      name,
      price,
      avlQuantity,
      minQuantity,
      description,
      img,
    };
    if (!img.includes("http")) {
      return Alert("Please add valid URL for image!", "Error!");
    }
    if (price <= 0 || avlQuantity <= 0 || minQuantity <= 0) {
      handleError();
    } else {
      console.log(newData);
      fetch("http://localhost:5000/tools", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((data) => {
          addingAlert();
        });
    }
  };
  const handleError = async () => {
    await Alert(
      "Please input a number above 0 for price and quantities",
      "Opps!"
    );
    window.location.reload(false);
  };
  const addingAlert = async () => {
    await Alert("well done", "Item successfully added");
    window.location.reload(false);
  };
  return (
    <div>
      <h2 className="text-center text-3xl mt-5">Add new Product</h2>
      <div className="addNewProduct-parent">
        <div className="form-wrapper-anp">
          <form onSubmit={handleSubmit} className="">
            <div className="form-anp">
              <div className="input-group-anp">
                <label className="label-anp" htmlFor="name">
                  Product name
                </label>
                <br />
                <input
                  required
                  className="input-anp"
                  name="product"
                  type="text"
                />
              </div>
              <div className="input-group-anp">
                <label className="label-anp" htmlFor="name">
                  Price
                </label>
                <br />
                <input
                  required
                  className="input-anp"
                  name="price"
                  type="text"
                />
              </div>
              <div className="input-group-anp">
                <label className="label-anp" htmlFor="name">
                  Available Quantity
                </label>
                <br />
                <input
                  required
                  name="avlQuantity"
                  className="input-anp"
                  type="number"
                />
              </div>
              <div className="input-group-anp">
                <label className="label-anp" htmlFor="name">
                  Minimum quantity
                </label>
                <br />
                <input
                  required
                  name="minQuantity"
                  className="input-anp"
                  type="number"
                />
              </div>
              <div className="input-group-anp">
                <label className="label-anp" htmlFor="name">
                  Description
                </label>
                <br />
                <textarea
                  required
                  name="description"
                  className="input-anp description-anp"
                  type="text"
                />
              </div>
              <div className="input-group-anp">
                <label className="label-anp" htmlFor="name">
                  Img Url
                </label>
                <br />
                <input required name="img" className="input-anp" type="text" />
              </div>
            </div>
            <input
              className="input-anp-btn mt-10 btn-primary btn-block btn required"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewItem;
