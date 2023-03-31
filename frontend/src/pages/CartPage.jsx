import { Box } from "@mui/system";
import { Footer } from "./Footer/Footer";
import { NavBar } from "./navbar/NavBar";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { PaymentSection } from "./cart/PaymentSection";
export const CartPage = () => {
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
      label: "Cart",
    },
  ];
  return (
    <>
      <NavBar />
      <Box className="container">
        <BreadCrumbs items={breadCrumbs} />
        <PaymentSection />
      </Box>
      <Footer />
    </>
  );
};
