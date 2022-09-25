import React from "react";
import ProductCardDisplay from "./ProductCardDisplay";

// shirts
import RedButtonDown from "../images/RedButtonDown.jpeg";
import ShirtImageThree from "../images/ShirtImage3.jpeg";
import ShirtImageFour from "../images/ShirtImage4.jpeg";
import ShirtImageFive from "../images/ShirtImage5.jpg";

export default function ShirtsPage() {
  const shirtData = [
    {
      name: "Red Button Down",
      price: 25,
      image: RedButtonDown,
      new: false,
    },
    {
      name: "No Tuck Shirt",
      price: 20,
      image: ShirtImageThree,
      new: true,
    },
    {
      name: "White Button Down",
      price: 25,
      image: ShirtImageFour,
      new: true,
    },
    {
      name: "Light Gray T-Shirt",
      price: 25,
      image: ShirtImageFive,
      new: false,
    },
  ];
  return (
    <div>
      <h1 className="px-5 display-1">Shirts</h1>

      <ProductCardDisplay data={shirtData} />
    </div>
  );
}
