import React, { useRef, useEffect, useState } from "react";

// MUI
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
} from "../../../../DesignData/MaterialUi/material-ui";

// Images
import {
  Redtriangle,
  rightarr,
  leftarr,
  imageNotFound,
} from "../../../../DesignData/Images/Images";

import "./Topmediaspends.css";

// REDUX
import { useSelector } from "react-redux";
import { getProducts } from "../../../../redux/actions/Outdoor";

// REACT-ROUTER_DOM
import { useNavigate } from "react-router-dom";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Classnames } from "react-alice-carousel";
import {
  SectionMainTitle,
  SectionMainTitleForDesktop,
} from "../../../Styles/Styles";

const useStyles = makeStyles(() => ({
  sideGridBgColor: {
    // backgroundColor: "yellow",
  },
  MainGridBgColor: {
    // backgroundColor: "pink",
  },
}));

const MainMargins = {
  marginTop: {
    xs: "20px",
    sm: "20px",
    md: "60px",
    lg: "60px",
  },
  marginBottom: {
    xs: "20px",
    sm: "20px",
    md: "20px",
    lg: "20px",
  },
  // border: "2px solid red",
};
const MainTitle = {
  fontSize: {
    xs: "28px",
    sm: "28px",
    md: "32px",
    lg: "32px",
  },
  color: "#FF1F2F",
  lineHeight: "30px",
  fontWeight: {
    xs: "500",
    sm: "500",
    md: "400",
    lg: "400",
  },
  textAlign: {
    xs: "center",
    sm: "center",
    md: "left",
    lg: "left",
  },
  fontFamily: "Inter, sans-serif",
};
const whiteLeftArrowSize = {
  width: "20px",
  height: "20px",
  position: "absolute",
  bottom: "10px",
  right: "13px",
};
const whiteRightArrowSize = {
  width: "20px",
  height: "20px",
  position: "absolute",
  bottom: "10px",
  left: "13px",
};
const triangleAndArrowAlignment = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const titleAndArrowAllignment = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const Topmediaspends = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const classes = useStyles();

  const sliderRef = useRef(null);

  // slider settings
  // desktop
  var settings = {
    // dots: true,
    // className: "center",
    // centerMode: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
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
  // Mobile
  var settings2 = {
    // dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
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

  useEffect(() => {
    // Fetch Product from the API
    fetch(
      "https://www.januskoncepts.in/janusoohadmin/api/api_product/fetchproduct.php"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("hello products data in top media", data);
        setData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

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

            {/* Desktop */}
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
              }}
            >
              <Box sx={titleAndArrowAllignment}>
                {/* DeskTop */}
                <Typography sx={SectionMainTitleForDesktop}>
                  TOP MEDIA SPENDS
                </Typography>
                {/* Mobile */}
                <Typography sx={SectionMainTitle}>TOP MEDIA SPENDS</Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "90px",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={triangleAndArrowAlignment}>
                    <Box
                      component="img"
                      src={Redtriangle}
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                      onClick={() => sliderRef.current.slickPrev()}
                    />
                    <Box
                      component="img"
                      src={leftarr}
                      sx={whiteLeftArrowSize}
                      onClick={() => sliderRef.current.slickPrev()}
                    />
                  </Box>

                  <Box sx={triangleAndArrowAlignment}>
                    <Box
                      component="img"
                      src={Redtriangle}
                      sx={{
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                      }}
                      onClick={() => sliderRef.current.slickNext()}
                    />
                    <Box
                      component="img"
                      src={rightarr}
                      sx={whiteRightArrowSize}
                      onClick={() => sliderRef.current.slickNext()}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* Mobile */}
            <Box
              sx={{
                display: { md: "none", lg: "none" },
              }}
            >
              <Box>
                <Typography sx={MainTitle}>TOP MEDIA SPENDS</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Carosuel */}

        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>

        {/* Carousel */}
        {/* Desktop */}
        <Grid
          container
          sx={{
            marginBottom: { xs: "30px", md: "30px", md: "60px", lg: "60px" },
          }}
        >
          <Grid item xs={12} sm={12} md={0.3} lg={0.4}></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={11.4}
            lg={11.2}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          >
            <Slider
              ref={sliderRef}
              {...settings}
              // style={{ backgroundColor: "red" }}
            >
              {data &&
                data.filter((item) => item.status === "active").map((item, index) => (
                  <Box
                    sx={{
                      padding: {
                        xs: "0px 10px 0px 10px",
                        sm: "0px 10px 0px 10px",
                        md: "0px 0px 0px 0px",
                        sm: "0px 0px 0px 0px",
                      },
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "grey",
                        margin: {
                          xs: "0px",
                          sm: "0px",
                          md: "10px",
                          lg: "10px",
                        },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        // height: "400px",
                      }}
                      onClick={() => {
                        navigate(
                          `/${
                            item?.category_url?.toLowerCase()
                              ? item?.category_url?.toLowerCase()
                              : item?.category_url
                          }/${
                            item?.product_url
                              ? item?.product_url
                              : item?.address
                          }/`,
                          { state: { data: item } }
                        );
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          // height: {
                          //   xs: "250px",
                          //   sm: "250px",
                          //   md: "400px",
                          //   lg: "400px",
                          // },
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: "100%",
                            lg: "100%",
                          },
                          padding: "5px 5px 0px 5px",
                        }}
                        alt="Products"
                        // src={item?.image}
                        src={item?.image ? item.image : imageNotFound}
                      />
                      <Box
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: "100%",
                            lg: "100%",
                          },
                          padding: "5px 5px 0px 5px",
                          height: "100px",
                          background: "rgba(0, 0, 0, 0.7)",
                          // backgroundColor: "green",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "white",
                            fontSize: "18px",
                            textAlign: "left",
                            fontWeight: "400",
                            lineHeight: "23px",
                            fontFamily: "Inter, sans-serif",
                            padding: "5px 15px 5px 15px",
                          }}
                        >
                          {item?.product_name}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
            </Slider>

            {/* Navigation Arrows */}
            <Box sx={{ display: { md: "none", lg: "none" } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "150px",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={triangleAndArrowAlignment}>
                    <Box
                      component="img"
                      src={Redtriangle}
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                      onClick={() => sliderRef.current.slickPrev()}
                    />
                    <Box
                      component="img"
                      src={leftarr}
                      sx={whiteLeftArrowSize}
                      onClick={() => sliderRef.current.slickPrev()}
                    />
                  </Box>

                  <Box sx={triangleAndArrowAlignment}>
                    <Box
                      component="img"
                      src={Redtriangle}
                      sx={{
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                      }}
                      onClick={() => sliderRef.current.slickNext()}
                    />
                    <Box
                      component="img"
                      src={rightarr}
                      sx={whiteRightArrowSize}
                      onClick={() => sliderRef.current.slickNext()}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={0.3} lg={0.4}></Grid>
        </Grid>

        {/* Mobile */}
        <Grid
          container
          sx={{
            marginBottom: { xs: "30px", md: "30px", md: "60px", lg: "60px" },
          }}
        >
          <Grid item xs={12} sm={12} md={0.3} lg={0.4}></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={11.4}
            lg={11.2}
            display={{ md: "none", lg: "none" }}
          >
            <Slider
              ref={sliderRef}
              {...settings2}
              // style={{ backgroundColor: "red" }}
            >
              {data &&
                data.filter((item) => item.status === "active").map((item, index) => (
                  <Box
                    sx={{
                      // display: "flex",
                      // justifyContent: "center",
                      // alignItems: "center",
                      padding: {
                        xs: "0px 10px 0px 10px",
                        sm: "0px 10px 0px 10px",
                        md: "0px 0px 0px 0px",
                        sm: "0px 0px 0px 0px",
                      },
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "grey",
                        margin: {
                          xs: "0px",
                          sm: "0px",
                          md: "10px",
                          lg: "10px",
                        },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        // height: "400px",
                      }}
                    >
                      <Box
                        component="img"
                        sx={{
                          // height: {
                          //   xs: "250px",
                          //   sm: "250px",
                          //   md: "400px",
                          //   lg: "400px",
                          // },
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: "100%",
                            lg: "100%",
                          },
                          padding: "5px 5px 0px 5px",
                        }}
                        alt="Products"
                        // src={item?.image}
                        src={item?.image ? item.image : imageNotFound}
                      />
                      <Box
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: "100%",
                            lg: "100%",
                          },
                          padding: "0px 5px 0px 5px",
                          height: "100%",
                          background: "rgba(0, 0, 0, 0.7)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ height: "50px" }}>
                          <Typography
                            sx={{
                              color: "white",
                              fontSize: "15px",
                              textAlign: "left",
                              fontWeight: "500",
                              lineHeight: "23px",
                              fontFamily: "Inter, sans-serif",
                              padding: "5px",
                              overflow: "hidden",
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 2,
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item?.product_name}
                          </Typography>
                        </Box>

                        <Box sx={{}}>
                          <button
                            style={{
                              width: "60px",
                              backgroundColor: "white",
                              borderRadius: "10px",
                              marginTop: "15px",
                              marginBottom: "10px",
                              border:"none"
                            }}
                            onClick={() => {
                              navigate(
                                `/${
                                  item?.category_url?.toLowerCase()
                                    ? item?.category_url?.toLowerCase()
                                    : item?.category_url
                                }/${
                                  item?.product_url
                                    ? item?.product_url
                                    : item?.address
                                }/`,
                                { state: { data: item } }
                              );
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: "12px",
                                fontWeight: "600",
                                padding: "1px",
                                fontFamily: "Inter, sans-serif",
                              }}
                            >
                              VIEW
                            </Typography>
                          </button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
            </Slider>

            {/* Navigation Arrows */}
            <Box sx={{ display: { md: "none", lg: "none" } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "15px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "150px",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={triangleAndArrowAlignment}>
                    <Box
                      component="img"
                      src={Redtriangle}
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                      onClick={() => sliderRef.current.slickPrev()}
                    />
                    <Box
                      component="img"
                      src={leftarr}
                      sx={whiteLeftArrowSize}
                      onClick={() => sliderRef.current.slickPrev()}
                    />
                  </Box>

                  <Box sx={triangleAndArrowAlignment}>
                    <Box
                      component="img"
                      src={Redtriangle}
                      sx={{
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                      }}
                      onClick={() => sliderRef.current.slickNext()}
                    />
                    <Box
                      component="img"
                      src={rightarr}
                      sx={whiteRightArrowSize}
                      onClick={() => sliderRef.current.slickNext()}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={0.3} lg={0.4}></Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Topmediaspends;
