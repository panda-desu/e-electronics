import { Box, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const footer = [
  {
    ul: "Find product",
    li1: "Brownze arnold",
    li2: "Chronograph blue",
    li3: "Smart phones",
    li4: "Automatic watch",
    li5: "Hair straighteners",
  },
  {
    ul: "Get help",
    li1: "About us",
    li2: "Contact Us",
    li3: "Return policy",
    li4: "Privacy policy",
    li5: "Payment policy",
  },
  {
    ul: "About us",
    li1: "News",
    li2: "Service",
    li3: "Our policy",
    li4: "Costumer care",
    li5: "Faq,s",
  },
];
export const BotFooter = () => {
  return (
    <>
      <Box className="container" sx={{ marginTop: "42px", display: "flex" }}>
        <Box sx={{ marginRight: "80px" }}>
          <img src="/img/logos/footerLogo.png" alt="" />
          <Typography
            sx={{
              color: "#1B5A7D",
              width: "183px",
              fontWeight: 400,
              marginTop: "41px",
            }}
          >
            64 st james boulevard hoswick , ze2 7zj
          </Typography>
          <Box
            sx={{
              marginTop: "36px",
              paddingTop: "25px",
              paddingRight: "106px",
              borderTop: "1px solid #adadad",
              width: "250px",
            }}
          >
            <GoogleIcon />
            <FacebookIcon sx={{ mx: "32px", color: "inherit" }} />
            <WhatsAppIcon />
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "280px" }}>
          {footer.map((e) => {
            return (
              <Box>
                <Typography
                  sx={{ color: "#1B5A7D", fontWeight: 600 }}
                  variant="h6"
                >
                  {e.ul}
                </Typography>
                <ul className="footerUl">
                  <li>{e.li1}</li>
                  <li>{e.li2}</li>
                  <li>{e.li3}</li>
                  <li>{e.li4}</li>
                  <li>{e.li5}</li>
                </ul>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};