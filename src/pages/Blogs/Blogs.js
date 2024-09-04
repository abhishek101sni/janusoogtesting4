import React, { useState, useEffect } from "react";
// MUI
import { Grid, Typography, Box } from "@mui/material";
// CSS
import "./Blogs.css";

// VIDEO
import videotwo from "../../assets/video/VideoWithoutText.mp4";

import { Fade } from "react-awesome-reveal";
// REACT_ROUTER-DOM
import { useNavigate } from "react-router-dom";

import Helmet from "react-helmet";

// REDUX

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function createMarkup(htmlContent) {
    return { __html: htmlContent };
  }

  const navigate = useNavigate();

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

  return (
    <>
      <Helmet>
        <title>We provide you best hoarding advertising locations </title>
        <meta
          name="description"
          content={
            "Discover prime hoarding advertising locations for maximum impact. Elevate your brand visibility with our top-notch advertising solutions"
          }
        />
      </Helmet>

      {/* Page Content */}

      <Box sx={{ marginTop: { xs: "55px", sm: "55px", md: "0px", lg: "0px" } }}>
        {/* Page title */}
        <Box
          sx={{
            marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" },
          }}
        >
          {/* VIDEO */}
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
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
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    top: {
                      xs: "110px",
                      sm: "110px",
                      md: "130px",
                      lg: "130px",
                    },
                    width: "100%",
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>

                    <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
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
                              fontFamily: "Inter, sans-serif",
                              color: "#fff",
                            }}
                          >
                            Blogs
                          </Typography>
                        </Box>
                        {/* for mobile */}
                        <Box sx={{}}>
                          <Typography
                            sx={{
                              display: "flex",
                              fontSize: {
                                xs: "60px",
                                sm: "60px",
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
                              fontFamily: "Inter, sans-serif",
                              color: "#fff",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            Blogs
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
                              fontFamily: "Inter, sans-serif",
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
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Blogs */}

        {/* Desktop */}
        {blogs &&
          blogs?.map((item, index) => (
            <Grid container>
              {index % 2 === 0 ? (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  key={index}
                  sx={{
                    backgroundColor: "#F0F0F0",
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                    },
                  }}
                >
                  <Fade
                    cascade
                    direction="down"
                    delay={100}
                    fraction={0}
                    damping={0.1}
                    triggerOnce={true}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "60px 50px 60px 50px ",
                        backgroundColor: "#fff",
                        backgroundColor: "	#F0F0F0",
                        // border: "2px solid #C02222",
                        // justifyContent: "space-between",
                      }}
                    >
                      {/* Image */}
                      <Box>
                        <Box
                          component="img"
                          src={item?.image}
                          sx={{
                            width: "400px",
                            height: "300px",
                            borderRadius: "20px",
                            border: "1px solid #C02222",
                          }}
                        />
                      </Box>
                      {/* title */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "30px",
                          // backgroundColor:"green"
                        }}
                      >
                        {/* Title */}
                        <Box
                          sx={{
                            marginTop: "30px",
                            width: "100%",
                          }}
                        >
                          {/* Tilte */}
                          <Typography
                            sx={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: {
                                xs: "20px",
                                sm: "20px",
                                md: "px",
                                lg: "27px",
                              },
                              fontWeight: "500",
                              // display: "-webkit-box",
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 2,
                              color: "#C02222",
                              lineHeight: {
                                xs: "22px",
                                sm: "22px",
                                md: "35px",
                                lg: "35px",
                              },

                              // textTransform: "capitalize",
                            }}
                          >
                            {item?.blog_title}
                          </Typography>

                          {/* Descrption */}
                          <Box sx={{ marginTop: "20px" }}>
                            <Typography
                              sx={{
                                fontFamily: "Inter, sans-serif",
                                // fontFamily: "Fira Sans, sans-serif",
                                fontSize: {
                                  xs: "20px",
                                  sm: "20px",
                                  md: "17px",
                                  lg: "17px",
                                },
                                fontWeight: {
                                  xs: "20px",
                                  sm: "20px",
                                  md: "500",
                                  lg: "500",
                                },
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 4,
                                // color: "#C02222",
                                color: "black",
                                lineHeight: {
                                  xs: "22px",
                                  sm: "22px",
                                  md: "25px",
                                  lg: "25px",
                                },
                                textTransform: "capitalize",
                              }}
                              dangerouslySetInnerHTML={createMarkup(
                                item?.description
                              )}
                            ></Typography>
                          </Box>
                        </Box>

                        {/* Readmore */}
                        <Box
                          sx={{
                            marginTop: "20px",
                            width: "350px",
                            height: "100",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: {
                                xs: "20px",
                                sm: "20px",
                                md: "18px",
                                lg: "18px",
                              },
                              fontWeight: "500",
                              display: "-webkit-box",
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 2,
                              color: "#C02222",
                              // color: "#fff",
                              lineHeight: {
                                xs: "22px",
                                sm: "22px",
                                md: "30px",
                                lg: "30px",
                              },
                              textTransform: "capitalize",
                              cursor: "pointer",
                              textDecoration: "underline",
                            }}
                            onClick={() => {
                              navigate(`/blog/${item?.blog_url}`, {
                                state: { blog: item },
                              });
                            }}
                          >
                            Read more...
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Fade>
                </Grid>
              ) : (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  key={index}
                  sx={{
                    backgroundColor: "#fff",
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                    },
                  }}
                >
                  <Fade
                    cascade
                    direction="down"
                    delay={100}
                    fraction={0}
                    damping={0.1}
                    triggerOnce={true}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "60px 50px 60px 50px ",
                        backgroundColor: "#fff",
                        // border: "2px solid #C02222",
                        // justifyContent: "space-between",
                      }}
                    >
                      {/* title */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          marginRight: "30px",
                          // backgroundColor:"green"
                        }}
                      >
                        {/* Title */}
                        <Box
                          sx={{
                            marginTop: "30px",
                            width: "100%",
                          }}
                        >
                          {/* Tilte */}
                          <Typography
                            sx={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: {
                                xs: "20px",
                                sm: "20px",
                                md: "27px",
                                lg: "27px",
                              },
                              fontWeight: "500",
                              // display: "-webkit-box",
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 2,
                              color: "#C02222",
                              lineHeight: {
                                xs: "22px",
                                sm: "22px",
                                md: "35px",
                                lg: "35px",
                              },
                              // textTransform: "capitalize",
                            }}
                          >
                            {item?.blog_title}
                          </Typography>

                          {/* Descrption */}
                          <Box sx={{ marginTop: "20px" }}>
                            <Typography
                              sx={{
                                fontFamily: "Inter, sans-serif",
                                // fontFamily: "Fira Sans, sans-serif",
                                fontSize: {
                                  xs: "20px",
                                  sm: "20px",
                                  md: "17px",
                                  lg: "17px",
                                },
                                fontWeight: {
                                  xs: "20px",
                                  sm: "20px",
                                  md: "500",
                                  lg: "500",
                                },
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 4,
                                color: "black",
                                lineHeight: {
                                  xs: "22px",
                                  sm: "22px",
                                  md: "25px",
                                  lg: "25px",
                                },
                                textTransform: "capitalize",
                              }}
                              dangerouslySetInnerHTML={createMarkup(
                                item?.description
                              )}
                            ></Typography>
                          </Box>
                        </Box>

                        {/* Readmore */}
                        <Box
                          sx={{
                            marginTop: "20px",
                            width: "350px",
                            height: "100",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: {
                                xs: "20px",
                                sm: "20px",
                                md: "18px",
                                lg: "18px",
                              },
                              fontWeight: "500",
                              display: "-webkit-box",
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 2,
                              color: "#C02222",
                              // color: "#fff",
                              lineHeight: {
                                xs: "22px",
                                sm: "22px",
                                md: "30px",
                                lg: "30px",
                              },
                              textTransform: "capitalize",
                              cursor: "pointer",
                              textDecoration: "underline",
                            }}
                            onClick={() => {
                              navigate(`/blog/${item?.blog_url}`, {
                                // state: { id: item?._id },
                                state: { blog: item },
                              });
                            }}
                          >
                            Read more...
                          </Typography>
                        </Box>
                      </Box>
                      {/* Image */}
                      <Box>
                        <Box
                          component="img"
                          src={item?.image}
                          sx={{
                            width: "400px",
                            height: "300px",
                            borderRadius: "20px",
                            border: "1px solid #C02222",
                          }}
                        />
                      </Box>
                    </Box>
                  </Fade>
                </Grid>
              )}
            </Grid>
          ))}

        {/* Mobile */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ padding: "0px 10px 0px 10px" }}
          >
            {blogs &&
              blogs?.map((item, index) => (
                <Box
                  sx={{
                    display: {
                      md: "none",
                      lg: "none",
                    },
                    borderRadius: "10px",
                    border: "1px solid red",
                    marginTop: "30px",
                  }}
                >
                  <Box
                    component="img"
                    src={item?.image}
                    sx={{
                      width: "100%",
                      height: "300px",
                      borderTopLeftRadius:"10px",
                      borderTopRightRadius:"10px",
                    }}
                  />
                  <Box sx={{ padding: "0px 10px 0px 10px" }}>
                    {/* Tilte */}
                    <Typography
                      sx={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: {
                          xs: "20px",
                          sm: "20px",
                          md: "27px",
                          lg: "27px",
                        },
                        fontWeight: "500",
                        // display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 0.5,
                        color: "#FF1F2F",
                        lineHeight: {
                          xs: "22px",
                          sm: "22px",
                          md: "35px",
                          lg: "35px",
                        },
                        // textTransform: "capitalize",
                      }}
                      dangerouslySetInnerHTML={createMarkup(item?.blog_title)}
                    >
                      {/* {item?.blog_title} */}
                    </Typography>

                    {/* Descrption */}
                    <Box sx={{ marginTop: "10px" }}>
                      <Typography
                        sx={{
                          fontFamily: "Inter, sans-serif",
                          // fontFamily: "Fira Sans, sans-serif",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "17px",
                            lg: "17px",
                          },
                          fontWeight: {
                            xs: "20px",
                            sm: "20px",
                            md: "500",
                            lg: "500",
                          },
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          color: "black",
                          lineHeight: {
                            xs: "22px",
                            sm: "22px",
                            md: "25px",
                            lg: "25px",
                          },
                          textTransform: "capitalize",
                        }}
                        dangerouslySetInnerHTML={createMarkup(
                          item?.description
                        )}
                      ></Typography>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "20px",
                        width: "350px",
                        height: "100",
                        marginBottom: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: {
                            xs: "20px",
                            sm: "20px",
                            md: "18px",
                            lg: "18px",
                          },
                          fontWeight: "500",
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          color: "#FF1F2F",
                          // color: "#fff",
                          lineHeight: {
                            xs: "22px",
                            sm: "22px",
                            md: "30px",
                            lg: "30px",
                          },
                          textTransform: "capitalize",
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                        onClick={() => {
                          navigate(`/blog/${item?.blog_url}`, {
                            // state: { id: item?._id },
                            state: { blog: item },
                          });
                        }}
                      >
                        Read more...
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Blogs;
