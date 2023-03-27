import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import { Box } from "@mui/system";
import { Hidden, Typography } from "@mui/material";

const img = [
  {
    name: "Speaker",
    img: "/img/products/speaker.png",
    desc: `speaker`,
    count: "6",
  },
  {
    name: "Desktop & laptop",
    img: "/img/products/notebook.png",
    desc: "laptop",
    count: "6",
  },
  {
    name: "DSLR Camera",
    img: "/img/products/Camera.png",
    desc: `camera`,
    count: "6",
  },
];

export const MinCarousel = () => {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
      {img.map((e) => (
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              width: "381.5px",
              height: "147px",
            }}
          >
            <Box>
              <img style={{ objectFit: "inherit" }} src={e.img} alt={e.desc} />
            </Box>
            <Box>
              <Typography>{e.name}</Typography>
              <Typography>{e.count}</Typography>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
