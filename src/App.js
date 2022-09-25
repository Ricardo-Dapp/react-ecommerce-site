import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ShirtsPage from "./components/ShirtsPage";
import ProductPage from "./components/ProductPage";
import JacketsPage from "./components/JacketsPage";
import ShoesPage from "./components/ShoesPage";
import JeansPage from "./components/JeansPage";
import CartPage from "./components/CartPage";
import NewPage from "./components/NewPage";
import FeaturedPage from "./components/FeaturedPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
        <Route path="/ShirtsPage" element={<ShirtsPage />}></Route>
        <Route path="/JacketsPage" element={<JacketsPage />}></Route>
        <Route path="/ShoesPage" element={<ShoesPage />}></Route>
        <Route path="/JeansPage" element={<JeansPage />}></Route>
        <Route path="/CartPage" element={<CartPage />}></Route>
        <Route path="/NewPage" element={<NewPage />}></Route>
        <Route path="/FeaturedPage" element={<FeaturedPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
