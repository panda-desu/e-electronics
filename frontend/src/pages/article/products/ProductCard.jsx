import { Button, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { red } from "@mui/material/colors";

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

export const ProductCard = ({ data }) => {
  const [value, setValue] = useState(data.rating);
  return (
    <>
      <Box
        sx={{
          border: "1px solid #B6B6B6",
          borderRadius: 5,
          py: "16px",
          position: "relative",
          px: "13.2px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: 0,
            paddingBottom: "75%",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt={data.desc}
            src={data.img}
          />
        </Box>
        <Box sx={favoriteBtnStyle}>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            sx={{
              width: "12.04px",
              height: "12.04px",
              "&.Mui-checked": {
                color: red[700],
              },
            }}
          />
        </Box>
        <Typography variant="h6" sx={{ color: "#003F62" }}>
          {data.name}
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
            <Typography sx={{ color: "#4A4A4A", fontWeight: "600" }}>
              {data.price}
            </Typography>
            <Rating
              name="half-rating-read"
              precision={0.5}
              value={value}
              readOnly
            />
          </Box>
          <Box sx={ShoppingCartBtnStyle}>
            <ShoppingCartOutlinedIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
};
