import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { ProductCard } from "../article/products/ProductCard";

const products = [
  {
    name: "Camera",
    img: "/img/products/productCamera.png",
    desc: `Camera`,
    rating: 5,
    price: `$11.70`,
  },
  {
    name: "Play game",
    img: "/img/products/Console.png",
    desc: "Console",
    rating: 4.5,
    price: `$11.70`,
  },
  {
    name: "Tablet as a laptop",
    img: "/img/products/productLaptop.png",
    desc: `Laptop`,
    rating: 1,
    price: `$11.70`,
  },
  {
    name: "Wireless headphones",
    img: "/img/products/Console.png",
    desc: `headphone`,
    rating: 2,
    price: `$11.70`,
  },
];

export const RelatedProduct = () => {
  const [isShown, setIsShown] = React.useState(false);
  return (
    <>
      <Typography
        color="#1B5A7D"
        fontSize="27.38px"
        sx={{ marginTop: "64px", marginBottom: "53px" }}
      >
        Related products
      </Typography>
      <Box>
        <Grid container spacing={2}>
          {products.map((e, i) => {
            return (
              <Grid item xs={3}>
                <ProductCard key={i} data={e} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
