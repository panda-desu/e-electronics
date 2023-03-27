import FmdGoodIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const NavBarTop = () => {
  return (
    <>
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Typography> Need help? Call us: (+98) 0234 456 789</Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <FmdGoodIcon /> <Typography>Our Store</Typography>
            <LocalShippingOutlinedIcon />
            <Typography> Track your order</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
