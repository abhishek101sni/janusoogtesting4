import React from "react";

// MUI
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
} from "../../../../DesignData/MaterialUi/material-ui";

import "./Confused.css";

// REACT_ROUTER_DOM
import { Link, useNavigate } from "react-router-dom";

import {
  ConfusedBgImage,
  Girl,
  blackRightArrow,
  RedRightArrow,
} from "../../../../DesignData/Images/Images";

const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundImage: `url(${ConfusedBgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  sideGridBgColor: {
    // backgroundColor: "yellow",
  },
  MainGridBgColor: {
    // backgroundColor: "pink",
  },
}));

const MainMargins = {
  marginTop: {
    xs: "20px",
    sm: "20px",
    md: "60px",
    lg: "60px",
  },
  marginBottom: {
    xs: "20px",
    sm: "20px",
    md: "60px",
    lg: "60px",
  },
  // border: "2px solid red",
};
const MainTitle = {
  fontSize: {
    xs: "20px",
    sm: "20px",
    md: "32px",
    lg: "32px",
  },
  color: "#FF1F2F",
  lineHeight: "30px",
  fontWeight: {
    xs: "20px",
    sm: "20px",
    md: "400",
    lg: "400",
  },
  fontFamily: "Inter, sans-serif",
};
const TitleTwo = {
  marginTop: {
    xs: "10px",
    sm: "10px",
    md: "35px",
    lg: "35px",
  },
  fontSize: {
    xs: "20px",
    sm: "20px",
    md: "35px",
    lg: "35px",
  },
  lineHeight: {
    xs: "30px",
    sm: "30px",
    md: "30px",
    lg: "30px",
  },
  color: "#000000",
  lineHeight: "30px",
  fontWeight: {
    xs: "20px",
    sm: "20px",
    md: "400",
    lg: "400",
  },
  fontFamily: "Inter, sans-serif",
};
const TitleThree = {
  marginTop: {
    xs: "10px",
    sm: "10px",
    md: "5px",
    lg: "5px",
  },
  fontSize: {
    xs: "20px",
    sm: "20px",
    md: "22px",
    lg: "22px",
  },
  lineHeight: {
    xs: "30px",
    sm: "30px",
    md: "30px",
    lg: "30px",
  },
  color: "#000000",
  lineHeight: "30px",
  fontWeight: {
    xs: "20px",
    sm: "20px",
    md: "400",
    lg: "400",
  },
  fontFamily: "Inter, sans-serif",
};
const GirlImageAlign = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
};
const GirlImageSize = {
  height: "450px",
  Width: "100%",
  position: "absolute",
  right: "20px",
};
const GirlImageSizeForMobile = {
  height: "280px",
  width: "75%",
  // bottom: "10px",
};

const Confused = () => {
  const navigate = useNavigate();
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

        {/* Content */}

        {/* Desktop */}
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11.5}
          className={classes.MainGridBgColor}
          display={{
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          }}
        >
          {/* Text */}
          <Box sx={MainMargins}>
            <Typography sx={MainTitle}>CONFUSED</Typography>
            <Typography sx={TitleTwo}>
              We can help you plan the perfect campaign!
            </Typography>
            <Typography sx={TitleThree}>
              Hire our expert media planners to find, plan and place your next
              promotion.
            </Typography>

            <Box
              sx={{ display: "flex", flexDirection: "row", marginTop: "30px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent:"center"
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "#FF1F2F",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/contact-us/")}
                >
                  Consult Media Planners
                </Typography>
                <Box
                  component="img"
                  src={RedRightArrow}
                  sx={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent:"center"
                  marginLeft: "40px",
                }}
              >
                {/* <Typography
                  sx={{ fontSize: "24px", fontWeight: "500", color: "#000000" }}
                >
                  Completely Free!
                </Typography>
                <Box
                  component="img"
                  src={blackRightArrow}
                  sx={{
                    width: "30px",
                    height: "30px",
                  }}
                /> */}
              </Box>
            </Box>
          </Box>
          {/* Image */}
          <Box sx={GirlImageAlign}>
            <Box component="img" src={Girl} sx={GirlImageSize} />
          </Box>
        </Grid>

        {/* Mobile */}

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className={classes.MainGridBgColor}
          display={{
            md: "none",
            lg: "none",
          }}
        >
          {/* Text */}

          <Box 
          // sx={{ position: "relative" }}
          >
            <Box sx={{ margin: "30px 0px 30px 0px", padding: "0px 10px 0px 10px" }}>
              <Typography
                sx={{
                  fontSize: "35px",
                  fontWeight: "500",
                  color: "#FF1F2F",
                  textAlign: "center",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Confused
              </Typography>

              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "400",
                  color: "#FF1F2F",
                  textAlign: "center",
                  lineHeight: "26px",
                  marginTop: "10px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                We can help you plan the perfect campaign!
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#000000",
                  textAlign: "center",
                  lineHeight: "23px",
                  marginTop: "10px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Hire our expert media planners to find, plan and place your next
                promotion.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#FF1F2F",
                    textAlign: "center",
                    lineHeight: "25px",
                    fontFamily: "Inter, sans-serif",
                    cursor: "pointer",
                   
                    textAlign:"center"
                  }}
                  onClick={() => navigate("/contact-us/")}
                >
                  Consult Media Planners
                </Typography>
                <Box
                  component="img"
                  src={RedRightArrow}
                  sx={{
                    width: "23px",
                    height: "23px",
                  }}
                />
              </Box>

            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box component="img" src={Girl} sx={GirlImageSizeForMobile} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Confused;
