// import React, { useEffect, useState } from "react";

// // MUI
// import {
//   Grid,
//   Button,
//   Typography,
//   Box,
//   InputLabel,
//   MenuItem,
//   FormControl,
//   Select,
// } from "@mui/material";

// // CSS
// import "./Metro.css";

// // CARD
// import Cards from "../../Card/Cards";

// // Accordian
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// // REACT-HELMET
// import { Helmet } from "react-helmet";

// // VIDEO
// import videotwo from "../../../assets/video/VideoWithoutText.mp4";

// import Popupcomponent from "../../PopUp/Popupcomponent";

// // REDUX
// import { useSelector } from "react-redux";
// import {
//   getProducts,
//   getProductsByState,
//   getStateAndCity,
// } from "../../../redux/actions/Outdoor";

// // REACT-ROUTER_DOM
// import { useNavigate } from "react-router-dom";

// import samOutdoor from "../../../assets/images/Categories_Images/metro_branding2.jpeg";

// // BOOTSTRAP
// import "bootstrap/dist/css/bootstrap.min.css";
// import store from "../../../redux/store";
// import types from "../../../redux/types";

// const { dispatch } = store;

// export default function Inflightbranding() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleChange3 = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   // const [selectedState, setSelectedState] = React.useState(null);
//   const [type, setType] = React.useState("");
//   const [STATE, setSTATE] = useState(null);
//   const [CITY, setCITY] = useState(null);

//   const [ProductId, setProductId] = useState("");

//   const { products, allstates, selectedState, AllStateCities, selectedCity } =
//     useSelector((state) => state.OutdoorReducer);

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

//   // POP-UP
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Your Metro Advertising Experts - JANUSOOH</title>
//         <meta
//           name="description"
//           content={
//             "JANUSOOH : Unlock the potential of metro advertising with our expert team. Reach diverse audiences effectively and maximize your brand's impact."
//           }
//         />
//       </Helmet>
//       {/* VIDEO for Desktop */}
//       <Box
//         sx={{
//           marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" },
//         }}
//       >
//         {/* VIDEO */}
//         <Grid container>
//           <Grid item xs={12} sm={12} md={12} lg={12}>
//             <Box sx={{ position: "relative" }}>
//               {/* Video with gradient overlay */}
//               <Box
//                 sx={{
//                   width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
//                   height: { xs: "40vh", sm: "40vh", md: "70vh", lg: "70vh" },
//                   position: "relative", // Make this box relative for absolute positioning of the gradient
//                 }}
//               >
//                 {/* Video Element */}
//                 <video
//                   src={videotwo}
//                   autoPlay
//                   loop
//                   muted
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />

//                 {/* Gradient Overlay */}
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     background:
//                       "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
//                     zIndex: 1, // Ensures gradient is above the video
//                   }}
//                 />
//               </Box>

//               {/* Text */}
//               <Grid
//                 container
//                 sx={{
//                   position: "absolute",
//                   bottom: {
//                     xs: "20%",
//                     sm: "20%",
//                     md: "30%",
//                     lg: "30%",
//                   },
//                   zIndex: 2, // Ensures text is above the gradient
//                 }}
//               >
//                 <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>

//                 <Grid item xs={12} sm={12} md={11} lg={11}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     {/* Desktop Title */}
//                     <Box
//                       sx={{
//                         display: {
//                           xs: "none",
//                           sm: "none",
//                           md: "block",
//                           lg: "block",
//                         },
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           display: "flex",
//                           fontSize: "50px",
//                           fontWeight: "50px",
//                           fontFamily: "Inter, sans-serif",
//                           color: "#fff",
//                           textAlign: "center",
//                         }}
//                       >
//                         Metro&nbsp;
//                         <span style={{ color: "#FF1F2F" }}>
//                           Branding Agency
//                         </span>
//                       </Typography>
//                     </Box>

//                     {/* Mobile Title */}
//                     <Box
//                       sx={{
//                         display: {
//                           md: "none",
//                           lg: "none",
//                         },
//                         height: "100%",
//                         marginTop: "20px",
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           fontSize: "30px",
//                           fontWeight: "500",
//                           fontFamily: "Inter, sans-serif",
//                           color: "#fff",
//                           textAlign: "center",
//                           lineHeight: "35px",
//                         }}
//                       >
//                         Metro <br />
//                         <span
//                           style={{
//                             color: "#FF1F2F",
//                             fontSize: "30px",
//                             fontWeight: "600",
//                           }}
//                         >
//                           Branding Agency
//                         </span>
//                       </Typography>
//                     </Box>

//                     {/* Desktop Description */}
//                     <Box
//                       sx={{
//                         marginTop: {
//                           xs: "10px",
//                           sm: "10px",
//                           md: "0px",
//                           lg: "0px",
//                         },
//                         display: {
//                           xs: "none",
//                           sm: "none",
//                           md: "block",
//                           lg: "block",
//                         },
//                         padding:"0px 150px 0px 150px"

//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           fontSize: "17px",
//                           fontWeight: "500",
//                           fontFamily: "Inter, sans-serif",
//                           color: "#fff",
//                           textAlign:"center",
//                           lineHeight:"25px"
//                         }}
//                       >
//                         Elevate your brand recall and broaden your reach with
//                         strategically placed hoardings. Positioned in
//                         high-traffic zones with substantial footfall, these
//                         promotional materials guarantee significant <br/>visibility
//                         among bystanders, pedestrians, and travelers.
//                       </Typography>
//                     </Box>

//                     {/* Mobile Desciption */}
//                     <Box
//                       sx={{
//                         marginTop:"15px",
//                         display: {
//                           md: "none",
//                           lg: "none",
//                         },
//                         padding:"0px 20px 0px 20px"
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           fontSize: "15px",
//                           fontWeight: "500",
//                           fontFamily: "Inter, sans-serif",
//                           color: "#fff",
//                           marginTop: "-5px",
//                           lineHeight:"20px",
//                           textAlign:"center"
//                         }}
//                       >
//                         Elevate your brand recall and broaden your reach with
//                         strategically placed hoardings. Positioned in
//                         high-traffic zones with substantial footfall, these
//                         promotional materials guarantee significant visibility
//                         among bystanders, pedestrians, and travelers.
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
//               </Grid>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Products */}
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "red" }}
//         ></Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={10.6}
//           lg={10.6}
//           // sx={{ backgroundColor: "yellow" }}
//         >
//           <Grid container spacing={3}>
//             {products &&
//               products
//                 .filter((item) => item?.category_name === "Metro Branding")
//                 .reverse()
//                 .map((item) => (
//                   <Cards
//                     key={item.id}
//                     data={item}
//                     onClick={() => {
//                       navigate(
//                         `/${
//                           item?.urlcat?.toLowerCase()
//                             ? item?.urlcat?.toLowerCase()
//                             : item?.urlcat
//                         }/${item?.url ? item?.url : item?.address}/`,
//                         { state: { id: item._id } }
//                       );
//                       console.log("hello world");
//                     }}
//                   />
//                 ))}
//           </Grid>
//           {isOpen && (
//             <Popupcomponent ProductId={ProductId} handleClose={togglePopup} />
//           )}
//           {!products ||
//             (products.filter((item) => item?.category_name === "Inflight Branding")
//               .length === 0 && (
//               <Box>
//                 <Grid
//                   container
//                   sx={{
//                     marginTop: {
//                       xs: "50px",
//                       sm: "50px",
//                       md: "70px",
//                       lg: "70px",
//                     },
//                     marginBottom: {
//                       xs: "10px",
//                       sm: "10px",
//                       md: "50px",
//                       lg: "50px",
//                     },
//                   }}
//                 >
//                   {/* IMAGE */}
//                   <Grid item xs={12} sm={12} md={6} lg={6}>
//                     <Box
//                       sx={{
//                         paddingLeft: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "0px",
//                           lg: "0px",
//                         },
//                         paddingRight: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "0px",
//                           lg: "0px",
//                         },
//                       }}
//                     >
//                       <Box
//                         component="img"
//                         src={samOutdoor}
//                         sx={{
//                           width: {
//                             xs: "100%",
//                             sm: "100%",
//                             md: "530px",
//                             lg: "530px",
//                           },
//                           height: {
//                             xs: "100%",
//                             sm: "100%",
//                             md: "400px",
//                             lg: "400px",
//                           },
//                           borderRadius: {
//                             xs: "10px",
//                             sm: "10px",
//                             md: "10px",
//                             lg: "10px",
//                           },
//                           border: "1px solid red",
//                         }}
//                       />
//                     </Box>
//                   </Grid>

//                   {/* Content */}
//                   <Grid
//                     item
//                     xs={12}
//                     sm={12}
//                     md={6}
//                     lg={6}
//                     sx={{
//                       // backgroundColor: "yellow",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Box>
//                       {/* TITLE */}
//                       <Box
//                         sx={{
//                           marginTop: {
//                             xs: "15px",
//                             sm: "15px",
//                             md: "0px",
//                             lg: "0px",
//                           },
//                           paddingLeft: {
//                             xs: "20px",
//                             sm: "20px",
//                             md: "0px",
//                             lg: "0px",
//                           },
//                           paddingRight: {
//                             xs: "20px",
//                             sm: "20px",
//                             md: "0px",
//                             lg: "0px",
//                           },
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: {
//                               xs: "26px",
//                               sm: "26px",
//                               md: "40px",
//                               lg: "40px",
//                             },
//                             fontFamily: "Inter, sans-serif",
//                             fontWeight: {
//                               xs: "600",
//                               sm: "600",
//                               md: "500",
//                               lg: "500",
//                             },
//                             // textAlign:"center",
//                             display: "flex",
//                             alignContent: {
//                               xs: "center",
//                               sm: "center",
//                               md: "flex-end",
//                               lg: "flex-end",
//                             },
//                             alignItems: {
//                               xs: "center",
//                               sm: "center",
//                               md: "flex-start",
//                               lg: "flex-start",
//                             },
//                             justifyContent: {
//                               xs: "flex-start",
//                               sm: "flex-start",
//                               md: "flex-start",
//                               lg: "flex-start",
//                             },
//                             lineHeight: {
//                               xs: "30px",
//                               sm: "30px",
//                               md: "34px",
//                               lg: "34px",
//                             },
//                             // backgroundColor: "red",
//                           }}
//                         >
//                           Metro Branding Agency
//                         </Typography>
//                       </Box>
//                       {/* DESCRIPTION */}
//                       <Box
//                         sx={{
//                           marginTop: {
//                             xs: "15px",
//                             sm: "15px",
//                             md: "20px",
//                             lg: "20px",
//                           },
//                           paddingLeft: {
//                             xs: "20px",
//                             sm: "20px",
//                             md: "0px",
//                             lg: "0px",
//                           },
//                           paddingRight: {
//                             xs: "20px",
//                             sm: "20px",
//                             md: "0px",
//                             lg: "0px",
//                           },
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: {
//                               xs: "18px",
//                               sm: "18px",
//                               md: "17px",
//                               lg: "17px",
//                             },
//                             fontFamily: "Inter, sans-serif",
//                             fontWeight: "500",
//                             display: "flex",
//                             // textAlign: "justify",
//                             alignContent: {
//                               xs: "center",
//                               sm: "center",
//                               md: "flex-end",
//                               lg: "flex-end",
//                             },
//                             alignItems: {
//                               xs: "center",
//                               sm: "center",
//                               md: "flex-start",
//                               lg: "flex-start",
//                             },
//                             justifyContent: {
//                               xs: "center",
//                               sm: "center",
//                               md: "flex-start",
//                               lg: "flex-start",
//                             },
//                             color: "rgb(55, 52, 53)",
//                             // backgroundColor: "green",
//                           }}
//                         >
//                           {/* {DATA?.desc} */}
//                           Elevate your brand recall and broaden your reach with
//                           strategically placed hoardings . Positioned in
//                           high-traffic zones with substantial footfall, these
//                           promotional materials guarantee significant visibility
//                           among bystanders, pedestrians, and travelers
//                         </Typography>
//                       </Box>
//                       {/* BUTTON */}
//                       <Box
//                         sx={{
//                           display: "flex",
//                           justifyContent: {
//                             xs: "center",
//                             sm: "center",
//                             md: "flex-start",
//                             lg: "flex-start",
//                           },
//                           alignItems: "center",
//                           // backgroundColor: "orange",
//                           marginTop: {
//                             xs: "10px",
//                             sm: "10px",
//                             md: "20px",
//                             lg: "20px",
//                           },
//                           marginBottom: {
//                             xs: "10px",
//                             sm: "10px",
//                             md: "20px",
//                             lg: "20px",
//                           },
//                         }}
//                       >
//                         <Box
//                           sx={{
//                             display: "flex",
//                             justifyContent: "center",
//                             width: {
//                               xs: "120px",
//                               sm: "120px",
//                               md: "115px",
//                               lg: "115px",
//                             },
//                             height: {
//                               xs: "40px",
//                               sm: "40px",
//                               md: "40px",
//                               lg: "40px",
//                             },
//                             backgroundColor: "#C02222",
//                             borderRadius: "20px",
//                             pointer: "cursor",
//                           }}
//                           onClick={togglePopup}
//                         >
//                           <Typography
//                             sx={{
//                               fontSize: {
//                                 xs: "15px",
//                                 sm: "15px",
//                                 md: "15px",
//                                 lg: "15px",
//                               },
//                               fontFamily: "Inter, sans-serif",
//                               fontWeight: "600",
//                               color: "white",
//                               display: "flex",
//                               justifyContent: "center",
//                               alignItems: "center",
//                               cursor: "pointer",
//                             }}
//                           >
//                             ENQUIRY
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </Box>
//                   </Grid>
//                 </Grid>
//               </Box>
//             ))}
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "green" }}
//         ></Grid>
//       </Grid>

//       {/* blackbox */}
//       <Grid
//         container
//         sx={{
//           marginTop: {
//             xs: "10px",
//             sm: "10px",
//             md: "0px",
//             lg: "0px",
//           },
//           marginBottom: {
//             xs: "30px",
//             sm: "30px",
//             md: "60px",
//             lg: "60px",
//           },
//         }}
//       >
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "red" }}
//         ></Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={10.6}
//           lg={10.6}
//           sx={
//             {
//               // backgroundColor: "green",
//             }
//           }
//         >
//           <Box
//             sx={{
//               height: "100%",
//               width: "100%",
//               backgroundColor: "#000",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//             }}
//           >
//             <Box
//               sx={{
//                 marginTop: {
//                   xs: "20px",
//                   sm: "20px",
//                   md: "30px",
//                   lg: "30px",
//                 },
//               }}
//             >
//               <Typography
//                 sx={{
//                   textAlign: "center",
//                   fontSize: {
//                     xs: "25px",
//                     sm: "25px",
//                     md: "33px",
//                     lg: "33px",
//                   },
//                   fontWeight: {
//                     xs: "400",
//                     sm: "400",
//                     md: "600",
//                     lg: "600",
//                   },
//                   fontFamily: "Inter, sans-serif",
//                   color: "white",
//                 }}
//               >
//                 Metro Advertising
//               </Typography>
//             </Box>

//             <Box
//               sx={{
//                 marginTop: {
//                   xs: "10px",
//                   sm: "10px",
//                   md: "5px",
//                   lg: "5px",
//                 },
//                 marginBottom: {
//                   xs: "20px",
//                   sm: "20px",
//                   md: "30px",
//                   lg: "30px",
//                 },
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: {
//                     xs: "16px",
//                     sm: "16px",
//                     md: "16px",
//                     lg: "16px",
//                   },
//                   fontWeight: {
//                     xs: "500",
//                     sm: "500",
//                     md: "500",
//                     lg: "500",
//                   },
//                   paddingLeft: {
//                     xs: "20px",
//                     sm: "20px",
//                     md: "50px",
//                     lg: "50px",
//                   },
//                   paddingRight: {
//                     xs: "20px",
//                     sm: "20px",
//                     md: "50px",
//                     lg: "50px",
//                   },
//                   fontFamily: "Inter, sans-serif",
//                   color: "#fff",
//                   textAlign: {
//                     lg: "center",
//                     md: "center",
//                     sm: "justify",
//                     xs: "justify",
//                   },
//                   lineHeight: "23px",
//                   justifyContent: "center",
//                   textAlign: {
//                     lg: "center",
//                     md: "center",
//                     // sm: "justify",
//                     // xs: "justify",
//                   },
//                 }}
//               >
//                 Metro advertising is a powerful tool for reaching urban
//                 populations, making it an effective component of a comprehensive
//                 marketing strategy. Its ability to deliver high-frequency,
//                 high-reach exposure makes it particularly valuable for brands
//                 looking to increase visibility and engagement. This is where the
//                 top metro advertising agency comes into play. Janus Alive
//                 delivers the utmost professionalism and the best creative
//                 strategy for metro advertising and its costs. Reach out to us
//                 for your brand’s promotions and outdoor advertisements.
//               </Typography>
//             </Box>
//           </Box>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "red" }}
//         ></Grid>
//       </Grid>
//       {/* Accordian */}

//       {/* For Desktop */}
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={12}
//           lg={12}
//           sx={{ backgroundColor: "#F5F5F5" }}
//           display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
//         >
//           <Box
//             sx={{
//               // backgroundColor: "orange",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//               alignItems: "center",
//               margin: "50px 0px 20px 0px",
//             }}
//           >
//             <Box sx={{}}>
//               <Typography
//                 sx={{
//                   fontSize: "40px",
//                   fontWeight: "600",
//                   fontFamily: "Inter, sans-serif",
//                 }}
//               >
//                 FAQ’s
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "17px",
//                   fontWeight: "500",
//                   fontFamily: "Inter, sans-serif",
//                   textAlign: "center",
//                 }}
//               >
//                 Elevate your brand recall and broaden your reach with
//                 strategically
//                 <br />
//                 range of outdoor advertising services
//               </Typography>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>

//       <Grid
//         container
//         sx={{
//           backgroundColor: "#F5F5F5",
//           // marginBottom: "40px"
//         }}
//       >
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "orange" }}
//           display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
//         ></Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={5.1}
//           lg={5.2}
//           // sx={{ backgroundColor: "blue",}}
//           display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
//         >
//           <Box sx={{ marginBottom: "60px" }}>
//             {/* 1 */}
//             <Accordion
//               expanded={expanded === "panel1"}
//               onChange={handleChange3("panel1")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel1bh-content"
//                 id="panel1bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel1" ? "18px" : "14px",
//                     fontWeight: expanded === "panel1" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   What is an Advertising Agency?
//                 </Typography>
//               </AccordionSummary>

//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   Advertising agencies manage a business's branding and online
//                   media buying activities and help companies develop their
//                   brands and gain tactical benefits. These agencies step in,
//                   refer to the strategic goals outlined by the client, take the
//                   creative media, and identify the best ad space based on the
//                   media strategy. Advertising companies start with identifying
//                   companies' positions, brand architecture, and brand statements
//                   and providing the brands with a visual identity and distinct
//                   voice. Agencies use various tools and media options to uplift
//                   brands and get considerable reach and awareness.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//             {/* 2 */}
//             <Accordion
//               expanded={expanded === "panel2"}
//               onChange={handleChange3("panel2")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel2bh-content"
//                 id="panel2bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel2" ? "18px" : "14px",
//                     fontWeight: expanded === "panel2" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   What is The Media Ant?
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   Haystack Marketing Services Pvt. Ltd. operates under the brand
//                   name 'The Media Ant' The Media Ant is a media and advertising
//                   company launched in 2012 to bring accessibility and
//                   transparency to the media buying field. Since then, The Media
//                   Ant's mission has found resonance with many in the industry
//                   and grown more substantial. After ten successful years in the
//                   ad industry, INS officially accredited The Media Ant. This
//                   event marks the acknowledgement of their credibility,
//                   competence, and authenticity in the advertising world.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//             {/* 3 */}
//             <Accordion
//               expanded={expanded === "panel3"}
//               onChange={handleChange3("panel3")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel2bh-content"
//                 id="panel2bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel3" ? "18px" : "14px",
//                     fontWeight: expanded === "panel3" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   What is a Media Buying Agency?
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   The Media Ant is a reputable advertising agency in India that
//                   provides the best media planning and buying experiences to
//                   help businesses achieve strategic advantages and brand growth.
//                   As the best media buying agency, we are passionate about
//                   bringing out the best in the companies we work with, and we
//                   have been entrusted with it over the years. Our work with our
//                   clients starts with identifying their position, brand
//                   architecture, and brand statement and providing the brands
//                   with a visual identity and distinct voice. We are the best
//                   advertising agency that uses various tools and media options.
//                   Our team shares a creative edge that will enable us to uplift
//                   your brand and get considerable reach and awareness.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//             {/* 4 */}
//             <Accordion
//               expanded={expanded === "panel4"}
//               onChange={handleChange3("panel4")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel2bh-content"
//                 id="panel2bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel4" ? "18px" : "14px",
//                     fontWeight: expanded === "panel4" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   Why do Media Buying with The Media Ant?
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   The Media Ant is a media planning and media buying agency that
//                   nurtures and helps businesses achieve strategic advantages and
//                   promote their brands and services. As the best media buying
//                   agency, The Media Ant experts are passionate about bringing
//                   the best to the companies they work with and have been
//                   entrusted with that responsibility over the years. The Media
//                   Ant works with clients by identifying their position, brand
//                   architecture, and brand statement and providing them with a
//                   visual identity and distinct voice. As a media buying agency,
//                   The Media Ant lets their brands and clients create a
//                   meaningful and better experience in the industry and with
//                   their target audience. For the past ten years, The Media Ant
//                   has created digital experiences for the brand and clients by
//                   leveraging their ad campaigns and digital marketing to
//                   increase consumer engagement.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//           </Box>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.4}
//           lg={0.2}
//           display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
//         ></Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={5.1}
//           lg={5.2}
//           // sx={{ backgroundColor: "green" }}
//           display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
//         >
//           <Box sx={{ marginBottom: "60px" }}>
//             {/* 5 */}
//             <Accordion
//               expanded={expanded === "panel5"}
//               onChange={handleChange3("panel5")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel1bh-content"
//                 id="panel1bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel5" ? "18px" : "14px",
//                     fontWeight: expanded === "panel5" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   How do you book an ad on The Media Ant?
//                 </Typography>
//               </AccordionSummary>

//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   Planning an advertising strategy is a complicated procedure.
//                   Making an effective plan and making an informed choice about
//                   the best media option and time slots at the most affordable
//                   advertising rates frequently requires a paid service
//                   membership. We understand this can be difficult for first-time
//                   or new advertisers; hence, The Media Ant is there to take care
//                   of everything, from getting advertising data to negotiating
//                   advertising rates. You can trust The Media Ant with end-to-end
//                   planning and execution of your ad campaigns. To get the best
//                   advertising rates and place your advertisement, you have to
//                   follow these simple steps: Select the media option on the
//                   website. You could see thousands of advertising options on
//                   each media option. You can filter the platform of your choice
//                   by selecting categoryoptions based on genre, advertising
//                   option, languages, location,network or type etc. You can also
//                   sort the advertising rates for different options based on top
//                   search, category_name, and language or choose from a library of
//                   sample ads. Once you select a particular card, you can click
//                   on it to find all the advertising options within the card and
//                   the advertising rates for the same. Select the advertising
//                   option and the advertising rate suitable for you. After that,
//                   click the submit button and request an express quote.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//             {/* 6 */}
//             <Accordion
//               expanded={expanded === "panel6"}
//               onChange={handleChange3("panel6")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel2bh-content"
//                 id="panel2bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel6" ? "18px" : "14px",
//                     fontWeight: expanded === "panel6" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   Best Advertising Agency in India
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   The Media Ant is a 10-year-old company in the AdTech space
//                   that aims to disrupt the traditional process of executing ad
//                   campaigns through a physical media agency and replace it with
//                   a self-serve advertising platform. The platform should work
//                   equally well for both online and offline media. The Media Ant
//                   will empower any advertiser, irrespective of their budget and
//                   level of marketing understanding, to go ahead and launch a
//                   campaign. It is the winner of various startup awards and is
//                   used by more than a million users yearly.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//             {/* 7 */}
//             <Accordion
//               expanded={expanded === "panel7"}
//               onChange={handleChange3("panel7")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel2bh-content"
//                 id="panel2bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel7" ? "18px" : "14px",
//                     fontWeight: expanded === "panel7" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   Magazine Advertising Agency
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   The Media Ant, one of the best advertising agencies, also
//                   specializes in developing and carrying out magazine
//                   advertising campaigns for various brands. The Media Ant
//                   collaborates with clients to build a plan that suits the
//                   brand's objectives and target market, which can help brands
//                   produce magazine ads in a vast selection of periodicals in
//                   many different areas, such as lifestyle, business, fashion,
//                   sports, and more.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//             {/* 8 */}
//             <Accordion
//               expanded={expanded === "panel8"}
//               onChange={handleChange3("panel8")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel2bh-content"
//                 id="panel2bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel8" ? "18px" : "14px",
//                     fontWeight: expanded === "panel8" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   Television Advertising Agency
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   The Media Ant is the one-stop destination for all your
//                   television advertising needs. The Media Ant has a broad
//                   network of publishers, advertisers, and media sources,
//                   allowing businesses to reach a large audience. Additionally,
//                   the company has an experienced staff of professionals who can
//                   help you plan your television advertising campaign and buy the
//                   media suitable for your television advertising campaign.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//           </Box>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "orange" }}
//           display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
//         ></Grid>
//       </Grid>

//       {/* For Mobile */}
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={12}
//           lg={12}
//           sx={{ backgroundColor: "#F5F5F5" }}
//           display={{ md: "none", lg: "none" }}
//         >
//           <Box
//             sx={{
//               // backgroundColor: "orange",
//               display: "flex",
//               justifyContent: "center",
//               flexDirection: "column",
//               alignItems: "center",
//               margin: "20px 0px 20px 0px",
//             }}
//           >
//             <Box sx={{}}>
//               <Typography
//                 sx={{
//                   fontSize: "40px",
//                   fontWeight: "600",
//                   fontFamily: "Inter, sans-serif",
//                 }}
//               >
//                 FAQ’s
//               </Typography>
//             </Box>
//             <Box>
//               <Typography
//                 sx={{
//                   fontSize: "17px",
//                   fontWeight: "500",
//                   fontFamily: "Inter, sans-serif",
//                   textAlign: "center",
//                 }}
//               >
//                 Elevate your brand recall and broaden your reach with
//                 strategically
//                 <br />
//                 range of outdoor advertising services
//               </Typography>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>

//       <Grid
//         container
//         sx={{
//           backgroundColor: "#F5F5F5",
//           // marginBottom: "40px"
//         }}
//       >
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={12}
//           lg={12}
//           // sx={{ backgroundColor: "blue",}}
//           display={{ md: "none", lg: "none" }}
//         >
//           <Box
//             sx={{
//               marginBottom: { xs: "20px", sm: "20px", md: "60px" },
//               padding: "0px 10px 0px 10px",
//             }}
//           >
//             {/* 1 */}
//             <Accordion
//               expanded={expanded === "panel1"}
//               onChange={handleChange3("panel1")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel1bh-content"
//                 id="panel1bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel1" ? "18px" : "14px",
//                     fontWeight: expanded === "panel1" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   What is an Advertising Agency?
//                 </Typography>
//               </AccordionSummary>

//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   Advertising agencies manage a business's branding and online
//                   media buying activities and help companies develop their
//                   brands and gain tactical benefits. These agencies step in,
//                   refer to the strategic goals outlined by the client, take the
//                   creative media, and identify the best ad space based on the
//                   media strategy. Advertising companies start with identifying
//                   companies' positions, brand architecture, and brand statements
//                   and providing the brands with a visual identity and distinct
//                   voice. Agencies use various tools and media options to uplift
//                   brands and get considerable reach and awareness.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//             {/* 2 */}
//             <Accordion
//               expanded={expanded === "panel2"}
//               onChange={handleChange3("panel2")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel2bh-content"
//                 id="panel2bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel2" ? "18px" : "14px",
//                     fontWeight: expanded === "panel2" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   What is The Media Ant?
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   Haystack Marketing Services Pvt. Ltd. operates under the brand
//                   name 'The Media Ant' The Media Ant is a media and advertising
//                   company launched in 2012 to bring accessibility and
//                   transparency to the media buying field. Since then, The Media
//                   Ant's mission has found resonance with many in the industry
//                   and grown more substantial. After ten successful years in the
//                   ad industry, INS officially accredited The Media Ant. This
//                   event marks the acknowledgement of their credibility,
//                   competence, and authenticity in the advertising world.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//             {/* 3 */}
//             <Accordion
//               expanded={expanded === "panel3"}
//               onChange={handleChange3("panel3")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel2bh-content"
//                 id="panel2bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel3" ? "18px" : "14px",
//                     fontWeight: expanded === "panel3" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   What is a Media Buying Agency?
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   The Media Ant is a reputable advertising agency in India that
//                   provides the best media planning and buying experiences to
//                   help businesses achieve strategic advantages and brand growth.
//                   As the best media buying agency, we are passionate about
//                   bringing out the best in the companies we work with, and we
//                   have been entrusted with it over the years. Our work with our
//                   clients starts with identifying their position, brand
//                   architecture, and brand statement and providing the brands
//                   with a visual identity and distinct voice. We are the best
//                   advertising agency that uses various tools and media options.
//                   Our team shares a creative edge that will enable us to uplift
//                   your brand and get considerable reach and awareness.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//             {/* 4 */}
//             <Accordion
//               expanded={expanded === "panel4"}
//               onChange={handleChange3("panel4")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel2bh-content"
//                 id="panel2bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel4" ? "18px" : "14px",
//                     fontWeight: expanded === "panel4" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   Why do Media Buying with The Media Ant?
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   The Media Ant is a media planning and media buying agency that
//                   nurtures and helps businesses achieve strategic advantages and
//                   promote their brands and services. As the best media buying
//                   agency, The Media Ant experts are passionate about bringing
//                   the best to the companies they work with and have been
//                   entrusted with that responsibility over the years. The Media
//                   Ant works with clients by identifying their position, brand
//                   architecture, and brand statement and providing them with a
//                   visual identity and distinct voice. As a media buying agency,
//                   The Media Ant lets their brands and clients create a
//                   meaningful and better experience in the industry and with
//                   their target audience. For the past ten years, The Media Ant
//                   has created digital experiences for the brand and clients by
//                   leveraging their ad campaigns and digital marketing to
//                   increase consumer engagement.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//             {/* 5 */}
//             <Accordion
//               expanded={expanded === "panel5"}
//               onChange={handleChange3("panel5")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel1bh-content"
//                 id="panel1bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel5" ? "18px" : "14px",
//                     fontWeight: expanded === "panel5" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   How do you book an ad on The Media Ant?
//                 </Typography>
//               </AccordionSummary>

//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   Planning an advertising strategy is a complicated procedure.
//                   Making an effective plan and making an informed choice about
//                   the best media option and time slots at the most affordable
//                   advertising rates frequently requires a paid service
//                   membership. We understand this can be difficult for first-time
//                   or new advertisers; hence, The Media Ant is there to take care
//                   of everything, from getting advertising data to negotiating
//                   advertising rates. You can trust The Media Ant with end-to-end
//                   planning and execution of your ad campaigns. To get the best
//                   advertising rates and place your advertisement, you have to
//                   follow these simple steps: Select the media option on the
//                   website. You could see thousands of advertising options on
//                   each media option. You can filter the platform of your choice
//                   by selecting categoryoptions based on genre, advertising
//                   option, languages, location,network or type etc. You can also
//                   sort the advertising rates for different options based on top
//                   search, category_name, and language or choose from a library of
//                   sample ads. Once you select a particular card, you can click
//                   on it to find all the advertising options within the card and
//                   the advertising rates for the same. Select the advertising
//                   option and the advertising rate suitable for you. After that,
//                   click the submit button and request an express quote.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//             {/* 6 */}
//             <Accordion
//               expanded={expanded === "panel6"}
//               onChange={handleChange3("panel6")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel2bh-content"
//                 id="panel2bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel6" ? "18px" : "14px",
//                     fontWeight: expanded === "panel6" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   Best Advertising Agency in India
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   The Media Ant is a 10-year-old company in the AdTech space
//                   that aims to disrupt the traditional process of executing ad
//                   campaigns through a physical media agency and replace it with
//                   a self-serve advertising platform. The platform should work
//                   equally well for both online and offline media. The Media Ant
//                   will empower any advertiser, irrespective of their budget and
//                   level of marketing understanding, to go ahead and launch a
//                   campaign. It is the winner of various startup awards and is
//                   used by more than a million users yearly.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//             {/* 7 */}
//             <Accordion
//               expanded={expanded === "panel7"}
//               onChange={handleChange3("panel7")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel2bh-content"
//                 id="panel2bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel7" ? "18px" : "14px",
//                     fontWeight: expanded === "panel7" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   Magazine Advertising Agency
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   The Media Ant, one of the best advertising agencies, also
//                   specializes in developing and carrying out magazine
//                   advertising campaigns for various brands. The Media Ant
//                   collaborates with clients to build a plan that suits the
//                   brand's objectives and target market, which can help brands
//                   produce magazine ads in a vast selection of periodicals in
//                   many different areas, such as lifestyle, business, fashion,
//                   sports, and more.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//             {/* 8 */}
//             <Accordion
//               expanded={expanded === "panel8"}
//               onChange={handleChange3("panel8")}
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel2bh-content"
//                 id="panel2bh-header"
//               >
//                 <Typography
//                   sx={{
//                     color: "black",
//                     fontSize: expanded === "panel8" ? "18px" : "14px",
//                     fontWeight: expanded === "panel8" ? "600" : "500",
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   Television Advertising Agency
//                 </Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography
//                   sx={{
//                     fontFamily: "Inter, sans-serif",
//                     fontSize: "12px",
//                     fontWeight: "500",
//                   }}
//                 >
//                   The Media Ant is the one-stop destination for all your
//                   television advertising needs. The Media Ant has a broad
//                   network of publishers, advertisers, and media sources,
//                   allowing businesses to reach a large audience. Additionally,
//                   the company has an experienced staff of professionals who can
//                   help you plan your television advertising campaign and buy the
//                   media suitable for your television advertising campaign.
//                 </Typography>
//               </AccordionDetails>
//             </Accordion>
//           </Box>
//         </Grid>
//       </Grid>

//       {/* <Footer/> */}
//     </>
//   );
// }

import React, { useEffect, useState } from "react";

// MUI
import { Grid, Typography, Box } from "@mui/material";

// CSS
import "./Metro.css";

// CARD
import Cards from "../../Card/Cards";

// REACT-HELMET
import { Helmet } from "react-helmet";

// VIDEO
import videotwo from "../../../assets/video/VideoWithoutText.mp4";

import Faq from "../../FAQ/Faq";

import {
  MainMargins,
  FaqMainTitle,
  FaqDescription,
} from "../../Styles/Styles";

import Popupcomponent from "../../PopUp/Popupcomponent";

// REACT-ROUTER_DOM
import { useNavigate } from "react-router-dom";

import samOutdoor from "../../../assets/images/Categories_Images/metro_branding2.jpeg";
import { metroAdd } from "../../../DesignData/Images/Images";
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
        <title>Your Metro Advertising Experts - janusalive</title>
        <meta
          name="description"
          content={
            "JanusAlive: Unlock the potential of metro advertising with our expert team. Reach diverse audiences effectively and maximize your brand's impact."
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
                        Metro&nbsp;
                        <span style={{ color: "#FF1F2F" }}>
                          Advertising
                        </span>
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
                        Metro &nbsp;
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
                       Leverage lifeline of the city
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
                        Leverage lifeline of the city
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
                .filter((item) => item?.category_name === "Metro Advertising")
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
            (data.filter((item) => item?.category_name === "Metro Advertising")
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
                        src={metroAdd}
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
                          Metro Branding Agency
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
                           padding:{
                            xs:"0px 20px 0px 20px",
                            sm:"0px 20px 0px 20px",
                            md:"0px 0px 0px 0px",
                            lg:"0px 0px 0px 0px",
                           }
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: {
                              xs:"200px",
                              sm:"200px",
                              md:"150px",
                             lg:"150px"
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
                              padding:"20px",

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
                Metro Advertising
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
                Metro advertising is a powerful tool for reaching urban
                populations, making it an effective component of a comprehensive
                marketing strategy. Its ability to deliver high-frequency,
                high-reach exposure makes it particularly valuable for brands
                looking to increase visibility and engagement. This is where the
                top metro advertising agency comes into play. Janus Alive
                delivers the utmost professionalism and the best creative
                strategy for metro advertising and its costs. Reach out to us
                for your brand’s promotions and outdoor advertisements.
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
