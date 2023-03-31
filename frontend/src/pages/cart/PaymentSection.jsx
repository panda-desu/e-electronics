import { Box } from "@mui/system";
import {
  TableBody,
  Table,
  TableHead,
  TableCell,
  TableContainer,
  Button,
  Grid,
  Typography,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import Input from "@mui/joy/Input";
import CountriesSelectTag from "./CountriesSelectTag";

const product = [
  {
    name: "Play game",
    img: "/img/products/cartConsoleGreen.png",
    color: "Green",
    size: 30,
    price: 11.7,
    quantity: 1,
    desc: "green console",
  },
  {
    name: "Play game",
    img: "/img/products/cartConsoleBlack.png",
    color: "Black",
    size: 30,
    price: 11.7,
    quantity: 1,
    desc: "black console",
  },
];

const tableHeadStyle = [{ color: "#232323", fontSize: "20.68px" }];

const tablePriceStyle = [{ fontSize: "22.68px", color: "#2f2f2f" }];

export const PaymentSection = () => {
  const [subtotal, setSubtotal] = useState(11.7);
  const [count, setCount] = useState(1);

  const plusSubtotal = () => {
    setSubtotal(subtotal + subtotal);
  };

  const minusSubtotal = () => {
    setSubtotal(subtotal - 11.7);
  };

  const minusProductCount = () => {
    setCount(count - 1);
  };
  const plusProductCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <TableContainer>
            <Table>
              <TableHead sx={{ bgcolor: "#E2F4FF", border: 0 }}>
                <TableRow>
                  <TableCell sx={tableHeadStyle} align="left">
                    Product
                  </TableCell>
                  <TableCell sx={tableHeadStyle} align="center">
                    Price
                  </TableCell>
                  <TableCell sx={tableHeadStyle} align="center">
                    Quantity
                  </TableCell>
                  <TableCell sx={tableHeadStyle} align="center">
                    Subtotal
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {product.map((e, i) => {
                  return (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "21px",
                          }}
                        >
                          <img src={e.img} alt={e.desc} />
                          <Box>
                            <Typography
                              sx={{
                                fontWeight: 400,
                                color: "#003F62",
                                fontSize: "20.68px",
                              }}
                            >
                              {e.name}
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: 400,
                                color: "#2f2f2f",
                                fontSize: "20.68px",
                              }}
                            >
                              Color: {e.color}
                            </Typography>
                            <Typography
                              sx={{
                                fontWeight: 400,
                                color: "#2f2f2f",
                                fontSize: "20.68px",
                              }}
                            >
                              Size: {e.size}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell sx={tablePriceStyle} align="center">
                        ${e.price}
                      </TableCell>
                      <TableCell align="center">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "19px",
                          }}
                        >
                          <button
                            className="quantity-button-style"
                            onClick={(minusProductCount, minusSubtotal)}
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
                            onClick={(plusProductCount, plusSubtotal)}
                          >
                            +
                          </button>
                        </Box>
                      </TableCell>
                      <TableCell sx={tablePriceStyle} align="center">
                        ${subtotal}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "31px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                padding: "19.5px 37px",
                borderRadius: "32px",
                bgcolor: "#eda415",
                fontWeight: 600,
                marginRight: "61px",
                "&:hover": {
                  backgroundColor: "#eda415",
                },
              }}
            >
              Continue shopping
            </Button>
            <Button
              variant="outlined"
              sx={{
                padding: "19.5px 37px",
                borderRadius: "32px",
                fontWeight: 600,
                color: "#797979",
                borderColor: "#797979",
                marginRight: "70px",
              }}
            >
              Update cart
            </Button>
            <Button
              variant="outlined"
              sx={{
                padding: "19.5px 37px",
                borderRadius: "32px",
                fontWeight: 600,
                color: "#C33131",
                borderColor: "#C33131",
              }}
            >
              Clear card
            </Button>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box sx={{ marginLeft: "21px", border: "1px solid #C3C3C3" }}>
            <Box
              sx={{
                textAlign: "center",
                bgcolor: "#E2F4FF",
                padding: "12.5px 162px",
              }}
            >
              <Typography fontSize="20.68px" color="#232323">
                Cart total
              </Typography>
            </Box>
            <Box sx={{ padding: "21px 35.5px" }}>
              <Box
                sx={{
                  display: "flex",
                  paddingBottom: "20px",
                  borderBottom: "1px solid #afafaf",
                }}
              >
                <Typography fontSize="19.68px" color="#232323">
                  Subtotal
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography fontSize="22.68px" color="#232323">
                  ${subtotal}
                </Typography>
              </Box>
              <Box
                sx={{
                  marginTop: "33px",
                  paddingBottom: "33px",
                  borderBottom: "1px solid #afafaf",
                }}
              >
                <Input
                  variant="plain"
                  endDecorator={
                    <Button
                      sx={{
                        textTransform: "none",
                        color: "#003F62",
                        fontSize: "14.68px",
                      }}
                    >
                      Apply
                    </Button>
                  }
                  placeholder="Email address"
                  sx={{
                    color: "#232323",
                    borderRadius: "20px",
                    padding: "14.5px 23px",
                    border: "1px solid #DFDFDF",
                    gap: "114px",

                    "--Input-placeholderOpacity": 1,
                  }}
                />
              </Box>
              <Box sx={{ marginTop: "33px" }}>
                <CountriesSelectTag />
              </Box>
              <Box
                sx={{
                  marginTop: "28.5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography color="#232323" fontSize="16.68px">
                  Total Amount
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Typography color="#232323" fontSize="18.68px">
                  ${subtotal}
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  marginTop: "29px",
                  bgcolor: "#eda415",
                  color: "#fff",
                  padding: "10.5px 62px",
                  fontWeight: 600,
                  fontSize: "17.5px",
                  borderRadius: "20px",
                  "&hover": {
                    backgroundColor: "#eda415",
                  },
                }}
              >
                Proceed to checkout
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
