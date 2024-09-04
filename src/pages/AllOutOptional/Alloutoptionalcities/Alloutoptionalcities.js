/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useLocation } from "react-router-dom";
import { Grid, Typography, Button, Box } from "@mui/material";

import worldimg from "../../../assets/images/OutdootAdvertising.jpeg";

import sampleImg from "../../../assets/images/samponent.png";


// import videotwo from "../../../assets";

import "./Alloutoptionalcities.css";

const Alloutoptionalcities = () => {
  const { state } = useLocation();
  const { AllCities } = state;

  return (
    <Box sx={{ marginTop: { xs: "51px", sm: "51px", md: "90px", lg: "90px" } }}>
     

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
          // sx={{ backgroundColor: "green" }}
        >
          <Grid
            container
            sx={{
              marginTop: {
                xs: "50px",
                sm: "50px",
                md: "30px",
                lg: "30px",
              },
            }}
          >
            {AllCities.map((item) => (
              <Grid item xs={12} sm={12} md={4} lg={4} sx={{}}>
                <a
                  href={`https://www.janusooh.com/outdoor-advertising-agency-in-${item
                    .toLowerCase()
                    .replaceAll(" ", "-")}/`}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  rel="noreferrer"
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                      marginBottom: "50px",
                      marginRight: "20px",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.9",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                    <img
                      src={worldimg}
                      style={{
                        height: "160px",
                        width: "100%",
                      }}
                    />
                  </Box>
                </a>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.7}
          lg={0.7}
          // sx={{ backgroundColor: "blue" }}
        ></Grid>
      </Grid>

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
          // sx={{ backgroundColor: "green" }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              marginTop: {
                xs: "50px",
                sm: "50px",
                md: "10px",
                lg: "10px",
              },
              marginBottom: {
                xs: "10px",
                sm: "10px",
                md: "50px",
                lg: "50px",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                width: "100%",
                backgroundColor: "black",
                opacity: "0.9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{}}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0px",
                        sm: "0px",
                        md: "40px",
                        lg: "40px",
                      },
                      fontWeight: {
                        xs: "0",
                        sm: "0",
                        md: "600",
                        lg: "600",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#fff",
                      opacity: "0.9",
                      marginTop: {
                        md: "-20px",
                        lg: "-20px",
                      },
                    }}
                  >
                    About Outdoor Advertising
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: {
                      xs: "",
                      sm: "",
                      md: "1000px",
                      lg: "1000px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "0px",
                        sm: "0px",
                        md: "14px",
                        lg: "14px",
                      },
                      fontWeight: {
                        xs: "0",
                        sm: "0",
                        md: "300",
                        lg: "300",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#fff",
                      textAlign: "center",
                      opacity: "0.9",
                    }}
                  >
                    Outdoor advertising refers to the promotion of brands,
                    products, or services within the outdoor environment. It
                    involves strategically placing advertisements, signage,
                    digital displays, and other promotional materials in
                    high-traffic areas such as terminals, gates, baggage claim
                    areas, and outdoor spaces. With millions of travelers
                    passing through outdoors each day, outdoor advertising
                    offers a unique opportunity to reach a captive and diverse
                    audience. The visually appealing and immersive nature of
                    outdoor advertising creates brand awareness, enhances
                    visibility, and delivers impactful messages to travelers,
                    making it an effective marketing channel for businesses
                    looking to capture the attention of a highly engaged
                    audience.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="img"
              sx={{
                height: {
                  xs: "0px",
                  sm: "0px",
                  md: "260px",
                  lg: "260px",
                },
                width: {
                  xs: "0px",
                  sm: "0px",
                  md: "100%",
                  lg: "100%",
                },
              }}
              src={sampleImg}
            />
          </Box>

          {/* About Outdoor Services in India */}
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                  lg: "flex-start",
                },
                alignItems: {
                  xs: "center",
                  sm: "center",
                  md: "none",
                  lg: "none",
                },
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
                marginTop: {
                  xs: "-40px",
                  sm: "-40px",
                  md: "0px",
                  lg: "0px",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "30px",
                  },
                  fontWeight: {
                    xs: "600",
                    sm: "600",
                    md: "700",
                    lg: "700",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "none",
                    lg: "none",
                  },
                }}
              >
                About Outdoor Services in India
              </Typography>
            </Box>
            <Box
              sx={{
                paddingLeft: {
                  xs: "20px",
                  sm: "20px",
                  md: "40px",
                  lg: "40px",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "500",
                      sm: "500",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "30px",
                      lg: "30px",
                    },
                  }}
                >
                  <span>•</span> Outdoor Advertising Company in India
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "500",
                      sm: "500",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "3px",
                      sm: "3px",
                      md: "3px",
                      lg: "3px",
                    },
                  }}
                >
                  <span>•</span> Outdoor Magazine Advertising
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "14px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "500",
                      sm: "500",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "3px",
                      sm: "3px",
                      md: "3px",
                      lg: "3px",
                    },
                  }}
                >
                  <span>•</span> Outdoor Advertising Costs
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Why outdoor Advertising Drive up the sales */}
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
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  fontWeight: {
                    xs: "0",
                    sm: "0",
                    md: "700",
                    lg: "700",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "30px",
                  },
                }}
              ></Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "30px",
                  },
                  fontWeight: {
                    xs: "600",
                    sm: "600",
                    md: "700",
                    lg: "700",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "none",
                    lg: "none",
                  },
                }}
              >
                Why Outdoor Advertising Drive up the sales
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "15px",
                    md: "16px",
                    lg: "16px",
                  },
                  fontWeight: {
                    xs: "400",
                    sm: "400",
                    md: "500",
                    lg: "500",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "10px",
                  },
                }}
              >
                Outdoor advertising is an effective strategy that can drive up
                sales for businesses, particularly in the airline industry. When
                considering outdoor advertising, various factors come into play,
                such as outdoor advertising rates, the choice of the outdoor
                advertising company, and the specific location in India, such as
                Noida, Delhi, Mumbai, Bangalore, Hyderabad, Pune, Kolkata,
                Jaipur, Coimbatore, Lucknow, Ahmedabad, Guwahati, Goa,
                Kozhikode, Tirupati, Nagpur, Varanasi, Vishakhapatnam,
                Tiruchirappalli, Patna , Bhopal and Thiruvananthapuram,.
              </Typography>
            </Box>

            <Box
              sx={{
                paddingLeft: {
                  xs: "20px",
                  sm: "20px",
                  md: "40px",
                  lg: "40px",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "30px",
                      lg: "30px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    High Visibility :&nbsp;
                  </span>
                  outdoors are bustling hubs with a high influx of passengers,
                  including business travelers, tourists, and other individuals.
                  outdoor advertising allows businesses to capture the attention
                  of a captive and diverse audience, providing excellent
                  visibility for their products or services.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    Targeted Audience :&nbsp;
                  </span>
                  The audience at outdoors consists of individuals who are
                  likely to have disposable income and a higher propensity to
                  spend. By placing advertisements in outdoors, businesses can
                  directly target this desirable demographic, increasing the
                  likelihood of driving sales.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    Extented Dwell Time :&nbsp;
                  </span>
                  Passengers often spend considerable time at outdoors, waiting
                  for flights, clearing security checks, or collecting baggage.
                  This extended dwell time provides ample opportunity for
                  individuals to notice and engage with outdoor advertisements,
                  increasing brand exposure and influencing purchase decisions.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    Positive Brand Association :
                  </span>
                  &nbsp;Associating a brand with outdoors and airlines can
                  create a positive image and enhance brand credibility.
                  Travelers often perceive brands advertised at outdoors as
                  trustworthy and reliable, leading to increased customer
                  loyalty and higher sales.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    Multiple Touchpoints: :&nbsp;
                  </span>
                  outdoors offer numerous advertising touchpoints, including
                  digital displays, billboards, baggage claim areas, lounges,
                  boarding gates, and even airline interiors. By strategically
                  placing advertisements across these touchpoints, businesses
                  can effectively engage with passengers at various stages of
                  their travel journey, reinforcing brand messaging and
                  maximizing sales opportunities.
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "15px",
                    md: "16px",
                    lg: "16px",
                  },
                  fontWeight: {
                    xs: "400",
                    sm: "400",
                    md: "500",
                    lg: "500",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "10px",
                    sm: "10px",
                    md: "20px",
                    lg: "20px",
                  },
                }}
              >
                To leverage the benefits of outdoor advertising, businesses can
                collaborate with outdoor advertising agencies in prominent
                Indian cities like Noida, Delhi, Mumbai, Bangalore, Hyderabad,
                Pune, Kolkata, Jaipur, Coimbatore, Lucknow, Ahmedabad, Guwahati,
                Goa, Kozhikode, Tirupati, Nagpur, Varanasi, Vishakhapatnam,
                Tiruchirappalli, Thiruvananthapuram, Patna, and Bhopal. These
                agencies specialize in outdoor branding and possess the
                expertise to create impactful campaigns that resonate with the
                target audience, thereby driving up sales for businesses.
              </Typography>
            </Box>
          </Box>

          {/* Branding in outdoors */}
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
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  fontWeight: {
                    xs: "0",
                    sm: "0",
                    md: "700",
                    lg: "700",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "30px",
                  },
                }}
              ></Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "30px",
                  },
                  fontWeight: {
                    xs: "600",
                    sm: "600",
                    md: "700",
                    lg: "700",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "none",
                    lg: "none",
                  },
                }}
              >
                Branding in outdoors
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "15px",
                    md: "16px",
                    lg: "16px",
                  },
                  fontWeight: {
                    xs: "400",
                    sm: "400",
                    md: "500",
                    lg: "500",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "10px",
                  },
                }}
              >
                Branding in outdoors can be very impactful to the audience mind.
                Where, Travellers and Passengers spend lot of time for waiting
                in lines, for flights, and for their luggage, there branding in
                outdoors are good opportunities to gain the attention.
              </Typography>
            </Box>

            <Box
              sx={{
                paddingLeft: {
                  xs: "20px",
                  sm: "20px",
                  md: "40px",
                  lg: "40px",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "30px",
                      lg: "30px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    Boarding Pass :&nbsp;
                  </span>
                  Boarding pass branding leaves a lasting impression on
                  travelers, reinforcing brand identity, increasing visibility,
                  and fostering loyalty through recognizable logos and colors.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    Conveyor Belts :&nbsp;
                  </span>
                  outdoor conveyor belt branding captivates travelers by
                  displaying brand logos, slogans, and designs on luggage
                  carousels, creating a memorable and visually engaging
                  experience.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    Display LCD’s :&nbsp;
                  </span>
                  outdoor LCD display branding captivates passengers with
                  eye-catching brand logos, promotions, and engaging content,
                  leaving a lasting impression and enhancing brand visibility in
                  high-traffic areas.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    Posters :
                  </span>
                  &nbsp;outdoor poster branding grabs attention with captivating
                  visuals, brand logos, and compelling messages, creating a
                  strong brand presence and leaving a lasting impression on
                  travelers passing through the outdoor.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    Screens :
                  </span>
                  &nbsp;outdoor screen branding captures travelers' attention
                  through strategically placed digital displays, showcasing
                  brand logos, promotions, and captivating visuals to create a
                  memorable and engaging advertising experience.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    Wall Printings :&nbsp;
                  </span>
                  outdoor wall printings amplify brand presence with
                  eye-catching designs, logos, and messages. They create a
                  visually striking environment, leaving a lasting impression on
                  travelers and reinforcing brand identity.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    In Waiting Lounge :&nbsp;
                  </span>
                  Branding in the outdoor waiting for lounges immerses travelers
                  with captivating visuals, showcasing brand logos, messaging,
                  and designs, enhancing brand recognition and creating a
                  memorable experience.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    Meal Trays :&nbsp;
                  </span>
                  outdoor meal tray branding creates brand visibility and
                  recognition as travelers are exposed to branded logos,
                  designs, and messages during their in-flight dining
                  experience, leaving a lasting impression.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: {
                        xs: "400",
                        sm: "400",
                        md: "500",
                        lg: "500",
                      },
                      fontFamily: "Poppins, sans-serif",
                      color: "#000",
                    }}
                  >
                    Boarding Ramps :&nbsp;
                  </span>
                  Boarding ramp branding captivates passengers with impactful
                  brand logos, colors, and messaging, creating a memorable and
                  immersive experience as they embark on their journey.
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "15px",
                    md: "16px",
                    lg: "16px",
                  },
                  fontWeight: {
                    xs: "400",
                    sm: "400",
                    md: "500",
                    lg: "500",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "10px",
                    sm: "10px",
                    md: "20px",
                    lg: "20px",
                  },
                }}
              >
                outdoor Branding prices is depends on the multiple things, The
                most important thing will be the city where that outdoor is
                located. Fews metro location or cities like - Delhi, Mumbai,
                Bangalore, an other metro cites get much higher footfalls than
                other outdoors hence that increase the outdoor advertising
                pricing.
              </Typography>
            </Box>
          </Box>

          {/* About outdoor Advertising in India and Airline Advertising.*/}
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
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  fontWeight: {
                    xs: "0",
                    sm: "0",
                    md: "700",
                    lg: "700",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "30px",
                  },
                }}
              ></Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "30px",
                  },
                  fontWeight: {
                    xs: "600",
                    sm: "600",
                    md: "700",
                    lg: "700",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "none",
                    lg: "none",
                  },
                }}
              >
                About outdoor Advertising in India and Airline Advertising.
              </Typography>
            </Box>

            <Box
              sx={{
                paddingLeft: {
                  xs: "20px",
                  sm: "20px",
                  md: "40px",
                  lg: "40px",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "30px",
                      lg: "30px",
                    },
                  }}
                >
                  <span>•</span>&nbsp;Airline and outdoor advertising in India
                  has emerged as a relatively recent but promising phenomenon.
                  With the steady rise in the number of airline passengers and
                  outdoor traffic, unique advertising in outdoor opportunities
                  have surfaced.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span>•</span>&nbsp;Notably, India boasts major airline
                  carriers such as Indigo Airlines, Jet Airways, and Spice Jet,
                  while outdoors like Delhi T3 Terminal, Mumbai outdoor,
                  Bengaluru outdoor, and Chennai outdoor have become prime
                  locations for outdoor advertising agency looking to connect
                  with premium passengers.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span>•</span>&nbsp;It's essential to note that while
                  advertising costs in outdoor and execution are typically at
                  the national level, outdoor advertising costs are
                  city-specific. This distinction provides marketers with the
                  flexibility to engage in both hyperlocal marketing and
                  national advertising campaigns.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span>•</span>&nbsp;Not all advertising mediums within
                  airlines and outdoors come with exorbitant price tags.
                  In-flight advertising, particularly through airline magazines
                  advertising, offers one of the most cost-effective ways to
                  reach airline travelers.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span>•</span>&nbsp;In India, two of the most prominent
                  airline magazines available for advertising are Indigo Hello
                  6E and Jet Wings. When it comes to outdoor advertising rates
                  and airline advertising costs, you can readily access this
                  information at Gohoardings.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span>•</span>&nbsp;Gohoardings stands as a pioneering agency
                  in the realm of airline and outdoor advertising in India.
                  Through our extensive advertising network in all outdoors and
                  airlines in the country, we can connect you with the best
                  rates for a wide range of advertising options, both inside
                  airlines and at outdoors.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* outdoor Advertisement.*/}
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
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  fontWeight: {
                    xs: "0",
                    sm: "0",
                    md: "700",
                    lg: "700",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "30px",
                  },
                }}
              ></Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "30px",
                  },
                  fontWeight: {
                    xs: "600",
                    sm: "600",
                    md: "700",
                    lg: "700",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "none",
                    lg: "none",
                  },
                }}
              >
                Outdoor Advertisement.
              </Typography>
            </Box>

            <Box
              sx={{
                paddingLeft: {
                  xs: "20px",
                  sm: "20px",
                  md: "40px",
                  lg: "40px",
                },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "30px",
                      lg: "30px",
                    },
                  }}
                >
                  <span>•</span>&nbsp;Advertising in outdoor serves as a crucial
                  tool for promoting the services of both outdoors and airlines.
                  With the continual growth in air traffic, there's a growing
                  opportunity to attract more passengers to book flights.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span>•</span>&nbsp;Notably, India boasts major airline
                  carriers such as Indigo Airlines, Jet Airways, and Spice Jet,
                  while outdoors like Delhi T3 Terminal, Mumbai outdoor,
                  Bengaluru outdoor, and Chennai outdoor have become prime
                  locations for outdoor advertising agency looking to connect
                  with premium passengers.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span>•</span>&nbsp;To capture their attention, outdoors
                  employ attention-grabbing billboards with eye-catching
                  advertisements, while airlines utilize in-flight magazines and
                  prominent billboards near outdoor entrances to showcase their
                  offerings.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span>•</span>&nbsp;These outdoor advertisements serve a dual
                  purpose. They not only entice potential customers but also
                  contribute to keeping outdoor visitors engaged and entertained
                  throughout their journey. outdoor advertising permeates
                  various areast, from the food court to eye-catching outdoor
                  billboards positioned outside the outdoor.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span>•</span>&nbsp;The array of advertising materials
                  outdoors use serves diverse objectives, from enticing
                  individuals into particular restaurants to drawing them
                  towards specific airlines.
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span>•</span>&nbsp;Indeed, outdoor advertisements are
                  omnipresent within outdoor premises. They manifest in the form
                  of posters, dynamic displays on TV screens, and through
                  various other media channels. The surge in social media usage
                  has further amplified this presence, as passengers
                  increasingly access it while awaiting their flights or during
                  their stay at the outdoor.
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "15px",
                      sm: "15px",
                      md: "16px",
                      lg: "16px",
                    },
                    fontWeight: {
                      xs: "400",
                      sm: "40 0",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                    color: "rgb(33, 37, 41)",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  <span>•</span>&nbsp;The realm of advertising is experiencing
                  exponential growth, offering a multitude of opportunities for
                  both outdoor advertising agencies and businesses looking to
                  advertise within outdoors.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Enquire about the outdoor advertising rates */}
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
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  fontWeight: {
                    xs: "0",
                    sm: "0",
                    md: "700",
                    lg: "700",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "30px",
                  },
                }}
              ></Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "30px",
                    lg: "30px",
                  },
                  fontWeight: {
                    xs: "600",
                    sm: "600",
                    md: "700",
                    lg: "700",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "30px",
                    lg: "30px",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "none",
                    lg: "none",
                  },
                }}
              >
                Enquire about the airport advertising rates
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "15px",
                    md: "16px",
                    lg: "16px",
                  },
                  fontWeight: {
                    xs: "400",
                    sm: "400",
                    md: "500",
                    lg: "500",
                  },
                  fontFamily: "Poppins, sans-serif",
                  color: "#000",
                  marginTop: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "10px",
                  },
                }}
              >
                At JANUSOOH , we specialize in creating impactful branding
                strategies for outdoor experiences. Our team of experts
                understands the unique dynamics of outdoor branding and works
                closely with clients to design memorable and cohesive brand
                experiences for their passengers. You can use the following
                links to contact the agency contacts in these cities.
              </Typography>
            </Box>

            <Box
              sx={{
                paddingLeft: {
                  xs: "20px",
                  sm: "20px",
                  md: "40px",
                  lg: "40px",
                },
                marginTop: {
                  xs: "20px",
                  sm: "20px",
                  md: "30px",
                  lg: "30px",
                },

                marginBottom: {
                  xs: "20px",
                  sm: "20px",
                  md: "30px",
                  lg: "30px",
                },
              }}
            >
              {AllCities.map((item) => (
                <a
                  href={`https://www.janusooh.com/outdoor-advertising-agency-in-${item
                    .toLowerCase()
                    .replaceAll(" ", "-")}/`}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  rel="noreferrer"
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "14px",
                          md: "16px",
                          lg: "16px",
                        },
                        fontWeight: {
                          xs: "500",
                          sm: "500",
                          md: "500",
                          lg: "500",
                        },
                        fontFamily: "Poppins, sans-serif",
                        color: "rgb(33, 37, 41)",
                        marginTop: {
                          xs: "5px",
                          sm: "5px",
                          md: "5px",
                          lg: "5px",
                        },
                        marginBottom: {
                          xs: "5px",
                          sm: "5px",
                          md: "5px",
                          lg: "5px",
                        },
                        transition: "transform 0.3s", // Add transition for smooth effect
                        "&:hover": {
                          transform: "translateX(10px)", // Adjust the scale factor as needed
                        },
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      <span>•</span> Outdoor Advertising agency in {item}
                    </Typography>
                  </Box>
                </a>
              ))}
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
    </Box>
  );
};

export default Alloutoptionalcities;
