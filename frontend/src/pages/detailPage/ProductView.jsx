import { Box, Checkbox, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CheckIcon from "@mui/icons-material/Check";
import CircleIcon from "@mui/icons-material/Circle";

import RectangleIcon from "@mui/icons-material/Rectangle";

export const ProductView = () => {
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
            <Typography>Size:</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
