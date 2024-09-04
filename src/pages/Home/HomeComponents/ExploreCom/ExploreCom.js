import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
// FONT CSS
import "./ExploreCom.css";

// IMAGES
import delhi from "../../../../assets/images/states2/indiagate.jpg";
import tajhotel from "../../../../assets/images/states2/tajhotel.jpg";
import banglore from "../../../../assets/images/states2/banglore.jpg";
import chennai from "../../../../assets/images/states2/chennai.jpg";
import hyderabad from "../../../../assets/images/states2/hyderabad.jpg";
import pune from "../../../../assets/images/states2/pune.jpg";
import Marquee from "react-fast-marquee";

// Animation
import { Fade } from "react-awesome-reveal";

const ExploreCom = () => {
  return (
    <>
      {/* TITLE */}
      <Grid container sx={{ backgroundColor: "#fff" }}>
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
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          // sx={{ backgroundColor: "red" }}
        >
          <Box
            sx={{
              marginTop: {
                xs: "0px",
                sm: "0px",
                md: "80px",
                lg: "80px",
              },
            }}
          >
            {/* title */}
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "600",
                  fontSize: "33px",
                  lineHeight: "33px",
                  letterSpacing: "8%",
                  color: "black",
                  textAlign: "center",
                }}
              >
                Explore your City Listings
              </Typography>
            </Box>
            {/* description */}
            <Box sx={{ marginTop: "10px" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "26px",
                  justifyContent: "center",
                  textAlign: "justify",
                  fontFamily: "Poppins, sans-serif",
                  color: "#333333",
                  textAlign: "center",
                }}
              >
                {/* Propel your brand's presence across cities with our dynamic
                outdoor solutions,
                <br />
                delivering impactful, creative advertising excellence
                seamlessly. */}
                Find your intelligently positioned advertisements across various cities
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

      {/* Mobiel view */}
      <Grid
        container
        sx={{
          backgroundColor: "#fff",
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
          // sx={{ backgroundColor: "pink" }}
          display={{ md: "none", lg: "none" }}
        >
          <Box
            sx={{
              paddingLeft: {
                xs: "20px",
                sm: "20px",
              },
              paddingRight: {
                xs: "20px",
                sm: "20px",
              },
            }}
          >
            <Marquee speed={90}>
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
                  color: "#000",
                  marginTop: "5px",
                  marginRight: "40px",
                }}
              >
                Explore your City Listings
              </Typography>
            </Marquee>
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
                  color: "#000",
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
                Propel your brand's presence across cities with our dynamic
                outdoor solutions, delivering impactful, creative advertising
                excellence seamlessly.
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


      {/* Cities */}

      {/* Container 1 */}
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
          // sx={{ backgroundColor: "yellow" }}
        >
          <Grid container sx={{ marginTop: "15px" }}>
            {/* DELHI------------------------------------------ */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                // backgroundColor: "red",
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                  lg: "flex-start",
                },
                alignItems: "center",
              }}
            >
              <Link to="https://www.janusooh.com/outdoor-advertising-agency-in-delhi/">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    },
                    alignItems: "center",
                    position: "relative",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={delhi}
                    sx={{
                      width: "90%",
                      height: "90%",
                      borderRadius: "10px",
                      boxShadow: {
                        xs: "5",
                        sm: "5",
                        md: "20",
                        lg: "20",
                      },
                      transition: {
                        md: "transform 0.1s, background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#D8D8D8",
                          transform: "scale(1.05)",
                        },
                        lg: "transform 0.1s, background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#D8D8D8",
                          transform: "scale(1.05)",
                        },
                      },
                    }}
                  />
                </Box>
              </Link>
              <Box
                sx={{
                  position: "absolute",
                  marginTop: "150px",
                  marginLeft: {
                    xs: "-230px",
                    sm: "-230px",
                    md: "10px",
                    lg: "10px",
                  },
                }}
              >
                <Link
                  to="https://www.janusooh.com/outdoor-advertising-agency-in-delhi/"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "25px",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    DELHI
                  </Typography>
                </Link>
              </Box>
            </Grid>

            {/* MUMBAI---------------------------- */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                // backgroundColor: "green",
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "center",
                },
                alignItems: "center",
              }}
            >
              <Link to="https://www.janusooh.com/outdoor-advertising-agency-in-mumbai-city/">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "center",
                    },
                    alignItems: "center",
                    position: "relative",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={tajhotel}
                    sx={{
                      width: "90%",
                      height: "90%",
                      borderRadius: "10px",
                      boxShadow: {
                        xs: "5",
                        sm: "5",
                        md: "20",
                        lg: "20",
                      },
                      transition: {
                        md: "transform 0.1s, background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#D8D8D8",
                          transform: "scale(1.05)",
                        },
                        lg: "transform 0.1s, background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#D8D8D8",
                          transform: "scale(1.05)",
                        },
                      },
                    }}
                  />
                </Box>
              </Link>
              <Box
                sx={{
                  position: "absolute",
                  marginTop: "150px",
                  marginLeft: {
                    xs: "-190px",
                    sm: "-190px",
                    md: "-210px",
                    lg: "-210px",
                  },
                }}
              >
                <Link
                  to="https://www.janusooh.com/outdoor-advertising-agency-in-mumbai-city/"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "25px",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    MUMBAI
                  </Typography>
                </Link>
              </Box>
            </Grid>

            {/* BANGLORE-------------------------- */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                // backgroundColor: "red",
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-end",
                  lg: "flex-end",
                },
                alignItems: "center",
              }}
            >
              <Link to="https://www.janusooh.com/outdoor-advertising-agency-in-bengaluru-urban/">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "flex-end",
                      lg: "flex-end",
                    },
                    alignItems: "center",
                    position: "relative",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={banglore}
                    sx={{
                      width: "90%",
                      height: "90%",
                      borderRadius: "10px",
                      boxShadow: {
                        xs: "5",
                        sm: "5",
                        md: "20",
                        lg: "20",
                      },
                      transition: {
                        md: "transform 0.1s, background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#D8D8D8",
                          transform: "scale(1.05)",
                        },
                        lg: "transform 0.1s, background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#D8D8D8",
                          transform: "scale(1.05)",
                        },
                      },
                    }}
                  />
                </Box>
              </Link>
              <Box
                sx={{
                  position: "absolute",
                  marginTop: "150px",
                  marginRight: {
                    xs: "160px",
                    sm: "160px",
                    md: "190px",
                    lg: "190px",
                  },
                }}
              >
                <Link
                  to="https://www.janusooh.com/outdoor-advertising-agency-in-bengaluru-urban/"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "25px",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    BANGLORE
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
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

      {/* Container 2 */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "green" }}
        ></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid
            container
            sx={{
              // backgroundColor: "red",
              marginTop: {
                xs: "0px",
                sm: "0px",
                md: "30px",
                marginBottom: "80px",
              },
            }}
          >
            {/* pune------------------------------------------ */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                // backgroundColor: "red",
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                  lg: "flex-start",
                },
                alignItems: "center",
              }}
            >
              <Link to="https://www.janusooh.com/outdoor-advertising-agency-in-pune/">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    },
                    alignItems: "center",
                    position: "relative",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={pune}
                    sx={{
                      width: "90%",
                      height: "90%",
                      borderRadius: "10px",
                      boxShadow: {
                        xs: "5",
                        sm: "5",
                        md: "20",
                        lg: "20",
                      },
                      transition: {
                        md: "transform 0.1s, background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#D8D8D8",
                          transform: "scale(1.05)",
                        },
                        lg: "transform 0.1s, background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#D8D8D8",
                          transform: "scale(1.05)",
                        },
                      },
                    }}
                  />
                </Box>
              </Link>
              <Box
                sx={{
                  position: "absolute",
                  marginTop: "150px",
                  marginLeft: {
                    xs: "-230px",
                    sm: "-230px",
                    md: "10px",
                    lg: "10px",
                  },
                }}
              >
                <Link
                  to="https://www.janusooh.com/outdoor-advertising-agency-in-pune/"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "25px",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    PUNE
                  </Typography>
                </Link>
              </Box>
            </Grid>

            {/* Hyderabad---------------------------- */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                // backgroundColor: "green",
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "center",
                },
                alignItems: "center",
              }}
            >
              <Link to="https://www.janusooh.com/outdoor-advertising-agency-in-hyderabad/">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "center",
                    },
                    alignItems: "center",
                    position: "relative",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={hyderabad}
                    sx={{
                      width: "90%",
                      height: "90%",
                      borderRadius: "10px",
                      boxShadow: {
                        xs: "5",
                        sm: "5",
                        md: "20",
                        lg: "20",
                      },
                      transition: {
                        md: "transform 0.1s, background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#D8D8D8",
                          transform: "scale(1.05)",
                        },
                        lg: "transform 0.1s, background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#D8D8D8",
                          transform: "scale(1.05)",
                        },
                      },
                    }}
                  />
                </Box>
              </Link>
              <Box
                sx={{
                  position: "absolute",
                  marginTop: "150px",
                  marginLeft: {
                    xs: "-140px",
                    sm: "-140px",
                    md: "-155px",
                    lg: "-155px",
                  },
                }}
              >
                <Link
                  to="https://www.janusooh.com/outdoor-advertising-agency-in-hyderabad/"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "25px",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    HYDERABAD
                  </Typography>
                </Link>
              </Box>
            </Grid>

            {/* CHENNAI-------------------------- */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                // backgroundColor: "red",
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-end",
                  lg: "flex-end",
                },
                alignItems: "center",
              }}
            >
              <Link to="https://www.janusooh.com/outdoor-advertising-agency-in-chennai/">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "flex-end",
                      lg: "flex-end",
                    },
                    alignItems: "center",
                    position: "relative",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src={chennai}
                    sx={{
                      width: "90%",
                      height: "90%",
                      borderRadius: "10px",
                      boxShadow: {
                        xs: "5",
                        sm: "5",
                        md: "20",
                        lg: "20",
                      },
                      transition: {
                        md: "transform 0.1s, background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#D8D8D8",
                          transform: "scale(1.05)",
                        },
                        lg: "transform 0.1s, background-color 0.3s",
                        "&:hover": {
                          backgroundColor: "#D8D8D8",
                          transform: "scale(1.05)",
                        },
                      },
                    }}
                  />
                </Box>
              </Link>
              <Box
                sx={{
                  position: "absolute",
                  marginTop: "150px",
                  marginRight: {
                    xs: "180px",
                    sm: "180px",
                    md: "215px",
                    lg: "210px",
                  },
                }}
              >
                <Link
                  to="https://www.janusooh.com/outdoor-advertising-agency-in-chennai/"
                  style={{ textDecoration: "none" }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "25px",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    CHENNAI
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
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
    </>
  );
};

export default ExploreCom;
