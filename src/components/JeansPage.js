import React from "react";
import ProductCardDisplay from "./ProductCardDisplay";
import BlueJeans from "../images/BlueJeans.jpg";
import JeansImageOne from "../images/JeansImage1.jpeg";
import JeansImageTwo from "../images/JeansImage2.jpg";
import JeansImageThree from "../images/JeansImage3.jpg";

function JeansPage() {
  const JeansData = [
    {
      name: " Medium Wash Denim Jeans",
      price: 60,
      image: BlueJeans,
      new: false,
    },
    {
      name: "Light Wash Denim Jeans",
      price: 45,
      image: JeansImageOne,
      new: true,
    },
    {
      name: "Black Denim Jeans",
      price: 45,
      image: JeansImageTwo,
      new: false,
    },
    {
      name: "Dark Wash Denim Jeans",
      price: 60,
      image: JeansImageThree,
      new: false,
    },
  ];
  return (
    <div>
      <h1 className="px-5 display-1">Jeans</h1>

      <ProductCardDisplay data={JeansData} />
    </div>
  );
}

export default JeansPage;
