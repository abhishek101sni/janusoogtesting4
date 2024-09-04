import React, { useState, useEffect, useRef } from "react";

// MUI
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
} from "../../../../DesignData/MaterialUi/material-ui";

import "./Ourprocess.css";
// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import {
  Redtriangle,
  rightarr,
  leftarr,
  imageNotFound,
} from "../../../../DesignData/Images/Images";

import { OurProcessData } from "../../../../assets/json/newDesign/OurProcessData";

import {
  SectionDescriptionForMobile,
  SectionMainTitle,
  SectionMainTitleForDesktop,
} from "../../../Styles/Styles";

const useStyles = makeStyles(() => ({
  sideGridBgColor: {
    // backgroundColor: "yellow",
  },
  MainGridBgColor: {
    // backgroundColor: "pink",
  },
}));

const MainMargins = {
  marginTop: {
    xs: "30px",
    sm: "30px",
    md: "60px",
    lg: "60px",
  },
  marginBottom: {
    xs: "30px",
    sm: "30px",
    md: "200px",
    lg: "200px",
  },
  // border: "2px solid #FF0000",
};
const MainTitle = {
  fontSize: {
    xs: "28px",
    sm: "28px",
    md: "32px",
    lg: "32px",
  },
  color: "#FF1F2F",
  lineHeight: "30px",
  fontWeight: {
    xs: "500",
    sm: "500",
    md: "400",
    lg: "400",
  },
  textAlign: {
    xs: "center",
    sm: "center",
    md: "left",
    lg: "left",
  },
  fontFamily: "Inter, sans-serif",
};
const Description = {
  marginTop: {
    xs: "15px",
    sm: "15px",
    md: "10px",
    lg: "10px",
  },
  fontSize: {
    xs: "18px",
    sm: "18px",
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
    xs: "center",
    sm: "center",
    md: "left",
    lg: "left",
  },
  padding: {
    xs: "0px 10px 0px 10px",
    sm: "0px 10px 0px 10px",
    md: "0px 0px 0px 0px",
    lg: "0px 0px 0px 0px",
  },
  fontFamily: "Inter, sans-serif",
  display: {
    xs: "none",
    sm: "none",
    md: "block",
    lg: "block",
  },
};
const DescriptionMobile = {
  marginTop: "15px",
  fontSize: "16px",
  color: "#000",
  lineHeight: "22px",
  fontWeight: "500",
  textAlign: "center",
  padding: "0px 10px 0px 10px",
  display: {
    md: "none",
    lg: "none",
  },
  fontFamily: "Inter, sans-serif",
  display: {
    md: "none",
    lg: "none",
  },
};
const MainBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "25px",
};
const greyBox = {
  width: "200px",
  height: "250px",
  backgroundColor: "#D9D9D9",
  position: "absolute",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 10px 0px 10px",
};
const icon = {
  width: "45px",
  height: "45px",
};
const greyboxTitle = {
  marginTop: "10px",
  fontWeight: "400",
  fontSize: "30px",
  color: "#000000",
  fontFamily: "Inter, sans-serif",
};
const greyBoxDesc = {
  fontWeight: "400",
  fontSize: "13px",
  color: "#000000",
  textAlign: "center",
  fontFamily: "Inter, sans-serif",
};
const whiteLeftArrowSize = {
  width: "20px",
  height: "20px",
  position: "absolute",
  bottom: "10px",
  right: "13px",
};
const whiteRightArrowSize = {
  width: "20px",
  height: "20px",
  position: "absolute",
  bottom: "10px",
  left: "13px",
};
const triangleAndArrowAlignment = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const titleAndArrowAllignment = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const Ourprocess = () => {
  const classes = useStyles();

  const sliderRef = useRef(null);
  // slider settings
  var settings = {
    // dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

        {/*Desktop Content */}
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          className={classes.MainGridBgColor}
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
        >
          <Box sx={MainMargins}>
            {/* Title */}
            {/* DeskTop */}
            <Typography sx={SectionMainTitleForDesktop}>OUR PROCESS</Typography>
            {/* Mobile */}
            <Typography sx={SectionMainTitle}>OUR PROCESS</Typography>

            {/* Description */}

            {/* Desktop */}
            <Typography sx={Description}>
              Connect with us to secure the perfect spot for your brand, and
              let's collaborate
              <br />
              to create an impactful deal that elevates your outdoor presence.
            </Typography>

            {/* cards */}
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                },
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              {OurProcessData.map((item, index) => (
                <Box
                  sx={{
                    margin: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
                  }}
                >
                  {/* MainBox */}
                  <Box sx={MainBox}>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      {/* White */}
                      <Box
                        sx={{
                          backgroundColor: "white",
                          width: "125px",
                          height: "300px",
                          borderTop:
                            index === 0
                              ? "5px dashed #FF0000"
                              : index === 1
                              ? "5px dashed #FF4646"
                              : index === 2
                              ? "5px dashed #FF6565"
                              : "5px dashed #FF8A8A",
                          borderLeft:
                            index === 0
                              ? "5px dashed #FF0000"
                              : index === 1
                              ? "5px dashed #FF4646"
                              : index === 2
                              ? "5px dashed #FF6565"
                              : "5px dashed #FF8A8A",
                          borderBottom:
                            index === 0
                              ? "5px dashed #FF0000"
                              : index === 1
                              ? "5px dashed #FF4646"
                              : index === 2
                              ? "5px dashed #FF6565"
                              : "5px dashed #FF8A8A",
                          borderRadius: "30px 0px 0px 30px",
                        }}
                      ></Box>
                      {/* Red */}
                      <Box sx={{ position: "relative" }}>
                        <Box
                          sx={{
                            backgroundColor:
                              index === 0
                                ? "#FF0000"
                                : index === 1
                                ? "#FF4646"
                                : index === 2
                                ? "#FF6565"
                                : "#FF8A8A",
                            width: "125px",
                            height: "300px",
                            borderRadius: "0px 30px 30px 0px",
                          }}
                        ></Box>
                        <Box
                          component="img"
                          src={item.poylgonImg}
                          sx={{
                            width: "100px",
                            height: "200px",
                            position: "absolute",
                            bottom: "50px",
                            left: "50px",
                          }}
                        />
                      </Box>
                    </Box>
                    <Box sx={greyBox}>
                      <Box component="img" src={item.image} sx={icon} />
                      <Typography sx={greyboxTitle}>{item.title}</Typography>
                      <Typography sx={greyBoxDesc}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        {/*Mobile Content */}
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          className={classes.MainGridBgColor}
          display={{ md: "none", lg: "none" }}
        >
          <Box sx={MainMargins}>
            {/* Title */}
            <Typography sx={MainTitle}>OUR PROCESS</Typography>
            {/* Description */}

            {/* mobile */}
            <Typography sx={SectionDescriptionForMobile}>
              Connect with us to secure the perfect spot for your brand, and
              let's collaborate to create an impactful deal that elevates<br/> your
              outdoor presence.
            </Typography>
            {/* cards */}
            <Box sx={{ marginTop: "10px" }}>
              <Slider
                {...settings}
                // style={{ backgroundColor: "red" }}
              >
                {OurProcessData.map((item, index) => (
                  <Box
                    sx={{
                      margin: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
                    }}
                  >
                    {/* MainBox */}
                    <Box sx={MainBox}>
                      <Box sx={{ display: "flex", flexDirection: "row" }}>
                        {/* White */}
                        <Box
                          sx={{
                            backgroundColor: "white",
                            width: "125px",
                            height: "300px",
                            borderTop:
                              index === 0
                                ? "5px dashed #FF0000"
                                : index === 1
                                ? "5px dashed #FF4646"
                                : index === 2
                                ? "5px dashed #FF6565"
                                : "5px dashed #FF8A8A",
                            borderLeft:
                              index === 0
                                ? "5px dashed #FF0000"
                                : index === 1
                                ? "5px dashed #FF4646"
                                : index === 2
                                ? "5px dashed #FF6565"
                                : "5px dashed #FF8A8A",
                            borderBottom:
                              index === 0
                                ? "5px dashed #FF0000"
                                : index === 1
                                ? "5px dashed #FF4646"
                                : index === 2
                                ? "5px dashed #FF6565"
                                : "5px dashed #FF8A8A",
                            borderRadius: "30px 0px 0px 30px",
                          }}
                        ></Box>
                        {/* Red */}
                        <Box sx={{ position: "relative" }}>
                          <Box
                            sx={{
                              backgroundColor:
                                index === 0
                                  ? "#FF0000"
                                  : index === 1
                                  ? "#FF4646"
                                  : index === 2
                                  ? "#FF6565"
                                  : "#FF8A8A",
                              width: "125px",
                              height: "300px",
                              borderRadius: "0px 30px 30px 0px",
                            }}
                          ></Box>
                          <Box
                            component="img"
                            src={item.poylgonImg}
                            sx={{
                              width: "100px",
                              height: "200px",
                              position: "absolute",
                              bottom: "50px",
                              left: "50px",
                            }}
                          />
                        </Box>
                      </Box>
                      <Box sx={greyBox}>
                        <Box component="img" src={item.image} sx={icon} />
                        <Typography sx={greyboxTitle}>{item.title}</Typography>
                        <Typography sx={greyBoxDesc}>
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Slider>
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

export default Ourprocess;
