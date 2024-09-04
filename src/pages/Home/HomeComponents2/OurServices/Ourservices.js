import React, { useRef, useEffect, useState } from "react";

// MUI
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
} from "../../../../DesignData/MaterialUi/material-ui";

import "./Ourservices.css";

// react-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// REACT_ROUTER_DOM
import { useNavigate } from "react-router-dom";

import {
  Redtriangle,
  rightarr,
  leftarr,
} from "../../../../DesignData/Images/Images";

// styles
import {
  CommonMainMargins,
  SectionDescriptionForMobile,
  SectionMainTitle,
  SectionMainTitleForDesktop,
} from "../../../Styles/Styles";
import { display } from "@mui/system";

// desktop carosuel settings
const settings = {
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 8000,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: "0", // Remove padding for full-width effect
};

// mobile carosuel settings
// slider settings
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

const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  sideGridBgColor: {},
  MainGridBgColor: {},
}));

const MainTitle = {
  fontSize: {
    xs: "30px",
    sm: "30px",
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
    xs: "20px",
    sm: "20px",
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
  cursor: "pointer",
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

const titleOnImage = {
  fontSize: {
    xs: "25px",
    sm: "25px",
    md: "18px",
    lg: "18px",
  },
  fontWeight: "600",
  color: "black",
  position: "absolute",
  bottom: "0px",
  right: "4px",
  fontFamily: "Inter, sans-serif",
};

// Mobile
const MainTitleForMobile = {
  fontSize: "30px",
  color: "#FF1F2F",
  lineHeight: "30px",
  fontWeight: "500",
};
const TitleAlignmentForMobile = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const DescriptionForMobile = {
  marginTop: "15px",
  fontSize: "18px",
  color: "#000",
  lineHeight: "22px",
  fontWeight: "500",
  textAlign: "center",
  padding: "0px 10px 0px 10px",
};

const Ourservices = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.januskoncepts.in/janusoohadmin/api/api_category/apifetchcategory.php"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  const classes = useStyles();

  const sliderRef = useRef(null);

  return (
    <>
      {/* Desktop */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>

        {/* Content */}

        {/* DeskTop */}
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          className={classes.MainGridBgColor}
          sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
        >
          <Box sx={CommonMainMargins}>
            {/* Title */}
            <Box sx={titleAndArrowAllignment}>
              <Typography sx={SectionMainTitleForDesktop}>
                OUR SERVICES
              </Typography>

              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                  },
                }}
              >
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
            {/* Description */}
            <Typography sx={Description}>
              Elevate Your Brand with Our Unmatched Outdoor Media Solutions –
              <br />
              Impactful , Creative & Results-Driven Advertising Excellence.
            </Typography>
            {/* Carousel */}
            <Grid container sx={{ marginTop: "30px" }}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Slider ref={sliderRef} {...settings} style={{ border: "0px" }}>
                  {data ? (
                    data.map((item) => (
                      <Box
                        className="carousel-item"
                        key={item._id} // Ensure each child has a unique key
                        onClick={() => {
                          if (item.category_name === "Outdoor Advertising") {
                            navigate("/outdoor-advertising-agency/");
                          } else if (item.category_name === "Metro Branding") {
                            navigate("/metro-advertising-agency/");
                          } else if (
                            item.category_name === "Airport Branding"
                          ) {
                            navigate("/airport-branding-advertising-agency/");
                          } else if (item.category_name === "Transit Media") {
                            navigate("/transit-media-advertising-agency/");
                          } else if (item.category_name === "Mall Branding") {
                            navigate("/mall-branding-advertising-agency/");
                          } else if (
                            item.category_name === "Inflight Branding"
                          ) {
                            navigate("/inflight-branding-advertising-agency/");
                          }
                        }}
                      >
                        <Box
                          component="img"
                          src={item?.image}
                          sx={{ cursor: "pointer", border: "0px" }}
                        />
                        <Typography className="category-text">
                          {item?.category_name}
                        </Typography>
                      </Box>
                    ))
                  ) : (
                    <Typography>No categories available</Typography>
                  )}
                </Slider>
              </Grid>
            </Grid>
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

      {/*mobile */}
      <Grid
        container
        sx={{
          display: {
            md: "none",
            lg: "none",
          },
          backgroundColor: "#EBE7E7",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={
            {
              // backgroundColor: "pink",
            }
          }
        >
          {/* title and description */}
          <Box
            sx={{
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
            }}
          >
            {/* Main title */}
            <Typography sx={SectionMainTitle}>OUR SERVICES</Typography>
            {/* Description */}
            <Typography sx={SectionDescriptionForMobile}>
              Elevate Your Brand with Our Unmatched Outdoor Media Solutions –
              Impactful , Creative & Results-Driven Advertising Excellence.
            </Typography>

            {/* Slider */}
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{}}>
                <Slider ref={sliderRef} {...settings2}>
                  {data ? (
                    data.map((item) => (
                      <Box
                        // className="carousel-item"
                        key={item._id} // Ensure each child has a unique key
                        onClick={() => {
                          if (item.category_name === "Outdoor Advertising") {
                            navigate("/outdoor-advertising-agency/");
                          } else if (item.category_name === "Metro Branding") {
                            navigate("/metro-advertising-agency/");
                          } else if (
                            item.category_name === "Airport Branding"
                          ) {
                            navigate("/airport-branding-advertising-agency/");
                          } else if (item.category_name === "Transit Media") {
                            navigate("/transit-media-advertising-agency/");
                          } else if (item.category_name === "Mall Branding") {
                            navigate("/mall-branding-advertising-agency/");
                          } else if (
                            item.category_name === "Inflight Branding"
                          ) {
                            navigate("/inflight-branding-advertising-agency/");
                          }
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "10px",
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            component="img"
                            alt={item?.category}
                            src={item?.image}
                            sx={{
                              cursor: "pointer",
                              width: "100%",
                              height: "100%",
                              borderRadius: "10px",
                            }}
                          />
                          <Typography
                            sx={{
                              position: "absolute",
                              textAlign: "center",
                              color: "white",
                              bottom: "20px",
                              fontSize: "25px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            {item?.category_name}
                          </Typography>
                        </Box>
                      </Box>
                    ))
                  ) : (
                    <Typography>No categories available</Typography>
                  )}
                </Slider>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Ourservices;
