import React, { useRef, useEffect } from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

import leftarrow from "../../../../assets/images/left-arrow.png";
import rightarrow from "../../../../assets/images/right-arrow.png";

import Marquee from "react-fast-marquee";

import { Link } from "react-router-dom";
import { Cities } from "../../../../assets/json/Cities";
import { statesData } from "../../../../assets/json/States";
// FONT CSS
import "./HoardingPlacedCom.css";
import Cardcarousel from "../../../Carousels/CardCarousel/Cardcarousel";

// Animation
import { Fade } from "react-awesome-reveal";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// redux
// REDUX
import { useSelector } from "react-redux";
import {
  getProducts,
  getProductsByState,
} from "../../../../redux/actions/Outdoor";

// REACT-ROUTER_DOM
import { useNavigate } from "react-router-dom";

const HoardingPlacedCom = () => {
  React.useEffect(() => {
    getProducts();
  }, []);

  const { products } = useSelector((state) => state.OutdoorReducer);

  const navigate = useNavigate();
  const sliderRef = useRef(null);

  var settings = {
    // dots: true,
    infinite: true,
    arrows: false,
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

  return (
    <>
      {/* TITLE */}
      {/* Desktop */}
      <Grid
        container
        sx={{
          backgroundColor: "#F5F5F5",
        }}
      >
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
              marginBottom: {
                xs: "0px",
                sm: "0px",
                md: "80px",
                lg: "80px",
              },
            }}
          >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  // backgroundColor: "blue",
                }}
              >
                {/* Title */}
                <Box
                  sx={{
                    width: "45%",
                    // backgroundColor: "blue",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                      fontSize: "33px",
                      lineHeight: "33px",
                      letterSpacing: "8%",
                      color: "black",
                      // padding: "2px",
                    }}
                  >
                    Hoarding Placed
                  </Typography>
                </Box>

                {/* Line */}
                <Box
                  sx={{
                    // backgroundColor: "green",
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "1px",
                      width: "100%",
                      backgroundColor: "black",
                      marginRight: "10px",
                      marginLeft: "10px",
                      paddingLeft: "20px",
                      // width:"100%"
                    }}
                  ></Box>

                  <hr />
                </Box>

                {/* Marquee */}
                <Marquee
                  autoFill={false}
                  speed={100}
                  pauseOnHover={true}
                  style={{ height: "40px", width: "100%" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    {/* Outdoor branding */}
                    {statesData.map((item) => (
                      <Link to={item.link} style={{ textDecoration: "none" }}>
                        <Box
                          sx={{
                            backgroundColor: "#C02222",
                            borderRadius: "5px",
                            marginRight: "25px",
                            boxShadow: "2",
                            cursor: "pointer",
                            transition: "transform 0.1s, background-color 0.3s", // Add transition for smooth effect
                            "&:hover": {
                              transform: "scale(1.05)", // Slightly enlarge the box on hover
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins, sans-serif",
                              fontWeight: "600",
                              fontSize: "17px",
                              lineHeight: "25.5px",
                              letterSpacing: "10%",
                              padding: "6px",
                              color: "#fff",
                            }}
                          >
                            {item.name}
                          </Typography>
                        </Box>
                      </Link>
                    ))}
                  </Box>
                </Marquee>
              </Box>
            {/* text With arrows */}
            {/* text */}
            <Box
              sx={{
                marginTop: "20px",
              }}
            >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* text */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        lineHeight: "26px",
                        justifyContent: "center",
                        textAlign: "justify",
                        fontFamily: "Poppins, sans-serif",
                        color: "#333333",
                        textAlign: "left",
                      }}
                    >
                      {/* Cityscape Brilliance Unveiled Journey through our top
                      sites in key cities, showcasing <br /> businesses
                      worldwide—a testament to impactful collaborations. */}
                      Showcasing our best-featured work—a testament to impactful collaborations
                    </Typography>
                  </Box>

                  {/* Arrows */}
                  <Box
                    sx={{
                      // backgroundColor: "pink",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Box
                      sx={{
                        width: "122px",
                        height: "32px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* left arrow */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: "32px",
                            height: "32px",
                            border: "2px solid #C02222",
                            borderRadius: "100px",
                          }}
                          onClick={() => sliderRef.current.slickPrev()}
                        ></Box>

                        <Box
                          src={leftarrow}
                          component="img"
                          sx={{
                            width: "9px",
                            height: "11px",
                            marginLeft: "-20px",
                          }}
                          onClick={() => sliderRef.current.slickPrev()}
                        />
                        <Box
                          sx={{
                            height: "2px",
                            width: "34px",
                            backgroundColor: "#C02222",
                            marginLeft: "-7px",
                          }}
                          onClick={() => sliderRef.current.slickPrev()}
                        ></Box>
                      </Box>

                      {/* right arrow */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            height: "2px",
                            width: "34px",
                            backgroundColor: "#C02222",
                            marginRight: "-7px",
                          }}
                          onClick={() => sliderRef.current.slickNext()}
                        ></Box>
                        <Box
                          src={rightarrow}
                          component="img"
                          sx={{
                            width: "9px",
                            height: "11px",
                            marginRight: "-20px",
                          }}
                          onClick={() => sliderRef.current.slickNext()}
                        />
                        <Box
                          sx={{
                            width: "32px",
                            height: "32px",
                            border: "2px solid #C02222",
                            borderRadius: "100px",
                          }}
                          onClick={() => sliderRef.current.slickNext()}
                        ></Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
            </Box>

            {/* slider */}
            <Box sx={{ marginTop: "20px" }}>
              <Slider
                ref={sliderRef}
                {...settings}
                // style={{ backgroundColor: "red" }}
              >
                {products &&
                  products.map((item, index) => (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          // border: "1px solid #C02222",
                          alignItems: "center",
                          boxShadow: {
                            xs: "0",
                            sm: "0",
                            md: "2",
                            lg: "2",
                          },
                          margin: {
                            xs: "0px",
                            sm: "0px",
                            md: "5px",
                            lg: "5px",
                          },
                          borderRadius: "10px",
                          transition: {
                            xs: "0px",
                            sm: "0px",
                            md: "transform 0.1s, background-color 0.3s",
                            "&:hover": {
                              backgroundColor: "#D8D8D8",
                              transform: "scale(0.5)",
                            },
                            lg: "transform 0.1s, background-color 0.3s",
                            "&:hover": {
                              backgroundColor: "#D8D8D8",
                              transform: "scale(1.01)",
                            },
                          },
                        }}
                        onClick={() => {
                          navigate(
                            `/${
                              item?.urlcat?.toLowerCase()
                                ? item?.urlcat?.toLowerCase()
                                : item?.urlcat
                            }/${item?.url ? item?.url : item?.address}/`,
                            { state: { id: item._id } }
                          );
                          console.log("hello world");
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            height: {
                              xs: "250px",
                              sm: "250px",
                              md: "240px",
                              lg: "240px",
                            },
                            width: "100%",
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                          }}
                          alt="The house from the offer."
                          src={item?.image}
                        />
                        <Box
                          sx={{
                            marginTop: "10px",
                            marginBottom: "5px",
                            width: "100%",
                            display: "flex",
                            alignItems: "flex-start",
                            width: "90%",
                            paddingLeft: "10px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "18px",
                              fontWeight: "600",
                              color: "#fff",
                              display: "-webkit-box",
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 1,
                              color: "#C02222",
                              // width: "256px",
                              textShadow: "0.5px red",
                              lineHeight: "18px",
                              textTransform: "capitalize",
                              paddingTop: "5px",
                              paddingBottom: "2.5px",
                            }}
                          >
                            {item?.address}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "90%",
                            marginBottom: "5px",
                            paddingLeft: "10px",
                          }}
                        >
                          <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography
                              sx={{
                                fontSize: "15px",
                                fontWeight: "600",
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              City
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "15px",
                                fontWeight: "600",
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              &nbsp;&nbsp;&nbsp;:&nbsp;
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "15px",
                                fontWeight: "500",
                                fontFamily: "Poppins, sans-serif",
                                textTransform: "capitalize",
                              }}
                            >
                              {item?.city}
                            </Typography>
                          </Box>
                          <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Typography
                              sx={{
                                fontSize: "15px",
                                fontWeight: "600",
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              State
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "15px",
                                fontWeight: "600",
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              &nbsp;:&nbsp;
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "15px",
                                fontWeight: "500",
                                fontFamily: "Poppins, sans-serif",
                                textTransform: "capitalize",
                              }}
                            >
                              {item?.state}
                            </Typography>
                          </Box>
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
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "red" }}
        ></Grid>
      </Grid>

      {/* mobile */}
      <Grid
        container
        sx={{
          backgroundColor: "white",
        }}
        display={{ md: "none", lg: "none" }}
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
        >
          <Box
            sx={{
              marginTop: { xs: "10px", sm: "10px", md: "30px", lg: "30px" },
              marginBottom: { xs: "10px", sm: "10px", md: "15px", lg: "15px" },
            }}
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
              <Typography
                sx={{
                  fontSize: {
                    xs: "40px",
                    sm: "40px",
                    md: "36px",
                    lg: "36px",
                  },
                  fontWeight: "600",
                  fontFamily: "Poppins, sans-serif",
                  textAlign: "center",
                  color: "#000",
                  lineHeight: "50px",
                }}
              >
                Hoarding Placed
              </Typography>
            </Box>

            <Box
              sx={{
                paddingLeft: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                paddingRight: {
                  xs: "10px",
                  sm: "10px",
                  md: "0px",
                  lg: "0px",
                },
                // backgroundColor: "yellow",
              }}
            >
              <Box sx={{ paddingLeft: "20px", paddingRight: "20px" }}>
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
                  Cityscape Brilliance Unveiled Journey <br /> through our top
                  sites in key cities, showcasing businesses worldwide—a
                  testament to impactful collaborations.
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
          // sx={{ backgroundColor: "purple" }}
        ></Grid>
      </Grid>

      {/* Buttons for mobile */}
      <Grid container sx={{ backgroundColor: "white" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          display={{ md: "none", lg: "none" }}
          // sx={{ backgroundColor: "green" }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: "50px",
              paddingRight: "50px",
              marginBottom: "25px",
              marginTop: "10px",
            }}
          >
            {/* left arrow */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  border: "1px solid #C02222",
                  borderRadius: "100px",
                }}
                onClick={() => sliderRef.current.slickPrev()}
              ></Box>

              <Box
                src={leftarrow}
                component="img"
                sx={{
                  width: "6px",
                  height: "9px",
                  marginLeft: "-20px",
                }}
                onClick={() => sliderRef.current.slickPrev()}
              />
              <Box
                sx={{
                  height: "1px",
                  width: "34px",
                  backgroundColor: "#C02222",
                  marginLeft: "-5px",
                }}
                onClick={() => sliderRef.current.slickPrev()}
              ></Box>
            </Box>

            {/* right arrow */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "1px",
                  width: "34px",
                  backgroundColor: "#C02222",
                  marginRight: "-5px",
                }}
                onClick={() => sliderRef.current.slickNext()}
              ></Box>
              <Box
                src={rightarrow}
                component="img"
                sx={{
                  width: "6px",
                  height: "9px",
                  marginRight: "-20px",
                }}
                onClick={() => sliderRef.current.slickNext()}
              />
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  border: "1px solid #C02222",
                  borderRadius: "100px",
                }}
                onClick={() => sliderRef.current.slickNext()}
              ></Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* <Cardcarousel /> */}
    </>
  );
};

export default HoardingPlacedCom;
