import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

import { Helmet } from "react-helmet";

// IMAGES
import janusnew from "../../assets/images/janusmain.jpg";

import {
  ourServicesbanner,
  outdoorBanner,
  weSeeThingsBgImage,
} from "../../DesignData/Images/Images";
// MUI
import { makeStyles } from "@mui/styles";

import { TopBannerMainTitle, TopbannerDescription } from "../Styles/Styles";

// VIDEO
// import videotwo from "../assets";
import videotwo from "../../assets/video/VideoWithoutText.mp4";

// TYPE-ANIMATION
import { TypeAnimation } from "react-type-animation";

import CountUp from "react-countup";

import "./Aboutus.css";
import ExperienceCom from "../Home/HomeComponents/ExperienceCom/ExperienceCom";

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

const Aboutus = () => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Billboard Boost: Your Premier Hoarding Advertising agency</title>
        <meta
          name="description"
          content={
            "Get noticed with Billboard Boost, your premier hoarding advertising agency. Elevate brand visibility with expert strategies and dynamic placements"
          }
        />
      </Helmet>

      <Box>
        <Box>
          <Box
            sx={{
              // marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" },
            }}
          >
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
                      {" "}
                      ABOUT{" "}
                      <span style={{ color: "#FF1F2F" }}>US</span>
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
          </Box>

          {/* We See things Differently ----- DESKTOP */}
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.5}
              lg={0.5}
              // sx={{ backgroundColor: "cyan" }}
              display={{ xs: "none", lg: "block" }}
            ></Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              // sx={{ backgroundColor: "pink" }}
              display={{ xs: "none", lg: "block" }}
            >
              <Box
                sx={{
                  marginTop: { xs: "15px", sm: "15px", md: "80px", lg: "80px" },
                  marginBottom: {
                    xs: "0px",
                    sm: "0px",
                    md: "80px",
                    lg: "80px",
                  },
                }}
              >
                {/* WE SEE THINGS DIFFERENTLY. */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "33px",
                      fontWeight: "600",
                      color: "#000",
                      fontFamily: "Inter, sans-serif",
                      wordSpacing: "5px",
                      letterSpacing: "-1px",
                    }}
                  >
                    WE SEE THINGS DIFFERENTLY.
                  </Typography>
                </Box>
                {/* Typewriter */}
                <Box sx={{ marginTop: "10px" }}>
                  <TypeAnimation
                    sequence={[
                      "We have the maverick minds who goes for only unusual",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "We see an ocean of possibilities in the smallest of things",
                      1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    speed={50}
                    deletionSpeed={70}
                    style={{
                      display: "inline-block",
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Inter, sans-serif",
                      color: "#C02222",
                    }}
                    repeat={Infinity}
                  />
                </Box>
                {/* first para */}
                <Box sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "22px",
                      textAlign: "justify",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Founded in 2002, JANUSOOH is the leading Outdoor Advertising
                    agency in India. With 20 years of experience, we are now the
                    largest network in the country in this fast-paced sector.
                    Our dedication to innovation and quality has brought us to
                    the forefront, where we offer specialized media solutions to
                    companies of all kinds. With more than 200 clients under its
                    belt, JANUSOOH is committed to creating memorable outdoor
                    advertising campaigns. With a unique ideation process, our
                    OOH advertising strategies stand accurate and give unusual
                    perceptions to our clients.
                  </Typography>
                </Box>
                {/* Vision */}
                <Box sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "700",
                      lineHeight: "26px",
                      textAlign: "justify",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Vision
                  </Typography>
                </Box>
                {/* vision content */}
                <Box sx={{ marginTop: "5px" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "22px",
                      textAlign: "justify",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    To revolutionize the out-of-home advertising industry by
                    delivering innovative, impactful, and memorable experiences
                    that connect brands with their audiences in meaningful ways.
                  </Typography>
                </Box>
                {/* mission */}
                <Box sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "700",
                      lineHeight: "26px",
                      textAlign: "justify",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Mission
                  </Typography>
                </Box>
                {/* mission content */}
                <Box sx={{ marginTop: "5px" }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "22px",
                      textAlign: "justify",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Our mission is to provide exceptional out-of-home
                    advertising solutions that leverage cutting-edge technology,
                    strategic creativity, and deep market insights.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={0.6}
              lg={0.6}
              display={{ xs: "none", lg: "block" }}
            ></Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              display={{ xs: "none", lg: "block" }}
              sx={
                {
                  // backgroundColor: "yellow",
                }
              }
            >
              <Box
                sx={{
                  marginTop: { xs: "15px", sm: "15px", md: "80px", lg: "80px" },
                  marginBottom: {
                    xs: "0px",
                    sm: "0px",
                    md: "80px",
                    lg: "80px",
                  },
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "95%",
                      sm: "95%",
                      md: "100%",
                      lg: "100%",
                    },
                    height: {
                      xs: "95%",
                      sm: "95%",
                      md: "100%",
                      lg: "100%",
                    },

                    borderRadius: "5px",
                  }}
                  alt="add_img1"
                  src={janusnew}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "blue" }}
            ></Grid>
          </Grid>

          {/* We See things Differently ----- MOBILE */}
          <Grid container display={{ lg: "none" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "cyan" }}
            ></Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={4.6}
              lg={4.6}
              // sx={{ backgroundColor: "yellow" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "20px",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "100%",
                      md: "90%",
                      lg: "90%",
                    },
                    height: {
                      xs: "100%",
                      sm: "100%",
                      md: "80%",
                      lg: "80%",
                    },

                    borderRadius: "5px",
                  }}
                  alt="add_img1"
                  src={janusnew}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={
                {
                  // backgroundColor: "purple"
                }
              }
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // marginTop: { xs: "15px", sm: "15px", md: "50px", lg: "50px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    },

                    // backgroundColor: "purple",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      fontWeight: "600",
                      wordSpacing: "1px",
                      letterSpacing: "1px",
                      lineHeight: "34px",
                      color: "#000",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "30px",
                      textAlign: "center",
                    }}
                  >
                    WE SEE THINGS
                    <br /> DIFFERENTLY
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "50px",
                    padding: "0px 20px 0px 20px",
                    // backgroundColor: "orange",
                  }}
                >
                  <TypeAnimation
                    sequence={[
                      "We have the maverick minds who goes for only unusual",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "We see an ocean of possibilities in the smallest of things",
                      1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    speed={50}
                    deletionSpeed={70}
                    style={{
                      display: "inline-block",
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Inter, sans-serif",
                      color: "#C02222",
                      marginTop: "10px",
                    }}
                    repeat={Infinity}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    margin: "20px",
                    overflow: "hidden",
                    // backgroundColor: "red",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      justifyContent: "center",
                      fontFamily: "Inter, sans-serif",
                      color: "#333333",
                    }}
                  >
                    Founded in 2002, JANUSOOH is the leading Outdoor Advertising
                    agency in India. With 20 years of experience, we are now the
                    largest network in the country in this fast-paced sector.
                    Our dedication to innovation and quality has brought us to
                    the forefront, where we offer specialized media solutions to
                    companies of all kinds. With more than 200 clients under its
                    belt, JANUSOOH is committed to creating memorable outdoor
                    advertising campaigns.
                    <br />
                    <br />
                    Our skilled team combines strategic thinking with creativity
                    to make sure your brand sticks out in the constantly
                    changing advertising market. Join JANUSOOH for an unmatched
                    outdoor advertising experience that will help the world
                    connect with your message.
                  </Typography>
                  <Box sx={{ marginTop: "20px" }}>
                    <Typography
                      sx={{
                        fontSize: "25px",
                        fontWeight: "600",
                        fontFamily: "Inter, sans-serif",
                        color: "#333333",
                        textAlign: "left",
                      }}
                    >
                      Vision
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "500",
                        justifyContent: "center",
                        fontFamily: "Inter, sans-serif",
                        color: "#333333",
                      }}
                    >
                      To revolutionize the out-of-home advertising industry by
                      delivering innovative, impactful, and memorable
                      experiences that connect brands with their audiences in
                      meaningful ways.
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "20px" }} c>
                    <Typography
                      sx={{
                        fontSize: "25px",
                        fontWeight: "600",
                        fontFamily: "Inter, sans-serif",
                        color: "#333333",
                        textAlign: "left",
                      }}
                    >
                      Mission
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "500",
                        justifyContent: "center",
                        fontFamily: "Inter, sans-serif",
                        color: "#333333",
                      }}
                    >
                      Our mission is to provide exceptional out-of-home
                      advertising solutions that leverage cutting-edge
                      technology, strategic creativity, and deep market
                      insights.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "blue" }}
            ></Grid>
          </Grid>
        </Box>
      </Box>
      <ExperienceCom />
    </>
  );
};

export default Aboutus;
