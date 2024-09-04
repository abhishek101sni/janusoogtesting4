/* eslint-disable jsx-a11y/alt-text */
import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { stateDistricts } from "../../assets/json/statesCity";

import worldimg from "../../assets/images/OutdootAdvertising.jpeg";

// import videotwo from "../../../assets/video/VideoWithoutText.mp4";
import videotwo from "../../assets/video/VideoWithoutText.mp4";

import { Helmet } from "react-helmet";
const Alloutoptional = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Outdoor Advertising Agency: Boost Your Brand Visibility</title>
        <meta
          name="description"
          content={
            "Enhance brand visibility with our outdoor advertising agency. Reach wider audiences and amplify your message. Contact us today"
          }
        />
      </Helmet>

      {/* Video */}
      <Box
        sx={{
          marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" },
        }}
      >
        {/* VIDEO */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            // display={{ xs: "none", lg: "block" }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                height: { xs: "30vh", sm: "30vh", md: "60vh", lg: "60vh" },
              }}
            >
              <video
                src={videotwo}
                autoPlay
                loop
                muted
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* <Box className="container"> */}
              <Box
                sx={{
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  top: { xs: "90px", sm: "90px", md: "130px", lg: "130px" },
                  width: "100%",
                  // backgroundColor:"orange"
                }}
              >
                {/* Text */}
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={0.7}
                    lg={0.7}
                    // sx={{ backgroundColor: "blue" }}
                  ></Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={10.6}
                    lg={10.6}
                    // sx={{ backgroundColor: "red" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* TEXT 1 */}
                      <Box>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: {
                              xs: "0px",
                              sm: "0px",
                              md: "50px",
                              lg: "50px",
                            },
                            fontWeight: {
                              xs: "0",
                              sm: "0",
                              md: "600",
                              lg: "600",
                            },
                            fontFamily: "Poppins, sans-serif",
                            color: "#fff",
                          }}
                        >
                          All Hoarding Advertising
                        </Typography>
                      </Box>
                      {/* for mobile */}
                      <Box sx={{}}>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: {
                              xs: "33px",
                              sm: "33px",
                              md: "0px",
                              lg: "0px",
                            },
                            fontWeight: {
                              xs: "500",
                              sm: "500",
                              md: "0",
                              lg: "0",
                            },
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            fontFamily: "Poppins, sans-serif",
                            color: "#fff",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop:"15px"
                          }}
                        >
                          All Hoarding <br /> Advertising
                        </Typography>
                      </Box>

                      {/* TEXT 2 */}
                      <Box
                        sx={{
                          marginTop: {
                            xs: "10px",
                            sm: "10px",
                            md: "0px",
                            lg: "0px",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: {
                              xs: "center",
                              sm: "center",
                              md: "center",
                              lg: "center",
                            },
                            alignItems: {
                              xs: "center",
                              sm: "center",
                              md: "center",
                              lg: "center",
                            },
                            fontSize: {
                              xs: "15px",
                              sm: "15px",
                              md: "20px",
                              lg: "20px",
                            },
                            fontWeight: {
                              xs: "500",
                              sm: "500",
                              md: "500",
                              lg: "500",
                            },
                            fontFamily: "Poppins, sans-serif",
                            color: "#fff",
                            marginTop: "-5px",
                          }}
                        >
                          {/* Transit Media Advertising Company */}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={0.7}
                    lg={0.7}
                    // sx={{ backgroundColor: "green" }}
                  ></Grid>
                </Grid>

                {/* DROP-DOWN GRID */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ marginTop: { xs: "5px", sm: "5px", md: "30px", lg: "30px" } }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
          <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
            <Grid
              container
              sx={{
                marginTop: {
                  xs: "50px",
                  sm: "50px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              {Object.keys(stateDistricts).map((item) => (
                <Grid item xs={12} sm={12} md={4} lg={4} sx={{}}>
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      marginBottom: "50px",
                      marginRight: "20px",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      // navigate(`/cities/outdoor-hoarding-advertising-agency-in-${item.toLowerCase().replaceAll(' ','-')}`);
                      navigate(
                        `/${item
                          .toLowerCase()
                          .replaceAll(
                            " ",
                            "-"
                          )}-outdoor-hoarding-advertising-agencies`,
                        { state: { AllCities: stateDistricts[item] } }
                      );
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.7",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                    <img
                      src={worldimg}
                      style={{
                        height: "160px",
                        width: "100%",
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Alloutoptional;
