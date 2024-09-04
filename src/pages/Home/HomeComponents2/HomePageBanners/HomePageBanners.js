import React, { useState, useEffect } from "react";

// MUI
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
} from "../../../../DesignData/MaterialUi/material-ui";

// react-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CSS
import "./HomePageBanners.css";

import { TypeAnimation } from "react-type-animation";

import { Link } from "react-router-dom";

// json
import { BannerImgData } from "../../../../assets/json/newDesign/BannerImgData";
import { locationicon, rightarr } from "../../../../DesignData/Images/Images";

//  Styles
import { CommonMainMargins } from "../../../Styles/Styles";

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
    xs: "54px",
    sm: "54px",
    md: "0px",
    lg: "0px",
  },
  marginBottom: {
    xs: "20px",
    sm: "20px",
    md: "0px",
    lg: "0px",
  },
  // border: "2px solid red",
};
const BannerImgStyle = {
  width: {
    xs: "100%",
    sm: "100%",
    md: "100%",
    lg: "100%",
  },
  height: {
    xs: "250px",
    sm: "250px",
    md: "100%",
    lg: "100%",
  },
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  overflow: "hidden",
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to right, rgba(0, 0, 0, 4), rgba(0, 0, 0, 0))",
    zIndex: 1,
  },
};
const title = {
  fontSize: { xs: "25px", sm: "25px", md: "40px", lg: "40px" },
  fontWeight: "400",
  color: "#FFFFFF",
  fontFamily: "Inter, sans-serif",
};
const maintitle = {
  fontSize: { xs: "22px", sm: "28px", md: "45px", lg: "45px" },
  fontWeight: "400",
  color: "#FF1F2F",
  lineHeight: "1",
  fontFamily: "Inter, sans-serif",
};
const description = {
  fontSize: { xs: "15px", sm: "15px", md: "20px", lg: "20px" },
  fontWeight: "400",
  color: "#FFFFFF",
  marginTop: "15px",
  fontFamily: "Inter, sans-serif",
};
const enquirenow = {
  marginTop: "15px",
  fontSize: "15px",
  fontWeight: "400",
  color: "#FFFFFF",
  fontFamily: "Inter, sans-serif",
};

const HomePageBanners = () => {
  // input-----------------------------------------------------------------------------
  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Outdoor Advertisement",
    "Metro Advertisement",
    "Metro Branding",
    "Mall Branding",
    "Inflight Branding",
    "Transit Media",
  ];
  const speed = 150;

  useEffect(() => {
    if (index < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setPlaceholder(placeholder + texts[textIndex][index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setPlaceholder("");
        setIndex(0);
        setTextIndex((prevTextIndex) => (prevTextIndex + 1) % texts.length); // Cycle through texts
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }
  }, [index, placeholder, textIndex]);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .custom-placeholder::placeholder {
        color: #FF1F2F;
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  // -----------------------------------------------------------------------------

  // Dropdown
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // ---
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);

  var settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 900,
    slidesToShow: 1,
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
      <Box sx={{ position: "relative", ...MainMargins }}>
        <Slider {...settings}>
          {BannerImgData.map((item) => (
            <Grid
              container
              sx={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 3), rgba(0, 0, 0, 0.1)), url(${item?.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: { xs: "300px", sm: "300px", md: "600px", lg: "600px" },
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Desktop */}
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
              >
                <Box>
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "130px",
                        width: "420px",
                        marginLeft: "67px",
                        textAlign: "left",
                        // backgroundColor: "green",
                      }}
                    >
                      <Typography sx={title}>{item.title}</Typography>
                      <Typography sx={maintitle}>{item.maintitle}</Typography>
                      <Box sx={{ width: "400px" }}>
                        <Typography sx={description}>
                          {item.description}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={enquirenow}>
                          {item.enquirenow}
                        </Typography>{" "}
                        <Box
                          component="img"
                          src={rightarr}
                          sx={{
                            marginTop: "16px",
                            width: "20px",
                            height: "15px",
                            marginLeft: "1px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {/* Mobile */}
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                display={{ md: "none", lg: "none" }}
              >
                <Box>
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "10px",
                        width: "530px",
                        marginLeft: "20px",
                        textAlign: "left",
                      }}
                    >
                      <Typography sx={title}>{item.title}</Typography>
                      <Typography sx={maintitle}>
                        Outdoor Advertising
                        <br />
                        Agency
                      </Typography>
                      <Typography sx={description}>
                        OOH Advertising made easy SearchMedia.
                        <br /> Check Availability. Book Online.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={enquirenow}>
                          {item.enquirenow}
                        </Typography>
                        <Box
                          component="img"
                          src={rightarr}
                          sx={{
                            marginTop: "16px",
                            width: "20px",
                            height: "15px",
                            marginLeft: "5px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Slider>

        {/* Search Bar  for desktop*/}
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
              position: "absolute",
              top: "80%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "700px",
              height: "50px",
              backgroundColor: "#FFFFFF",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "42px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "0px 5px 0px 5px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                {/* loaction icon */}
                <Box
                  sx={{
                    border: "2px dashed rgba(255, 31, 47, 0.5)",
                    height: "42px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                  }}
                >
                  <Box
                    component="img"
                    src={locationicon}
                    sx={{
                      width: "20px",
                      height: "25px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  />
                </Box>
                {/* search Input */}
                <input
                  type="text"
                  placeholder={`Type your search...${placeholder}`}
                  className="custom-input"
                  style={{
                    padding: "10px",
                    width: "540px",
                    height: "42px",
                    fontSize: "16px",
                    borderTop: "2px dashed rgba(255, 31, 47, 0.5)",
                    borderBottom: "2px dashed rgba(255, 31, 47, 0.5)",
                    borderRight: "2px dashed rgba(255, 31, 47, 0.5)",
                    borderLeft: "none",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    outline: "none",
                    fontFamily: "Inter, sans-serif",
                    color: "#FF1F2F",
                  }}
                />
              </Box>
              {/* Button */}
              <Box
                sx={{
                  width: "100px",
                  height: "42px",
                  backgroundColor: "red",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "18px",
                  }}
                >
                  Search
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Search Bar  for mobile*/}
        <Box
          sx={{
            display: {
              md: "none",
              lg: "none",
            },
            padding: "0px 10px 0px 10px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "80%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              height: "40px",
              backgroundColor: "#FFFFFF",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              zIndex: 10,
              
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "42px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "0px 5px 0px 5px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                {/* loaction icon */}
                <Box
                  sx={{
                    border: "2px dashed rgba(255, 31, 47, 0.5)",
                    height: "35px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                  }}
                >
                  <Box
                    component="img"
                    src={locationicon}
                    sx={{
                      width: "20px",
                      height: "25px",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  />
                </Box>
                {/* search Input */}
                <input
                  type="text"
                  placeholder={`Search here...${placeholder}`}
                  className="custom-input"
                  style={{
                    padding: "10px",
                    width: "225px",
                    height: "35px",
                    fontSize: "11px",
                    borderTop: "2px dashed rgba(255, 31, 47, 0.5)",
                    borderBottom: "2px dashed rgba(255, 31, 47, 0.5)",
                    borderRight: "2px dashed rgba(255, 31, 47, 0.5)",
                    borderLeft: "none",
                    borderTopRightRadius: "5px",
                    borderBottomRightRadius: "5px",
                    outline: "none",
                    fontFamily: "Inter, sans-serif",
                    color: "#FF1F2F",
                  }}
                />
              </Box>
              {/* Button */}
              <Box
                sx={{
                  width: "63px",
                  height: "33px",
                  backgroundColor: "red",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: "400",
                    fontSize: "16px",
                  }}
                >
                  Search
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Grid
          container
          sx={{
            position: "absolute",
            marginTop: {
              xs: "-30px",
              sm: "-30px",
              md: "-40px",
              lg: "-40px",
            },
          }}
        >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: "20px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: {
                    xs: "12px",
                    sm: "12px",
                    md: "15px",
                    lg: "15px",
                  },
                  fontWeight: {
                    xs: "",
                    sm: "",
                    md: 500,
                    lg: 500,
                  },
                  color: "white",
                }}
              >
                {currentSlide + 1} / 3
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePageBanners;
