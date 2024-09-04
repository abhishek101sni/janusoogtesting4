import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// FONT CSS
import "./ExperienceCom.css";

import CountUp from "react-countup";

// Animation
import { Fade } from "react-awesome-reveal";

import Marquee from "react-fast-marquee";

const ExperienceCom = () => {
  return (
    <>
      {/* TITLE */}
      <Grid container sx={{ backgroundColor: "black" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "green" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          // display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          // sx={{ backgroundColor: "red" }}
        >
          {/* title and description */}
          <Box
            sx={{
              marginTop: {
                xs: "0px",
                sm: "0px",
                md: "80px",
                lg: "80px",
              },
              marginBottom: {
                xs: "0px",
                sm: "0px",
                md: "80px",
                lg: "80px",
              },
            }}
          >
            {/* Title */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  fontSize: "33px",
                  lineHeight: "33px",
                  letterSpacing: "8%",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Experience
              </Typography>
            </Box>
            {/* description */}
            <Box
              sx={{
                marginTop: "10px",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: {
                    xs: "15px",
                    sm: "15px",
                    md: "16px",
                    lg: "16px",
                  },
                  fontWeight: "500",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                {/* We're a creative force, surpassing standard online marketing.
                  Our agency offers an <br /> experience that goes beyond,
                  ensuring exceptional results and impact */}
                Crunching some numbers - an overview of our deliverables
              </Typography>
            </Box>

            {/* circles */}

            <Box
              sx={{
                backgroundColor: "#000000",
                backgroundColor: "#000000",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingLeft: {
                  xs: "20px",
                  sm: "20px",
                  md: "100px",
                  lg: "100px",
                },
                paddingRight: {
                  xs: "20px",
                  sm: "20px",
                  md: "100px",
                  lg: "100px",
                },
                marginTop: "50px",
              }}
            >
              {/* Green */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "80px",
                      sm: "80px",
                      md: "200px",
                      lg: "200px",
                    },
                    height: {
                      xs: "80px",
                      sm: "80px",
                      md: "200px",
                      lg: "200px",
                    },
                    borderRadius: "50%",
                    backgroundColor: "rgba(85, 255, 0, 0.7)",
                    animation: "animate1 5s linear forwards infinite",
                    transform: "translate(0%, 0%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#000",
                      height: "90%",
                      width: "90%",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        // marginTop: "15px",
                        fontSize: {
                          xs: "20px",
                          sm: "20px",
                          md: "35px",
                          lg: "35px",
                        },
                        fontWeight: "700",
                        fontFamily: "Poppins, sans-serif",
                        color: "#C02222",
                      }}
                    >
                      <CountUp start={0} end={100} />
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        // marginTop: "15px",
                        fontSize: {
                          xs: "20px",
                          sm: "20px",
                          md: "35px",
                          lg: "35px",
                        },
                        fontWeight: "700",
                        fontFamily: "Poppins, sans-serif",
                        color: "#C02222",
                      }}
                    >
                      k+
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: {
                        xs: "500px",
                        sm: "500",
                        md: "600",
                        lg: "600",
                      },
                      fontSize: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                      fontFamily: "Poppins, sans-serif",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "15px",
                        lg: "15px",
                      },
                    }}
                  >
                    HAPPY CLIENTS
                  </Typography>
                </Box>
              </Box>
              {/* Blue */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: {
                        xs: "80px",
                        sm: "80px",
                        md: "200px",
                        lg: "200px",
                      },
                      height: {
                        xs: "80px",
                        sm: "80px",
                        md: "200px",
                        lg: "200px",
                      },
                      borderRadius: "50%",
                      backgroundColor: "rgb(106, 90, 205)",
                      animation: "animate2 5s linear forwards infinite",
                      transform: "translate(0%, 0%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#000",
                        height: "90%",
                        width: "90%",
                        borderRadius: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          // marginTop: "15px",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "35px",
                            lg: "35px",
                          },
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                          color: "#C02222",
                        }}
                      >
                        <CountUp start={0} end={423} />
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          // marginTop: "15px",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "35px",
                            lg: "35px",
                          },
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                          color: "#C02222",
                        }}
                      >
                        k+
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: {
                        xs: "500px",
                        sm: "500",
                        md: "600",
                        lg: "600",
                      },
                      fontSize: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                      fontFamily: "Poppins, sans-serif",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "15px",
                        lg: "15px",
                      },
                    }}
                  >
                    OOH SITES
                  </Typography>
                </Box>
              </Box>
              {/* yellow */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: {
                        xs: "80px",
                        sm: "80px",
                        md: "200px",
                        lg: "200px",
                      },
                      height: {
                        xs: "80px",
                        sm: "80px",
                        md: "200px",
                        lg: "200px",
                      },
                      borderRadius: "50%",
                      backgroundColor: "rgb(255, 165, 0)",
                      animation: "animate3 5s linear forwards infinite",
                      transform: "translate(0%, 0%)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#000",
                        height: "90%",
                        width: "90%",
                        borderRadius: "100px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          // marginTop: "15px",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "35px",
                            lg: "35px",
                          },
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                          color: "#C02222",
                        }}
                      >
                        <CountUp start={0} end={47} />
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          // marginTop: "15px",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "35px",
                            lg: "35px",
                          },
                          fontWeight: "700",
                          fontFamily: "Poppins, sans-serif",
                          color: "#C02222",
                        }}
                      >
                        CR
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: {
                          xs: "500px",
                          sm: "500",
                          md: "600",
                          lg: "600",
                        },
                        fontSize: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        fontFamily: "Poppins, sans-serif",
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "15px",
                          lg: "15px",
                        },
                      }}
                    >
                      PEOPLE IMPACTED
                    </Typography>
                  </Box>
                </Box>
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
          // sx={{ backgroundColor: "green" }}
        ></Grid>
      </Grid>

      <Grid container sx={{ backgroundColor: "black" }}>
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
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          // sx={{backgroundColor:"red"}}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "red" }}
        ></Grid>
      </Grid>

      <Grid
        container
        sx={{
          backgroundColor: "#000",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "purple" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          sx={{ backgroundColor: "black" }}
          display={{ md: "none", lg: "none" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "40px",
                  sm: "40px",
                  md: "0px",
                  lg: "0px",
                },
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
                textAlign: "center",
                color: "#fff",
                marginTop: "5px",
              }}
            >
              Experience
            </Typography>
          </Box>

          <Box
            sx={{
              paddingLeft: {
                xs: "20px",
                sm: "20px",
                md: "0px",
                lg: "0px",
              },
              paddingRight: {
                xs: "20px",
                sm: "20px",
                md: "0px",
                lg: "0px",
              },
            }}
          >
            <Box
              sx={
                {
                  // backgroundColor:"yellow"
                }
              }
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: {
                    xs: "15px",
                    sm: "15px",
                    md: "0px",
                    lg: "0px",
                  },
                  fontWeight: "500",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                We're a creative force, surpassing standard online marketing.
                Our agency offers an experience that goes beyond, ensuring
                exceptional results and impact
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
          // sx={{ backgroundColor: "purple" }}
        ></Grid>
      </Grid>

      {/* circles */}

      <Grid container sx={{}}>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "#000" }}
        ></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          sx={{ backgroundColor: "#000" }}
        ></Grid>
      </Grid>
    </>
  );
};

export default ExperienceCom;
