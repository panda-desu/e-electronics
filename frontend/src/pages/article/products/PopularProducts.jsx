import * as React from "react";
import { Box, Button, Typography, Rating } from "@mui/material";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "swiper/css";
import "swiper/css/pagination";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { bgcolor } from "@mui/system";
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

const favoriteBtnStyle = [
  {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: "28px",
    right: "15px",
    width: "27.5px",
    borderRadius: "50%",
    height: "27.5px",
    bgcolor: "#B3D4E5",
    display: "flex",
  },
];

const ShoppingCartBtnStyle = [
  {
    width: "45px",
    height: "42px",
    bgcolor: "#eda415",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    color: "#fff",
  },
];

export const PopularProducts = () => {
  const [value, setValue] = React.useState(0);

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
          >
            {products.map((e, i) => {
              if (i % 2 === 0) {
                const next = products[i + 1];

                return (
                  <SwiperSlide>
                    <Box
                      sx={{
                        border: "1px solid #B6B6B6",
                        width: "308.83px",
                        height: "308.83px",
                        borderRadius: 5,
                        py: "16px",
                        position: "relative",
                        px: "13.2px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img src={e.img} alt={e.desc} />
                      </Box>
                      <Box sx={favoriteBtnStyle}>
                        <Button
                          sx={{
                            padding: 0,
                            color: "#292d32",
                            "&:hover": {
                              bgcolor: "none",
                              background: "none",
                            },
                          }}
                          onSubmit
                        >
                          <FavoriteBorderIcon
                            sx={{ width: "12.04px", height: "12.04px" }}
                          />
                        </Button>
                      </Box>
                      <Typography variant="h6" sx={{ color: "#003F62" }}>
                        {e.name}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: "15px",
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{ color: "#4A4A4A", fontWeight: "600" }}
                          >
                            {e.price}
                          </Typography>
                          <Rating
                            name="half-rated"
                            precision={0.5}
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Box>
                        <Box sx={ShoppingCartBtnStyle}>
                          <ShoppingCartOutlinedIcon />
                        </Box>
                      </Box>
                    </Box>
                    {next && (
                      <Box
                        sx={{
                          marginTop: "30.5px",
                          border: "1px solid #B6B6B6",
                          width: "308.83px",
                          height: "308.83px",
                          borderRadius: 5,
                          py: "16px",
                          position: "relative",
                          px: "13.2px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <img src={e.img} alt={e.desc} />
                        </Box>
                        <Box sx={favoriteBtnStyle}>
                          <Button
                            sx={{
                              padding: 0,
                              color: "#292d32",
                              "&:hover": {
                                background: "none",
                                bgcolor: "none",
                              },
                            }}
                            onSubmit
                          >
                            <FavoriteBorderIcon
                              sx={{ width: "12.04px", height: "12.04px" }}
                            />
                          </Button>
                        </Box>
                        <Typography variant="h6" sx={{ color: "#003F62" }}>
                          {e.name}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "15px",
                          }}
                        >
                          <Box>
                            <Typography
                              sx={{ color: "#4A4A4A", fontWeight: "600" }}
                            >
                              {e.price}
                            </Typography>
                            <Rating
                              name="half-rated"
                              precision={0.5}
                              value={value}
                              onChange={(event, newValue) => {
                                setValue(newValue);
                              }}
                            />
                          </Box>
                          <Box sx={ShoppingCartBtnStyle}>
                            <ShoppingCartOutlinedIcon />
                          </Box>
                        </Box>
                      </Box>
                    )}
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
