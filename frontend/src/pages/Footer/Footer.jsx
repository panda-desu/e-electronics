import { Box } from "@mui/material";
import { BotFooter } from "./BotFooter";
import { EmailFooter } from "./EmailFooter";

export const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#E2F4FF", marginTop: "160px", py: "42px" }}>
        <EmailFooter />
        <BotFooter />
      </Box>
    </>
  );
};
