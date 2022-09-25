import React from "react";
import GreenJacket from "../images/GreenJacket.jpg";
import JacketImageTwo from "../images/JacketImage2.PNG";
import JacketImageThree from "../images/JacketImage3.jpg";
import JacketImageFour from "../images/JacketImage4.jpg";

import ProductCardDisplay from "./ProductCardDisplay";

function JacketsPage() {
  const jacketData = [
    {
      name: "Green Jacket",
      price: 40,
      image: GreenJacket,
      new: true,
    },
    {
      name: "Brown Leather Jacket",
      price: 45,
      image: JacketImageTwo,
      new: true,
    },
    {
      name: "Black Motorcycle Jacket",
      price: 45,
      image: JacketImageThree,
      new: false,
    },
    {
      name: "Kineno Jacket",
      price: 40,
      image: JacketImageFour,
      new: false,
    },
  ];
  return (
    <div>
      <h1 className="px-5 display-1">Jackets</h1>

      <ProductCardDisplay data={jacketData} />
    </div>
  );
}

export default JacketsPage;
