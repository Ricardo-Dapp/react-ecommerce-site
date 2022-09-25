import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";

function ProductCardDisplay(props) {
  const dispatch = useDispatch();

  return (
    <div className="row row-cols-1 row-cols-md-3 justify-content-center  g-4">
      {/*Displays a card for each item in the mapping */}
      {props.data.map((item) => (
        <div
          key={props.name}
          className="card "
          style={{ width: "18rem", marginRight: "10px" }}
        >
          <img src={item.image} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h6 className="card-title">
              {item.new && <small className="text-secondary">New - </small>}
              {item.name}
            </h6>
            <p>${item.price}</p>
            <button
              type="button"
              className="btn btn-outline-dark "
              onClick={() => dispatch(addToCart(item))}
            >
              <AddShoppingCartIcon />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCardDisplay;
