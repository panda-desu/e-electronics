import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/scss/pagination";
import "swiper/css";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { MinCarousel } from "./MinCarousel";
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
        {img.map((e) => {
          return (
            <SwiperSlide>
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
                    >
                      Shop Now
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#316887",
                        padding: "18.5px 32px",
                        borderRadius: "20px",
                        fontWeight: "600",
                      }}
                    >
                      View more
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
                        wrapped
                      >
                        Only
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "600px",
                          fontSize: "21.5px",
                          textAlign: "center",
                        }}
                        wrapped
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
