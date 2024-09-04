

import React, { useState } from "react";

// MUI
import { makeStyles } from "@mui/styles";
import { Box, Grid, Typography } from "../../DesignData/MaterialUi/material-ui";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// API integration
import axios from "axios";

// JSON
import {
  Quicklinks,
  SocialMediaData,
} from "../../assets/json/newDesign/FooterData";

// react-router-dom
import { Link } from "react-router-dom";

// CSS styles
import {
  FooterMainMargins,
  FooterInternalGridHeight,
  FooterMainTitle,
  FooterSmallSubTitles,
  FooterSmallSubtitlesMarginForMobile,
  FooterInputStyle,
  FooterBlackArrow,
  FooterQuickLinksMainAlignment,
  FootersocialIconsAlignment,
  FooterSocialIconsSize,
  FooterCopyrightAlignment,
  FooterCopyrightStyle,
  FooterQuicklinksStyle,
} from "../../pages/Styles/Styles";
import "./Footer.css";

// Images
import { blackArrow } from "../../DesignData/Images/Images";

const useStyles = makeStyles(() => ({
  sideGridBgColor: {
    // backgroundColor: "yellow",
  },
  MainGridBgColor: {
    // backgroundColor: "pink",
  },
}));

let currentYear = new Date().getFullYear();

const Footer = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    // Basic email regex pattern for validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the email is valid
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    const formData = new URLSearchParams();
    formData.append("email", email);

    axios
      .post(
        "https://www.januskoncepts.in/janusoohadmin/api/email_phone/email.php",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        setLoading(false);
        if (response.data) {
          setEmail(""); // Clear the input field
          toast.success("Thank you, our expert will contact you soon");
          console.log("Response data:", response.data);
        } else {
          toast.error(`Email submission failed: ${response.data}`);
          console.log("Error response:", response.data);
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error("An error occurred while submitting the email.");
        console.error("Error:", error);
      });
  };

  return (
    <>
      {/* Footer Content */}
      <Grid container className={classes.bgImage}>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>

        {/* Content */}
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          className={classes.MainGridBgColor}
        >
          <Box sx={FooterMainMargins}>
            <Grid container>
              {/* Grid 1 */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                // sx={{ backgroundColor: "green" }}
              >
                <Box sx={FooterInternalGridHeight}>
                  {/* 1 */}
                  <Box>
                    <Box>
                      <Typography sx={FooterMainTitle}>Head Office</Typography>
                    </Box>
                    <Box>
                      <Typography sx={FooterSmallSubTitles}>
                        66, Second Floor , Atul Grove Road, <br/>Janpath, Connaught
                        Place,<br/> New Delhi, Delhi 110001
                      </Typography>
                    </Box>
                  </Box>
                  {/* 2 */}
                  <Box>
                    <Box>
                      <Typography sx={FooterMainTitle}>Call Us</Typography>
                    </Box>
                    <Box>
                      <Typography sx={FooterSmallSubTitles}>
                        +91 96507-64004
                      </Typography>
                    </Box>
                  </Box>
                  {/* 3 */}
                  <Box>
                    <Box>
                      <Typography sx={FooterMainTitle}>Mail Us</Typography>
                    </Box>
                    <Box>
                      <Typography sx={FooterSmallSubTitles}>
                        birender@januskoncepts.com
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              {/* Grid 2 */}
              <Grid item xs={12} sm={4} md={4}>
                <Box sx={FooterQuickLinksMainAlignment}>
                  <Box>
                    <Box sx={FooterSmallSubtitlesMarginForMobile}>
                      <Typography sx={FooterMainTitle}>Quick Links</Typography>
                    </Box>
                    {Quicklinks.map((item, index) => (
                      <Box key={index}>
                        <Link to={item.link} style={{ textDecoration: "none" }}>
                          <Typography sx={FooterQuicklinksStyle}>
                            {item.title}
                          </Typography>
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
              {/* Grid 3 */}
              <Grid item xs={12} sm={4} md={4} lg={4}>
                <Box sx={FooterInternalGridHeight}>
                  <Box sx={FooterSmallSubtitlesMarginForMobile}>
                    <Typography sx={FooterMainTitle}>
                      Subscribe To Our Newsletter
                    </Typography>
                    {/* Desktop */}
                    <Box
                      sx={{
                        display: {
                          xs: "none",
                          sm: "none",
                          md: "block",
                          lg: "block",
                        },
                      }}
                    >
                      <Typography sx={FooterSmallSubTitles}>
                        Register today for updates that can
                        <br /> strengthen your business success
                      </Typography>
                    </Box>
                    {/* Mobile */}
                    <Box
                      sx={{
                        display: {
                          md: "none",
                          lg: "none",
                        },
                      }}
                    >
                      <Typography sx={FooterSmallSubTitles}>
                        Register today for updates that can strengthen your
                        business success
                      </Typography>
                    </Box>
                  </Box>
                  {/* input */}
                  <Box sx={{ position: "relative" , marginTop:"30px"}}>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                        className="inputField"
                        style={FooterInputStyle}
                        aria-label="Enter your email"
                      />
                    </form>
                    <ToastContainer />
                    {/* Black arrow button */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      style={{ border: "none", background: "none", padding: 0 }}
                    >
                      <Box
                        component="img"
                        src={blackArrow}
                        sx={FooterBlackArrow}
                        alt="Submit"
                      />
                    </button>
                  </Box>
                  {/* Social Media */}
                  <Box>
                    <Box>
                      <Typography sx={FooterMainTitle}>
                        Connect With Us
                      </Typography>
                    </Box>
                    {/* icons */}
                    <Box>
                      <Box sx={FootersocialIconsAlignment}>
                        {SocialMediaData.map((item, index) => (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                          >
                            <Box
                              sx={{
                                border: "1px solid #FF1F2F",
                                borderRadius: "50px",
                                marginRight: "8px",
                                height:"30px",
                                width:"30px",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center"
                              }}
                            >
                              <Box
                                component="img"
                                src={item.icon}
                                sx={FooterSocialIconsSize}
                                alt="Social media icon"
                              />
                            </Box>
                          </a>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>
      </Grid>

      {/* Copyright */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>
        {/* Content */}
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          // sx={{ backgroundColor: "yellow" }}
        >
          <Box sx={FooterCopyrightAlignment}>
            <Typography sx={FooterCopyrightStyle}>
              © {currentYear} JANUSOOH | All Rights Reserved
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>
      </Grid>
    </>
  );
};

export default Footer;
