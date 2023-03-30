import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Sales = () => {
  const ButtonStyle = [
    {
      bgcolor: "#eda415",
      color: "#fff",
      borderRadius: 11,
      textTransform: "none",
      width: "134px",
      height: "45px",
    },
  ];
  return (
    <>
      <Box className="container" sx={{ marginTop: "51px" }}>
        <Box sx={{ position: "relative" }}>
          <img src="/img/products/saledProduct.png" alt="" />
          <Box
            sx={{
              textAlign: "center",
              position: "absolute",
              right: "149px",
              top: "91px",
            }}
          >
            <Button variant="contained" sx={ButtonStyle}>
              New laptop
            </Button>
            <Box sx={{ my: "36px" }}>
              <Typography
                variant="h4"
                sx={{ color: "#2E8FC5", fontWeight: "700", marginBottom: 2 }}
              >
                Sale up to 50% off
              </Typography>
              <Typography sx={{ color: "#fff", fontSize: "18px" }}>
                12 inch hd display
              </Typography>
            </Box>
            <Button variant="contained" sx={ButtonStyle}>
              Shop now
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
