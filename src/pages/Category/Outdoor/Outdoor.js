import React from "react";

// MUI
import { makeStyles } from "@mui/styles";

import {
  Box,
  Grid,
  Typography,
} from "../../../DesignData/MaterialUi/material-ui";

import { OurProcessData } from "../../../assets/json/newDesign/OurProcessData";

import { Link, useNavigate } from "react-router-dom";

import {
  Description,
  TopBannerMainTitle,
  MainMargins,
  TopbannerDescription,
  MainTitle,
  MarginBtwnTypo,
  AboutOutdoorMainTitle,
  AboutOutdoorDescription,
  contentInGrid,
  OutdoorMainBox,
  greyBox,
  icon,
  greyboxTitle,
  greyBoxDesc,
  OurProcessDescription,
  OurProcessMainTitle,
} from "../../Styles/Styles";

import {
  outdoorBanner,
  ourServicesbanner,
  weSeeThingsBgImage,
} from "../../../DesignData/Images/Images";

import "./Outdoor.css";
import { OurServices } from "../../../assets/json/newDesign/OurServices";
import Blogsection from "../../Home/HomeComponents2/BlogSection/Blogsection";
import Whatoutdoor from "./OutdoorComponents/WhatOutdoor/Whatoutdoor";

const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${outdoorBanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "400px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  OurServicsBanner: {
    backgroundImage: `url(${ourServicesbanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutOutdoorAdver: {
    backgroundImage: `url(${weSeeThingsBgImage})`,
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

const MainBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "25px",
};

const Outdoor = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <>
      {/* banner */}
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
          // display={{
          //   xs: "none",
          //   sm: "none",
          //   md: "block",
          //   lg: "block",
          // }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography sx={TopBannerMainTitle}>
                Outdoor <span style={{ color: "#FF1F2F" }}>Advertising</span>
              </Typography>
            </Box>
            <Box>
              <Typography sx={TopbannerDescription}>
                Let's catch up outside!
              </Typography>
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
      
      {/* OurSevices */}
      <Grid container className={classes.OurServicsBanner}>
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
          <Box sx={MainMargins}>
            {/* title and description */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography sx={MainTitle}>
                  OUTDOOR <span style={{ color: "#FF1F2F" }}>SERVICES</span>
                </Typography>
              </Box>
              <Box>
                <Typography sx={Description}>
                  Find your city listings across our extensive range of outdoor
                  advertising services, highlighting brands and their
                  <br />
                  intelligently positioned advertisements.
                </Typography>
                {/* mobile */}
                <Typography
                  sx={{
                    marginTop: "15px",
                    fontSize: "16px",
                    color: "white",
                    lineHeight: "22px",
                    fontWeight: "500",
                    textAlign: "center",
                    padding: "0px 10px 0px 10px",
                    fontFamily: "Inter, sans-serif",
                    display: {
                      md: "none",
                      lg: "none",
                    },
                  }}
                >
                  Find your city listings across our extensive range of outdoor
                  advertising services, highlighting brands and their
                  intelligently positioned advertisements.
                </Typography>
              </Box>
            </Box>
            {/* categories */}
            <Grid
              container
              sx={{
                // border: "1px solid white",
                marginTop: { xs: "15px", sm: "15px", md: "60px", lg: "60px" },
              }}
            >
              {OurServices.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  key={index}
                  sx={{
                    display: "flex",
                    // backgroundColor:
                    //   index === 0
                    //     ? "red"
                    //     : index === 1
                    //     ? "blue"
                    //     : index === 2
                    //     ? "orange"
                    //     : index === 3
                    //     ? "magenta"
                    //     : index === 4
                    //     ? "grey"
                    //     : "yellow",
                    justifyContent:
                      index === 0
                        ? {
                            xs: "center",
                            sm: "center",
                            md: "flex-start",
                            lg: "flex-start",
                          }
                        : index === 1
                        ? "center"
                        : index === 2
                        ? "flex-end"
                        : index === 3
                        ? "flex-start"
                        : index === 4
                        ? "center"
                        : "flex-end",
                    padding:
                      index === 0
                        ? {
                            xs: "0px 10px 0px 10px",
                            sm: "0px 10px 0px 10px",
                            md: "0px 30px 30px 0px",
                            lg: "0px 30px 30px 0px",
                          }
                        : index === 1
                        ? {
                            xs: "10px 10px 0px 10px",
                            sm: "0px 10px 0px 10px",
                            md: "0px 15px 30px 15px",
                            lg: "0px 15px 30px 15px",
                          }
                        : index === 2
                        ? {
                            xs: "10px 10px 0px 10px",
                            sm: "0px 10px 0px 10px",
                            md: "0px 0px 30px 30px",
                            lg: "0px 0px 30px 30px",
                          }
                        : index === 3
                        ? {
                            xs: "10px 10px 0px 10px",
                            sm: "0px 10px 0px 10px",
                            md: "15px 30px 0px 0px",
                            lg: "15px 30px 0px 0px",
                          }
                        : index === 4
                        ? {
                            xs: "10px 10px 0px 10px",
                            sm: "0px 10px 0px 10px",
                            md: "15px 15px 0px 15px",
                            lg: "15px 15px 0px 15px",
                          }
                        : {
                            xs: "10px 10px 0px 10px",
                            sm: "0px 10px 0px 10px",
                            md: "15px 0px 0px 30px",
                            lg: "15px 0px 0px 30px",
                          },
                  }}
                >
                  <Link
                    to={item.link}
                    style={{ textDecoration: "none", width: "100%" }}
                  >
                    <Box
                      sx={{
                        cursor: "pointer",
                        border: "2px solid white",
                        height: "140px",
                        width: "100%",
                        borderRadius: "15px",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        padding: "20px",
                        "&::before": {
                          content: `"${item.no}"`,
                          position: "absolute",
                          top: "-10px",
                          left: "10%",
                          transform: "translateX(-50%)",
                          backgroundColor: "rgba(0, 0, 0, 0.9)",
                          padding: "0 5px",
                          fontSize: "14px",
                          color: "#fff",
                        },
                      }}
                    >
                      <Link
                        to={item.link}
                        style={{ textDecoration: "none", width: "100%" }}
                      >
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "white",
                            fontSize: "23px",
                            fontWeight: "400",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "center",
                            color: "white",
                            fontSize: "23px",
                            fontWeight: "400",
                          }}
                        >
                          {item.subTitle}
                        </Typography>
                      </Link>
                    </Box>
                  </Link>
                </Grid>
              ))}
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

      {/* About Outdoor Advertising */}
      <Grid container className={classes.aboutOutdoorAdver}>
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
          <Box sx={MainMargins}>
            {/* Title */}
            <Box>
              <Typography sx={AboutOutdoorMainTitle}>
                ABOUT{" "}
                <span style={{ color: "#FF1F2F" }}>OUTDOOR ADVERTISING</span>
              </Typography>
            </Box>
            {/* Description */}
            <Box sx={MarginBtwnTypo}>
              <Typography sx={AboutOutdoorDescription}>
                Outdoor advertising is also known as out-of-the-house
                advertising, which encompasses diversified media forms found
                outside the home. This kind of advertising strategically places
                ads, signage, and digital displays in high-traffic areas like
                public transport, terminals, etc. With millions of travellers
                daily, it offers a unique chance to reach a captive and diverse
                audience.
              </Typography>
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

      {/* OurProcess */}
      <Grid container sx={{ backgroundColor: "white" }}>
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
          <Box sx={MainMargins}>
            {/* Title */}
            <Typography sx={OurProcessMainTitle}>
              OUR <span style={{ color: "#FF1F2F" }}>PROCESS</span>
            </Typography>
            {/* Description */}
            <Typography sx={OurProcessDescription}>
              Connect with us to secure the perfect spot for your brand, and
              let's collaborate
              <br />
              to create an impactful deal that elevates your outdoor presence.
            </Typography>
            <Typography
              sx={{
                marginTop: "15px",
                fontSize: "16px",
                color: "black",
                lineHeight: "22px",
                fontWeight: "500",
                textAlign: "center",
                padding: "0px 10px 0px 10px",
                fontFamily: "Inter, sans-serif",
                display: {
                  md: "none",
                  lg: "none",
                },
              }}
            >
              Connect with us to secure the perfect spot for your brand, and
              let's collaborate to create an impactful deal that elevates your
              outdoor presence.
            </Typography>
            {/* Cards */}
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
                marginTop: "40px",
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

        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>
      </Grid>

      {/* Blog */}
      <Blogsection />

      {/* WHAT OUTDOOR ADVERTISING INCLUDES? */}
      <Whatoutdoor />
    </>
  );
};

export default Outdoor;
