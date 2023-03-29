import { Box, Typography } from "@mui/material";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";

// user comments hesgiin carousel iin json
const users = [
  {
    name: "Savannah Nguyen",
    img: "/img/usersProfile/Ellipse1.png",
    comments: `Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus 
      faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.`,
  },
  {
    name: "Esther Howard",
    img: "/img/usersProfile/Ellipse3.png",
    comments: `Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus 
    faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.`,
  },
  {
    name: "Esther Howard",
    img: "/img/usersProfile/Ellipse2.png",
    comments: `Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus 
      faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.`,
  },
  {
    name: "Savannah Nguyen",
    img: "/img/usersProfile/Ellipse1.png",
    comments: `Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus 
      faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.`,
  },
  {
    name: "Esther Howard",
    img: "/img/usersProfile/Ellipse3.png",
    comments: `Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus 
    faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.`,
  },
  {
    name: "Esther Howard",
    img: "/img/usersProfile/Ellipse2.png",
    comments: `Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus 
      faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.`,
  },
];

// dood hesgiin logo

const logos = [
  {
    img: "img/logos/brand-8.png",
  },
  {
    img: "img/logos/brand-4.png",
  },
  {
    img: "img/logos/brand-5.png",
  },
  {
    img: "img/logos/brand-6.png",
  },
  {
    img: "img/logos/brand-7.png",
  },
];

export const Comments = () => {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  return (
    <>
      {/* deed taliin durvuljin nershiliin mddgue xD */}
      <Box
        className="container"
        sx={{
          bgcolor: "#E2F4FF",
          marginTop: "65px",
          borderRadius: "20px",
          padding: "44px 118px",
          display: "flex",
          gap: "104px",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <img src="/img/icons/box-tick.svg" alt="" />
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", color: "#003F62" }}
            >
              Free delivery
            </Typography>
            <Typography sx={{ color: "#003F62", fontWeight: "400" }}>
              on order above $50,00
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <img src="/img/icons/crown.png" alt="" />
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", color: "#003F62" }}
            >
              Best quality
            </Typography>
            <Typography sx={{ color: "#003F62", fontWeight: "400" }}>
              best quality in low price
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <img src="/img/icons/Vector.png" alt="" />
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", color: "#003F62" }}
            >
              1 year warranty
            </Typography>
            <Typography sx={{ color: "#003F62", fontWeight: "400" }}>
              Avaliable warranty
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* goliin hesgiin userComments swiper */}
      <Box
        className="container"
        sx={{ marginTop: "75px", display: "flex", gap: "10px" }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={true}
          spaceBetween={10}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          {users.map((e, index) => (
            <SwiperSlide key={e} virtualIndex={index}>
              <Box
                sx={{
                  py: "16.8px",
                  paddingLeft: "16.8px",
                  paddingRight: "20.56px",
                  border: "1px solid #BABABA",
                  borderRadius: "20px",
                  width: "432.8px",
                  height: "242px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img className="userBorder" src={e.img} alt="" />
                  <Typography variant="h6" sx={{ color: "#003F62" }}>
                    {e.name}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    bgcolor: "#E2F4FF",
                    padding: "11.3px 26.6px",
                    fontSize: "13.17px",
                    fontWeight: "400",
                    borderRadius: "18px",
                  }}
                >
                  {e.comments}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {/* dood taliin  hesgiin logo */}
      <Box
        className="container"
        sx={{
          marginTop: "121px",
          bgcolor: "#E2F4FF",
          padding: "47.4px 32.5px",
          display: "flex",
          alignItems: "center",
          gap: "55.3px",
        }}
      >
        {logos.map((e) => {
          return <img src={e.img} alt="" />;
        })}
      </Box>
    </>
  );
};
