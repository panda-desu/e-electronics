import { Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/CartPage";
import { MainPage } from "./pages/MainPage";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
