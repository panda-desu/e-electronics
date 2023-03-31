import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ProductComment = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "78px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            padding: "14.5px 34px",
            borderRadius: "20px",
            borderColor: "#8F8F8F",
            color: "#373737",
            textTransform: "none",
            fontSize: "20.68px",
          }}
        >
          Description
        </Button>
        <Button
          variant="outlined"
          sx={{
            padding: "14.5px 34px",
            borderRadius: "20px",

            bgcolor: "#003F62",
            color: "#fff",
            textTransform: "none",
            fontSize: "20.68px",
            "&:hover": {
              backgroundColor: "#003fff",
            },
          }}
        >
          Reviews
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: "35px",
          padding: "42.5px 49px",
          border: "1px solid #b8b8b8",
          borderRadius: "20px",
        }}
      >
        <Typography color="#003F62" fontSize="22.68px">
          Customer service
        </Typography>
        <Typography color="#4F4F4F" fontSize="19.68px" sx={{ marginY: "17px" }}>
          No rewievs yet
        </Typography>
        <Button
          sx={{
            color: "#FFFFFF",
            bgcolor: "#003F62",
            textDecoration: "underline",
            padding: "5px 28.5px",
            borderRadius: 0,
          }}
        >
          Write a rewiev
        </Button>
      </Box>
    </>
  );
};
