import React from "react";
import ProductCardDisplay from "./ProductCardDisplay";
import JeansImageOne from "../images/JeansImage1.jpeg";
import GreenJacket from "../images/GreenJacket.jpg";
import JacketImageTwo from "../images/JacketImage2.PNG";
import ShirtImageThree from "../images/ShirtImage3.jpeg";
import ShirtImageFour from "../images/ShirtImage4.jpeg";
import ShoesImageOne from "../images/ShoesImage.jpeg";
import ShoesImageFour from "../images/ShoesImage4.jpg";
export default function NewPage() {
  const newItemsData = [
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
      name: "Light Wash Denim Jeans",
      price: 45,
      image: JeansImageOne,
      new: true,
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
      name: "Nike Grey Shoes",
      price: 60,
      image: ShoesImageOne,
      new: true,
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
      <h1 className="px-5 display-1">New Releases</h1>

      <ProductCardDisplay data={newItemsData} />
    </div>
  );
}
