import { Box, Button, Rating, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { borderRadius } from "@mui/system";
const minProductStyle = [
  {
    border: "1px solid #B6B6B6",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "36.4px 21.85px",
  },
];
export const BigProduct = () => {
  return (
    <>
      <Box className="container" sx={{ display: "flex", marginTop: "94px" }}>
        <Box
          sx={{
            border: "1px solid #B6B6B6",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "44.5px 31px",
            marginRight: "50px",
          }}
        >
          <img src="/img/products/BigSpeaker.png" alt="" />
          <Box sx={{ py: "22.9px", paddingRight: "30px" }}>
            <Box>
              <Typography variant="h5" sx={{ color: "#003F62" }}>
                JBL bar 2.1 deep bass
              </Typography>
              <Typography sx={{ my: "17.5px", fontWeight: "600" }}>
                $11,70
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                marginTop: "37px",
                width: "204.5px",
                height: "60px",
                borderRadius: "20px",
                bgcolor: "#87BCD9",
                color: "#000",
                gap: "40px",
                fontWeight: "600",
                textTransform: "none",
              }}
            >
              Add to cart
              <ShoppingCartOutlinedIcon
                sx={{
                  bgcolor: "#eda415",
                  color: "#fff",
                  padding: "3px ",
                  borderRadius: "50%",
                  fontSize: 30,
                }}
              />
            </Button>
          </Box>
        </Box>
        <Box>
          <Box sx={minProductStyle}>
            <img src="/img/products/Console.png" alt="" />
            <Box sx={{ py: "35px", paddingLeft: "50px" }}>
              <Box>
                <Typography variant="h6" sx={{ color: "#003F62" }}>
                  Play Game
                </Typography>
                <Typography sx={{ my: "17.5px", fontWeight: "600" }}>
                  $11,70
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
              </Box>
            </Box>
          </Box>
          <Box sx={minProductStyle} style={{ marginTop: "23px" }}>
            <img src="/img/products/productLaptop.png" alt="" />
            <Box sx={{ py: "35px", paddingLeft: "50px" }}>
              <Box>
                <Typography variant="h6" sx={{ color: "#003F62" }}>
                  Play Game
                </Typography>
                <Typography sx={{ my: "17.5px", fontWeight: "600" }}>
                  $11,70
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
