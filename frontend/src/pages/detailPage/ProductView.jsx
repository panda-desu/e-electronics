import { Box, Button, Checkbox, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CheckIcon from "@mui/icons-material/Check";
import CircleIcon from "@mui/icons-material/Circle";
import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
const sizeButtonStyle = [
  {
    bgcolor: "#EEE",
    color: "#434343",
    borderRadius: "0",
    marginLeft: "19px",
    "&:hover": { bgcolor: "#EEEE" },
  },
];

const buyButtonsStyle = [
  {
    bgcolor: "#EDA415",
    color: "#fff",
    padding: "19.5px 56px",
    borderRadius: "32px",
    marginRight: "29px",
  },
];

export const ProductView = () => {
  const [count, setCount] = useState(1);

  const minusProductCount = () => {
    setCount(count - 1);
  };
  const plusProductCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Box sx={{ marginTop: "22px", display: "flex", gap: "48px" }}>
        <Box>
          <Box component="img" alt="" src="/img/products/xboxConsole.png" />
          <Box sx={{ display: "flex", marginTop: "25px", gap: "19px" }}>
            <Box component="img" alt="" src="/img/products/xboxConsoleB.png" />
            <Box component="img" alt="" src="/img/products/xboxConsoleB.png" />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{ borderBottom: "1px solid #BDBDBD", paddingBottom: "1rem" }}
          >
            <Typography fontSize={"29.7px"} color={"#003F62"}>
              Play game
            </Typography>
            <Typography
              sx={{
                color: "#4A4A4A",
                fontWeight: "600",
                fontSize: "29.7px",
                marginBottom: "1rem",
              }}
            >
              $11.70
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "25.4px",
                marginBottom: "1.7rem",
              }}
            >
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
                emptyIcon={<StarIcon style={{ opacity: 0.6 }} />}
              />
              <Typography color={"#4a4a4a"} fontSize={"13.19px"}>
                No reviews
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography fontSize={"18.17px"} color={"#232323"}>
                Availability:
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#30BD57",
                  marginLeft: "19.1px",
                }}
              >
                <CheckIcon /> in Stock
              </Typography>
            </Box>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                color: "#5D5D5D",
                marginTop: "10px",
              }}
            >
              Hurry up! only 34 product left in stock!
            </Typography>
          </Box>
          <Box sx={{ marginTop: "40px" }}>
            <Typography variant="h6" color={"#232323"}>
              Color:
              <Checkbox
                icon={<CircleIcon sx={{ color: "#D0EC48", p: "1px" }} />}
                checkedIcon={
                  <CircleIcon
                    sx={{
                      border: "1px solid #afafaf",
                      borderRadius: "50%",
                      color: "#D0EC48",
                      p: "1px",
                    }}
                  />
                }
              />
              <Checkbox
                icon={<CircleIcon sx={{ color: "#565656", p: "1px" }} />}
                checkedIcon={
                  <CircleIcon
                    sx={{
                      border: "1px solid #afafaf",
                      borderRadius: "50%",
                      p: "1px",
                      color: "#565656",
                    }}
                  />
                }
              />
            </Typography>
            <Typography
              sx={{ marginTop: "26px" }}
              variant="h6"
              color={"#232323"}
            >
              Size:
              <Button sx={sizeButtonStyle}>30</Button>
              <Button sx={sizeButtonStyle}>56</Button>
              <Button sx={sizeButtonStyle}>42</Button>
              <Button sx={sizeButtonStyle}>48</Button>
            </Typography>
            <Box
              sx={{ display: "flex", marginTop: "26px", alignItems: "center" }}
            >
              <Typography variant="h6" color={"#232323"}>
                Quantity :
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "19px",
                }}
              >
                <button
                  className="quantity-button-style"
                  onClick={minusProductCount}
                >
                  -
                </button>
                <Typography
                  sx={{
                    bgcolor: "#eee",
                    width: "63px",
                    height: "32px",
                    textAlign: "center",
                    paddingTop: "4px",
                  }}
                >
                  {count}
                </Typography>
                <button
                  className="quantity-button-style"
                  onClick={plusProductCount}
                >
                  +
                </button>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "42px",
                borderBottom: "1px solid #bdbdbd",
                paddingBottom: "25px",
              }}
            >
              <Button sx={buyButtonsStyle}>Add to cart</Button>
              <Button sx={buyButtonsStyle}>Buy it now</Button>
              <Checkbox
                sx={{ bgcolor: "#eee", height: "73px", width: "74px" }}
                icon={<FavoriteBorder sx={{ fontSize: "2.4rem" }} />}
                checkedIcon={
                  <Favorite sx={{ fontSize: "2.4rem", color: "red" }} />
                }
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "19px",
                marginTop: "15px",
              }}
            >
              <Typography color="#232323" fontSize="18.17px">
                Sku:
              </Typography>
              <Typography color="#434343" fontSize="18.17px">
                01133-9-9
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "31px",
                display: "flex",
                alignItems: "center",
                gap: "19px",
              }}
            >
              <Typography color="#232323" fontSize="18.17px">
                Category:
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: "13.6px" }}
              >
                <Typography color="#434343" fontSize="13.17px">
                  20% off,
                </Typography>
                <Typography color="#434343" fontSize="13.17px">
                  49% off,
                </Typography>
                <Typography color="#434343" fontSize="13.17px">
                  Alex remote
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ marginTop: "31px", display: "flex", alignItems: "center" }}
            >
              <Typography color="#232323" fontSize="18.17px">
                Share:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "21.3px",
                  gap: "41px",
                }}
              >
                <GoogleIcon />
                <FacebookIcon />
                <WhatsAppIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
