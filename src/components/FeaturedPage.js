import React from "react";
import ProductCardDisplay from "./ProductCardDisplay";
import JeansImageTwo from "../images/JeansImage2.jpg";
import JacketImageThree from "../images/JacketImage3.jpg";
import ShirtImageFive from "../images/ShirtImage5.jpg";
import ShoesImageTwo from "../images/WhiteShoe.jpeg";

function FeaturedPage() {
  const newItemsData = [
    {
      name: "Black Denim Jeans",
      price: 45,
      image: JeansImageTwo,
      new: false,
    },
    {
      name: "Black Motorcycle Jacket",
      price: 45,
      image: JacketImageThree,
      new: false,
    },
    {
      name: "Light Gray T-Shirt",
      price: 25,
      image: ShirtImageFive,
      new: false,
    },
    {
      name: "White Shoes",
      price: 75,
      image: ShoesImageTwo,
      new: false,
    },
  ];
  return (
    <div>
      <h1 className="px-5 display-1">Featured</h1>

      <ProductCardDisplay data={newItemsData} />
    </div>
  );
}

export default FeaturedPage;
