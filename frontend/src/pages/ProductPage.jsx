import { Box, Typography, Breadcrumbs } from "@mui/material";
import { Footer } from "./Footer/Footer";
import { NavBar } from "./navbar/NavBar";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { ProductView } from "./detailPage/ProductView";

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
      </Box>
      <Footer />
    </>
  );
};
