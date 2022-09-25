import Footer from "./Footer";
import { Link } from "react-router-dom";
import BannerImage from "../images/menBanner4.jpg";
import ClothesStockOne from "../images/ClothesStock1.jpeg";
import LookOne from "../images/Look3.jpg";
import BlueJeans from "../images/BlueJeans.jpg";
import GreenJacket from "../images/GreenJacket.jpg";
import RedButtonDown from "../images/RedButtonDown.jpeg";

import WhiteShoe from "../images/WhiteShoe.jpeg";

import "../ProductPage.css";

import StoreIcon from "@mui/icons-material/Store";

function ProductPage() {
  return (
    <div>
      {/*Image / Sales Banner */}
      <div className="banner-container bg-light">
        <img
          src={BannerImage}
          className="img-fluid mx-auto d-block banner"
          alt="Model Banner"
        />
        <h1 className="display-1 banner-text text-center">
          New <small className="text-muted">Seasonal Releases</small>
        </h1>
      </div>
      {/*Category link list*/}
      <div className="category-container text-center ">
        <h4 className="py-5">SHOP BY CATEGORY</h4>
        <div className="row">
          <div className="col-md-3">
            <Link to="/ShirtsPage" className="text-dark">
              <img
                src={RedButtonDown}
                className="img-fluid "
                alt="shirt-category"
              />
              <h6>Shirts</h6>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/JeansPage" className="text-dark">
              <img
                src={BlueJeans}
                className="img-fluid "
                alt="shirt-category"
              />
              <h6>Jeans</h6>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/JacketsPage" className="text-dark">
              <img
                src={GreenJacket}
                className="img-fluid  img-center"
                alt="shirt-category"
              />
              <h6>Jackets &amp; Sweaters</h6>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/ShoesPage" className="text-dark">
              <img
                src={WhiteShoe}
                className="img-fluid  img-center"
                alt="shirt-category"
              />
              <h6>Shoes</h6>
            </Link>
          </div>
        </div>
      </div>

      {/*Look Container*/}
      <div className="row look-container p-5">
        <div className=" col-md">
          <img
            src={ClothesStockOne}
            className="img-thumbnail"
            alt="Outfit Showcase"
          />
          <div className="py-3">
            <h5>LOOKING FOR A COMPLETE LOOK?</h5>
            <a href="#" className="text-dark">
              <h5>Discover The Look</h5>
            </a>
          </div>
        </div>
        <div className="col-md">
          <img src={LookOne} className="img-thumbnail" alt="Jack Showcase" />
          <div className="py-3">
            <h5>Bomber Jackets Your Thing?</h5>
            <Link to="/JacketsPage" className="text-dark">
              <h5>I Want All The Jackets</h5>
            </Link>
          </div>
        </div>
      </div>
      {/*Info Container with filler link*/}
      <div className="info-container text-center p-5">
        <h4 className="">SHOP THE EASY WAY</h4>
        <div className="info-card">
          <StoreIcon />
          <h4>Store Pickup</h4>
          <h5>Buy Online. Pick up in store for free.</h5>
          <a href="#" className="text-dark">
            <p>LEARN MORE</p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
