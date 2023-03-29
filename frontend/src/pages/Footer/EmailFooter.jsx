import { Button, Typography } from "@mui/material";
import Input from "@mui/joy/Input";
import { Box } from "@mui/system";

export const EmailFooter = () => {
  return (
    <>
      <Box
        className="container"
        sx={{
          padding: "38px 70px",
          display: "flex",
          alignItems: "center",
          bgcolor: "#fff",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#1B5A7D", fontWeight: 700, marginRight: "137px" }}
        >
          Subscribe newsletter
        </Typography>
        <Input
          variant="plain"
          endDecorator={
            <Button>
              <img src="/img/icons/mail.png" alt="" />
            </Button>
          }
          placeholder="Email address"
          sx={{
            color: "#fff",
            borderRadius: "20px",
            padding: "21px 35px",
            gap: "114px",
            bgcolor: "#eda415",
            "--Input-placeholderOpacity": 1,
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginLeft: "88px",
          }}
        >
          <img src="/img/icons/earphone.png" alt="" />
          <Typography
            sx={{
              color: "#606060",
              fontSize: "14px",
              fontWeight: 600,
              width: "125px",
            }}
          >
            Call us 24/7 : (+62) 0123 567 789
          </Typography>
        </Box>
      </Box>
    </>
  );
};
