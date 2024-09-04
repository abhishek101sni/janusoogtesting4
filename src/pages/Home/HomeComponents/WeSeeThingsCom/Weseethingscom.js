import React from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// Animation

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

// IMAGES
import janusnew from "../../../../assets/images/janusmain.jpg";

// TYPE-ANIMATION
import { TypeAnimation } from "react-type-animation";

const Weseethingscom = () => {
  return (
    <>
      <Box>
        {/* We See things Differently ----- DESKTOP */}
        <Fade>
          <Grid
            container
            sx={
              {
                // backgroundColor: "orange",
              }
            }
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={0.7}
              lg={0.7}
              // sx={{ backgroundColor: "cyan" }}
              display={{ xs: "none", lg: "block" }}
            ></Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              sx={{
                // backgroundColor: "pink",
              }}
              display={{ xs: "none", lg: "block" }}
            >
              {/* Grid 1 Content */}
              <Box
                sx={{
                  marginTop: { xs: "0px", sm: "0px", md: "80px", lg: "80px" },
                  marginBottom: {
                    xs: "0px",
                    sm: "0px",
                    md: "80px",
                    lg: "80px",
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "33px",
                      fontWeight: "600",
                      color: "#000",
                      fontFamily: "Poppins, sans-serif",
                      wordSpacing: "5px",
                      letterSpacing: "-1px",
                      // backgroundColor: "green",
                      padding: "0",
                    }}
                  >
                    WE SEE THINGS DIFFERENTLY.
                  </Typography>
                </Box>

                <Box sx={{ marginTop: "10px" }}>
                  <TypeAnimation
                    sequence={[
                      "We have the maverick minds who goes for only unusual",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "We see an ocean of possibilities in the smallest of things",
                      1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    speed={50}
                    deletionSpeed={70}
                    style={{
                      display: "inline-block",
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "600",
                      fontFamily: "Poppins, sans-serif",
                      color: "#C02222",
                    }}
                    repeat={Infinity}
                  />
                </Box>

                <Box sx={{ marginTop: "20px" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "18px",
                        sm: "18px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: "500",
                      lineHeight: "22px",
                      textAlign: "justify",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Founded in 2002, JANUSOOH is the leading Outdoor
                    Advertising agency in India. With 20 years of experience, we
                    are now the largest network in the country in this
                    fast-paced sector. Our dedication to innovation and quality
                    has brought us to the forefront, where we offer specialized
                    media solutions to companies of all kinds. With more than
                    200 clients under its belt, JANUSOOH is committed to
                    creating memorable outdoor advertising campaigns.
                  </Typography>
                </Box>

                <Box sx={{ marginTop: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "18px",
                        sm: "18px",
                        md: "16px",
                        lg: "16px",
                      },
                      fontWeight: "500",
                      lineHeight: "22px",
                      textAlign: "justify",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Our skilled team combines strategic thinking with creativity
                    to make sure your brand sticks out in the constantly
                    changing advertising market. Join JANUSOOH for an
                    unmatched outdoor advertising experience that will help the
                    world connect with your message.
                  </Typography>
                </Box>

                {/* Button */}
                <Box
                  sx={{
                    marginTop: "30px",
                    display: "flex",
                  }}
                >
                  <Link to="/about-us/" style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        backgroundColor: "#C02222",
                        height: "40px",
                        width: "120px",
                        borderRadius: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#fff",
                        }}
                      >
                        KNOW MORE
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={0.6}
              lg={0.6}
              display={{ xs: "none", lg: "block" }}
              sx={{
                // backgroundColor: "blue",
              }}
            ></Grid>

            {/* Grid 2 content */}
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              display={{ xs: "none", lg: "block" }}
              sx={{
                // backgroundColor: "yellow",
              }}
            >
              <Box
                sx={{
                  marginTop: { xs: "0px", sm: "0px", md: "80px", lg: "80px" },
                  marginBottom: {
                    xs: "0px",
                    sm: "0px",
                    md: "80px",
                    lg: "80px",
                  },
                  // padding:"50px"
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "95%",
                      sm: "95%",
                      md: "100%",
                      lg: "100%",
                    },
                    height: {
                      xs: "95%",
                      sm: "95%",
                      md: "100%",
                      lg: "100%",
                    },
                    marginTop: "12px",
                    borderRadius: "5px",
                  }}
                  alt="add_img1"
                  src={janusnew}
                  loading="lazy"
                />
              </Box>
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
        </Fade>
        {/* We See things Differently ----- MOBILE */}
        <Grid
          container
          display={{ lg: "none" }}
          sx={{
            marginTop: {
              xs: "25px",
              sm: "25px",
              md: "70px",
              lg: "70px",
            },
            marginBottom: {
              xs: "25px",
              sm: "25px",
              md: "50px",
              lg: "50px",
            },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={0.7}
            lg={0.7}
            // sx={{ backgroundColor: "cyan" }}
          ></Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4.6}
            lg={4.6}
            // sx={{backgroundColor:"yellow"}}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "90%",
                    lg: "90%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "80%",
                    lg: "80%",
                  },

                  borderRadius: "5px",
                }}
                alt="add_img1"
                src={janusnew}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={
              {
                // backgroundColor: "purple"
              }
            }
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: { xs: "15px", sm: "15px", md: "50px", lg: "50px" },
              }}
            >
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
                <Typography
                  sx={{
                    display: "flex",
                    fontWeight: "600",
                    wordSpacing: "0px",
                    letterSpacing: "1px",
                    lineHeight: "30px",
                    color: "#000",
                    fontFamily: "Poppins, sans-serif",
                    justifyContent: {
                      xs: "center",
                      md: "center",
                      sm: "flex-start",
                      lg: "flex-start",
                    },
                    fontSize: {
                      xs: "30px",
                      sm: "30px",
                      md: "36px",
                      lg: "36px",
                    },
                    textAlign: "center",
                  }}
                >
                  WE SEE THINGS
                  <br /> DIFFERENTLY
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: "40px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginTop: "10px",
                }}
              >
                <TypeAnimation
                  sequence={[
                    "We have the maverick minds who goes for only unusual",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "We see an ocean of possibilities in the smallest of things",
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  speed={50}
                  deletionSpeed={70}
                  style={{
                    display: "inline-block",
                    color: "#000",
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                    color: "#C02222",
                  }}
                  repeat={Infinity}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  overflow: "hidden",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    justifyContent: "center",
                    // textAlign: "justify",
                    fontFamily: "Poppins, sans-serif",
                    color: "#333333",
                  }}
                >
                  Founded in 2002, JANUSOOH is the leading Outdoor Advertising
                  agency in India. With 20 years of experience, we are now the
                  largest network in the country in this fast-paced sector. Our
                  dedication to innovation and quality has brought us to the
                  forefront, where we offer specialized media solutions to
                  companies of all kinds. With more than 200 clients under its
                  belt, JANUSOOH is committed to creating memorable outdoor
                  advertising campaigns.
                  <br />
                  <br />
                  Our skilled team combines strategic thinking with creativity
                  to make sure your brand sticks out in the constantly changing
                  advertising market. Join JANUSOOH for an unmatched outdoor
                  advertising experience that will help the world connect with
                  your message.
                </Typography>
              </Box>
              {/* Button */}
              <Box
                sx={{
                  marginTop: "15px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link to="/about-us/" style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      backgroundColor: "#C02222",
                      height: "40px",
                      width: "120px",
                      borderRadius: "30px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#fff",
                      }}
                    >
                      KNOW MORE
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Box>
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
      </Box>
    </>
  );
};

export default Weseethingscom;

// import React from "react";

// // MUI
// import { Grid, Typography, Button, Box } from "@mui/material";

// // REACT-ROUTER-DOM
// import { Link } from "react-router-dom";

// // IMAGES
// import janusnew from "../../../../assets/images/janusmain.jpg";

// // TYPE-ANIMATION
// import { TypeAnimation } from "react-type-animation";
// const Weseethingscom = () => {
//   return (
//     <>
//       <Box>
//         {/* We See things Differently ----- DESKTOP */}
//         <Grid
//           container
//           sx={{
//             // backgroundColor: "orange",
//             marginTop: { xs: "0px", sm: "0px", md: "30px", lg: "30px" },
//             marginBottom: { xs: "0px", sm: "0px", md: "30px", lg: "30px" },
//           }}
//         >
//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={0.7}
//             lg={0.7}
//             // sx={{ backgroundColor: "cyan" }}
//             display={{ xs: "none", lg: "block" }}
//           ></Grid>

//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={5}
//             lg={5}
//             // sx={{ backgroundColor: "pink" }}
//             display={{ xs: "none", lg: "block" }}
//           >
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "56px",
//                   fontWeight: "700",
//                   color: "#000",
//                   fontFamily: "Poppins, sans-serif",
//                   wordSpacing: "5px",
//                   letterSpacing: "-1px",
//                   lineHeight:"60px"
//                 }}
//               >
//                 We see<br/> Things
//                 <br/> Differently.
//               </Typography>
//             </Box>

//             <Box sx={{ marginTop: "10px" }}>
//               <TypeAnimation
//                 sequence={[
//                   "We have the maverick minds who goes for only unusual",
//                   1000, // wait 1s before replacing "Mice" with "Hamsters"
//                   "We see an ocean of possibilities in the smallest of things",
//                   1000,
//                 ]}
//                 wrapper="span"
//                 cursor={true}
//                 speed={50}
//                 deletionSpeed={70}
//                 style={{
//                   display: "inline-block",
//                   color: "#000",
//                   fontSize: "16px",
//                   fontWeight: "600",
//                   fontFamily: "Poppins, sans-serif",
//                   color: "#C02222",
//                 }}
//                 repeat={Infinity}
//               />
//             </Box>

//             <Box sx={{ marginTop: "20px" }}>
//               <Typography
//                 sx={{
//                   fontSize: {
//                     xs: "18px",
//                     sm: "18px",
//                     md: "17px",
//                     lg: "17px",
//                   },
//                   fontWeight: "500",
//                   lineHeight: "26px",
//                   textAlign: "justify",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 Founded in 2002, janusooh is the leading Outdoor Advertising
//                 agency in India. With 20 years of experience, we are now the
//                 largest network in the country in this fast-paced sector. Our
//                 dedication to innovation and quality has brought us to the
//                 forefront, where we offer specialized media solutions to
//                 companies of all kinds. With more than 200 clients under its
//                 belt, janusooh is committed to creating memorable outdoor
//                 advertising campaigns.
//               </Typography>
//             </Box>

//             <Box sx={{ marginTop: "10px" }}>
//               <Typography
//                 sx={{
//                   fontSize: {
//                     xs: "18px",
//                     sm: "18px",
//                     md: "17px",
//                     lg: "17px",
//                   },
//                   fontWeight: "500",
//                   lineHeight: "26px",
//                   textAlign: "justify",
//                   fontFamily: "Poppins, sans-serif",
//                 }}
//               >
//                 Our skilled team combines strategic thinking with creativity to
//                 make sure your brand sticks out in the constantly changing
//                 advertising market. Join janusooh for an unmatched outdoor
//                 advertising experience that will help the world connect with
//                 your message.
//               </Typography>
//             </Box>

//             {/* Button */}
//             <Box
//               sx={{
//                 marginTop: "15px",
//                 display: "flex",
//               }}
//             >
//               <Link to="/about-us/" style={{ textDecoration: "none" }}>
//                 <Box
//                   sx={{
//                     backgroundColor: "#C02222",
//                     height: "40px",
//                     width: "120px",
//                     borderRadius: "30px",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontSize: "14px",
//                       fontWeight: "600",
//                       color: "#fff",
//                     }}
//                   >
//                     KNOW MORE
//                   </Typography>
//                 </Box>
//               </Link>
//             </Box>
//           </Grid>

//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={0.6}
//             lg={0.6}
//             display={{ xs: "none", lg: "block" }}
//           ></Grid>

//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={5}
//             lg={5}
//             display={{ xs: "none", lg: "block" }}
//             sx={
//               {
//                 // backgroundColor: "yellow",
//               }
//             }
//           >
//             <Box
//               sx={
//                 {
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   paddingLeft:"40px",
//                   paddingRight:"40px",
//                   paddingBottom:"40px",
//                   paddingTop:"10px",
//                   marginTop:"0px"
//                   // paddingLeft:"50px"
//                 }
//               }
//             >
//               <Box
//                 component="img"
//                 sx={{
//                   width: {
//                     xs: "95%",
//                     sm: "95%",
//                     md: "100%",
//                     lg: "100%",
//                   },
//                   height: {
//                     xs: "95%",
//                     sm: "95%",
//                     md: "100%",
//                     lg: "100%",
//                   },

//                   borderRadius: "5px",
//                 }}
//                 alt="add_img1"
//                 src={janusnew}
//               />
//             </Box>
//           </Grid>

//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={0.7}
//             lg={0.7}
//             // sx={{ backgroundColor: "blue" }}
//           ></Grid>
//         </Grid>

//         {/* We See things Differently ----- MOBILE */}
//         <Grid
//           container
//           display={{ lg: "none" }}
//           sx={{
//             marginTop: {
//               xs: "25px",
//               sm: "25px",
//               md: "70px",
//               lg: "70px",
//             },
//             marginBottom: {
//               xs: "25px",
//               sm: "25px",
//               md: "50px",
//               lg: "50px",
//             },
//           }}
//         >
//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={0.7}
//             lg={0.7}
//             // sx={{ backgroundColor: "cyan" }}
//           ></Grid>

//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={4.6}
//             lg={4.6}
//             // sx={{backgroundColor:"yellow"}}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 paddingLeft: {
//                   xs: "20px",
//                   sm: "20px",
//                   md: "0px",
//                   lg: "0px",
//                 },
//                 paddingRight: {
//                   xs: "20px",
//                   sm: "20px",
//                   md: "0px",
//                   lg: "0px",
//                 },
//               }}
//             >
//               <Box
//                 component="img"
//                 sx={{
//                   width: {
//                     xs: "100%",
//                     sm: "100%",
//                     md: "90%",
//                     lg: "90%",
//                   },
//                   height: {
//                     xs: "100%",
//                     sm: "100%",
//                     md: "80%",
//                     lg: "80%",
//                   },

//                   borderRadius: "5px",
//                 }}
//                 alt="add_img1"
//                 src={janusnew}
//               />
//             </Box>
//           </Grid>

//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={6}
//             lg={6}
//             sx={
//               {
//                 // backgroundColor: "purple"
//               }
//             }
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 marginTop: { xs: "15px", sm: "15px", md: "50px", lg: "50px" },
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: {
//                     xs: "center",
//                     sm: "center",
//                     md: "flex-start",
//                     lg: "flex-start",
//                   },
//                   paddingLeft: {
//                     xs: "20px",
//                     sm: "20px",
//                     md: "0px",
//                     lg: "0px",
//                   },
//                   paddingRight: {
//                     xs: "20px",
//                     sm: "20px",
//                     md: "0px",
//                     lg: "0px",
//                   },
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     display: "flex",
//                     fontWeight: "600",
//                     wordSpacing: "0px",
//                     letterSpacing: "1px",
//                     lineHeight: "30px",
//                     color: "#000",
//                     fontFamily: "Poppins, sans-serif",
//                     justifyContent: {
//                       xs: "center",
//                       md: "center",
//                       sm: "flex-start",
//                       lg: "flex-start",
//                     },
//                     fontSize: {
//                       xs: "30px",
//                       sm: "30px",
//                       md: "36px",
//                       lg: "36px",
//                     },
//                     textAlign: "center",
//                   }}
//                 >
//                   WE SEE THINGS
//                   <br /> DIFFERENTLY
//                 </Typography>
//               </Box>

//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   width: "100%",
//                   height: "40px",
//                   paddingLeft: "20px",
//                   paddingRight: "20px",
//                   marginTop:"10px"
//                 }}
//               >
//                 <TypeAnimation
//                   sequence={[
//                     "We have the maverick minds who goes for only unusual",
//                     1000, // wait 1s before replacing "Mice" with "Hamsters"
//                     "We see an ocean of possibilities in the smallest of things",
//                     1000,
//                   ]}
//                   wrapper="span"
//                   cursor={true}
//                   speed={50}
//                   deletionSpeed={70}
//                   style={{
//                     display: "inline-block",
//                     color: "#000",
//                     fontSize: "16px",
//                     fontWeight: "600",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#C02222",
//                   }}
//                   repeat={Infinity}
//                 />
//               </Box>

//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   marginTop: "20px",
//                   paddingLeft: "20px",
//                   paddingRight: "20px",
//                   overflow: "hidden",
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: "18px",
//                     fontWeight: "500",
//                     justifyContent: "center",
//                     // textAlign: "justify",
//                     fontFamily: "Poppins, sans-serif",
//                     color: "#333333",
//                   }}
//                 >
//                   Founded in2002, janusooh is the leading Outdoor Advertising
//                   agency in India. With 20 years of experience, we are now the
//                   largest network in the country in this fast-paced sector. Our
//                   dedication to innovation and quality has brought us to the
//                   forefront, where we offer specialized media solutions to
//                   companies of all kinds. With more than 200 clients under its
//                   belt, janusooh is committed to creating memorable outdoor
//                   advertising campaigns.
//                   <br />
//                   <br />
//                   Our skilled team combines strategic thinking with creativity
//                   to make sure your brand sticks out in the constantly changing
//                   advertising market. Join janusooh for an unmatched outdoor
//                   advertising experience that will help the world connect with
//                   your message.
//                 </Typography>
//               </Box>
//               {/* Button */}
//               <Box
//                 sx={{
//                   marginTop: "15px",
//                   display: "flex",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Link to="/about-us/" style={{ textDecoration: "none" }}>
//                   <Box
//                     sx={{
//                       backgroundColor: "#C02222",
//                       height: "40px",
//                       width: "120px",
//                       borderRadius: "30px",
//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         fontSize: "14px",
//                         fontWeight: "600",
//                         color: "#fff",
//                       }}
//                     >
//                       KNOW MORE
//                     </Typography>
//                   </Box>
//                 </Link>
//               </Box>
//             </Box>
//           </Grid>

//           <Grid
//             item
//             xs={12}
//             sm={12}
//             md={0.7}
//             lg={0.7}
//             // sx={{ backgroundColor: "blue" }}
//           ></Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default Weseethingscom;
