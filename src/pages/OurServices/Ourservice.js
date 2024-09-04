import React, { useEffect, useState } from "react";

// MUI
import { Grid, Typography, Box } from "@mui/material";

// REACT_ROUTER_DOM
import { useNavigate } from "react-router-dom";
import videotwo from "../../assets/video/VideoWithoutText.mp4";

// REDUX
import { useSelector } from "react-redux";
import { getProductsCategories } from "../../redux/actions/Home";

// CARD

import { Link } from "react-router-dom";

// Helmet
import Helmet from "react-helmet";

// IMAGES
import samoutdoor from "../../assets/images/samOutdoor.jpeg";

const Ourservice = () => {
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

  const navigate = useNavigate();
  const { productscategories } = useSelector((state) => state.HomeReducer);

  useEffect(() => {
    getProductsCategories();
  }, []);
  return (
    <>
      <Helmet>
        <title>Where Outdoor Advertising Reaches New Heights</title>
        <meta
          name="description"
          content={
            "Trust Peak Promotions for innovative outdoor advertising that maximizes visibility and engagement. Let us take your marketing efforts to new heights, leaving a lasting impression on your audience"
          }
        />
      </Helmet>

      {/* VIDEO for Desktop */}
      <Box
        sx={{
          marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" },
        }}
      >
        {/* VIDEO */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            // display={{ xs: "none", lg: "block" }}
          >
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
              {/* <Box className="container"> */}
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
                  // backgroundColor:"orange"
                }}
              >
                {/* Text */}
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={0.7}
                    lg={0.7}
                    // sx={{ backgroundColor: "blue" }}
                  ></Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={10.6}
                    lg={10.6}
                    // sx={{ backgroundColor: "red" }}
                  >
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
                              md: "80px",
                              lg: "80px",
                            },
                            fontWeight: {
                              xs: "0",
                              sm: "0",
                              md: "600",
                              lg: "600",
                            },
                            fontFamily: "Poppins, sans-serif",
                            color: "#fff",
                          }}
                        >
                          Our Services
                        </Typography>
                      </Box>
                      {/* for mobile */}
                      <Box sx={{}}>
                        <Typography
                          sx={{
                            display: "flex",
                            fontSize: {
                              xs: "50px",
                              sm: "50px",
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
                            fontFamily: "Poppins, sans-serif",
                            color: "#fff",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          Our Services
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
                            fontFamily: "Poppins, sans-serif",
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

                {/* DROP-DOWN GRID */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid container>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid
            container
            sx={{
              marginTop: {
                xs: "20px",
                sm: "20px",
                md: "20px",
                lg: "20px",
              },
              marginBottom: {
                xs: "20px",
                sm: "20px",
                md: "20px",
                lg: "20px",
              },
              // backgroundColor: "yellow",
            }}
          >
            <Grid item xs={12} sm={12} md={4} lg={4} sx={{ padding: "10px" }}>
              {data ? (
                data.map((item) => (
                  <Box
                    key={item._id} // Ensure each child has a unique key
                    onClick={() => {
                      if (item.category_name === "Outdoor Advertising") {
                        navigate("/outdoor-advertising-agency/");
                      } else if (item.category_name === "Metro Branding") {
                        navigate("/metro-advertising-agency/");
                      } else if (item.category_name === "Airport Branding") {
                        navigate("/airport-branding-advertising-agency/");
                      } else if (item.category_name === "Transit Media") {
                        navigate("/transit-media-advertising-agency/");
                      } else if (item.category_name === "Mall Branding") {
                        navigate("/mall-branding-advertising-agency/");
                      } else if (item.category_name === "Inflight Branding") {
                        navigate("/inflight-branding-advertising-agency/");
                      }
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <Box
                        component="img"
                        src={item?.image}
                        sx={{
                          cursor: "pointer",
                          border: "0px",
                          width: "100%",
                          height: "300px",
                        }}
                      />
                      <Box sx={{ position: "absolute", bottom: "20px" }}>
                        <Typography
                          // className="category-text"
                          sx={{
                            textAlign: "center",
                            fontSize: "25px",
                            color: "white",
                            fontFamily: "Inter, sans-serif",
                            fontWeight: "600",
                          }}
                        >
                          {item?.category_name}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))
              ) : (
                <Typography>No categories available</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
        <Grid item xs={12} sm={12} md={10.6} lg={10.6}>
          <Grid
            container
            sx={{
              marginTop: "-30px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <Link to={"/all-outdoor/"} style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Box
                    component="img"
                    src={samoutdoor}
                    sx={{
                      cursor: "pointer",
                      width: "100%",
                      height: "300px",
                    }}
                  />
                  <Box sx={{ position: "absolute", bottom: "20px" }}>
                    <Typography
                      // className="category-text"
                      sx={{
                        textAlign: "center",
                        fontSize: "25px",
                        color: "white",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      All Hoardings
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "40px",
              }}
            >
              <Link
                to={"/outdoor-hoarding-advertising/"}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Box
                    component="img"
                    src={samoutdoor}
                    sx={{
                      cursor: "pointer",
                      width: "100%",
                      height: "300px",
                    }}
                  />
                  <Box sx={{ position: "absolute", bottom: "20px" }}>
                    <Typography
                      // className="category-text"
                      sx={{
                        textAlign: "center",
                        fontSize: "25px",
                        color: "white",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "600",
                      }}
                    >
                      All Hoardings
                      <br />
                      Advertisemenet
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={0.7} lg={0.7}></Grid>
      </Grid>
    </>
  );
};

export default Ourservice;
