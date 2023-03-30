import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";

const topProducts = [
  {
    name: "Who avoids a pain that produces?",
    img: "/img/products/maybeEarPod.png",
    date: "22 oct 2021",
    comment: `Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.`,
    madeby: `By spacing tech`,
  },
  {
    name: "Who avoids a pain that produces?",
    img: "/img/products/Processor.png",
    date: "22 oct 2021",
    comment: `Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.`,
    madeby: `By spacing tech`,
  },
  {
    name: "Who avoids a pain that produces?",
    img: "/img/products/maybeEarPod.png",
    date: "22 oct 2021",
    comment: `Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.`,
    madeby: `By spacing tech`,
  },
  {
    name: "Who avoids a pain that produces?",
    img: "/img/products/Processor.png",
    date: "22 oct 2021",
    comment: `Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.`,
    madeby: `By spacing tech`,
  },
  {
    name: "Who avoids a pain that produces?",
    img: "/img/products/maybeEarPod.png",
    date: "22 oct 2021",
    comment: `Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.`,
    madeby: `By spacing tech`,
  },
  {
    name: "Who avoids a pain that produces?",
    img: "/img/products/Processor.png",
    date: "22 oct 2021",
    comment: `Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.`,
    madeby: `By spacing tech`,
  },
];

export const LatestNews = () => {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  return (
    <>
      <Box className="container" sx={{ marginTop: "101px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#1B5A7D", fontWeight: "600px" }}
          >
            Latest News
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#1B5A7D", fontWeight: "500px" }}
          >
            View all
          </Typography>
        </Box>
        <Box sx={{ marginTop: "52px" }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            autoplay={true}
            pagination={{ clickable: true }}
            slidesPerView={2}
            className="products-slider"
          >
            {topProducts.map((e, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    border: "1px solid #c8c8c8",
                    color: "#1B5A7D",
                    borderRadius: "20px",
                    padding: "34.5px 16.5px",
                    display: "flex",
                    gap: "34px",
                  }}
                >
                  <img src={e.img} alt="" />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        border: "1px solid #D4d4d4",
                        borderRadius: "20px",
                        padding: "5px 18px",
                        width: "147px",
                        height: "41px",
                      }}
                    >
                      {e.date}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "23px",
                        color: "#1B5A7D",
                        fontWeight: "600",
                        paddingRight: "35px",
                        marginTop: "9px",
                      }}
                    >
                      {e.name}
                    </Typography>
                    <Typography sx={{ marginTop: "19px", color: "#003F62" }}>
                      {e.comment}
                    </Typography>
                    <Typography sx={{ marginTop: "43px", color: "#003F62" }}>
                      {e.madeby}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
};
