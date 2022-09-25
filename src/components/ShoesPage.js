import React from "react";
import ProductCardDisplay from "./ProductCardDisplay";
import ShoesImageOne from "../images/ShoesImage.jpeg";
import ShoesImageTwo from "../images/WhiteShoe.jpeg";
import ShoesImageThree from "../images/ShoesImage3.jpg";
import ShoesImageFour from "../images/ShoesImage4.jpg";

function ShoesPage() {
  const shoesData = [
    {
      name: "Nike Grey Shoes",
      price: 60,
      image: ShoesImageOne,
      new: true,
    },
    {
      name: "White Shoes",
      price: 75,
      image: ShoesImageTwo,
      new: false,
    },
    {
      name: "Black Casual Shoes",
      price: 75,
      image: ShoesImageThree,
      new: false,
    },
    {
      name: "Running Shoes",
      price: 80,
      image: ShoesImageFour,
      new: true,
    },
  ];
  return (
    <div>
      <h1 className="px-5 display-1">Shoes</h1>

      <ProductCardDisplay data={shoesData} />
    </div>
  );
}

export default ShoesPage;
