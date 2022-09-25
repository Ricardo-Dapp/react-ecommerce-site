import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { removeFromCart } from "../features/CartSlice";

function CartPage() {
  const dispatch = useDispatch();
  let cartItems = useSelector((state) => state.cart.value);
  const [subTotal, setSubTotal] = useState(0);

  // loops through the cartItems array and gets the price of each item
  // and adds it to the sub total.
  const SubTotalCounter = () => {
    for (let i = 0; i < cartItems.length; i++) {
      setSubTotal((prevSubTotal) => prevSubTotal + cartItems[i].price);
    }
  };

  useEffect(() => {
    // resets the subTotal to 0 and then call the function.
    // use Effect is only called if cartItems is ever updated.
    setSubTotal(0);
    SubTotalCounter();
  }, [cartItems]);

  {
    /*Displays all the items in your cart to the screen and allows you to remove them*/
  }
  const displayCartItems = cartItems.map((item, index) => (
    <div className="card mb-3 " style={{ maxWidth: "480px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <h6 className="card-text">${item.price}</h6>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                dispatch(removeFromCart(index));
              }}
            >
              <RemoveShoppingCartIcon />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="row px-5">
        <h1 className="px-5 display-1">Cart</h1>
        <div className="col-md-5 text-center">
          {cartItems.length > 0 ? (
            displayCartItems
          ) : (
            <p className="fs-1 fw-lighter">Your Cart is empty</p>
          )}
        </div>
        <div className="col-md-7">
          <h4>Check Out</h4>
          <h6>Sub Total: ${subTotal}</h6>
          <h6>Tax: 10%</h6>
          <h4>Total: ${subTotal * 0.1 + subTotal}</h4>

          {/*Form info */}
          <form class="needs-validation" novalidate>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationCustom01">First name</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom01"
                  placeholder="First name"
                  required
                />
                <div class="invalid-feedback">Please provide a valid name.</div>
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationCustom01">Last name</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom02"
                  placeholder="Last name"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div class="col-md-4 mb-3"></div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationCustom03">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  placeholder="City"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="validationCustom04">State</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom04"
                  placeholder="State"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="validationCustom05">Zip</label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom05"
                  placeholder="Zip"
                  required
                />
                <div class="invalid-feedback">Please provide a valid zip.</div>
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label class="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <button className="btn btn-outline-dark" type="submit">
              Check out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
