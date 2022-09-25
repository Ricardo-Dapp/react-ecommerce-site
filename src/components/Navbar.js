import React from "react";
import { Link } from "react-router-dom";
import DiamondIcon from "@mui/icons-material/Diamond";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-light">
      {/* Logo/Return to ProductPage */}

      <div className="container">
        <Link to="/" className="navbar-brand">
          <h3>
            <span>
              <DiamondIcon />
            </span>
            Men's Clothing Co.
          </h3>
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-label="Expand navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="nav"
        >
          {/* Search Button */}

          <form className="d-flex " role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-dark" type="submit">
              <SearchIcon />
            </button>
          </form>

          {/* Navbar list */}

          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/NewPage" className="nav-link">
                New
              </Link>
            </li>

            <li className="nav-item">
              <a href="/FeaturedPage" className="nav-link">
                Featured
              </a>
            </li>
          </ul>
          {/* WishList and Cart containers/images */}

          <div className="p-2">
            <Link to="/CartPage" className="text-dark">
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
