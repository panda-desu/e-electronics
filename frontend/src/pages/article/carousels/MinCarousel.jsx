import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/swiper-bundle.min.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const img = [
  {
    name: "Speaker",
    img: "/img/products/speaker.png",
    desc: `speaker`,
    count: "(6 items)",
  },
  {
    name: "Desktop & laptop",
    img: "/img/products/notebook.png",
    desc: "laptop",
    count: "(6 items)",
  },
  {
    name: "DSLR Camera",
    img: "/img/products/DSLR.png",
    desc: `camera`,
    count: "(6 items)",
  },
  {
    name: "Speaker",
    img: "/img/products/speaker.png",
    desc: `speaker`,
    count: "(6 items)",
  },
  {
    name: "Desktop & laptop",
    img: "/img/products/notebook.png",
    desc: "laptop",
    count: "(6 items)",
  },
  {
    name: "DSLR Camera",
    img: "/img/products/DSLR.png",
    desc: `camera`,
    count: "(6 items)",
  },
];

export const MinCarousel = () => {
  return (
    <Box className="container" sx={{ py: "48px", px: "20px" }}>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={true}
        navigation
      >
        {img.map((e) => (
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                width: "381.5px",
                height: "147px",
                border: "1px solid #000",
                borderRadius: "20px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ padding: "26px 43px", objectFit: "cover" }}>
                <img style={{}} src={e.img} alt={e.desc} />
              </Box>
              <Box sx={{ py: "37px", paddingRight: "1em" }}>
                <Typography
                  sx={{
                    color: "#1B5A7D",
                    fontSize: "23.38px",
                    fontWeight: "600",
                  }}
                >
                  {e.name}
                </Typography>
                <Typography
                  sx={{
                    color: "#1B5A7D",
                    fontSize: "18.85px",
                    fontWeight: "500px",
                  }}
                >
                  {e.count}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
