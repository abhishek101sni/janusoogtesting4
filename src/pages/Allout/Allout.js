/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";

// REACT-HELMET
import { Helmet } from "react-helmet";

// MUI
import { Grid, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { states, stateDistricts } from "../../assets/json/statesCity";
import videotwo from "../../assets/video/VideoWithoutText.mp4";

import { getStateAndCity } from "../../redux/actions/Outdoor";

import "./Allout.css";

const Allout = () => {
  const { allstates } = useSelector((state) => state.OutdoorReducer);

  useEffect(() => {
    getStateAndCity();
  }, []);

  return (
    <>
      <Helmet>
        <title>Prime Hoarding: Maximizing Outdoor Exposure</title>
        <meta
          name="description"
          content={
            "Prime Hoarding: Elevating Outdoor Exposure with Billboard Advertisement Solutions. Reach new heights of visibility and engagement in the outdoor landscape."
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
                          All Hoarding
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
                          }}
                        >
                          All Hoardings
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


      {/* Content */}
      <Box
        sx={{
          marginTop: { xs: "10px", sm: "10px", md: "30px", lg: "30px" },
          marginBottom: { xs: "20px", sm: "20px", md: "30px", lg: "30px" },
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "red" }}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10.6}
            lg={10.6}
          >
            <Box
              sx={{
                marginLeft: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                marginTop: {
                  xs: "20px",
                  sm: "20px",
                  md: "0px",
                  lg: "0px",
                },
                marginBottom: {
                  xs: "20px",
                  sm: "20px",
                  md: "0px",
                  lg: "0px",
                },
              }}
            >
              {Object.keys(stateDistricts).map((item, index) => (
                <Box>
                  <a
                    href={`https://www.janusooh.com/outdoor-advertising-agency-in-${item
                      // href={`all-outy-outdoor-advertising-agency-in-${item
                      .toLowerCase()
                      .replaceAll(" ", "-")}/`}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "30px",
                          sm: "30px",
                          md: "40px",
                          lg: "40px",
                        },
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                        marginBottom: "5px",
                        textDecoration: "none",
                        color: "#C02222",
                        // backgroundColor:"green"
                      }}
                    >
                      {item}
                    </Typography>
                  </a>

                  {stateDistricts[item].map((city, i) => (
                    <a
                      href={`https://www.janusooh.com/outdoor-advertising-agency-in-${city
                        .toLowerCase()
                        .replaceAll(" ", "-")}/`}
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "20px",
                            sm: "15px",
                            md: "25px",
                            lg: "25px",
                          },
                          color: "#000",
                          fontFamily: "Poppins, sans-serif",
                          fontWeight: "600",
                          width:"100%"
                        }}
                      >
                        {city}
                      </Typography>
                    </a>
                  ))}
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "red" }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Allout;
