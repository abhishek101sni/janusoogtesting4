import React from "react";

// Carosuel
import Carousel from "react-grid-carousel";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT_ROUTER_DOM
import { Link } from "react-router-dom";

// CSS
import "./Homepagecarousel.css"

// IMAGES
import sample from "../../../assets/images/Sample.jpg"
import amarujala from "../../../assets/images/Triumphs/png230x90/amarujala.png"

const Homepagecarousel = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
            // sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
            // sx={{ backgroundColor: "green" }}
        >
          <Box
            sx={{
              marginTop: { xs: "10px", sm: "10px", md: "10px", lg: "10px" },
              marginBottom: { xs: "20px", sm: "20px", md: "20px", lg: "20px" },
            }}
          >
            <Carousel
              cols={3}
              rows={1}
              gap={20}
              loop={true}
              showDots={false}
              dotColorActive="#795548"
              dotColorInactive="#ccc"
              style={{ padding: "10px" }}
            >
               <Carousel.Item width="20%">
               <img src={amarujala} style={{width:"90px", height:"100px"}}/>
                  </Carousel.Item>

              <Carousel.Item width="20%">
                <Link to="/transitmedia" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.8",
                        borderBottomRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "30px",
                        fontFamily: " 'Mukta', sans-serif",
                      }}
                    >
                      TRANSIT MEDIA
                    </div>
                    <img
                      src={sample}
                      style={{
                        height: "160px",
                        width: "100%",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    />
                  </div>
                </Link>
              </Carousel.Item>

              <Carousel.Item width="20%">
                <Link to="/digital-billboard" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.8",
                        borderBottomRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "30px",
                        fontFamily: " 'Mukta', sans-serif",
                      }}
                    >
                      DIGITAL BILLBOARD
                    </div>
                    <img
                      src={sample}
                      style={{
                        height: "160px",
                        width: "100%",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    />
                  </div>
                </Link>
              </Carousel.Item>

              <Carousel.Item width="20%">
                <Link to="/mallmedia" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.8",
                        borderBottomRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "30px",
                        fontFamily: " 'Mukta', sans-serif",
                      }}
                    >
                      MALL MEDIA
                    </div>
                    <img
                      src={sample}
                      style={{
                        height: "160px",
                        width: "100%",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    />
                  </div>
                </Link>
              </Carousel.Item>

              <Carousel.Item width="20%">
                <Link to="/inflight-branding" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.8",
                        borderBottomRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "30px",
                        fontFamily: " 'Mukta', sans-serif",
                      }}
                    >
                      INFLIGHT BRANDING
                    </div>
                    <img
                      src={sample}
                      style={{
                        height: "160px",
                        width: "100%",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    />
                  </div>
                </Link>
              </Carousel.Item>

              <Carousel.Item width="20%">
                <Link to="/lift-branding" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.8",
                        borderBottomRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "30px",
                        fontFamily: " 'Mukta', sans-serif",
                      }}
                    >
                      LIFT BRANDING
                    </div>
                    <img
                      src={sample}
                      style={{
                        height: "160px",
                        width: "100%",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    />
                  </div>
                </Link>
              </Carousel.Item>

              <Carousel.Item width="20%">
                <Link to="/airport-branding" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.8",
                        borderBottomRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "30px",
                        fontFamily: " 'Mukta', sans-serif",
                      }}
                    >
                      AIRPORT BRANDING
                    </div>
                    <img
                      src={sample}
                      style={{
                        height: "160px",
                        width: "100%",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    />
                  </div>
                </Link>
              </Carousel.Item>

              <Carousel.Item width="20%">
                <Link to="/dooh" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "10px",
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        height: "160px",
                        width: "100%",
                        backgroundColor: "black",
                        opacity: "0.8",
                        borderBottomRightRadius: "10px",
                        borderBottomLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "30px",
                        fontFamily: " 'Mukta', sans-serif",
                      }}
                    >
                      DOOH
                    </div>
                    <img
                      src={sample}
                      style={{
                        height: "160px",
                        width: "100%",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                    />
                  </div>
                </Link>
              </Carousel.Item>
            </Carousel>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
            // sx={{ backgroundColor: "yellow" }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Homepagecarousel;
