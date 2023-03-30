import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
