import React, { useEffect } from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

import { Fade } from "react-awesome-reveal";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// CSS
import "./Triumphs.css";

// IMAGES
import amarujala from "../../../../assets/images/Triumphs/png230x90/amarujala.png";
import Digividya from "../../../../assets/images/Triumphs/png230x90/digividyapeeth.png";
import dominos from "../../../../assets/images/Triumphs/png230x90/dominos.png";
import geniefie from "../../../../assets/images/Triumphs/png230x90/geniefie.png";
import icici from "../../../../assets/images/Triumphs/png230x90/icici.png";
import malasia from "../../../../assets/images/Triumphs/png230x90/malasia.png";
import nippo from "../../../../assets/images/Triumphs/png230x90/nippo.png";
import timesin from "../../../../assets/images/Triumphs/png230x90/toi.png";
import timesin2 from "../../../../assets/images/Triumphs/png230x90/toifull.png";
import timesin3 from "../../../../assets/images/Triumphs/png230x90/toifullblack.png";

import { TriumphsData } from "../../../../assets/json/TriumphsData";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// PAGES
import TriumphIconsCaro from "../../../Carousels/TriumphIconsCaro/TriumphIconsCaro";

var settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 4,
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

const Triumphs = () => {
  return (
    <>
      {/* title and Description */}

      <Grid container sx={{ backgroundColor: "#fff" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{backgroundColor:"orange"}}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          // sx={{ backgroundColor: "green" }}
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
                  Our Clients
                </Typography>
              </Box>
              {/* description */}
              <Box sx={{ marginTop: "10px" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "26px",
                    fontFamily: "Poppins, sans-serif",
                    color: "black",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {/* Showcasing the success stories of clients who've experienced our
                creative
                <br />
                prowess, surpassing ordinary online marketing impact. */}
                  At JANUSOOH, we take pride in every single brand that we
                  work with. Check our portfolio!
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
          // sx={{backgroundColor:"orange"}}
        ></Grid>
      </Grid>

      {/* Logos */}
      <Grid
        container
        sx={{
          backgroundColor: "blue",
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
          sx={{ backgroundColor: "White" }}
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
                color: "#000",
                marginTop: "5px",
              }}
            >
              Triumphs
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
                    color: "black",
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
                  Showcasing the success stories of clients who've experienced
                  our creative prowess, surpassing ordinary online marketing
                  impact.
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

      {/*caro */}

      {/* Container 1 */}
        <Grid
          container
          sx={{
            // backgroundColor:"orange" ,
            marginTop: "25px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            sx={
              {
                // backgroundColor: "yellow",
              }
            }
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={10.6}
            lg={10.6}
            // sx={{ backgroundColor: "green" }}
          >
            <Grid
              container // sx={{backgroundColor:"red"}}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                // sx={{ backgroundColor: "blue" }}
              >
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "170px",
                        lg: "170px",
                      },
                      height: {
                        xs: "0px",
                        sm: "0px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                    alt="iciciLogo"
                    src={icici}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                // sx={{ backgroundColor: "green" }}
              >
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "230px",
                        lg: "230px",
                      },
                      height: {
                        xs: "0px",
                        sm: "0px",
                        md: "90px",
                        lg: "90px",
                      },
                      borderRadius: "10px",
                    }}
                    alt="add_img1"
                    src={timesin2}
                  />
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                sx={{
                  // backgroundColor: "orange",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "230px",
                        lg: "230px",
                      },
                      height: {
                        xs: "70px",
                        sm: "70px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                    alt="add_img1"
                    src={geniefie}
                  />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                sx={{
                  // backgroundColor: "pink",
                  alignItems: "right",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "230px",
                        lg: "230px",
                      },
                      height: {
                        xs: "80px",
                        sm: "80px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                    alt="add_img1"
                    src={dominos}
                  />
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
            // sx={{ backgroundColor: "yellow" }}
          ></Grid>
        </Grid>

      {/* container 2 */}
        <Grid
          container
          sx={{
            //  backgroundcolor: "yellow" ,
            marginTop: "35px",
            marginBottom: "80px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "green" }}
          ></Grid>

          <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
            <Grid container>
              {/* malasia */}
              <Grid item xs={12} sm={12} md={3} lg={3}>
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "170px",
                        lg: "170px",
                      },
                      height: {
                        xs: "0px",
                        sm: "0px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                    alt="add_img1"
                    src={malasia}
                  />
                </Box>
              </Grid>
              {/* Digividyapeeth */}
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                // sx={{ backgroundColor: "red" }}
              >
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "0px",
                      sm: "0px",
                      md: "240px",
                      lg: "240px",
                    },
                    height: {
                      xs: "0px",
                      sm: "0px",
                      md: "90px",
                      lg: "90px",
                    },
                  }}
                  alt="add_img1"
                  src={Digividya}
                />
              </Grid>
              {/* Amar Ujala */}
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "170px",
                        lg: "170px",
                      },
                      height: {
                        xs: "0px",
                        sm: "0px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                    alt="add_img1"
                    src={amarujala}
                  />
                </Box>
              </Grid>
              {/* Nipppo */}
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Box>
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "0px",
                        sm: "0px",
                        md: "170px",
                        lg: "170px",
                      },
                      height: {
                        xs: "0px",
                        sm: "0px",
                        md: "90px",
                        lg: "90px",
                      },
                    }}
                    alt="add_img1"
                    src={nippo}
                  />
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

      {/* Caro For mobile */}
      {/* <TriumphIconsCaro /> */}
    </>
  );
};

export default Triumphs;
