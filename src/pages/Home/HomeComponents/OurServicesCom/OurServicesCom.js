import React, { useRef, useEffect, useState } from "react";

// FONT CSS
import "./OurServicesCom.css";
import Marquee from "react-fast-marquee";

import leftarrow from "../../../../assets/images/left-arrow.png";
import rightarrow from "../../../../assets/images/right-arrow.png";

// react-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// REACT_ROUTER_DOM
import { useNavigate } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";
import { getProductsCategories } from "../../../../redux/actions/Home";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

const OurServicesCom = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();
  const { productscategories } = useSelector((state) => state.HomeReducer);

  useEffect(() => {
    getProductsCategories();
  }, []);

  const sliderRef = useRef(null);

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (current) => setCurrentSlide(current),
    customPaging: (i) => <div className="custom-dot">{i + 1}</div>,
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
      {/* for Desktop */}

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
          sx={
            {
              // backgroundColor: "green",
            }
          }
        ></Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={10.6}
          lg={10.6}
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
        >
          {/* Main */}
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
              {/* title */}
              <Box
                sx={{
                  width: "31%",
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
                  Our Services
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
                style={{
                  height: "40px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  {productscategories ? (
                    productscategories.map((item) => (
                      <Box
                        sx={{
                          backgroundColor: "#C02222",
                          borderRadius: "5px",
                          marginRight: "25px",
                          cursor: "pointer",
                          boxShadow: "2",
                          transition: "transform 0.1s, background-color 0.3s", // Add transition for smooth effect
                          "&:hover": {
                            transform: "scale(1.05)", // Slightly enlarge the box on hover
                          },
                        }}
                        onClick={() => {
                          if (item.category === "Outdoor Advertising") {
                            navigate("/outdoor-advertising-agency/");
                          } else if (item.category === "Metro Branding") {
                            navigate("/metro-advertising-agency/");
                          } else if (item.category === "Airport Branding") {
                            navigate("/airport-branding-advertising-agency/");
                          } else if (item.category === "Transit Media") {
                            navigate("/transit-media-advertising-agency/");
                          } else if (item.category === "Mall Branding") {
                            navigate("/mall-branding-advertising-agency/");
                          } else if (item.category === "Inflight Branding") {
                            navigate("/inflight-branding-advertising-agency/");
                          }
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "600",
                            fontSize: "17px",
                            lineHeight: "25.5px",
                            letterSpacing: "10%",
                            color: "white",
                            padding: "6px",
                          }}
                        >
                          {item?.category}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Typography></Typography>
                  )}
                </Box>
              </Marquee>
            </Box>

            {/* text With arrows */}

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
                  // backgroundColor:"orange"
                }}
              >
                {/* TExt */}
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
                    {/* Elevate Your Brand with Our Unmatched Outdoor Media
                      Solutions –
                      <br />
                      Impactful , Creative & Results-Driven Advertising
                      Excellence. */}
                    Give your brand a head start with impactful, creative, and
                    <br /> fostered outdoor advertisement
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
                        cursor: "pointer",
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
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box
                          src={leftarrow}
                          component="img"
                          sx={{
                            width: "9px",
                            height: "12px",
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
                    </Box>

                    {/* right arrow */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        // cursor:"pointer"
                      }}
                    >
                      <Box
                        sx={{
                          height: "2px",
                          width: "34px",
                          backgroundColor: "#C02222",
                          marginRight: "-6px",
                        }}
                        onClick={() => sliderRef.current.slickNext()}
                      ></Box>
                      <Box
                        src={rightarrow}
                        component="img"
                        sx={{
                          width: "9px",
                          height: "12px",
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
              {/* slider */}
              <Box sx={{ marginTop: "20px" }}>
                <Slider ref={sliderRef} {...settings}>
                  {productscategories ? (
                    productscategories.map((item) => (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            border: "1px solid #C02222",
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
                            if (item.category === "Outdoor Advertising") {
                              navigate("/outdoor-advertising-agency/");
                            } else if (item.category === "Metro Branding") {
                              navigate("/metro-advertising-agency/");
                            } else if (item.category === "Airport Branding") {
                              navigate("/airport-branding-advertising-agency/");
                            } else if (item.category === "Transit Media") {
                              navigate("/transit-media-advertising-agency/");
                            } else if (item.category === "Mall Branding") {
                              navigate("/mall-branding-advertising-agency/");
                            } else if (item.category === "Inflight Branding") {
                              navigate(
                                "/inflight-branding-advertising-agency/"
                              );
                            }
                          }}
                        >
                          <Box
                            component="img"
                            sx={{
                              height: "100%",
                              width: "100%",
                              borderTopLeftRadius: "10px",
                              borderTopRightRadius: "10px",
                            }}
                            alt="The house from the offer."
                            src={item?.img}
                          />
                          <Box
                            sx={{
                              height: "50px",
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: {
                                  xs: "25px",
                                  sm: "25px",
                                  md: "18px",
                                  lg: "18px",
                                },
                                fontWeight: "600",
                                color: "#fff",
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2,
                                color: "#C02222",
                                // width: "256px",
                                textShadow: "0.5px red",
                                lineHeight: "18px",
                                // backgroundColor:"green",
                                textTransform: "capitalize",
                                padding: "6px",
                                textAlign: "center",
                              }}
                            >
                              {item?.category}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    ))
                  ) : (
                    <Typography></Typography>
                  )}
                </Slider>
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
          sx={
            {
              // backgroundColor: "green",
            }
          }
        ></Grid>
      </Grid>

      {/* for mobile */}
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
          <Box>
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
              Our Services
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
            {/* text */}
            <Box>
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
                Elevate Your Brand with Our Unmatched Outdoor Media Solutions –
                Impactful , Creative & Results-Driven Advertising Excellence.
              </Typography>
            </Box>
            {/* slider */}
            <Box>
              {/* slider */}
              <Slider ref={sliderRef} {...settings}>
                {productscategories ? (
                  productscategories.map((item) => (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          border: "1px solid #C02222",
                          alignItems: "center",
                          boxShadow: "2",
                          margin: {
                            xs: "5px",
                            sm: "5px",
                            md: "0px",
                            lg: "0px",
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
                          if (item.category === "Outdoor Advertising") {
                            navigate("/outdoor-advertising-agency/");
                          } else if (item.category === "Metro Branding") {
                            navigate("/metro-advertising-agency/");
                          } else if (item.category === "Airport Branding") {
                            navigate("/airport-branding-advertising-agency/");
                          } else if (item.category === "Transit Media") {
                            navigate("/transit-media-advertising-agency/");
                          } else if (item.category === "Mall Branding") {
                            navigate("/mall-branding-advertising-agency/");
                          } else if (item.category === "Inflight Branding") {
                            navigate("/inflight-branding-advertising-agency/");
                          }
                        }}
                      >
                        <Box
                          component="img"
                          sx={{
                            height: "100%",
                            width: "100%",
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                          }}
                          alt="The house from the offer."
                          src={item?.img}
                        />
                        <Box
                          sx={{
                            height: "50px",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: {
                                xs: "25px",
                                sm: "25px",
                                md: "18px",
                                lg: "18px",
                              },
                              fontWeight: "600",
                              color: "#fff",
                              display: "-webkit-box",
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 2,
                              color: "#C02222",
                              // width: "256px",
                              textShadow: "0.5px red",
                              lineHeight: "18px",
                              // backgroundColor:"green",
                              textTransform: "capitalize",
                              padding: "6px",
                              textAlign: "center",
                            }}
                          >
                            {item?.category}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Typography></Typography>
                )}
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
          // sx={{ backgroundColor: "purple" }}
        ></Grid>
      </Grid>

      {/* Buttons for mobile */}
      <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
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
              marginTop: "20px",
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

      {/* <Categorycarousel /> */}
    </>
  );
};

export default OurServicesCom;
