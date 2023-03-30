import * as React from "react";
import { Box, Button, Typography, Rating } from "@mui/material";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "swiper/css";
import "swiper/css/pagination";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ProductCard } from "./ProductCard";
import { Stack } from "@mui/system";
const ButtonStyle = {
  color: "#1B5A7D",
  border: "1px solid #1B5A7D",
  borderRadius: "20px",
  textTransform: "none",
  width: "139px",
  height: "45px",
  fontWeight: "500px",
  marginLeft: "13px",
};

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
  {
    name: "Camera",
    img: "/img/products/productCamera.png",
    desc: `Camera`,
    rating: 3,
    price: `$11.70`,
  },
  {
    name: "Play game",
    img: "/img/products/Console.png",
    desc: "Console",
    rating: 4,
    price: `$11.70`,
  },
  {
    name: "Tablet as a laptop",
    img: "/img/products/productLaptop.png",
    desc: `Laptop`,
    rating: 0,
    price: `$11.70`,
  },
  {
    name: "Wireless headphones",
    img: "/img/products/Console.png",
    desc: `headphone`,
    rating: 0,
    price: `$11.70`,
  },
  {
    name: "Camera",
    img: "/img/products/productCamera.png",
    desc: `Camera`,
    rating: 0,
    price: `$11.70`,
  },
  {
    name: "Play game",
    img: "/img/products/Console.png",
    desc: "Console",
    rating: 5,
    price: `$11.70`,
  },
  {
    name: "Tablet as a laptop",
    img: "/img/products/productLaptop.png",
    desc: `Laptop`,
    rating: 4,
    price: `$11.70`,
  },
  {
    name: "Wireless headphones",
    img: "/img/products/Console.png",
    desc: `headphone`,
    rating: 1,
    price: `$11.70`,
  },
  {
    name: "Camera",
    img: "/img/products/productCamera.png",
    desc: `Camera`,
    rating: 1,
    price: `$11.70`,
  },
  {
    name: "Play game",
    img: "/img/products/Console.png",
    desc: "Console",
    rating: 1,
    price: `$11.70`,
  },
  {
    name: "Tablet as a laptop",
    img: "/img/products/productLaptop.png",
    desc: `Laptop`,
    rating: 0,
    price: `$11.70`,
  },
  {
    name: "Wireless headphones",
    img: "/img/products/Console.png",
    desc: `headphone`,
    rating: 4,
    price: `$11.70`,
  },
];

export const PopularProducts = () => {
  const [value, setValue] = React.useState(products.rating);

  return (
    <>
      <Box className="container" sx={{ paddingTop: "82px" }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ marginBottom: "45px" }}>
            <Typography
              variant="h4"
              sx={{ color: "#1B5A7D", fontWeight: "600" }}
            >
              Popular Product
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box>
            <Button variant={"outlined"} sx={ButtonStyle}>
              Cameras
            </Button>
            <Button variant={"outlined"} sx={ButtonStyle}>
              Laptops
            </Button>
            <Button variant={"outlined"} sx={ButtonStyle}>
              Tablets
            </Button>
            <Button variant={"outlined"} sx={ButtonStyle}>
              Mouse
            </Button>
          </Box>
        </Box>
        <Box>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={4} // or 'auto'
            slidesPerGroup={3}
            slidesPerColumnFill="row"
            pagination={{ clickable: true }}
            className="products-slider"
          >
            {products.map((e, i) => {
              if (i % 2 === 0) {
                const next = products[i + 1];

                return (
                  <SwiperSlide key={i}>
                    <Stack sx={{ gap: 3 }}>
                      <ProductCard data={e} />
                      {next && <ProductCard data={e} />}
                    </Stack>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};
