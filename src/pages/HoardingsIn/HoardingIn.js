import React, { useState, useEffect } from "react";
// MATERIAL-UI
import { Typography, Grid, Box } from "@mui/material";

// REACT-ROUTER-DOM
import { useParams } from "react-router-dom";
import { getProductsByState } from "../../redux/actions/Home";

// Accordian
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// TOASTI-FY
import { ToastContainer, toast } from "react-toastify";

// REACT-HELMET
import { Helmet } from "react-helmet";

import Cards from "../Card/Cards";

import Popupcomponent from "../PopUp/Popupcomponent";

// IMAGES
import samOutdoor from "../../assets/images/samOutdoor.jpeg";

import { useNavigate } from "react-router-dom";

import videotwo from "../../assets/video/VideoWithoutText.mp4";

const HoardingIn = () => {
  // accordian
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { param } = useParams();
  const params = param.split("in-")[1];

  const [DATA, setDATA] = useState(null);
  const [ProductId, setProductId] = useState("");
  console.log("hello......................... data", DATA);

  useEffect(() => {
    console.log("STATE VALUE", params);
    getProductsByState(params.replaceAll("-", " ")).then((res) => {
      console.log(res);
      setDATA(res);
      setProductId(res._id);
    });
  }, []);

  const navigate = useNavigate();

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

  return DATA === null || DATA?.length === 0 ? (
    <>
      <Helmet>
        <title>
          Top Outdoor Advertising Agency in {params.replaceAll("-", " ")}
        </title>

        {/* <meta
          name="description"
          content={`Outdoor advertising agency in ${params.replaceAll(
            "-",
            " "
          )}`}
        /> */}
        <meta
          name="description"
          content={`Elevate Your Brand with the Top Outdoor Advertising Agency in ${params.replaceAll(
            "-",
            " "
          )}.Discover Effective Outdoor Marketing Solutions. Contact Us Today. `}
        />
      </Helmet>

      {isOpen && (
        <Popupcomponent
          ProductId={DATA === null || DATA?.length === 0 ? "n/a" : ProductId}
          handleClose={togglePopup}
        />
      )}

      {/* Video */}
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
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                height: { xs: "30vh", sm: "30vh", md: "60vh", lg: "60vh" },
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: {
                  xs: "-31vh",
                  sm: "-31vh",
                  md: "-61vh",
                  lg: "-61vh",
                },
              }}
            >
              {/* Text for Desktop*/}
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
                    fontSize: "40px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Outdoor Advertising Agency in{" "}
                  {params
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </Typography>
              </Box>

              {/* Text for Mobile*/}
              <Box sx={{ display: { md: "none", lg: "none" } }}>
                <Typography
                  sx={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "600px",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "30px",
                  }}
                >
                  Outdoor Advertising Agency in{" "}
                  {params
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* Content */}
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
          md={5.3}
          lg={5.3}
          // sx={{ backgroundColor: "yellow" }}
        >
          {/* Image */}
          <Box
            sx={{
              marginTop: {
                xs: "20px",
                sm: "20px",
                md: "50px",
                lg: "50px",
              },
              marginBottom: {
                xs: "20px",
                sm: "20px",
                md: "50px",
                lg: "50px",
              },
            }}
          >
            <Box
              sx={{
                padding: {
                  xs: "0px 10px 0px 10px",
                  sm: "0px 10px 0px 10px",
                  md: "0px 0px 0px 0px",
                  lg: "0px 0px 0px 0px",
                },
              }}
            >
              <Box
                component="img"
                src={samOutdoor}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                  },
                  borderRadius: {
                    xs: "5px",
                    sm: "5px",
                    md: "15px",
                    lg: "15px",
                  },

                  border: "1px solid #C02222",
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          // sx={{ backgroundColor: "pink" }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
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
              {/* Text for Desktop */}
              <Box
                sx={{
                  padding: {
                    xs: "0px 20px 0px 20px",
                    sm: "0px 20px 0px 20px",
                    md: "0px 20px 0px 20px",
                    lg: "0px 20px 0px 20px",
                  },
                  display: { xs: "none", sm: "none", md: "block", lg: "block" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      sx: "",
                      sm: "",
                      md: "20px",
                      lg: "20px",
                    },
                    fontWeight: {
                      sx: "",
                      sm: "",
                      md: "500",
                      lg: "500",
                    },
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Elevate Your Brand with the Top Outdoor Advertising Agency in
                  <span
                    style={{
                      fontSize: "21px",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                      color: "#C02222",
                    }}
                  >
                    {" "}
                    {params
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </span>
                  . Discover Effective Outdoor Marketing Solutions. Contact Us
                  Today.
                </Typography>
              </Box>
              {/* Text for Mobile */}
              <Box
                sx={{
                  padding: {
                    xs: "0px 20px 0px 20px",
                    sm: "0px 20px 0px 20px",
                    md: "0px 20px 0px 20px",
                    lg: "0px 20px 0px 20px",
                  },
                  display: { md: "none", lg: "none" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Elevate Your Brand with the Top Outdoor Advertising Agency in
                  <span
                    style={{
                      fontSize: "19px",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                      color: "#C02222",
                    }}
                  >
                    {" "}
                    {params
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </span>
                  . Discover Effective Outdoor Marketing Solutions. Contact Us
                  Today.
                </Typography>
              </Box>
              {/* Button */}
              <Box
                sx={{
                  padding: {
                    xs: "0px 20px 20px 20px",
                    sm: "0px 20px 20px 20px",
                    md: "0px 20px 0px 20px",
                    lg: "0px 20px 0px 20px",
                  },
                }}
              >
                <Box
                  sx={{
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      md: "40px",
                      lg: "40px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: "#C02222",
                      width: {
                        xs: "180px",
                        sm: "180px",
                        md: "210px",
                        lg: "210px",
                      },
                      height: {
                        xs: "40px",
                        sm: "40px",
                        md: "45px",
                        lg: "45px",
                      },
                      borderRadius: {
                        xs: "40px",
                        sm: "40px",
                        md: "40px",
                        lg: "40px",
                      },
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                    onClick={togglePopup}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "white",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                          lg: "18px",
                        },
                        fontWeight: {
                          xs: "500",
                          sm: "500",
                          md: "600",
                          lg: "600",
                        },
                      }}
                    >
                      Request a Callback
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.4}
          lg={0.4}
          // sx={{ backgroundColor: "red" }}
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
                  fontFamily: "Poppins, sans-serif",
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
                  fontFamily: "Poppins, sans-serif",
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  How do I choose the best location for my OOH advertising in
                  Delhi?
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Our team conducts thorough market research and demographic
                  analysis to recommend the most effective locations for your
                  target audience.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What is The Media Ant?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Haystack Marketing Services Pvt. Ltd. operates under the brand
                  name 'The Media Ant' The Media Ant is a media and advertising
                  company launched in 2012 to bring accessibility and
                  transparency to the media buying field. Since then, The Media
                  Ant's mission has found resonance with many in the industry
                  and grown more substantial. After ten successful years in the
                  ad industry, INS officially accredited The Media Ant. This
                  event marks the acknowledgement of their credibility,
                  competence, and authenticity in the advertising world.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What is a Media Buying Agency?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is a reputable advertising agency in India that
                  provides the best media planning and buying experiences to
                  help businesses achieve strategic advantages and brand growth.
                  As the best media buying agency, we are passionate about
                  bringing out the best in the companies we work with, and we
                  have been entrusted with it over the years. Our work with our
                  clients starts with identifying their position, brand
                  architecture, and brand statement and providing the brands
                  with a visual identity and distinct voice. We are the best
                  advertising agency that uses various tools and media options.
                  Our team shares a creative edge that will enable us to uplift
                  your brand and get considerable reach and awareness.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Why do Media Buying with The Media Ant?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is a media planning and media buying agency that
                  nurtures and helps businesses achieve strategic advantages and
                  promote their brands and services. As the best media buying
                  agency, The Media Ant experts are passionate about bringing
                  the best to the companies they work with and have been
                  entrusted with that responsibility over the years. The Media
                  Ant works with clients by identifying their position, brand
                  architecture, and brand statement and providing them with a
                  visual identity and distinct voice. As a media buying agency,
                  The Media Ant lets their brands and clients create a
                  meaningful and better experience in the industry and with
                  their target audience. For the past ten years, The Media Ant
                  has created digital experiences for the brand and clients by
                  leveraging their ad campaigns and digital marketing to
                  increase consumer engagement.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  How do you book an ad on The Media Ant?
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Planning an advertising strategy is a complicated procedure.
                  Making an effective plan and making an informed choice about
                  the best media option and time slots at the most affordable
                  advertising rates frequently requires a paid service
                  membership. We understand this can be difficult for first-time
                  or new advertisers; hence, The Media Ant is there to take care
                  of everything, from getting advertising data to negotiating
                  advertising rates. You can trust The Media Ant with end-to-end
                  planning and execution of your ad campaigns. To get the best
                  advertising rates and place your advertisement, you have to
                  follow these simple steps: Select the media option on the
                  website. You could see thousands of advertising options on
                  each media option. You can filter the platform of your choice
                  by selecting categoryoptions based on genre, advertising
                  option, languages, location,network or type etc. You can also
                  sort the advertising rates for different options based on top
                  search, category, and language or choose from a library of
                  sample ads. Once you select a particular card, you can click
                  on it to find all the advertising options within the card and
                  the advertising rates for the same. Select the advertising
                  option and the advertising rate suitable for you. After that,
                  click the submit button and request an express quote.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Best Advertising Agency in India
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is a 10-year-old company in the AdTech space
                  that aims to disrupt the traditional process of executing ad
                  campaigns through a physical media agency and replace it with
                  a self-serve advertising platform. The platform should work
                  equally well for both online and offline media. The Media Ant
                  will empower any advertiser, irrespective of their budget and
                  level of marketing understanding, to go ahead and launch a
                  campaign. It is the winner of various startup awards and is
                  used by more than a million users yearly.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Magazine Advertising Agency
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Television Advertising Agency
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is the one-stop destination for all your
                  television advertising needs. The Media Ant has a broad
                  network of publishers, advertisers, and media sources,
                  allowing businesses to reach a large audience. Additionally,
                  the company has an experienced staff of professionals who can
                  help you plan your television advertising campaign and buy the
                  media suitable for your television advertising campaign.
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
                  fontFamily: "Poppins, sans-serif",
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
                  fontFamily: "Poppins, sans-serif",
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What is an Advertising Agency?
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Advertising agencies manage a business's branding and online
                  media buying activities and help companies develop their
                  brands and gain tactical benefits. These agencies step in,
                  refer to the strategic goals outlined by the client, take the
                  creative media, and identify the best ad space based on the
                  media strategy. Advertising companies start with identifying
                  companies' positions, brand architecture, and brand statements
                  and providing the brands with a visual identity and distinct
                  voice. Agencies use various tools and media options to uplift
                  brands and get considerable reach and awareness.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What is The Media Ant?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Haystack Marketing Services Pvt. Ltd. operates under the brand
                  name 'The Media Ant' The Media Ant is a media and advertising
                  company launched in 2012 to bring accessibility and
                  transparency to the media buying field. Since then, The Media
                  Ant's mission has found resonance with many in the industry
                  and grown more substantial. After ten successful years in the
                  ad industry, INS officially accredited The Media Ant. This
                  event marks the acknowledgement of their credibility,
                  competence, and authenticity in the advertising world.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What is a Media Buying Agency?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is a reputable advertising agency in India that
                  provides the best media planning and buying experiences to
                  help businesses achieve strategic advantages and brand growth.
                  As the best media buying agency, we are passionate about
                  bringing out the best in the companies we work with, and we
                  have been entrusted with it over the years. Our work with our
                  clients starts with identifying their position, brand
                  architecture, and brand statement and providing the brands
                  with a visual identity and distinct voice. We are the best
                  advertising agency that uses various tools and media options.
                  Our team shares a creative edge that will enable us to uplift
                  your brand and get considerable reach and awareness.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Why do Media Buying with The Media Ant?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is a media planning and media buying agency that
                  nurtures and helps businesses achieve strategic advantages and
                  promote their brands and services. As the best media buying
                  agency, The Media Ant experts are passionate about bringing
                  the best to the companies they work with and have been
                  entrusted with that responsibility over the years. The Media
                  Ant works with clients by identifying their position, brand
                  architecture, and brand statement and providing them with a
                  visual identity and distinct voice. As a media buying agency,
                  The Media Ant lets their brands and clients create a
                  meaningful and better experience in the industry and with
                  their target audience. For the past ten years, The Media Ant
                  has created digital experiences for the brand and clients by
                  leveraging their ad campaigns and digital marketing to
                  increase consumer engagement.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  How do you book an ad on The Media Ant?
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Planning an advertising strategy is a complicated procedure.
                  Making an effective plan and making an informed choice about
                  the best media option and time slots at the most affordable
                  advertising rates frequently requires a paid service
                  membership. We understand this can be difficult for first-time
                  or new advertisers; hence, The Media Ant is there to take care
                  of everything, from getting advertising data to negotiating
                  advertising rates. You can trust The Media Ant with end-to-end
                  planning and execution of your ad campaigns. To get the best
                  advertising rates and place your advertisement, you have to
                  follow these simple steps: Select the media option on the
                  website. You could see thousands of advertising options on
                  each media option. You can filter the platform of your choice
                  by selecting categoryoptions based on genre, advertising
                  option, languages, location,network or type etc. You can also
                  sort the advertising rates for different options based on top
                  search, category, and language or choose from a library of
                  sample ads. Once you select a particular card, you can click
                  on it to find all the advertising options within the card and
                  the advertising rates for the same. Select the advertising
                  option and the advertising rate suitable for you. After that,
                  click the submit button and request an express quote.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Best Advertising Agency in India
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is a 10-year-old company in the AdTech space
                  that aims to disrupt the traditional process of executing ad
                  campaigns through a physical media agency and replace it with
                  a self-serve advertising platform. The platform should work
                  equally well for both online and offline media. The Media Ant
                  will empower any advertiser, irrespective of their budget and
                  level of marketing understanding, to go ahead and launch a
                  campaign. It is the winner of various startup awards and is
                  used by more than a million users yearly.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Magazine Advertising Agency
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Television Advertising Agency
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is the one-stop destination for all your
                  television advertising needs. The Media Ant has a broad
                  network of publishers, advertisers, and media sources,
                  allowing businesses to reach a large audience. Additionally,
                  the company has an experienced staff of professionals who can
                  help you plan your television advertising campaign and buy the
                  media suitable for your television advertising campaign.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </>
  ) : (
    <>
      {/* Video */}
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
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                height: { xs: "30vh", sm: "30vh", md: "60vh", lg: "60vh" },
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: {
                  xs: "-31vh",
                  sm: "-31vh",
                  md: "-61vh",
                  lg: "-61vh",
                },
              }}
            >
              {/* Text for Desktop*/}
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
                    fontSize: "40px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Outdoor Advertising Agency in{" "}
                  {params
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </Typography>
              </Box>

              {/* Text for Mobile*/}
              <Box sx={{ display: { md: "none", lg: "none" } }}>
                <Typography
                  sx={{
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "600px",
                    fontFamily: "Poppins, sans-serif",
                    lineHeight: "30px",
                  }}
                >
                  Outdoor Advertising Agency in{" "}
                  {params
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* Content */}
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
          <Grid
            container
            sx={{
              marginTop: {
                xs: "20px",
                sm: "20px",
                md: "50px",
                lg: "50px",
              },
              marginBottom: {
                xs: "20px",
                sm: "20px",
                md: "50px",
                lg: "50px",
              },
            }}
          >
            {DATA &&
              DATA.map((item) => (
                <Cards
                  key={item.id} // Add a unique key for each mapped element
                  data={item}
                  onClick={() => {
                    navigate(
                      `/${
                        item?.urlcat?.toLowerCase()
                          ? item?.urlcat?.toLowerCase()
                          : item?.urlcat
                      }/${item?.url ? item?.url : item?.address}/`,
                      { state: { id: item._id } }
                    );
                    console.log("hello world", DATA);
                  }}
                />
              ))}
          </Grid>
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

      {/* Accordian */}
      {/* For Desktop */}

      {/* Title */}
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
                  fontFamily: "Poppins, sans-serif",
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
                  fontFamily: "Poppins, sans-serif",
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

      {/* Accordian Data */}
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

        {/* Accordian Grid 1 */}
        <Grid
          item
          xs={12}
          sm={12}
          md={5.2}
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {/* How do I choose the best location for my OOH advertising in */}
                  How do I choose the best location for my{" "}
                  {DATA[0]?.category.toLowerCase()} in{" "}
                  {params
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())} 
                  ?
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Our team conducts thorough market research and demographic
                  analysis to recommend the most effective locations for your
                  target audience.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What is the process for booking an {" "}
                  {DATA[0]?.category.toLowerCase()} in{" "}
                  {params
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                  ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Simply contact us with your advertising needs. We'll guide you
                  through selecting the best locations, designing your ad, and
                  scheduling your campaign.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  How long can my advertisement be displayed?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  We offer flexible display durations ranging from short-term
                  campaigns (a few weeks) to long-term placements (several
                  months or more).
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What are the costs of outdoor advertising in{" "}
                  {params
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                  ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Costs vary based on the type, location, and duration of the
                  ad. Contact us for a customized quote based on your specific
                  needs.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={0.2}
          lg={0.2}
          display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
        ></Grid>

        {/* Accordian Grid 2 */}
        <Grid
          item
          xs={12}
          sm={12}
          md={5.2}
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Can I change my advertisement during the campaign?
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Yes, we offer options for updating or changing your
                  advertisement during the campaign period. Additional costs may
                  apply.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Do you offer digital outdoor advertising options?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Yes, we provide various digital outdoor advertising solutions,
                  including digital billboards and screens with dynamic content
                  capabilities.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  How are digital billboards different from DOOH?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Digital billboards are a part of Digital Out-of-Home (DOOH)
                  advertising. DOOH includes all types of digital ads and
                  informational displays in public spaces, with digital
                  billboards.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Is outdoor advertising a part of digital marketing?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  No, outdoor advertising is not a part of digital marketing.
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
                  fontFamily: "Poppins, sans-serif",
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
                  fontFamily: "Poppins, sans-serif",
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What is an Advertising Agency?
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Advertising agencies manage a business's branding and online
                  media buying activities and help companies develop their
                  brands and gain tactical benefits. These agencies step in,
                  refer to the strategic goals outlined by the client, take the
                  creative media, and identify the best ad space based on the
                  media strategy. Advertising companies start with identifying
                  companies' positions, brand architecture, and brand statements
                  and providing the brands with a visual identity and distinct
                  voice. Agencies use various tools and media options to uplift
                  brands and get considerable reach and awareness.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What is The Media Ant?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Haystack Marketing Services Pvt. Ltd. operates under the brand
                  name 'The Media Ant' The Media Ant is a media and advertising
                  company launched in 2012 to bring accessibility and
                  transparency to the media buying field. Since then, The Media
                  Ant's mission has found resonance with many in the industry
                  and grown more substantial. After ten successful years in the
                  ad industry, INS officially accredited The Media Ant. This
                  event marks the acknowledgement of their credibility,
                  competence, and authenticity in the advertising world.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What is a Media Buying Agency?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is a reputable advertising agency in India that
                  provides the best media planning and buying experiences to
                  help businesses achieve strategic advantages and brand growth.
                  As the best media buying agency, we are passionate about
                  bringing out the best in the companies we work with, and we
                  have been entrusted with it over the years. Our work with our
                  clients starts with identifying their position, brand
                  architecture, and brand statement and providing the brands
                  with a visual identity and distinct voice. We are the best
                  advertising agency that uses various tools and media options.
                  Our team shares a creative edge that will enable us to uplift
                  your brand and get considerable reach and awareness.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Why do Media Buying with The Media Ant?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is a media planning and media buying agency that
                  nurtures and helps businesses achieve strategic advantages and
                  promote their brands and services. As the best media buying
                  agency, The Media Ant experts are passionate about bringing
                  the best to the companies they work with and have been
                  entrusted with that responsibility over the years. The Media
                  Ant works with clients by identifying their position, brand
                  architecture, and brand statement and providing them with a
                  visual identity and distinct voice. As a media buying agency,
                  The Media Ant lets their brands and clients create a
                  meaningful and better experience in the industry and with
                  their target audience. For the past ten years, The Media Ant
                  has created digital experiences for the brand and clients by
                  leveraging their ad campaigns and digital marketing to
                  increase consumer engagement.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  How do you book an ad on The Media Ant?
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Planning an advertising strategy is a complicated procedure.
                  Making an effective plan and making an informed choice about
                  the best media option and time slots at the most affordable
                  advertising rates frequently requires a paid service
                  membership. We understand this can be difficult for first-time
                  or new advertisers; hence, The Media Ant is there to take care
                  of everything, from getting advertising data to negotiating
                  advertising rates. You can trust The Media Ant with end-to-end
                  planning and execution of your ad campaigns. To get the best
                  advertising rates and place your advertisement, you have to
                  follow these simple steps: Select the media option on the
                  website. You could see thousands of advertising options on
                  each media option. You can filter the platform of your choice
                  by selecting categoryoptions based on genre, advertising
                  option, languages, location,network or type etc. You can also
                  sort the advertising rates for different options based on top
                  search, category, and language or choose from a library of
                  sample ads. Once you select a particular card, you can click
                  on it to find all the advertising options within the card and
                  the advertising rates for the same. Select the advertising
                  option and the advertising rate suitable for you. After that,
                  click the submit button and request an express quote.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Best Advertising Agency in India
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is a 10-year-old company in the AdTech space
                  that aims to disrupt the traditional process of executing ad
                  campaigns through a physical media agency and replace it with
                  a self-serve advertising platform. The platform should work
                  equally well for both online and offline media. The Media Ant
                  will empower any advertiser, irrespective of their budget and
                  level of marketing understanding, to go ahead and launch a
                  campaign. It is the winner of various startup awards and is
                  used by more than a million users yearly.
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Magazine Advertising Agency
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
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
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Television Advertising Agency
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is the one-stop destination for all your
                  television advertising needs. The Media Ant has a broad
                  network of publishers, advertisers, and media sources,
                  allowing businesses to reach a large audience. Additionally,
                  the company has an experienced staff of professionals who can
                  help you plan your television advertising campaign and buy the
                  media suitable for your television advertising campaign.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HoardingIn;
