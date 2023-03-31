import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  overflow: "hidden",

  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  height: "56px",
  padding: "0 25px",
  "&:hover": {
    backgroundColor: "#fff",
  },
  "& .MuiInputBase-input": {
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "35ch",
    },
  },
}));

export const NavBarMid = () => {
  const navigate = useNavigate();
  const navigateToCartPage = () => {
    // 👇️ navigate to /contacts
    navigate("/cart");
  };
  return (
    <Box sx={{ bgcolor: "#003F62" }}>
      <Box className="container">
        <AppBar position="static" sx={{ boxShadow: 0 }}>
          <Toolbar
            sx={{
              backgroundColor: "#003F62",
              py: "22px",
            }}
          >
            <Box sx={{ display: "flex", width: "100%", px: "57px" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  paddingRight: "85px",
                  display: {
                    xs: "none",
                    sm: "block",
                    paddingTop: "5px",
                  },
                }}
              >
                <Link to="/">
                  <img src={`/img/logos/logo1.png`} alt={"logo"} />
                </Link>
              </Typography>

              <Search
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  marginLeft: "100px",
                  backgroundColor: "white",
                  color: "gray",
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                }}
              >
                <StyledInputBase
                  placeholder="Search any things"
                  inputProps={{ "aria-label": "search" }}
                  sx={{ width: 450 }}
                ></StyledInputBase>

                <Button
                  sx={{
                    width: 100,
                    backgroundColor: "#EDA415",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    borderRadius: 4,
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#EDA415",
                    },
                  }}
                >
                  Search
                </Button>
              </Search>
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                    gap: 5,
                  },
                }}
              >
                <IconButton size="large" aria-haspopup="true" color="inherit">
                  <AccountCircle />
                  <Typography sx={{ paddingLeft: 1 }}>Sign in</Typography>
                </IconButton>
                <IconButton size="large" color="inherit">
                  <Badge badgeContent={"0"} color="warning">
                    <FavoriteBorderIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  onClick={navigateToCartPage}
                >
                  <Badge badgeContent={"0"} color="warning">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};
