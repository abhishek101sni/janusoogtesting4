import React from "react";
import { WhatsappIcon } from "../../DesignData/Images/Images";
import { PhoneIcon } from "../../DesignData/Images/Images";
import { Box } from "@mui/material";

export const Contacticons = () => {
  const phoneNumber = "9650764004"; // Replace with your WhatsApp number
  const message = "Hello! How can I help you?"; // Default message (optional)
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Box sx={{}}>
      {/* Whatsapp */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Box
          src={WhatsappIcon}
          component="img"
          sx={{
            width: {
              xs: "40px",
              sm: "40px",
              md: "40px",
              lg: "40px",
            },
            height: {
              xs: "40px",
              sm: "40px",
              md: "40px",
              lg: "40px",
            },
            position: "fixed",
            zIndex: "99",
            top: {
              xs: "none",
              sm: "none",
              md: "450px",
              lg: "450px",
            },
            bottom: {
              xs: "80px",
              sm: "80px",
              md: "none",
              lg: "none",
            },
            right: {
              xs: "5%",
              sm: "5%",
              md: "4%",
              lg: "4%",
            },
            // zIndex:"99"
          }}
        />
      </a>

      {/* Calling */}
      <a href="tel:+919650764004" target="_blank" rel="noopener noreferrer">
        <Box
          src={PhoneIcon}
          component="img"
          sx={{
            width: {
              xs: "40px",
              sm: "40px",
              md: "40px",
              lg: "40px",
            },
            height: {
              xs: "40px",
              sm: "40px",
              md: "40px",
              lg: "40px",
            },
            position: "fixed",
            zIndex: "99",
            top: {
              xs: "none",
              sm: "none",
              md: "500px",
              lg: "500px",
            },
            bottom: {
              xs: "35px",
              sm: "35px",
              md: "none",
              lg: "none",
            },
            right: {
              xs: "5%",
              sm: "5%",
              md: "4%",
              lg: "4%",
            },
          }}
        />
      </a>
    </Box>
  );
};
