import { Box, Typography, Breadcrumbs } from "@mui/material";
import { Footer } from "./Footer/Footer";
import { NavBar } from "./navbar/NavBar";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { ProductView } from "./detailPage/ProductView";
import { ProductComment } from "./detailPage/ProductComment";
import { RelatedProduct } from "./detailPage/RelatedProduct";

export const ProductPage = () => {
  const breadCrumbs = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "All categories",
      link: "/product",
    },
    {
      label: "",
    },
  ];
  return (
    <>
      <NavBar />

      <Box className="container">
        <BreadCrumbs items={breadCrumbs} />
        <ProductView />
        <ProductComment />
        <RelatedProduct />
      </Box>

      <Footer />
    </>
  );
};
