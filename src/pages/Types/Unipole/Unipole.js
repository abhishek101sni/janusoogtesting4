// import React, { useState, useEffect } from "react";

// // MUI
// import { makeStyles } from "@mui/styles";
// import {
//   Box,
//   Grid,
//   Typography,
// } from "../../../DesignData/MaterialUi/material-ui";

// // styles
// import {
//   titleAndDescpAlignemnt,
//   MainMargins,
//   FaqMainTitle,
//   FaqDescription,
//   unipoleBannerMainTitle,
//   UnipoleBannerDescription,
//   SearchWhiteBox,
//   SearchBarbutton,
//   searchBarButtonText,
//   SearchWhiteBoxForMobile,
//   SearchBarbuttonMobile,
// } from "../../Styles/Styles";

// // CSS
// import "./Unipole.css";

// // REACT-HELMET
// import { Helmet } from "react-helmet";

// // REDUX
// import { useSelector } from "react-redux";

// import Cards from "../../Card/Cards";

// // REDUX
// import {
//   getProducts,
//   getProductsByState,
//   getStateAndCity,
//   getType,
// } from "../../../redux/actions/Outdoor";

// import store from "../../../redux/store";
// import types from "../../../redux/types";

// // REACT-ROUTER_DOM
// import { useNavigate } from "react-router-dom";

// import CircularProgress from "@mui/material/CircularProgress";

// // Accordian
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// // css
// import "./Unipole.css";

// import {
//   unipoleBanner,
//   blackRightArrow,
// } from "../../../DesignData/Images/Images";
// import Whatoutdoor from "../../Category/Outdoor/OutdoorComponents/WhatOutdoor/Whatoutdoor";

// const useStyles = makeStyles(() => ({
//   bgImage: {
//     backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${unipoleBanner})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     // height: { xs: "500px", sm: "500px", md: "400px", lg: "600px" },
//     height: "400px",
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   sideGridBgColor: {
//     // backgroundColor: "yellow",
//   },
//   MainGridBgColor: {
//     // backgroundColor: "pink",
//   },
// }));

// const { dispatch } = store;

// const Unipole = () => {
//   const classes = useStyles();
//   const [expanded, setExpanded] = useState(false);
//   const [visibleCount, setVisibleCount] = useState(9);
//   const [loading, setLoading] = useState(true);

//   const [type, setType] = React.useState("");
//   const [STATE, setSTATE] = useState(null);
//   const [CITY, setCITY] = useState(null);

//   // Dropdown
//   const [selectedOption, setSelectedOption] = useState("");
//   const handleSelectChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   useEffect(() => {
//     setLoading(true);
//     getProducts().then(() => setLoading(false)); // Fetch products and hide loader
//   }, []);

//   const handleViewMore = () => {
//     setVisibleCount((prevCount) => prevCount + 9);
//   };

//   const handleChange3 = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   const {
//     products,
//     allstates,
//     selectedState,
//     AllStateCities,
//     selectedCity,
//     typedata,
//   } = useSelector((state) => state.OutdoorReducer);
//   console.log("djbckjdb", typedata);
//   const navigate = useNavigate();

//   const handleChange = async (event) => {
//     const item = allstates.filter((i) => i.state === event.target.value);
//     console.log(item);
//     setSTATE(item[0]?.state);
//     dispatch({
//       type: types.SELECT_STATE,
//       payload: item[0]?.state,
//     });
//     dispatch({
//       type: types.UPDATE_CITIES,
//       payload: item[0]?.city,
//     });
//   };

//   const handleChange2 = (event) => {
//     setCITY(event.target.value);
//     dispatch({
//       type: types.SELECT_CITY,
//       payload: event.target.value,
//     });
//   };

//   React.useEffect(() => {
//     getProducts();
//   }, []);

//   React.useEffect(() => {
//     getStateAndCity();
//   }, []);

//   React.useEffect(() => {
//     getType();
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Where Outdoor Advertising Reaches New Heights</title>
//         <meta
//           name="description"
//           content={
//             "Trust Peak Promotions for innovative outdoor advertising that maximizes visibility and engagement. Let us take your marketing efforts to new heights, leaving a lasting impression on your audience"
//           }
//         />
//       </Helmet>
//       <Box>
//         {/* Loader */}
//         {loading ? (
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               minHeight: "400px",
//             }}
//           >
//             <CircularProgress />
//           </Box>
//         ) : (
//           <>
//             {/* Banner for desktop*/}
//             <Box
//               display={{
//                 xs: "none",
//                 sm: "none",
//                 md: "block",
//                 lg: "block",
//               }}
//             >
//               <Grid container className={classes.bgImage}>
//                 <Grid
//                   item
//                   xs={12}
//                   sm={12}
//                   md={0.5}
//                   lg={0.5}
//                   className={classes.sideGridBgColor}
//                 ></Grid>
//                 <Grid
//                   item
//                   xs={12}
//                   sm={12}
//                   md={11}
//                   lg={11}
//                   className={classes.MainGridBgColor}
//                 >
//                   {/* Title and Description */}
//                   <Box sx={titleAndDescpAlignemnt}>
//                     <Box>
//                       <Typography sx={unipoleBannerMainTitle}>
//                         UNIPOLE
//                       </Typography>
//                     </Box>
//                     <Box>
//                       <Typography sx={UnipoleBannerDescription}>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                         sed do eiusmod tempor
//                         <br /> incididunt ut labore et dolore magna aliqua.
//                       </Typography>
//                     </Box>
//                   </Box>
//                   {/* Search Bar for desktop */}
//                   <Box
//                     sx={{
//                       display: {
//                         xs: "none",
//                         sm: "none",
//                         md: "block",
//                         lg: "block",
//                       },
//                     }}
//                   >
//                     <Box sx={SearchWhiteBox}>
//                       <Box
//                         sx={{
//                           display: "flex",
//                           flexDirection: "row",
//                           justifyContent: "space-between",
//                           width: "600px",
//                         }}
//                       >
//                         {/* State */}
//                         <Box>
//                           <select
//                             id="dropdown"
//                             value={selectedOption}
//                             onChange={handleSelectChange}
//                             style={{
//                               border: "2px dashed red",
//                               width: "210px",
//                               marginRight: "5px",
//                               height: "42px",
//                               borderRadius: "5px",
//                             }}
//                           >
//                             <option value="" style={{ color: "red" }}>
//                               State
//                             </option>
//                             <option value="option1">Outdoor Advertising</option>
//                             <option value="option2">Metro Advertising</option>
//                             <option value="option3">Airport Branding</option>
//                             <option value="option3">Mall Branding</option>
//                             <option value="option3">Inflight Branding</option>
//                             <option value="option3">Transit Media</option>
//                             <option value="option3">All Hoardings</option>
//                             <option value="option3">
//                               All Hoardings Advertising
//                             </option>
//                           </select>
//                         </Box>

//                         {/* City */}
//                         <Box>
//                           <select
//                             id="dropdown"
//                             value={selectedOption}
//                             onChange={handleSelectChange}
//                             style={{
//                               border: "2px dashed red",
//                               width: "210px",
//                               marginRight: "5px",
//                               height: "42px",
//                               borderRadius: "5px",
//                             }}
//                           >
//                             <option value="" style={{ color: "red" }}>
//                               City
//                             </option>
//                             <option value="option1">Outdoor Advertising</option>
//                             <option value="option2">Metro Advertising</option>
//                             <option value="option3">Airport Branding</option>
//                             <option value="option3">Mall Branding</option>
//                             <option value="option3">Inflight Branding</option>
//                             <option value="option3">Transit Media</option>
//                             <option value="option3">All Hoardings</option>
//                             <option value="option3">
//                               All Hoardings Advertising
//                             </option>
//                           </select>
//                         </Box>

//                         <Box>
//                           <Box sx={SearchBarbutton}>
//                             <Typography sx={searchBarButtonText}>
//                               Submit
//                             </Typography>
//                           </Box>
//                         </Box>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Grid>
//                 <Grid
//                   item
//                   xs={12}
//                   sm={12}
//                   md={0.5}
//                   lg={0.5}
//                   className={classes.sideGridBgColor}
//                 ></Grid>
//               </Grid>
//             </Box>

//             {/* banner for mobile */}
//             <Box
//               sx={{
//                 display: {
//                   md: "none",
//                   lg: "none",
//                 },
//               }}
//             >
//               <Grid container sx={{ backgroundColor: "#D9D9D9" }}>
//                 <Grid
//                   item
//                   xs={12}
//                   sm={12}
//                   md={12}
//                   lg={12}
//                   sx={{ overflow: "hidden" }}
//                 >
//                   <Box sx={{ position: "relative" }}>
//                     <Box
//                       sx={{
//                         height: "290px",
//                         width: "100%",
//                         backgroundColor: "#FF1F2F",
//                         // borderRadius: "0 0 50% 50%/0 10 100% 90%",
//                         borderRadius: "0 0 50% 50%/0 0 90% 90%",
//                         transform: "scaleX(1.7)",
//                       }}
//                     ></Box>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           color: "white",
//                           top: "30%",
//                           zIndex: "2",
//                           textAlign: "center",
//                           position: "absolute",
//                           fontSize: "30px",
//                           fontWeight: "600",
//                           lineHeight: "30px",
//                           fontFamily: "Inter, sans-serif",
//                         }}
//                       >
//                         UNIPOLE
//                       </Typography>
//                       <Typography
//                         sx={{
//                           color: "white",
//                           top: "55%",
//                           zIndex: "2",
//                           textAlign: "center",
//                           position: "absolute",
//                           fontSize: "15px",
//                           lineHeight: "20px",
//                           padding: "0px 10px 0px 10px",
//                           fontFamily: "Inter, sans-serif",
//                         }}
//                       >
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                         sed do eiusmod tempor incididunt ut labore et dolore
//                         magna aliqua.
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Box>

//             {/* Search Bar for mobile */}
//             <Grid container sx={{ backgroundColor: "#D9D9D9" }}>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={12}
//                 lg={12}
//                 display={{
//                   md: "none",
//                   lg: "none",
//                 }}
//               >
//                 <Box sx={SearchWhiteBoxForMobile}>
//                   {/* State */}
//                   <Box sx={{ padding: "10px" }}>
//                     <select
//                       id="dropdown"
//                       value={selectedOption}
//                       onChange={handleSelectChange}
//                       style={{
//                         border: "2px dashed red",
//                         width: "100%",
//                         height: "42px",
//                         borderRadius: "5px",
//                       }}
//                     >
//                       <option value="" style={{ color: "red" }}>
//                         State
//                       </option>
//                       <option value="option1">Outdoor Advertising</option>
//                       <option value="option2">Metro Advertising</option>
//                       <option value="option3">Airport Branding</option>
//                       <option value="option3">Mall Branding</option>
//                       <option value="option3">Inflight Branding</option>
//                       <option value="option3">Transit Media</option>
//                       <option value="option3">All Hoardings</option>
//                       <option value="option3">All Hoardings Advertising</option>
//                     </select>
//                   </Box>

//                   {/* City */}
//                   <Box sx={{ padding: "10px" }}>
//                     <select
//                       id="dropdown"
//                       value={selectedOption}
//                       onChange={handleSelectChange}
//                       style={{
//                         border: "2px dashed red",
//                         width: "100%",
//                         height: "42px",
//                         borderRadius: "5px",
//                       }}
//                     >
//                       <option value="" style={{ color: "red" }}>
//                         City
//                       </option>
//                       <option value="option1">Outdoor Advertising</option>
//                       <option value="option2">Metro Advertising</option>
//                       <option value="option3">Airport Branding</option>
//                       <option value="option3">Mall Branding</option>
//                       <option value="option3">Inflight Branding</option>
//                       <option value="option3">Transit Media</option>
//                       <option value="option3">All Hoardings</option>
//                       <option value="option3">All Hoardings Advertising</option>
//                     </select>
//                   </Box>
//                 </Box>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                     marginTop: "20px",
//                   }}
//                 >
//                   <Box sx={SearchBarbuttonMobile}>
//                     <Typography sx={searchBarButtonText}>Submit</Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//             </Grid>

//             {/* Cards */}
//             <Grid container sx={{ backgroundColor: "#D9D9D9" }}>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={0.5}
//                 lg={0.5}
//                 className={classes.sideGridBgColor}
//               ></Grid>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={11}
//                 lg={11}
//                 sx={{
//                   marginTop: {
//                     xs: "20px",
//                     sm: "20px",
//                     md: "60px",
//                     lg: "60px",
//                   },
//                   marginBottom: "60px",
//                 }}
//               >
//                 <Grid
//                   container
//                   spacing={{
//                     xs: 3,
//                     sm: 3,
//                     md: 6,
//                     lg: 6,
//                   }}
//                 >
//                   {products &&
//                     products
//                       .filter((item) => item?.subcat === "UNIPOLE")
//                       .slice(0, visibleCount)
//                       .map((item) => (
//                         <Cards
//                           key={item.id}
//                           data={item}
//                           onClick={() => {
//                             navigate(
//                               `/${
//                                 item?.urlcat?.toLowerCase()
//                                   ? item?.urlcat?.toLowerCase()
//                                   : item?.urlcat
//                               }/${item?.url ? item?.url : item?.address}/`,
//                               { state: { id: item._id } }
//                             );
//                           }}
//                         />
//                       ))}
//                 </Grid>
//                 <Box
//                   sx={{
//                     textAlign: "center",
//                     marginTop: "40px",
//                     display: "flex",
//                     flexDirection: "row",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontSize: "18px",
//                       fontWeight: "500",
//                       cursor: "pointer",
//                       textAlign: "center",
//                       fontFamily: "Inter, sans-serif",
//                     }}
//                     onClick={handleViewMore}
//                   >
//                     View More
//                   </Typography>
//                   <Box
//                     component="img"
//                     src={blackRightArrow}
//                     sx={{
//                       width: {
//                         xs: "10px",
//                         sm: "10px",
//                         md: "20px",
//                         lg: "20px",
//                       },
//                       height: {
//                         xs: "10px",
//                         sm: "10px",
//                         md: "15px",
//                         lg: "15px",
//                       },
//                     }}
//                   />
//                 </Box>
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={0.5}
//                 lg={0.5}
//                 className={classes.sideGridBgColor}
//               ></Grid>
//             </Grid>

//             {/* FAQ */}
//             <Grid container sx={{ backgroundColor: "white" }}>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={0.5}
//                 lg={0.5}
//                 className={classes.sideGridBgColor}
//               ></Grid>

//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={11}
//                 lg={11}
//                 className={classes.MainGridBgColor}
//               >
//                 <Box sx={MainMargins}>
//                   {/* Title */}
//                   <Typography sx={FaqMainTitle}>FAQ's</Typography>
//                   {/* Description */}
//                   <Typography sx={FaqDescription}>
//                     Elevate your brand recall and broaden your reach with
//                     strategically
//                     <br />
//                     range of outdoor advertising services
//                   </Typography>

//                   {/* Accordian */}
//                   <Box sx={{ margin: "40px 10px 0px 10px" }}>
//                     <Grid container>
//                       <Grid item xs={12} sm={12} md={5.5} lg={5.7}>
//                         {/* 1 */}
//                         <Accordion
//                           expanded={expanded === "panel1"}
//                           onChange={handleChange3("panel1")}
//                         >
//                           <AccordionSummary
//                             expandIcon={<ExpandMoreIcon />}
//                             aria-controls="panel1bh-content"
//                             id="panel1bh-header"
//                           >
//                             <Typography
//                               sx={{
//                                 color: "black",
//                                 fontSize:
//                                   expanded === "panel1" ? "18px" : "14px",
//                                 fontWeight:
//                                   expanded === "panel1" ? "600" : "500",
//                                 fontFamily: "Poppins, sans-serif",
//                               }}
//                             >
//                               What is an Advertising Agency?
//                             </Typography>
//                           </AccordionSummary>

//                           <AccordionDetails>
//                             <Typography
//                               sx={{
//                                 fontFamily: "Poppins, sans-serif",
//                                 fontSize: "12px",
//                                 fontWeight: "500",
//                               }}
//                             >
//                               Advertising agencies manage a business's branding
//                               and online media buying activities and help
//                               companies develop their brands and gain tactical
//                               benefits. These agencies step in, refer to the
//                               strategic goals outlined by the client, take the
//                               creative media, and identify the best ad space
//                               based on the media strategy. Advertising companies
//                               start with identifying companies' positions, brand
//                               architecture, and brand statements and providing
//                               the brands with a visual identity and distinct
//                               voice. Agencies use various tools and media
//                               options to uplift brands and get considerable
//                               reach and awareness.
//                             </Typography>
//                           </AccordionDetails>
//                         </Accordion>
//                         {/* 2 */}
//                         <Accordion
//                           expanded={expanded === "panel2"}
//                           onChange={handleChange3("panel2")}
//                         >
//                           <AccordionSummary
//                             expandIcon={<ExpandMoreIcon />}
//                             aria-controls="panel2bh-content"
//                             id="panel2bh-header"
//                           >
//                             <Typography
//                               sx={{
//                                 color: "black",
//                                 fontSize:
//                                   expanded === "panel2" ? "18px" : "14px",
//                                 fontWeight:
//                                   expanded === "panel2" ? "600" : "500",
//                                 fontFamily: "Poppins, sans-serif",
//                               }}
//                             >
//                               What is The Media Ant?
//                             </Typography>
//                           </AccordionSummary>
//                           <AccordionDetails>
//                             <Typography
//                               sx={{
//                                 fontFamily: "Poppins, sans-serif",
//                                 fontSize: "12px",
//                                 fontWeight: "500",
//                               }}
//                             >
//                               Haystack Marketing Services Pvt. Ltd. operates
//                               under the brand name 'The Media Ant' The Media Ant
//                               is a media and advertising company launched in
//                               2012 to bring accessibility and transparency to
//                               the media buying field. Since then, The Media
//                               Ant's mission has found resonance with many in the
//                               industry and grown more substantial. After ten
//                               successful years in the ad industry, INS
//                               officially accredited The Media Ant. This event
//                               marks the acknowledgement of their credibility,
//                               competence, and authenticity in the advertising
//                               world.
//                             </Typography>
//                           </AccordionDetails>
//                         </Accordion>
//                         {/* 3 */}
//                         <Accordion
//                           expanded={expanded === "panel3"}
//                           onChange={handleChange3("panel3")}
//                         >
//                           <AccordionSummary
//                             expandIcon={<ExpandMoreIcon />}
//                             aria-controls="panel2bh-content"
//                             id="panel2bh-header"
//                           >
//                             <Typography
//                               sx={{
//                                 color: "black",
//                                 fontSize:
//                                   expanded === "panel3" ? "18px" : "14px",
//                                 fontWeight:
//                                   expanded === "panel3" ? "600" : "500",
//                                 fontFamily: "Poppins, sans-serif",
//                               }}
//                             >
//                               What is a Media Buying Agency?
//                             </Typography>
//                           </AccordionSummary>
//                           <AccordionDetails>
//                             <Typography
//                               sx={{
//                                 fontFamily: "Poppins, sans-serif",
//                                 fontSize: "12px",
//                                 fontWeight: "500",
//                               }}
//                             >
//                               The Media Ant is a reputable advertising agency in
//                               India that provides the best media planning and
//                               buying experiences to help businesses achieve
//                               strategic advantages and brand growth. As the best
//                               media buying agency, we are passionate about
//                               bringing out the best in the companies we work
//                               with, and we have been entrusted with it over the
//                               years. Our work with our clients starts with
//                               identifying their position, brand architecture,
//                               and brand statement and providing the brands with
//                               a visual identity and distinct voice. We are the
//                               best advertising agency that uses various tools
//                               and media options. Our team shares a creative edge
//                               that will enable us to uplift your brand and get
//                               considerable reach and awareness.
//                             </Typography>
//                           </AccordionDetails>
//                         </Accordion>
//                         {/* 4 */}
//                         <Accordion
//                           expanded={expanded === "panel4"}
//                           onChange={handleChange3("panel4")}
//                         >
//                           <AccordionSummary
//                             expandIcon={<ExpandMoreIcon />}
//                             aria-controls="panel2bh-content"
//                             id="panel2bh-header"
//                           >
//                             <Typography
//                               sx={{
//                                 color: "black",
//                                 fontSize:
//                                   expanded === "panel4" ? "18px" : "14px",
//                                 fontWeight:
//                                   expanded === "panel4" ? "600" : "500",
//                                 fontFamily: "Poppins, sans-serif",
//                               }}
//                             >
//                               Why do Media Buying with The Media Ant?
//                             </Typography>
//                           </AccordionSummary>
//                           <AccordionDetails>
//                             <Typography
//                               sx={{
//                                 fontFamily: "Poppins, sans-serif",
//                                 fontSize: "12px",
//                                 fontWeight: "500",
//                               }}
//                             >
//                               The Media Ant is a media planning and media buying
//                               agency that nurtures and helps businesses achieve
//                               strategic advantages and promote their brands and
//                               services. As the best media buying agency, The
//                               Media Ant experts are passionate about bringing
//                               the best to the companies they work with and have
//                               been entrusted with that responsibility over the
//                               years. The Media Ant works with clients by
//                               identifying their position, brand architecture,
//                               and brand statement and providing them with a
//                               visual identity and distinct voice. As a media
//                               buying agency, The Media Ant lets their brands and
//                               clients create a meaningful and better experience
//                               in the industry and with their target audience.
//                               For the past ten years, The Media Ant has created
//                               digital experiences for the brand and clients by
//                               leveraging their ad campaigns and digital
//                               marketing to increase consumer engagement.
//                             </Typography>
//                           </AccordionDetails>
//                         </Accordion>
//                       </Grid>
//                       <Grid item xs={12} sm={12} md={0.8} lg={0.6}></Grid>
//                       <Grid item xs={12} sm={12} md={5.5} lg={5.7}>
//                         {/* 5 */}
//                         <Accordion
//                           expanded={expanded === "panel5"}
//                           onChange={handleChange3("panel5")}
//                         >
//                           <AccordionSummary
//                             expandIcon={<ExpandMoreIcon />}
//                             aria-controls="panel1bh-content"
//                             id="panel1bh-header"
//                           >
//                             <Typography
//                               sx={{
//                                 color: "black",
//                                 fontSize:
//                                   expanded === "panel5" ? "18px" : "14px",
//                                 fontWeight:
//                                   expanded === "panel5" ? "600" : "500",
//                                 fontFamily: "Poppins, sans-serif",
//                               }}
//                             >
//                               How do you book an ad on The Media Ant?
//                             </Typography>
//                           </AccordionSummary>

//                           <AccordionDetails>
//                             <Typography
//                               sx={{
//                                 fontFamily: "Poppins, sans-serif",
//                                 fontSize: "12px",
//                                 fontWeight: "500",
//                               }}
//                             >
//                               Planning an advertising strategy is a complicated
//                               procedure. Making an effective plan and making an
//                               informed choice about the best media option and
//                               time slots at the most affordable advertising
//                               rates frequently requires a paid service
//                               membership. We understand this can be difficult
//                               for first-time or new advertisers; hence, The
//                               Media Ant is there to take care of everything,
//                               from getting advertising data to negotiating
//                               advertising rates. You can trust The Media Ant
//                               with end-to-end planning and execution of your ad
//                               campaigns. To get the best advertising rates and
//                               place your advertisement, you have to follow these
//                               simple steps: Select the media option on the
//                               website. You could see thousands of advertising
//                               options on each media option. You can filter the
//                               platform of your choice by selecting
//                               categoryoptions based on genre, advertising
//                               option, languages, location,network or type etc.
//                               You can also sort the advertising rates for
//                               different options based on top search, category,
//                               and language or choose from a library of sample
//                               ads. Once you select a particular card, you can
//                               click on it to find all the advertising options
//                               within the card and the advertising rates for the
//                               same. Select the advertising option and the
//                               advertising rate suitable for you. After that,
//                               click the submit button and request an express
//                               quote.
//                             </Typography>
//                           </AccordionDetails>
//                         </Accordion>
//                         {/* 6 */}
//                         <Accordion
//                           expanded={expanded === "panel6"}
//                           onChange={handleChange3("panel6")}
//                         >
//                           <AccordionSummary
//                             expandIcon={<ExpandMoreIcon />}
//                             aria-controls="panel2bh-content"
//                             id="panel2bh-header"
//                           >
//                             <Typography
//                               sx={{
//                                 color: "black",
//                                 fontSize:
//                                   expanded === "panel6" ? "18px" : "14px",
//                                 fontWeight:
//                                   expanded === "panel6" ? "600" : "500",
//                                 fontFamily: "Poppins, sans-serif",
//                               }}
//                             >
//                               Best Advertising Agency in India
//                             </Typography>
//                           </AccordionSummary>
//                           <AccordionDetails>
//                             <Typography
//                               sx={{
//                                 fontFamily: "Poppins, sans-serif",
//                                 fontSize: "12px",
//                                 fontWeight: "500",
//                               }}
//                             >
//                               The Media Ant is a 10-year-old company in the
//                               AdTech space that aims to disrupt the traditional
//                               process of executing ad campaigns through a
//                               physical media agency and replace it with a
//                               self-serve advertising platform. The platform
//                               should work equally well for both online and
//                               offline media. The Media Ant will empower any
//                               advertiser, irrespective of their budget and level
//                               of marketing understanding, to go ahead and launch
//                               a campaign. It is the winner of various startup
//                               awards and is used by more than a million users
//                               yearly.
//                             </Typography>
//                           </AccordionDetails>
//                         </Accordion>
//                         {/* 7 */}
//                         <Accordion
//                           expanded={expanded === "panel7"}
//                           onChange={handleChange3("panel7")}
//                         >
//                           <AccordionSummary
//                             expandIcon={<ExpandMoreIcon />}
//                             aria-controls="panel2bh-content"
//                             id="panel2bh-header"
//                           >
//                             <Typography
//                               sx={{
//                                 color: "black",
//                                 fontSize:
//                                   expanded === "panel7" ? "18px" : "14px",
//                                 fontWeight:
//                                   expanded === "panel7" ? "600" : "500",
//                                 fontFamily: "Poppins, sans-serif",
//                               }}
//                             >
//                               Magazine Advertising Agency
//                             </Typography>
//                           </AccordionSummary>
//                           <AccordionDetails>
//                             <Typography
//                               sx={{
//                                 fontFamily: "Poppins, sans-serif",
//                                 fontSize: "12px",
//                                 fontWeight: "500",
//                               }}
//                             >
//                               The Media Ant, one of the best advertising
//                               agencies, also specializes in developing and
//                               carrying out magazine advertising campaigns for
//                               various brands. The Media Ant collaborates with
//                               clients to build a plan that suits the brand's
//                               objectives and target market, which can help
//                               brands produce magazine ads in a vast selection of
//                               periodicals in many different areas, such as
//                               lifestyle, business, fashion, sports, and more.
//                             </Typography>
//                           </AccordionDetails>
//                         </Accordion>
//                         {/* 8 */}
//                         <Accordion
//                           expanded={expanded === "panel8"}
//                           onChange={handleChange3("panel8")}
//                         >
//                           <AccordionSummary
//                             expandIcon={<ExpandMoreIcon />}
//                             aria-controls="panel2bh-content"
//                             id="panel2bh-header"
//                           >
//                             <Typography
//                               sx={{
//                                 color: "black",
//                                 fontSize:
//                                   expanded === "panel8" ? "18px" : "14px",
//                                 fontWeight:
//                                   expanded === "panel8" ? "600" : "500",
//                                 fontFamily: "Poppins, sans-serif",
//                               }}
//                             >
//                               Television Advertising Agency
//                             </Typography>
//                           </AccordionSummary>
//                           <AccordionDetails>
//                             <Typography
//                               sx={{
//                                 fontFamily: "Poppins, sans-serif",
//                                 fontSize: "12px",
//                                 fontWeight: "500",
//                               }}
//                             >
//                               The Media Ant is the one-stop destination for all
//                               your television advertising needs. The Media Ant
//                               has a broad network of publishers, advertisers,
//                               and media sources, allowing businesses to reach a
//                               large audience. Additionally, the company has an
//                               experienced staff of professionals who can help
//                               you plan your television advertising campaign and
//                               buy the media suitable for your television
//                               advertising campaign.
//                             </Typography>
//                           </AccordionDetails>
//                         </Accordion>
//                       </Grid>
//                     </Grid>
//                   </Box>
//                 </Box>
//               </Grid>

//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={0.5}
//                 lg={0.5}
//                 className={classes.sideGridBgColor}
//               ></Grid>
//             </Grid>

//             {/* What about outdoor */}
//             <Whatoutdoor />
//           </>
//         )}
//       </Box>
//     </>
//   );
// };

// export default Unipole;

import React, { useState, useEffect } from "react";

// MUI
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
} from "../../../DesignData/MaterialUi/material-ui";

// styles
import {
  titleAndDescpAlignemnt,
  MainMargins,
  FaqMainTitle,
  FaqDescription,
  unipoleBannerMainTitle,
  UnipoleBannerDescription,
  SearchWhiteBox,
  SearchBarbutton,
  searchBarButtonText,
  SearchWhiteBoxForMobile,
  SearchBarbuttonMobile,
} from "../../Styles/Styles";

// CSS
import "./Unipole.css";

// REACT-HELMET
import { Helmet } from "react-helmet";

import Cards from "../../Card/Cards";

// REACT-ROUTER_DOM
import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

// Accordian
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// css
import "./Unipole.css";

import {
  unipoleBanner,
  blackRightArrow,
} from "../../../DesignData/Images/Images";
import Whatoutdoor from "../../Category/Outdoor/OutdoorComponents/WhatOutdoor/Whatoutdoor";

const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${unipoleBanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // height: { xs: "500px", sm: "500px", md: "400px", lg: "600px" },
    height: "400px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sideGridBgColor: {
    // backgroundColor: "yellow",
  },
  MainGridBgColor: {
    // backgroundColor: "pink",
  },
}));

const Unipole = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Dropdown
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    setLoading(true);

    // Fetch data from the API
    fetch(
      "https://www.januskoncepts.in/janusoohadmin/api/api_product/fetchproduct.php"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  const handleChange3 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
      <Box>
        {/* Loader */}
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "400px",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            {/* Banner for desktop*/}
            <Box
              display={{
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
              }}
            >
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
                  {/* Title and Description */}
                  <Box sx={titleAndDescpAlignemnt}>
                    <Box>
                      <Typography sx={unipoleBannerMainTitle}>
                        UNIPOLE
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={UnipoleBannerDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor
                        <br /> incididunt ut labore et dolore magna aliqua.
                      </Typography>
                    </Box>
                  </Box>
                  {/* Search Bar for desktop */}
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
                    <Box sx={SearchWhiteBox}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: "600px",
                        }}
                      >
                        {/* State */}
                        <Box>
                          <select
                            id="dropdown"
                            value={selectedOption}
                            onChange={handleSelectChange}
                            style={{
                              border: "2px dashed red",
                              width: "210px",
                              marginRight: "5px",
                              height: "42px",
                              borderRadius: "5px",
                            }}
                          >
                            <option value="" style={{ color: "red" }}>
                              State
                            </option>
                            <option value="option1">Outdoor Advertising</option>
                            <option value="option2">Metro Advertising</option>
                            <option value="option3">Airport Branding</option>
                            <option value="option3">Mall Branding</option>
                            <option value="option3">Inflight Branding</option>
                            <option value="option3">Transit Media</option>
                            <option value="option3">All Hoardings</option>
                            <option value="option3">
                              All Hoardings Advertising
                            </option>
                          </select>
                        </Box>

                        {/* City */}
                        <Box>
                          <select
                            id="dropdown"
                            value={selectedOption}
                            onChange={handleSelectChange}
                            style={{
                              border: "2px dashed red",
                              width: "210px",
                              marginRight: "5px",
                              height: "42px",
                              borderRadius: "5px",
                            }}
                          >
                            <option value="" style={{ color: "red" }}>
                              City
                            </option>
                            <option value="option1">Outdoor Advertising</option>
                            <option value="option2">Metro Advertising</option>
                            <option value="option3">Airport Branding</option>
                            <option value="option3">Mall Branding</option>
                            <option value="option3">Inflight Branding</option>
                            <option value="option3">Transit Media</option>
                            <option value="option3">All Hoardings</option>
                            <option value="option3">
                              All Hoardings Advertising
                            </option>
                          </select>
                        </Box>

                        <Box>
                          <Box sx={SearchBarbutton}>
                            <Typography sx={searchBarButtonText}>
                              Submit
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
                  md={0.5}
                  lg={0.5}
                  className={classes.sideGridBgColor}
                ></Grid>
              </Grid>
            </Box>

            {/* banner for mobile */}
            <Box
              sx={{
                display: {
                  md: "none",
                  lg: "none",
                },
              }}
            >
              <Grid container sx={{ backgroundColor: "#D9D9D9" }}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{ overflow: "hidden" }}
                >
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        height: "290px",
                        width: "100%",
                        backgroundColor: "#FF1F2F",
                        // borderRadius: "0 0 50% 50%/0 10 100% 90%",
                        borderRadius: "0 0 50% 50%/0 0 90% 90%",
                        transform: "scaleX(1.7)",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          top: "30%",
                          zIndex: "2",
                          textAlign: "center",
                          position: "absolute",
                          fontSize: "30px",
                          fontWeight: "600",
                          lineHeight: "30px",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        UNIPOLE
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          top: "55%",
                          zIndex: "2",
                          textAlign: "center",
                          position: "absolute",
                          fontSize: "15px",
                          lineHeight: "20px",
                          padding: "0px 10px 0px 10px",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Search Bar for mobile */}
            <Grid container sx={{ backgroundColor: "#D9D9D9" }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                display={{
                  md: "none",
                  lg: "none",
                }}
              >
                <Box sx={SearchWhiteBoxForMobile}>
                  {/* State */}
                  <Box sx={{ padding: "10px" }}>
                    <select
                      id="dropdown"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      style={{
                        border: "2px dashed red",
                        width: "100%",
                        height: "42px",
                        borderRadius: "5px",
                      }}
                    >
                      <option value="" style={{ color: "red" }}>
                        State
                      </option>
                      <option value="option1">Outdoor Advertising</option>
                      <option value="option2">Metro Advertising</option>
                      <option value="option3">Airport Branding</option>
                      <option value="option3">Mall Branding</option>
                      <option value="option3">Inflight Branding</option>
                      <option value="option3">Transit Media</option>
                      <option value="option3">All Hoardings</option>
                      <option value="option3">All Hoardings Advertising</option>
                    </select>
                  </Box>

                  {/* City */}
                  <Box sx={{ padding: "10px" }}>
                    <select
                      id="dropdown"
                      value={selectedOption}
                      onChange={handleSelectChange}
                      style={{
                        border: "2px dashed red",
                        width: "100%",
                        height: "42px",
                        borderRadius: "5px",
                      }}
                    >
                      <option value="" style={{ color: "red" }}>
                        City
                      </option>
                      <option value="option1">Outdoor Advertising</option>
                      <option value="option2">Metro Advertising</option>
                      <option value="option3">Airport Branding</option>
                      <option value="option3">Mall Branding</option>
                      <option value="option3">Inflight Branding</option>
                      <option value="option3">Transit Media</option>
                      <option value="option3">All Hoardings</option>
                      <option value="option3">All Hoardings Advertising</option>
                    </select>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <Box sx={SearchBarbuttonMobile}>
                    <Typography sx={searchBarButtonText}>Submit</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Cards */}
            <Grid container sx={{ backgroundColor: "#D9D9D9" }}>
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
                sx={{
                  marginTop: {
                    xs: "20px",
                    sm: "20px",
                    md: "60px",
                    lg: "60px",
                  },
                  marginBottom: "60px",
                }}
              >
                <Grid
                  container
                  spacing={{
                    xs: 3,
                    sm: 3,
                    md: 6,
                    lg: 6,
                  }}
                >
                  {data &&
                    data
                      .filter((item) => item?.sub_category_name === "Unipole")
                      .slice(0, visibleCount)
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
                                item?.product_url
                                  ? item?.product_url
                                  : item?.address
                              }/`,
                              
                            );
                          }}
                        />
                      ))}
                </Grid>
                <Box
                  sx={{
                    textAlign: "center",
                    marginTop: "40px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "500",
                      cursor: "pointer",
                      textAlign: "center",
                      fontFamily: "Inter, sans-serif",
                    }}
                    onClick={handleViewMore}
                  >
                    View More
                  </Typography>
                  <Box
                    component="img"
                    src={blackRightArrow}
                    sx={{
                      width: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                      height: {
                        xs: "10px",
                        sm: "10px",
                        md: "15px",
                        lg: "15px",
                      },
                    }}
                  />
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

                  {/* Accordian */}
                  <Box sx={{ margin: "40px 10px 0px 10px" }}>
                    <Grid container>
                      <Grid item xs={12} sm={12} md={5.5} lg={5.7}>
                        {/* 1 */}
                        <Accordion
                          expanded={expanded === "panel1"}
                          onChange={handleChange3("panel1")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize:
                                  expanded === "panel1" ? "18px" : "14px",
                                fontWeight:
                                  expanded === "panel1" ? "600" : "500",
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
                              Advertising agencies manage a business's branding
                              and online media buying activities and help
                              companies develop their brands and gain tactical
                              benefits. These agencies step in, refer to the
                              strategic goals outlined by the client, take the
                              creative media, and identify the best ad space
                              based on the media strategy. Advertising companies
                              start with identifying companies' positions, brand
                              architecture, and brand statements and providing
                              the brands with a visual identity and distinct
                              voice. Agencies use various tools and media
                              options to uplift brands and get considerable
                              reach and awareness.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* 2 */}
                        <Accordion
                          expanded={expanded === "panel2"}
                          onChange={handleChange3("panel2")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize:
                                  expanded === "panel2" ? "18px" : "14px",
                                fontWeight:
                                  expanded === "panel2" ? "600" : "500",
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
                              Haystack Marketing Services Pvt. Ltd. operates
                              under the brand name 'The Media Ant' The Media Ant
                              is a media and advertising company launched in
                              2012 to bring accessibility and transparency to
                              the media buying field. Since then, The Media
                              Ant's mission has found resonance with many in the
                              industry and grown more substantial. After ten
                              successful years in the ad industry, INS
                              officially accredited The Media Ant. This event
                              marks the acknowledgement of their credibility,
                              competence, and authenticity in the advertising
                              world.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* 3 */}
                        <Accordion
                          expanded={expanded === "panel3"}
                          onChange={handleChange3("panel3")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize:
                                  expanded === "panel3" ? "18px" : "14px",
                                fontWeight:
                                  expanded === "panel3" ? "600" : "500",
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
                              The Media Ant is a reputable advertising agency in
                              India that provides the best media planning and
                              buying experiences to help businesses achieve
                              strategic advantages and brand growth. As the best
                              media buying agency, we are passionate about
                              bringing out the best in the companies we work
                              with, and we have been entrusted with it over the
                              years. Our work with our clients starts with
                              identifying their position, brand architecture,
                              and brand statement and providing the brands with
                              a visual identity and distinct voice. We are the
                              best advertising agency that uses various tools
                              and media options. Our team shares a creative edge
                              that will enable us to uplift your brand and get
                              considerable reach and awareness.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* 4 */}
                        <Accordion
                          expanded={expanded === "panel4"}
                          onChange={handleChange3("panel4")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize:
                                  expanded === "panel4" ? "18px" : "14px",
                                fontWeight:
                                  expanded === "panel4" ? "600" : "500",
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
                              The Media Ant is a media planning and media buying
                              agency that nurtures and helps businesses achieve
                              strategic advantages and promote their brands and
                              services. As the best media buying agency, The
                              Media Ant experts are passionate about bringing
                              the best to the companies they work with and have
                              been entrusted with that responsibility over the
                              years. The Media Ant works with clients by
                              identifying their position, brand architecture,
                              and brand statement and providing them with a
                              visual identity and distinct voice. As a media
                              buying agency, The Media Ant lets their brands and
                              clients create a meaningful and better experience
                              in the industry and with their target audience.
                              For the past ten years, The Media Ant has created
                              digital experiences for the brand and clients by
                              leveraging their ad campaigns and digital
                              marketing to increase consumer engagement.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                      <Grid item xs={12} sm={12} md={0.8} lg={0.6}></Grid>
                      <Grid item xs={12} sm={12} md={5.5} lg={5.7}>
                        {/* 5 */}
                        <Accordion
                          expanded={expanded === "panel5"}
                          onChange={handleChange3("panel5")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize:
                                  expanded === "panel5" ? "18px" : "14px",
                                fontWeight:
                                  expanded === "panel5" ? "600" : "500",
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
                              Planning an advertising strategy is a complicated
                              procedure. Making an effective plan and making an
                              informed choice about the best media option and
                              time slots at the most affordable advertising
                              rates frequently requires a paid service
                              membership. We understand this can be difficult
                              for first-time or new advertisers; hence, The
                              Media Ant is there to take care of everything,
                              from getting advertising data to negotiating
                              advertising rates. You can trust The Media Ant
                              with end-to-end planning and execution of your ad
                              campaigns. To get the best advertising rates and
                              place your advertisement, you have to follow these
                              simple steps: Select the media option on the
                              website. You could see thousands of advertising
                              options on each media option. You can filter the
                              platform of your choice by selecting
                              categoryoptions based on genre, advertising
                              option, languages, location,network or type etc.
                              You can also sort the advertising rates for
                              different options based on top search, category,
                              and language or choose from a library of sample
                              ads. Once you select a particular card, you can
                              click on it to find all the advertising options
                              within the card and the advertising rates for the
                              same. Select the advertising option and the
                              advertising rate suitable for you. After that,
                              click the submit button and request an express
                              quote.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* 6 */}
                        <Accordion
                          expanded={expanded === "panel6"}
                          onChange={handleChange3("panel6")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize:
                                  expanded === "panel6" ? "18px" : "14px",
                                fontWeight:
                                  expanded === "panel6" ? "600" : "500",
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
                              The Media Ant is a 10-year-old company in the
                              AdTech space that aims to disrupt the traditional
                              process of executing ad campaigns through a
                              physical media agency and replace it with a
                              self-serve advertising platform. The platform
                              should work equally well for both online and
                              offline media. The Media Ant will empower any
                              advertiser, irrespective of their budget and level
                              of marketing understanding, to go ahead and launch
                              a campaign. It is the winner of various startup
                              awards and is used by more than a million users
                              yearly.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* 7 */}
                        <Accordion
                          expanded={expanded === "panel7"}
                          onChange={handleChange3("panel7")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize:
                                  expanded === "panel7" ? "18px" : "14px",
                                fontWeight:
                                  expanded === "panel7" ? "600" : "500",
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
                              The Media Ant, one of the best advertising
                              agencies, also specializes in developing and
                              carrying out magazine advertising campaigns for
                              various brands. The Media Ant collaborates with
                              clients to build a plan that suits the brand's
                              objectives and target market, which can help
                              brands produce magazine ads in a vast selection of
                              periodicals in many different areas, such as
                              lifestyle, business, fashion, sports, and more.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                        {/* 8 */}
                        <Accordion
                          expanded={expanded === "panel8"}
                          onChange={handleChange3("panel8")}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize:
                                  expanded === "panel8" ? "18px" : "14px",
                                fontWeight:
                                  expanded === "panel8" ? "600" : "500",
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
                              The Media Ant is the one-stop destination for all
                              your television advertising needs. The Media Ant
                              has a broad network of publishers, advertisers,
                              and media sources, allowing businesses to reach a
                              large audience. Additionally, the company has an
                              experienced staff of professionals who can help
                              you plan your television advertising campaign and
                              buy the media suitable for your television
                              advertising campaign.
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      </Grid>
                    </Grid>
                  </Box>
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

            {/* What about outdoor */}
            <Whatoutdoor />
          </>
        )}
      </Box>
    </>
  );
};

export default Unipole;
