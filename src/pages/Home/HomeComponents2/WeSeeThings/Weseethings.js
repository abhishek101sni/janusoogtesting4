import React from "react";

// MUI
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
} from "../../../../DesignData/MaterialUi/material-ui";

import { TypeAnimation } from "react-type-animation";

// Images
import {
  weSeeThingsBgImage,
  rightarrow,
} from "../../../../DesignData/Images/Images";
import { Link } from "react-router-dom";

import "./Weseethings.css";

// Styles
import {
  CommonMainMargins,
  SectionMainTitle,
  SectionMainTitleForDesktop,
} from "../../../Styles/Styles";
import { display } from "@mui/system";

const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundImage: `url(${weSeeThingsBgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginTop: "-26px",
  },
  sideGridBgColor: {
    // backgroundColor: "yellow",
  },
  MainGridBgColor: {
    // backgroundColor: "pink",
  },
}));

const MarginBtwnTypo = {
  marginTop: {
    xs: "10px",
    sm: "10px",
    md: "20px",
    lg: "20px",
  },
  display: "flex",
  justifyContent: "center",
};
const MainTitle = {
  fontSize: {
    xs: "26px",
    sm: "28px",
    md: "32px",
    lg: "32px",
  },
  lineHeight: {
    xs: "35px",
    sm: "35px",
    md: "30px",
    lg: "30px",
  },
  color: "#FF1F2F",
  fontWeight: {
    xs: "500",
    sm: "500",
    md: "400",
    lg: "400",
  },
  textAlign: "center",
  fontFamily: "Inter, sans-serif",
  // backgroundColor:"green"
};
const SubTitle = {
  fontSize: {
    xs: "20px",
    sm: "20px",
    md: "22px",
    lg: "22px",
  },
  lineHeight: {
    xs: "30px",
    sm: "30px",
    md: "26.3px",
    lg: "26.3px",
  },
  color: "#000000",
  fontWeight: {
    xs: "500",
    sm: "500",
    md: "400",
    lg: "400",
  },
  textAlign: "center",
  padding: "0px 10px 0px 10px",
  fontFamily: "Inter, sans-serif",
  // backgroundColor:"green"
};
const Description = {
  fontSize: {
    xs: "15px",
    sm: "15px",
    md: "16px",
    lg: "16px",
  },
  lineHeight: {
    xs: "22px",
    sm: "22px",
    md: "22px",
    lg: "22px",
  },
  color: "#000000",
  fontWeight: {
    xs: "500",
    sm: "500",
    md: "400",
    lg: "400",
  },
  textAlign: {
    xs: "justify",
    sm: "center",
    md: "center",
    lg: "center",
  },
  padding: {
    xs: "0px 15px 0px 15px",
    sm: "0px 15px 0px 15px",
    md: "0px 170px 0px 170px",
    lg: "0px 170px 0px 170px",
  },
  fontFamily: "Inter, sans-serif",
};
const KnowMore = {
  fontSize: {
    xs: "20px",
    sm: "20px",
    md: "20px",
    lg: "20px",
  },
  lineHeight: {
    xs: "30px",
    sm: "30px",
    md: "29px",
    lg: "29px",
  },
  color: "#FF1F2F",
  fontWeight: {
    xs: "500",
    sm: "500",
    md: "500",
    lg: "500",
  },
  textAlign: "center",
  fontFamily: "Inter, sans-serif",
};

const Weseethings = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.bgImage}>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          className={classes.MainGridBgColor}
        >
          <Box sx={CommonMainMargins}>
            {/* Title------------------------------------------------ */}

            {/* DeskTop */}
            <Box>
              <Typography
                sx={{
                  fontSize: "26px",
                  fontWeight: "500",
                  textAlign: "center",
                  lineHeight: "32px",
                  color: "#FF1F2F",
                  fontFamily: "Inter, sans-serif",
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                  },
                }}
              >
                WE SEE THINGS DIFFERENTLY
              </Typography>
            </Box>

            {/* mobile */}
            <Box>
              <Typography sx={SectionMainTitle}>
                WE SEE THINGS
                <br /> DIFFERENTLY
              </Typography>
            </Box>

            {/* Sub Title */}

            {/* Desktop */}
            <Box sx={MarginBtwnTypo}>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                  },
                  padding: "0px 10px 0px 10px",
                }}
              >
                <TypeAnimation
                  sequence={[
                    "We have the maverick minds who goes for only unusual.",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "We see an ocean of possibilities in the smallest of things.",
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  speed={50}
                  deletionSpeed={200}
                  style={{
                    fontSize: "22px",
                    lineHeight: "26.3px",
                    color: "#000000",
                    fontWeight: "400",
                    textAlign: "center",

                    fontFamily: "Inter, sans-serif",
                  }}
                  repeat={Infinity}
                />
              </Box>
            </Box>
            {/* Mobile */}
            <Box
              sx={{
                display: {
                  md: "none",
                  lg: "none",
                },
                padding: "0px 10px 0px 10px",
                
              }}
            >
              <Box
                sx={{
                  marginTop: {
                    xs: "10px",
                    sm: "10px",
                    md: "20px",
                    lg: "20px",
                  },
                  display: "flex",
                  justifyContent: "center",
                  height:"70px",
                  // backgroundColor: "red",
                }}
              >
                <TypeAnimation
                  sequence={[
                    "We have the maverick minds who goes for only unusual.",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "We see an ocean of possibilities in the smallest of things.",
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  speed={100}
                  deletionSpeed={500}
                  style={{
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "#000000",
                    fontWeight: "500",
                    textAlign: "left",
                    padding: "0px 10px 0px 10px",
                    fontFamily: "Inter, sans-serif",
                  }}
                  repeat={Infinity}
                />
              </Box>
            </Box>

            {/* Description */}
            <Box sx={MarginBtwnTypo}>
              <Typography sx={Description}>
                Founded in 2002, JanusAlive is the leading Outdoor Advertising
                agency in India. With 20 years of experience, we are now the
                largest network in the country in this fast-paced sector. Our
                dedication to innovation and quality has brought us to the
                forefront, where we offer specialized media solutions to
                companies of all kinds. With more than 200 clients under its
                belt, JanusAlive is committed to creating memorable outdoor
                advertising campaigns.
              </Typography>
            </Box>
            {/* Know More */}
            <Box sx={MarginBtwnTypo}>
              <Link to="/about-us/" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={KnowMore}>Know More</Typography>
                  <Box
                    component="img"
                    src={rightarrow}
                    sx={{
                      width: "18x",
                      height: "18px",
                      marginLeft: "4px",
                    }}
                  />
                </Box>
              </Link>
            </Box>
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

export default Weseethings;
