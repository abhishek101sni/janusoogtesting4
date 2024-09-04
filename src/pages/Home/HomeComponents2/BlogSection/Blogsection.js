import React, { useState, useEffect } from "react";
// Images
import { BlogBgImg, RedRightArrow } from "../../../../DesignData/Images/Images";
// MUI
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
} from "../../../../DesignData/MaterialUi/material-ui";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Blogsection.css";

// REACT_ROUTER-DOM
import { useNavigate } from "react-router-dom";
import { display } from "@mui/system";
import {
  SectionDescriptionForMobile,
  SectionMainTitle,
  SectionMainTitleForDesktop,
} from "../../../Styles/Styles";

const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundImage: `url(${BlogBgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  sideGridBgColor: {
    // backgroundColor: "yellow",
  },
  MainGridBgColor: {
    // backgroundColor: "pink",
  },
}));

const MainMargins = {
  marginTop: {
    xs: "30px",
    sm: "30px",
    md: "60px",
    lg: "60px",
  },
  marginBottom: {
    xs: "60px",
    sm: "60px",
    md: "60px",
    lg: "60px",
  },
  // border: "2px solid red",
};
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
  textAlign: {
    xs: "center",
    sm: "center",
    md: "left",
    lg: "left",
  },
  fontFamily: "Inter, sans-serif",
};
const Description = {
  marginTop: {
    xs: "15px",
    sm: "15px",
    md: "10px",
    lg: "10px",
  },
  fontSize: {
    xs: "18px",
    sm: "18px",
    md: "16px",
    lg: "16px",
  },
  lineHeight: {
    xs: "22px",
    sm: "22px",
    md: "22px",
    lg: "22px",
  },
  color: "#000000",
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
  padding: {
    xs: "0px 10px 0px 10px",
    sm: "0px 10px 0px 10px",
    md: "0px 0px 0px 0px",
    lg: "0px 0px 0px 0px",
  },
  fontFamily: "Inter, sans-serif",
  display: {
    xs: "none",
    sm: "none",
    md: "block",
    lg: "block",
  },
};
const bigBoxTitle = {
  fontSize: "20px",
  fontWeight: "500",
  color: "#FF1F2F",
  lineHeight: "22px",
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  fontFamily: "Inter, sans-serif",
  // padding:"0px 15px 0px 15px",
  // backgroundColor:"blue"
};
const threeBlogsAlignment = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  marginTop: {
    xs: "30px",
    sm: "30px",
    md: "0px",
    lg: "0px",
  },
};
const threeBlogsBoxSize = {
  width: "100%",
  height: {
    xs: "100px",
    sm: "100px",
    md: "140px",
    lg: "140px",
  },
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "row",
  boxShadow: {
    xs: "5",
    sm: "5",
    md: "10",
    lg: "10",
  },
  cursor: "pointer",
};
const threeblogTitle = {
  color: "#FF1F2F",
  fontSize: {
    xs: "18px",
    sm: "18px",
    md: "18px",
    lg: "18px",
  },
  fontWeight: "500",
  lineHeight: "1",
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  fontFamily: "Inter, sans-serif",
};

const Blogsection = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const navigate = useNavigate();

  function createMarkup(htmlContent) {
    return { __html: htmlContent };
  }

  function toBlogs() {
    navigate("/blogs/");
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://www.januskoncepts.in/janusoohadmin/api/api_blog/fetch_blog.php"
        );
        const data = await response.json();
        console.log("hello blogs data", data);
        setBlogs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // slider settings
  var settings = {
    // dots: true,
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
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          className={classes.MainGridBgColor}
        >
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
            {/* Desktop */}
            <Typography sx={SectionMainTitleForDesktop}>BLOG</Typography>
            {/* Mobile */}
            <Typography sx={SectionMainTitle}>BLOG</Typography>

            {/* Desktop */}
            <Typography sx={Description}>
              Transform your brand’s visibility with strategic outdoor
              advertising.
              <br /> Explore our blog for insights and expert tips.
            </Typography>

            {/* Mobile */}
            <Typography
              sx={SectionDescriptionForMobile}
            >
              Transform your brand’s visibility with strategic outdoor
              advertising. Explore<br/> our blog for insights and expert tips.
            </Typography>

            {/* Blogs Content */}

            {/* Desktop */}
            <Grid
              container
              sx={{
                marginTop: { xs: "15px", sm: "15px", md: "30px", lg: "30px" },
              }}
            >
              {/* Big Blog */}
              <Grid
                item
                xs={12}
                sm={12}
                md={5.8}
                lg={5.8}
                sx={{
                  padding: {
                    xs: "0px 10px 0px 10px",
                    sm: "0px 10px 0px 10px",
                    md: "0px 0px 0px 0px",
                    lg: "0px 0px 0px 0px",
                  },
                }}
              >
                {blogs.slice(0, 1).map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      boxShadow: { xs: "5", sm: "5", md: "10", lg: "10px" },
                      cursor: "pointer",
                      backgroundColor: "white",
                    }}
                    onClick={() => {
                      navigate(`/blog/${item?.blog_url}`, {
                        // state: { id: item?._id },
                        state: { blog: item },
                      });
                    }}
                  >
                    <Box
                      component="img"
                      src={item?.image}
                      sx={{
                        width: "100%",
                        height: {
                          xs: "300px",
                          sm: "300px",
                          md: "400px",
                          lg: "400px",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        padding: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                      }}
                    >
                      {/* Title */}
                      <Typography sx={bigBoxTitle}>
                        {item.blog_title}
                      </Typography>
                      {/* Description */}
                      <Typography
                        sx={{
                          fontFamily: "Inter, sans-serif",
                          marginTop: "6px",
                          fontSize: {
                            xs: "18px",
                            sm: "18px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontWeight: {
                            xs: "20px",
                            sm: "20px",
                            md: "400",
                            lg: "400",
                          },
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          color: "black",
                          lineHeight: {
                            xs: "22px",
                            sm: "22px",
                            md: "22px",
                            lg: "22px",
                          },
                          textTransform: "capitalize",
                          // padding:"0px 20px 0px 20px"
                        }}
                        dangerouslySetInnerHTML={createMarkup(
                          item?.description
                        )}
                      ></Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>

              {/* extra grid */}
              <Grid
                item
                xs={12}
                sm={12}
                md={0.4}
                lg={0.4}
                // sx={{ backgroundColor: "blue" }}
              ></Grid>

              {/* 3 blogs */}

              {/* DeskTop */}
              <Grid
                item
                xs={12}
                sm={12}
                md={5.8}
                lg={5.8}
                sx={{
                  padding: {
                    xs: "0px 10px 0px 10px",
                    sm: "0px 10px 0px 10px",
                    md: "0px 0px 0px 0px",
                    lg: "0px 0px 0px 0px",
                  },
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                  },
                }}
              >
                <Box sx={threeBlogsAlignment}>
                  {blogs
                    .slice(0, 3)
                    .reverse()
                    .map((item, index) => (
                      <Box
                        sx={threeBlogsBoxSize}
                        onClick={() => {
                          navigate(`/blog/${item?.blog_url}`, {
                            state: { blog: item },
                          });
                        }}
                      >
                        {/* image */}
                        <Box
                          component="img"
                          src={item?.image}
                          sx={{
                            height: {
                              xs: "100px",
                              sm: "100px",
                              md: "100%",
                              lg: "100%",
                            },
                            width: {
                              xs: "100px",
                              sm: "100px",
                              md: "160px",
                              lg: "160px",
                            },
                          }}
                        />
                        {/* Title */}
                        <Box
                          sx={{
                            padding: {
                              xs: "10px",
                              sm: "10px",
                              md: "20px",
                              lg: "20px",
                            },
                            // backgroundColor:"green"
                          }}
                        >
                          <Typography sx={threeblogTitle}>
                            {item.blog_title}
                          </Typography>
                          {/* description */}
                          <Typography
                            sx={{
                              marginTop: "10px",
                              fontFamily: "Poppins, sans-serif",
                              fontSize: {
                                xs: "15px",
                                sm: "15px",
                                md: "14px",
                                lg: "14px",
                              },
                              fontWeight: {
                                xs: "500",
                                sm: "500",
                                md: "400",
                                lg: "400",
                              },
                              display: "-webkit-box",
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: {
                                xs: 2,
                                sm: 2,
                                md: 3,
                                lg: 3,
                              },
                              color: "black",
                              lineHeight: {
                                xs: "22px",
                                sm: "22px",
                                md: "23px",
                                lg: "23px",
                              },
                              fontFamily: "Inter, sans-serif",
                              textTransform: "capitalize",
                            }}
                            dangerouslySetInnerHTML={createMarkup(
                              item?.description
                            )}
                          ></Typography>
                        </Box>
                      </Box>
                    ))}
                </Box>
              </Grid>

              {/* Mobile */}
            </Grid>

            {/* View more */}
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
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
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "15px",
                      lg: "15px",
                    },
                  }}
                >
                  <Typography
                    onClick={toBlogs}
                    sx={{
                      fontSize: {
                        xs: "18px",
                        sm: "18px",
                        md: "18px",
                        lg: "18px",
                      },
                      fontWeight:{
                        xs: "500",
                        sm: "500",
                        md: "500",
                        lg: "500",
                      },
                      color: "#FF1F2F",
                      cursor: "pointer",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    View more
                  </Typography>
                  <Box
                    src={RedRightArrow}
                    component="img"
                    sx={{
                      width: {
                        xs: "20px",
                        sm: "20px",
                        md: "22px",
                        lg: "22px",
                      },
                      height: {
                        xs: "18px",
                        sm: "18px",
                        md: "16px",
                        lg: "16px",
                      },
                    }}
                  />
                </Box>
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
    </>
  );
};

export default Blogsection;
