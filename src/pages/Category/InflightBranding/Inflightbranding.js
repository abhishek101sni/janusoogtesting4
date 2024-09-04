import React, { useEffect, useState } from "react";

// MUI
import { Grid, Typography, Box } from "@mui/material";

// CSS
import "./Inflightbranding.css";

// CARD
import Cards from "../../Card/Cards";

// REACT-HELMET
import { Helmet } from "react-helmet";

// VIDEO
import videotwo from "../../../assets/video/VideoWithoutText.mp4";

import Faq from "../../FAQ/Faq";

import { MainMargins, FaqMainTitle, FaqDescription } from "../../Styles/Styles";

import Popupcomponent from "../../PopUp/Popupcomponent";

// REACT-ROUTER_DOM
import { useNavigate } from "react-router-dom";

import { inflightBrandingadd } from "../../../DesignData/Images/Images";
import samOutdoor from "../../../assets/images/Categories_Images/metro_branding2.jpeg";
import { mallbranding } from "../../../DesignData/Images/Images";
// MUI
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  sideGridBgColor: {
    // backgroundColor: "yellow",
  },
  MainGridBgColor: {
    // backgroundColor: "pink",
  },
}));
export default function Metro() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange3 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [ProductId, setProductId] = useState("");

  const navigate = useNavigate();

  // POP-UP
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
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
        console.log("hello data", data);
        setData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>SkyWing Ads: Airport Branding Experts</title>
        <meta
          name="description"
          content={
            "Fly high with SkyWing Ads. Experts in airport branding, we elevate your brand's visibility and impact, capturing travelers' attention worldwide"
          }
        />
      </Helmet>

      {/* Banner */}
      <Box
        sx={{
          marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" },
        }}
      >
        {/* VIDEO */}
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box sx={{ position: "relative" }}>
              {/* Video with gradient overlay */}
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                  height: { xs: "30vh", sm: "30vh", md: "60vh", lg: "60vh" },
                  position: "relative", // Make this box relative for absolute positioning of the gradient
                }}
              >
                {/* Video Element */}
                <video
                  src={videotwo}
                  autoPlay
                  loop
                  muted
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* Gradient Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
                    zIndex: 1, // Ensures gradient is above the video
                  }}
                />
              </Box>

              {/* Text */}
              <Grid
                container
                sx={{
                  position: "absolute",
                  bottom: {
                    xs: "35%",
                    sm: "35%",
                    md: "35%",
                    lg: "35%",
                  },
                  zIndex: 2, // Ensures text is above the gradient
                }}
              >
                <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>

                <Grid item xs={12} sm={12} md={11} lg={11}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* Desktop Title */}
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
                      <Typography
                        sx={{
                          display: "flex",
                          fontSize: "50px",
                          fontWeight: "50px",
                          fontFamily: "Inter, sans-serif",
                          color: "#fff",
                          textAlign: "center",
                        }}
                      >
                        Inflight&nbsp;
                        <span style={{ color: "#FF1F2F" }}>Advertising</span>
                      </Typography>
                    </Box>

                    {/* Mobile Title */}
                    <Box
                      sx={{
                        display: {
                          md: "none",
                          lg: "none",
                        },
                        height: "100%",
                        marginTop: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "30px",
                          fontWeight: "500",
                          fontFamily: "Inter, sans-serif",
                          color: "#fff",
                          textAlign: "center",
                          lineHeight: "35px",
                        }}
                      >
                        Inflight&nbsp;
                        <span
                          style={{
                            color: "#FF1F2F",
                            fontSize: "30px",
                            fontWeight: "600",
                          }}
                        >
                          Advertising
                        </span>
                      </Typography>
                    </Box>

                    {/* Desktop Description */}
                    <Box
                      sx={{
                        marginTop: {
                          xs: "10px",
                          sm: "10px",
                          md: "0px",
                          lg: "0px",
                        },
                        display: {
                          xs: "none",
                          sm: "none",
                          md: "block",
                          lg: "block",
                        },
                        padding: "0px 150px 0px 150px",
                      }}
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "17px",
                          fontWeight: "500",
                          fontFamily: "Inter, sans-serif",
                          color: "#fff",
                          textAlign: "center",
                          lineHeight: "25px",
                        }}
                      >
                        Catch them with limited distractions in flight
                      </Typography>
                    </Box>

                    {/* Mobile Desciption */}
                    <Box
                      sx={{
                        marginTop: "15px",
                        display: {
                          md: "none",
                          lg: "none",
                        },
                        padding: "0px 20px 0px 20px",
                      }}
                    >
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "15px",
                          fontWeight: "500",
                          fontFamily: "Inter, sans-serif",
                          color: "#fff",
                          marginTop: "-5px",
                          lineHeight: "20px",
                          textAlign: "center",
                        }}
                      >
                        Catch them with limited distractions in flight
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Products */}
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
          <Grid container spacing={3}>
            {/* <Box sx={{marginTop:"60px", marginBottom:"60px"}}> */}
            {data &&
              data
                .filter((item) => item?.category_name === "Inflight Branding")
                .reverse()
                .map((item) => (
                  <Cards
                    key={item.id}
                    data={item}
                    onClick={() => {
                      navigate(
                        `/${
                          item?.category_url?.toLowerCase()
                            ? item?.category_url?.toLowerCase()
                            : item?.category_url
                        }/${
                          item?.product_url ? item?.product_url : item?.address
                        }/`,
                        { state: { data: item } }
                      );
                    }}
                  />
                ))}
            {/* </Box> */}
          </Grid>
          {isOpen && (
            <Popupcomponent ProductId={ProductId} handleClose={togglePopup} />
          )}
          {!data ||
            (data.filter((item) => item?.category_name === "Inflight Branding")
              .length === 0 && (
              <Box>
                <Grid
                  container
                  sx={{
                    marginTop: {
                      xs: "50px",
                      sm: "50px",
                      md: "70px",
                      lg: "70px",
                    },
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "50px",
                      lg: "50px",
                    },
                  }}
                >
                  {/* IMAGE */}
                  <Grid item xs={12} sm={12} md={6} lg={6}>
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
                      }}
                    >
                      <Box
                        component="img"
                        src={inflightBrandingadd}
                        sx={{
                          width: {
                            xs: "100%",
                            sm: "100%",
                            md: "530px",
                            lg: "530px",
                          },
                          height: {
                            xs: "100%",
                            sm: "100%",
                            md: "400px",
                            lg: "400px",
                          },
                          borderRadius: {
                            xs: "10px",
                            sm: "10px",
                            md: "10px",
                            lg: "10px",
                          },
                          border: "1px solid red",
                        }}
                      />
                    </Box>
                  </Grid>

                  {/* Content */}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    sx={{
                      // backgroundColor: "yellow",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      {/* TITLE */}
                      <Box
                        sx={{
                          marginTop: {
                            xs: "15px",
                            sm: "15px",
                            md: "0px",
                            lg: "0px",
                          },
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
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "26px",
                              sm: "26px",
                              md: "40px",
                              lg: "40px",
                            },
                            fontFamily: "Inter, sans-serif",
                            fontWeight: {
                              xs: "600",
                              sm: "600",
                              md: "500",
                              lg: "500",
                            },
                            // textAlign:"center",
                            display: "flex",
                            alignContent: {
                              xs: "center",
                              sm: "center",
                              md: "flex-end",
                              lg: "flex-end",
                            },
                            alignItems: {
                              xs: "center",
                              sm: "center",
                              md: "flex-start",
                              lg: "flex-start",
                            },
                            justifyContent: {
                              xs: "flex-start",
                              sm: "flex-start",
                              md: "flex-start",
                              lg: "flex-start",
                            },
                            lineHeight: {
                              xs: "30px",
                              sm: "30px",
                              md: "34px",
                              lg: "34px",
                            },
                            // backgroundColor: "red",
                          }}
                        >
                          Inflight Branding Agency
                        </Typography>
                      </Box>
                      {/* DESCRIPTION */}
                      <Box
                        sx={{
                          marginTop: {
                            xs: "15px",
                            sm: "15px",
                            md: "20px",
                            lg: "20px",
                          },
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
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "18px",
                              sm: "18px",
                              md: "17px",
                              lg: "17px",
                            },
                            fontFamily: "Inter, sans-serif",
                            fontWeight: "500",
                            display: "flex",
                            // textAlign: "justify",
                            alignContent: {
                              xs: "center",
                              sm: "center",
                              md: "flex-end",
                              lg: "flex-end",
                            },
                            alignItems: {
                              xs: "center",
                              sm: "center",
                              md: "flex-start",
                              lg: "flex-start",
                            },
                            justifyContent: {
                              xs: "center",
                              sm: "center",
                              md: "flex-start",
                              lg: "flex-start",
                            },
                            color: "rgb(55, 52, 53)",
                            // backgroundColor: "green",
                          }}
                        >
                          Elevate your brand recall and broaden your reach with strategically placed hoardings . Positioned in high-traffic zones with substantial footfall, these promotional materials guarantee significant visibility among bystanders, pedestrians, and travelers.
                        </Typography>
                      </Box>
                      {/* BUTTON */}
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
                          // backgroundColor: "orange",
                          marginTop: {
                            xs: "20px",
                            sm: "20px",
                            md: "20px",
                            lg: "20px",
                          },
                          marginBottom: {
                            xs: "10px",
                            sm: "10px",
                            md: "20px",
                            lg: "20px",
                          },
                          padding: {
                            xs: "0px 20px 0px 20px",
                            sm: "0px 20px 0px 20px",
                            md: "0px 0px 0px 0px",
                            lg: "0px 0px 0px 0px",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: {
                              xs: "200px",
                              sm: "200px",
                              md: "150px",
                              lg: "150px",
                            },
                            height: {
                              xs: "40px",
                              sm: "40px",
                              md: "40px",
                              lg: "40px",
                            },
                            backgroundColor: "#C02222",
                            borderRadius: "20px",
                            pointer: "cursor",
                          }}
                          onClick={togglePopup}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "15px",
                                sm: "15px",
                                md: "15px",
                                lg: "15px",
                              },
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "600",
                              color: "white",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                              padding: "20px",
                            }}
                          >
                            Request a Call
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
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

      {/* blackbox */}
      <Grid
        container
        sx={{
          marginTop: {
            xs: "10px",
            sm: "10px",
            md: "0px",
            lg: "0px",
          },
          marginBottom: {
            xs: "30px",
            sm: "30px",
            md: "60px",
            lg: "60px",
          },
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
          sx={
            {
              // backgroundColor: "green",
            }
          }
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: "#000",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                marginTop: {
                  xs: "20px",
                  sm: "20px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: {
                    xs: "25px",
                    sm: "25px",
                    md: "33px",
                    lg: "33px",
                  },
                  fontWeight: {
                    xs: "400",
                    sm: "400",
                    md: "600",
                    lg: "600",
                  },
                  fontFamily: "Inter, sans-serif",
                  color: "white",
                }}
              >
                Inflight Branding
              </Typography>
            </Box>

            <Box
              sx={{
                marginTop: {
                  xs: "10px",
                  sm: "10px",
                  md: "5px",
                  lg: "5px",
                },
                marginBottom: {
                  xs: "20px",
                  sm: "20px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "16px",
                    md: "16px",
                    lg: "16px",
                  },
                  fontWeight: {
                    xs: "500",
                    sm: "500",
                    md: "500",
                    lg: "500",
                  },
                  paddingLeft: {
                    xs: "10px",
                    sm: "10px",
                    md: "50px",
                    lg: "50px",
                  },
                  paddingRight: {
                    xs: "10px",
                    sm: "10px",
                    md: "50px",
                    lg: "50px",
                  },
                  fontFamily: "Inter, sans-serif",
                  color: "#fff",
                  textAlign: {
                    lg: "center",
                    md: "center",
                    sm: "justify",
                    xs: "justify",
                  },
                  lineHeight: "23px",
                  justifyContent: "center",
                  textAlign: {
                    lg: "center",
                    md: "center",
                    // sm: "justify",
                    // xs: "justify",
                  },
                }}
              >
                Inflight advertising is a powerful marketing tool that leverages the unique environment of air travel to reach a high-value audience. Through various touchpoints and creative formats, brands can create memorable and impactful experiences that resonate with passengers long after the flight has landed. 
                With Janus Alive, your brand can appear as an inflight magazine advertisement or on tray table decals or seatback screens. 
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
          // sx={{ backgroundColor: "red" }}
        ></Grid>
      </Grid>

      {/* FAQ */}
      <Grid container sx={{ backgroundColor: "white" }}>
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
          <Box sx={MainMargins}>
            {/* Title */}
            <Typography sx={FaqMainTitle}>FAQ's</Typography>
            {/* Description */}
            <Typography sx={FaqDescription}>
              Elevate your brand recall and broaden your reach with
              strategically
              <br />
              range of outdoor advertising services
            </Typography>
            {/* Faq */}
            <Faq />
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
}
