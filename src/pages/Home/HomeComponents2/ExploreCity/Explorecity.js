import React from "react";

// MUI
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
} from "../../../../DesignData/MaterialUi/material-ui";

// Images
import { exploreCity } from "../../../../DesignData/Images/Images";

// JSON
import { ExploreCityData } from "../../../../assets/json/newDesign/Explorecity";

import { Link } from "react-router-dom";
import {
  SectionDescriptionForMobile,
  SectionMainTitle,
} from "../../../Styles/Styles";

import "./Explorecity.css";
const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundImage: `url(${exploreCity})`,
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
    xs: "30px",
    sm: "30px",
    md: "60px",
    lg: "60px",
  },
  marginBottom: {
    xs: "30px",
    sm: "30px",
    md: "60px",
    lg: "60px",
  },
  // border: "2px solid red",
};
const MainTitle = {
  fontSize: {
    xs: "32px",
    sm: "32px",
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
  display: { xs: "none", sm: "none", md: "block", lg: "block" },
  fontFamily: "Inter, sans-serif",
};
const Description = {
  marginTop: {
    xs: "10px",
    sm: "10px",
    md: "10px",
    lg: "10px",
  },
  fontSize: {
    xs: "16px",
    sm: "16px",
    md: "16px",
    lg: "16px",
  },
  lineHeight: {
    xs: "30px",
    sm: "30px",
    md: "22px",
    lg: "22px",
  },
  color: "#000000",
  fontWeight: {
    xs: "20px",
    sm: "20px",
    md: "400",
    lg: "400",
  },
  display: {
    xs: "none",
    sm: "none",
    md: "block",
    lg: "block",
  },
  fontFamily: "Inter, sans-serif",
};
const Imagetitle = {
  position: "absolute",
  zIndex: "1",
  right: {
    xs:"50px",
    sm:"50px",
    md:"30px",
    lg:"30px"
  },
  bottom: {
    xs:"10px",
    sm:"10px",
    md:"5px",
    lg:"5px"
  },
  color: "#FFFFFF",
  fontSize: {
    xs: "27px",
    sm: "27px",
    md: "25px",
    lg: "25px",
  },
  fontWeight: {
    xs: "500",
    sm: "500",
    md: "400",
    lg: "400",
  },
  fontFamily: "Inter, sans-serif",

};

// Mobile
const MainTitleForMobile = {
  fontSize: "28px",
  color: "#FF1F2F",
  lineHeight: "35px",
  fontWeight: "500",
  display: { md: "none", lg: "none" },
  textAlign: "center",
  fontFamily: "Inter, sans-serif",
};
const DescriptionForMobile = {
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
};

const Explorecity = () => {
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
            <Typography sx={MainTitle}>EXPLORE YOUR CITY LISTINGS</Typography>

            <Typography sx={SectionMainTitle}>
              EXPLORE YOUR CITY LISTINGS
            </Typography>

            {/* Description */}
            {/* DeskTop */}
            <Typography sx={Description}>
              Propel your brand's presence across cities with our  dynamic
              outdoor solutions,
              <br />
              delivering impactful, creative advertising excellence seamlessly.
            </Typography>

            {/* Mobile */}
            <Typography sx={SectionDescriptionForMobile}>
              Propel your brand's presence across cities with our  dynamic
              outdoor solutions, <br />
              delivering impactful, creative advertising excellence seamlessly.
            </Typography>

            {/* DeskTop */}
            {/* Cities Images */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "none",
                  md: "block",
                  lg: "block",
                },
              }}
            >
              <Grid
                container
                sx={{
                  marginTop: { xs: "15px", sm: "15px", md: "30px", lg: "30px" },
                }}
              >
                {ExploreCityData.map((item, index) => (
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
                    <Box sx={{ position: "relative" }}>
                      <Link to={item.url}>
                        <Box
                          component="img"
                          src={item.image}
                          sx={{
                            width: "100%",
                            height: "100%",
                            filter: {
                              xs: "none",
                              sm: "none",
                              md: "grayscale(100%)",
                              "&:hover": {
                                filter: "none",
                              },
                              lg: "grayscale(100%)",
                              "&:hover": {
                                filter: "none",
                              },
                            },
                            borderRadius: {
                              xs: "20px",
                              sm: "20px",
                              md: "0px",
                              lg: "0px",
                            },
                          }}
                        />
                        <Typography sx={Imagetitle}>{item.title}</Typography>
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Mobile */}
            {/* Cities Images */}
            <Box
              sx={{
                display: {
                  md: "none",
                  lg: "none",
                },
              }}
            >
              <Grid
                container
                sx={{
                  marginTop: { xs: "15px", sm: "15px", md: "30px", lg: "30px" },
                }}
              >
                {ExploreCityData.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    key={index}
                    sx={{
                      // backgroundColor: "green",
                    }}
                  >
                      <Link to={item.url}>
                    <Box
                      sx={{
                        position: "relative",
                        // backgroundColor: "red",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={item.image}
                        sx={{
                          width: "95%",
                          height: "95%",
                          borderRadius: "10px",
                          margin:"0px 0px 10px 0px"
                        }}
                      />
                      <Typography sx={Imagetitle}>{item.title}</Typography>
                    </Box>
                      </Link>
                  </Grid>
                ))}
              </Grid>
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

export default Explorecity;
