import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Typography } from "@mui/material";
import { Pagination, Autoplay } from "swiper";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import "swiper/scss/pagination";
import "swiper/css";
const img = [
  {
    name: "Canon camera",
    img: "/img/products/Camera.png",
    desc: `camera`,
    price: "$89",
  },
  {
    name: "Canon camera",
    img: "/img/products/Camera.png",
    desc: "camera",
    price: "$89",
  },
  {
    name: "Canon camera",
    img: "/img/products/Camera.png",
    desc: `camera`,
    price: "$89",
  },
];

export const BigCarousel = () => {
  const navigate = useNavigate();
  const navigateToCartPage = () => {
    navigate("/cart");
  };
  return (
    <Box className="container" sx={{ px: "113px", py: "37px" }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        autoplay={true}
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {img.map((e, i) => {
          return (
            <SwiperSlide key={i}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "700",
                      color: "#1B5A7D",
                      width: "177px",
                    }}
                  >
                    {e.name}
                  </Typography>
                  <Box sx={{ marginTop: "19px" }}>
                    <Button
                      variant="contained"
                      sx={{
                        marginRight: "21px",
                        padding: "18.5px 32px",
                        borderRadius: "20px",
                        fontWeight: "600",
                        color: "#fff",
                        bgcolor: "#EDA415",
                      }}
                      onClick={navigateToCartPage}
                    >
                      Shop Now
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        padding: "18.5px 32px",
                        borderRadius: "20px",
                        fontWeight: "600",
                      }}
                    >
                      <Link className="link-decoration" to="/product">
                        View more
                      </Link>
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{
                    position: "relative",
                    width: 331,
                    height: 356,
                    marginRight: 5,
                  }}
                >
                  <img
                    sx={{ width: "100%", objectFit: "contain" }}
                    src={e.img}
                    alt={e.desc}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      width: "120px",
                      height: "114px",
                      bottom: "52px",
                      right: -31,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: "#EDA415",
                      color: "#fff",
                      borderRadius: 50,
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{ fontWeight: "600px", fontSize: "21.5px" }}
                      >
                        Only
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "600px",
                          fontSize: "21.5px",
                          textAlign: "center",
                        }}
                      >
                        $89
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};
