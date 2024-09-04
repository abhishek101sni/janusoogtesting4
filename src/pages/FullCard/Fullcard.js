import React, { useEffect, useState } from "react";

// MATERIAL-UI
import { Typography, Grid, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

// IMAGES
import sampleImg from "../../assets/images/add4.webp";
import { imageNotFound } from "../../DesignData/Images/Images";

import "./Fullcard.css";

// Accordian
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// REACT-ROUTER-DOM
import { useLocation, useParams } from "react-router-dom";

// REDUX
import { getProductsById } from "../../redux/actions/Outdoor";

// REACT-HELMET
import { Helmet } from "react-helmet";

// PAGES
import Popupcomponent from "../PopUp/Popupcomponent";

// TOASTI-FY
import { ToastContainer, toast } from "react-toastify";
import { getProductDetails } from "../../redux/actions/Individual";

const Fullcard = () => {
  // accordian
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const location = useLocation();
  const { category, seotitle } = useParams();

  const [DATA, setDATA] = useState(null);
  const [ProductId, setProductId] = useState("");

  useEffect(() => {
    console.log("My loarion", location);
    setDATA(location?.state?.data);
  }, []);

  // POP-UP
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Toastify
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <Helmet>
        <title>{DATA?.seo_title}</title>
        <meta name="description" content={DATA?.seo_description} />
      </Helmet>
      {isOpen && (
        <Popupcomponent ProductId={ProductId} handleClose={togglePopup} />
      )}
      <Box>
        <Grid container sx={{ marginTop: "65px" }}>
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
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                // sx={{ backgroundColor: "orange" }}
              >
                <Box
                  sx={{
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "30px",
                      lg: "30px",
                    },
                    marginBottom: {
                      xs: "10px",
                      sm: "10px",
                      md: "30px",
                      lg: "30px",
                    },
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: {
                        xs: "95%",
                        sm: "95%",
                        md: "530px",
                        lg: "530px",
                      },
                      // height: {
                      //   xs: "260px",
                      //   sm: "260px",
                      //   md: "400px",
                      //   lg: "400px",
                      // },
                      marginLeft: {
                        xs: "10px",
                        sm: "10px",
                        md: "0px",
                        lg: "0px",
                      },
                      marginRight: {
                        xs: "10px",
                        sm: "10px",
                        md: "0px",
                        lg: "0px",
                      },
                      display: "flex",
                      borderRadius: {
                        xs: "15px",
                        sm: "15px",
                        md: "10px",
                        lg: "10px",
                      },
                      border: {
                        xs: "1px solid red",
                        sm: "1px solid red",
                        md: "1px solid red",
                        lg: "1px solid red",
                      },
                    }}
                    alt="add_img1"
                    src={DATA?.image ? DATA.image : imageNotFound}
                  />
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                // sx={{ backgroundColor: "grey" }}
              >
                <Box
                  sx={{
                    marginTop: { xs: "5px", sm: "5px", md: "20px", lg: "20px" },
                    marginBottom: {
                      xs: "5px",
                      sm: "5px",
                      md: "20px",
                      lg: "20px",
                    },
                  }}
                >
                  <Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "17px",
                            sm: "17px",
                            md: "20px",
                            lg: "20px",
                          },
                          fontFamily: "Inter, sans-serif",
                          fontWeight: {
                            xs: "500",
                            sm: "500",
                            md: "400",
                            lg: "400",
                          },
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
                            xs: "20px",
                            sm: "12px",
                            md: "12px",
                            lg: "12px",
                          },
                          marginTop: {
                            xs: "5px",
                            sm: "5px",
                            md: "30px",
                            lg: "30px",
                          },
                          color: "rgb(79, 74, 76)",
                          marginLeft: {
                            xs: "10px",
                            sm: "10px",
                            md: "0px",
                            lg: "0px",
                          },
                        }}
                      >
                        {/* {DATA?.category.toUpperCase()} */}
                        {DATA?.sub_category_name.toUpperCase()}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "25px",
                          sm: "25px",
                          md: "30px",
                          lg: "30px",
                        },
                        fontFamily: "Inter, sans-serif",
                        fontWeight: {
                          xs: "500",
                          sm: "500",
                          md: "500",
                          lg: "500",
                        },
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
                        marginTop: {
                          xs: "5px",
                          sm: "5px",
                          md: "15px",
                          lg: "15px",
                        },
                        marginLeft: {
                          xs: "10px",
                          sm: "10px",
                          md: "0px",
                          lg: "0px",
                        },
                      }}
                    >
                      {DATA?.product_name}
                    </Typography>
                  </Box>

                  {/* UNIQUE CODE */}
                  <Box
                    sx={{
                      marginTop: "15px",
                      paddingLeft: {
                        xs: "10px",
                        sm: "10px",
                        md: "0px",
                        lg: "0px",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "13px",
                            sm: "13px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontFamily: "Inter, sans-serif",
                          fontWeight: "600",
                          display: "flex",
                          color: "rgb(79, 74, 76)",
                        }}
                      >
                        Unique code :
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "16px",
                            lg: "16px",
                          },
                          marginTop: {
                            xs: "0px",
                            sm: "0px",
                            md: "-1px",
                            lg: "-1px",
                          },
                          fontFamily: "Inter, sans-serif",
                          fontWeight: "700",
                          display: "flex",
                        }}
                      >
                        {/* &nbsp;{DATA?.code.toUpperCase()} */}
                        &nbsp;{DATA?.uniquecode}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: "15px",
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
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "13px",
                              sm: "13px",
                              md: "14px",
                              lg: "14px",
                            },
                            fontFamily: "Inter, sans-serif",
                            fontWeight: "600",
                            display: "flex",
                            color: "rgb(79, 74, 76)",
                          }}
                        >
                          Category
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
                            marginTop: {
                              xs: "5px",
                              sm: "5px",
                              md: "5px",
                              lg: "5px",
                            },
                            fontFamily: "Inter, sans-serif",
                            fontWeight: "700",
                            display: "flex",
                          }}
                        >
                          {DATA?.category_name}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "13px",
                              sm: "13px",
                              md: "14px",
                              lg: "14px",
                            },
                            fontFamily: "Inter, sans-serif",
                            fontWeight: "600",
                            display: "flex",
                            color: "rgb(79, 74, 76)",
                          }}
                        >
                          Size
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
                            marginTop: {
                              xs: "5px",
                              sm: "5px",
                              md: "5px",
                              lg: "5px",
                            },
                            fontFamily: "Inter, sans-serif",
                            fontWeight: "700",
                            display: "flex",
                          }}
                        >
                          {DATA?.size}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "13px",
                              sm: "13px",
                              md: "14px",
                              lg: "14px",
                            },
                            fontFamily: "Inter, sans-serif",
                            fontWeight: "600",
                            display: "flex",
                            color: "rgb(79, 74, 76)",
                          }}
                        >
                          Illumination
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
                            marginTop: {
                              xs: "5px",
                              sm: "5px",
                              md: "5px",
                              lg: "5px",
                            },
                            fontFamily: "Inter, sans-serif",
                            fontWeight: "700",
                            display: "flex",
                          }}
                        >
                          {DATA?.illumination}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "13px",
                              sm: "13px",
                              md: "14px",
                              lg: "14px",
                            },
                            fontFamily: "Inter, sans-serif",
                            fontWeight: "600",
                            display: "flex",
                            color: "rgb(79, 74, 76)",
                          }}
                        >
                          Total Area
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
                            marginTop: {
                              xs: "5px",
                              sm: "5px",
                              md: "5px",
                              lg: "5px",
                            },
                            fontFamily: "Inter, sans-serif",
                            fontWeight: "700",
                            display: "flex",
                          }}
                        >
                          {DATA?.total_area}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginTop: {
                        xs: "14px",
                        sm: "14px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "15px",
                          sm: "15px",
                          md: "16px",
                          lg: "16px",
                        },
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "400",
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
                        paddingLeft: {
                          xs: "10px",
                          sm: "10px",
                          md: "0px",
                          lg: "0px",
                        },
                        color: "rgb(55, 52, 53)",
                        paddingRight: {
                          xs: "10px",
                          sm: "10px",
                          md: "0px",
                          lg: "0px",
                        },
                      }}
                    >
                      {DATA?.description}
                      {/* Elevate your brand recall and broaden your reach with
                      strategically placed hoardings in{" "}
                      {DATA?.city.charAt(0).toUpperCase() + DATA?.city.slice(1)}
                      ,{" "}
                      {DATA?.state.charAt(0).toUpperCase() +
                        DATA?.state.slice(1)}
                      . Positioned in high-traffic zones with substantial
                      footfall, these promotional materials guarantee
                      significant visibility among bystanders, pedestrians, and
                      travelers. */}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                      paddingLeft: {
                        xs: "10px",
                        sm: "10px",
                        md: "0px",
                        lg: "0px",
                      },
                      pointer: "cursor",
                    }}
                  >
                    <Box
                      sx={{
                        marginTop: {
                          xs: "15px",
                          sm: "15px",
                          md: "20px",
                          lg: "20px",
                        },
                        marginBottom: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        display: "flex",
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "center",
                          lg: "center",
                        },
                        alignItems: "center",
                        width: {
                          xs: "160px",
                          sm: "160px",
                          md: "170px",
                          lg: "170px",
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
                            xs: "13px",
                            sm: "13px",
                            md: "15px",
                            lg: "15px",
                          },
                          fontFamily: "Inter, sans-serif",
                          fontWeight: "600",
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          alignitems: "center",
                          cursor: "pointer",
                        }}
                      >
                        Request a Callback
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "yellow" }}
          ></Grid>
        </Grid>

        {/* Accordian */}

        {/* For Desktop */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ backgroundColor: "#F5F5F5" }}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          >
            <Box
              sx={{
                // backgroundColor: "orange",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                margin: "50px 0px 20px 0px",
              }}
            >
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: "40px",
                    fontWeight: "600",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  FAQ’s
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "17px",
                    fontWeight: "500",
                    fontFamily: "Inter, sans-serif",
                    textAlign: "center",
                  }}
                >
                  Elevate your brand recall and broaden your reach with
                  strategically
                  <br />
                  range of outdoor advertising services
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            backgroundColor: "#F5F5F5",
            // marginBottom: "40px"
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "orange" }}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          ></Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={5.1}
            lg={5.2}
            // sx={{ backgroundColor: "blue",}}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          >
            <Box sx={{ marginBottom: "60px" }}>
              {/* 1 */}
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel1" ? "18px" : "14px",
                      fontWeight: expanded === "panel1" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    What is an Advertising Agency?
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Advertising agencies manage a business's branding and online
                    media buying activities and help companies develop their
                    brands and gain tactical benefits. These agencies step in,
                    refer to the strategic goals outlined by the client, take
                    the creative media, and identify the best ad space based on
                    the media strategy. Advertising companies start with
                    identifying companies' positions, brand architecture, and
                    brand statements and providing the brands with a visual
                    identity and distinct voice. Agencies use various tools and
                    media options to uplift brands and get considerable reach
                    and awareness.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 2 */}
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel2" ? "18px" : "14px",
                      fontWeight: expanded === "panel2" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    What is The Media Ant?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Haystack Marketing Services Pvt. Ltd. operates under the
                    brand name 'The Media Ant' The Media Ant is a media and
                    advertising company launched in 2012 to bring accessibility
                    and transparency to the media buying field. Since then, The
                    Media Ant's mission has found resonance with many in the
                    industry and grown more substantial. After ten successful
                    years in the ad industry, INS officially accredited The
                    Media Ant. This event marks the acknowledgement of their
                    credibility, competence, and authenticity in the advertising
                    world.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 3 */}
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel3" ? "18px" : "14px",
                      fontWeight: expanded === "panel3" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    What is a Media Buying Agency?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    The Media Ant is a reputable advertising agency in India
                    that provides the best media planning and buying experiences
                    to help businesses achieve strategic advantages and brand
                    growth. As the best media buying agency, we are passionate
                    about bringing out the best in the companies we work with,
                    and we have been entrusted with it over the years. Our work
                    with our clients starts with identifying their position,
                    brand architecture, and brand statement and providing the
                    brands with a visual identity and distinct voice. We are the
                    best advertising agency that uses various tools and media
                    options. Our team shares a creative edge that will enable us
                    to uplift your brand and get considerable reach and
                    awareness.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 4 */}
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel4" ? "18px" : "14px",
                      fontWeight: expanded === "panel4" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Why do Media Buying with The Media Ant?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    The Media Ant is a media planning and media buying agency
                    that nurtures and helps businesses achieve strategic
                    advantages and promote their brands and services. As the
                    best media buying agency, The Media Ant experts are
                    passionate about bringing the best to the companies they
                    work with and have been entrusted with that responsibility
                    over the years. The Media Ant works with clients by
                    identifying their position, brand architecture, and brand
                    statement and providing them with a visual identity and
                    distinct voice. As a media buying agency, The Media Ant lets
                    their brands and clients create a meaningful and better
                    experience in the industry and with their target audience.
                    For the past ten years, The Media Ant has created digital
                    experiences for the brand and clients by leveraging their ad
                    campaigns and digital marketing to increase consumer
                    engagement.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={0.4}
            lg={0.2}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          ></Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={5.1}
            lg={5.2}
            // sx={{ backgroundColor: "green" }}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          >
            <Box sx={{ marginBottom: "60px" }}>
              {/* 5 */}
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel5" ? "18px" : "14px",
                      fontWeight: expanded === "panel5" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    How do you book an ad on The Media Ant?
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Planning an advertising strategy is a complicated procedure.
                    Making an effective plan and making an informed choice about
                    the best media option and time slots at the most affordable
                    advertising rates frequently requires a paid service
                    membership. We understand this can be difficult for
                    first-time or new advertisers; hence, The Media Ant is there
                    to take care of everything, from getting advertising data to
                    negotiating advertising rates. You can trust The Media Ant
                    with end-to-end planning and execution of your ad campaigns.
                    To get the best advertising rates and place your
                    advertisement, you have to follow these simple steps: Select
                    the media option on the website. You could see thousands of
                    advertising options on each media option. You can filter the
                    platform of your choice by selecting categoryoptions based
                    on genre, advertising option, languages, location,network or
                    type etc. You can also sort the advertising rates for
                    different options based on top search, category, and
                    language or choose from a library of sample ads. Once you
                    select a particular card, you can click on it to find all
                    the advertising options within the card and the advertising
                    rates for the same. Select the advertising option and the
                    advertising rate suitable for you. After that, click the
                    submit button and request an express quote.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 6 */}
              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel6" ? "18px" : "14px",
                      fontWeight: expanded === "panel6" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Best Advertising Agency in India
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    The Media Ant is a 10-year-old company in the AdTech space
                    that aims to disrupt the traditional process of executing ad
                    campaigns through a physical media agency and replace it
                    with a self-serve advertising platform. The platform should
                    work equally well for both online and offline media. The
                    Media Ant will empower any advertiser, irrespective of their
                    budget and level of marketing understanding, to go ahead and
                    launch a campaign. It is the winner of various startup
                    awards and is used by more than a million users yearly.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 7 */}
              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel7" ? "18px" : "14px",
                      fontWeight: expanded === "panel7" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Magazine Advertising Agency
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    The Media Ant, one of the best advertising agencies, also
                    specializes in developing and carrying out magazine
                    advertising campaigns for various brands. The Media Ant
                    collaborates with clients to build a plan that suits the
                    brand's objectives and target market, which can help brands
                    produce magazine ads in a vast selection of periodicals in
                    many different areas, such as lifestyle, business, fashion,
                    sports, and more.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 8 */}
              <Accordion
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel8" ? "18px" : "14px",
                      fontWeight: expanded === "panel8" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Television Advertising Agency
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    The Media Ant is the one-stop destination for all your
                    television advertising needs. The Media Ant has a broad
                    network of publishers, advertisers, and media sources,
                    allowing businesses to reach a large audience. Additionally,
                    the company has an experienced staff of professionals who
                    can help you plan your television advertising campaign and
                    buy the media suitable for your television advertising
                    campaign.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "orange" }}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          ></Grid>
        </Grid>

        {/* For Mobile */}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            sx={{ backgroundColor: "#F5F5F5" }}
            display={{ md: "none", lg: "none" }}
          >
            <Box
              sx={{
                // backgroundColor: "orange",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                margin: "20px 0px 20px 0px",
              }}
            >
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: "40px",
                    fontWeight: "600",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  FAQ’s
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "17px",
                    fontWeight: "500",
                    fontFamily: "Inter, sans-serif",
                    textAlign: "center",
                  }}
                >
                  Elevate your brand recall and broaden your reach with
                  strategically
                  <br />
                  range of outdoor advertising services
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            backgroundColor: "#F5F5F5",
            // marginBottom: "40px"
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            // sx={{ backgroundColor: "blue",}}
            display={{ md: "none", lg: "none" }}
          >
            <Box
              sx={{
                marginBottom: { xs: "20px", sm: "20px", md: "60px" },
                padding: "0px 10px 0px 10px",
              }}
            >
              {/* 1 */}
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel1" ? "18px" : "14px",
                      fontWeight: expanded === "panel1" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    What is an Advertising Agency?
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Advertising agencies manage a business's branding and online
                    media buying activities and help companies develop their
                    brands and gain tactical benefits. These agencies step in,
                    refer to the strategic goals outlined by the client, take
                    the creative media, and identify the best ad space based on
                    the media strategy. Advertising companies start with
                    identifying companies' positions, brand architecture, and
                    brand statements and providing the brands with a visual
                    identity and distinct voice. Agencies use various tools and
                    media options to uplift brands and get considerable reach
                    and awareness.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 2 */}
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel2" ? "18px" : "14px",
                      fontWeight: expanded === "panel2" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    What is The Media Ant?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Haystack Marketing Services Pvt. Ltd. operates under the
                    brand name 'The Media Ant' The Media Ant is a media and
                    advertising company launched in 2012 to bring accessibility
                    and transparency to the media buying field. Since then, The
                    Media Ant's mission has found resonance with many in the
                    industry and grown more substantial. After ten successful
                    years in the ad industry, INS officially accredited The
                    Media Ant. This event marks the acknowledgement of their
                    credibility, competence, and authenticity in the advertising
                    world.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 3 */}
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel3" ? "18px" : "14px",
                      fontWeight: expanded === "panel3" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    What is a Media Buying Agency?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    The Media Ant is a reputable advertising agency in India
                    that provides the best media planning and buying experiences
                    to help businesses achieve strategic advantages and brand
                    growth. As the best media buying agency, we are passionate
                    about bringing out the best in the companies we work with,
                    and we have been entrusted with it over the years. Our work
                    with our clients starts with identifying their position,
                    brand architecture, and brand statement and providing the
                    brands with a visual identity and distinct voice. We are the
                    best advertising agency that uses various tools and media
                    options. Our team shares a creative edge that will enable us
                    to uplift your brand and get considerable reach and
                    awareness.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 4 */}
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel4" ? "18px" : "14px",
                      fontWeight: expanded === "panel4" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Why do Media Buying with The Media Ant?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    The Media Ant is a media planning and media buying agency
                    that nurtures and helps businesses achieve strategic
                    advantages and promote their brands and services. As the
                    best media buying agency, The Media Ant experts are
                    passionate about bringing the best to the companies they
                    work with and have been entrusted with that responsibility
                    over the years. The Media Ant works with clients by
                    identifying their position, brand architecture, and brand
                    statement and providing them with a visual identity and
                    distinct voice. As a media buying agency, The Media Ant lets
                    their brands and clients create a meaningful and better
                    experience in the industry and with their target audience.
                    For the past ten years, The Media Ant has created digital
                    experiences for the brand and clients by leveraging their ad
                    campaigns and digital marketing to increase consumer
                    engagement.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 5 */}
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel5" ? "18px" : "14px",
                      fontWeight: expanded === "panel5" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    How do you book an ad on The Media Ant?
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    Planning an advertising strategy is a complicated procedure.
                    Making an effective plan and making an informed choice about
                    the best media option and time slots at the most affordable
                    advertising rates frequently requires a paid service
                    membership. We understand this can be difficult for
                    first-time or new advertisers; hence, The Media Ant is there
                    to take care of everything, from getting advertising data to
                    negotiating advertising rates. You can trust The Media Ant
                    with end-to-end planning and execution of your ad campaigns.
                    To get the best advertising rates and place your
                    advertisement, you have to follow these simple steps: Select
                    the media option on the website. You could see thousands of
                    advertising options on each media option. You can filter the
                    platform of your choice by selecting categoryoptions based
                    on genre, advertising option, languages, location,network or
                    type etc. You can also sort the advertising rates for
                    different options based on top search, category, and
                    language or choose from a library of sample ads. Once you
                    select a particular card, you can click on it to find all
                    the advertising options within the card and the advertising
                    rates for the same. Select the advertising option and the
                    advertising rate suitable for you. After that, click the
                    submit button and request an express quote.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 6 */}
              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel6" ? "18px" : "14px",
                      fontWeight: expanded === "panel6" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Best Advertising Agency in India
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    The Media Ant is a 10-year-old company in the AdTech space
                    that aims to disrupt the traditional process of executing ad
                    campaigns through a physical media agency and replace it
                    with a self-serve advertising platform. The platform should
                    work equally well for both online and offline media. The
                    Media Ant will empower any advertiser, irrespective of their
                    budget and level of marketing understanding, to go ahead and
                    launch a campaign. It is the winner of various startup
                    awards and is used by more than a million users yearly.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 7 */}
              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel7" ? "18px" : "14px",
                      fontWeight: expanded === "panel7" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Magazine Advertising Agency
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    The Media Ant, one of the best advertising agencies, also
                    specializes in developing and carrying out magazine
                    advertising campaigns for various brands. The Media Ant
                    collaborates with clients to build a plan that suits the
                    brand's objectives and target market, which can help brands
                    produce magazine ads in a vast selection of periodicals in
                    many different areas, such as lifestyle, business, fashion,
                    sports, and more.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* 8 */}
              <Accordion
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      color: "black",
                      fontSize: expanded === "panel8" ? "18px" : "14px",
                      fontWeight: expanded === "panel8" ? "600" : "500",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Television Advertising Agency
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    The Media Ant is the one-stop destination for all your
                    television advertising needs. The Media Ant has a broad
                    network of publishers, advertisers, and media sources,
                    allowing businesses to reach a large audience. Additionally,
                    the company has an experienced staff of professionals who
                    can help you plan your television advertising campaign and
                    buy the media suitable for your television advertising
                    campaign.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Fullcard;
