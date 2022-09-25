import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="row bg-light">
      <div className="col-md px-4">
        <InstagramIcon />
        <PinterestIcon />
        <FacebookIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </div>

      {/*Filler links*/}
      <div className="col-md">
        <h6>StoreLocator</h6>
        <a href="#" className="text-dark">
          <p>Find a Store</p>
        </a>
      </div>

      <div className="col-md">
        <h6>Gift Cards</h6>
        <a href="#" className="text-dark">
          <p>Buy Gift Cards</p>
        </a>
        <a href="#" className="text-dark">
          <p>Check your Balance</p>
        </a>
      </div>

      <div className="col-md">
        <h6>Popular Pages</h6>
        <a href="#" className="text-dark">
          <p>Men's Shirts</p>
        </a>
        <a href="#" className="text-dark">
          <p>Complete Looks</p>
        </a>
        <a href="#" className="text-dark">
          <p>Bomber Jackets</p>
        </a>
      </div>

      <div className="col-md">
        <h6>Customer Service</h6>
        <a href="#" className="text-dark">
          <p>Contact Us</p>
        </a>
        <a href="#" className="text-dark">
          <p>Help</p>
        </a>
        <a href="#" className="text-dark">
          <p>Shipping Policy</p>
        </a>
        <a href="#" className="text-dark">
          <p>Return Policy</p>
        </a>
      </div>

      <small className="text-center">
        @2022 Men's Clothing Co. All rights reserved.
      </small>
    </footer>
  );
}
export default Footer;
