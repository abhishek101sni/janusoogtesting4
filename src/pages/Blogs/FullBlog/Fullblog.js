// import React, { useEffect, Suspense, lazy, useState, useCallback } from "react";

// // MUI
// import { Grid, Typography, Button, Box, Container } from "@mui/material";

// // REACT_ROUTER-DOM
// import { useLocation, useNavigate, useParams } from "react-router-dom";

// // IMAGES
// import samimg from "../../../assets/images/samOutdoor.jpeg";
// import janusAdver from "../../../assets/images/JanusAdvertisement.jpeg";
// import R2 from "../../../assets/images/R2.png";

// // CARD
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";

// // CSS
// import "./Fullblog.css";

// // LAZY-LOAD
// import LazyLoad from "react-lazyload";

// // Redux
// import { useSelector } from "react-redux";
// // REDUX
// import {
//   getBlogs,
//   getBlogsByTitle,
//   getRelatedBlogs,
// } from "../../../redux/actions/Blog";
// import Fullpageadvertisement from "../../FullPageAdvertisement/Fullpageadvertisement";

// function createMarkup(htmlContent) {
//   return { __html: htmlContent };
// }

// const Fullblog = () => {
//   console.log("hi id");
//   const { state } = useLocation();
//   console.log("state", state);
//   // const { id } = state;

//   const { param } = useParams();
//   // const blogData = await fetch

//   const { SingleBlog, Related, blogid } = useSelector(
//     (state) => state.BlogReducer
//   );

//   const navigate = useNavigate();

//   const { Blogs } = useSelector((state) => state.BlogReducer);

//   useEffect(() => {
//     getBlogsByTitle(param);
//     // getBlogs();
//     getRelatedBlogs();
//   }, []);

//   // Pagination

//   let handleScroll = useCallback(() => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop ===
//       document.documentElement.offsetHeight
//     ) {
//       // When the user reaches the bottom of the page
//       if (Related?.page + 1 <= Related.total_pages) {
//         getRelatedBlogs(Related?.page + 1);
//       }
//     }
//   }, [Related]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   return (
//     <Box sx={{ marginTop: { xs: "60px", sm: "60px", md: "64px", lg: "64px" } }}>
//       {/* TITLE */}
//       <Grid container>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.6}
//           lg={0.6}
//           // sx={{ backgroundColor: "orange" }}
//         ></Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={8.5}
//           lg={8.5}
//           // sx={{ backgroundColor: "aqua"}}
//         >
//           <Box
//             sx={{
//               // display: "flex",
//               // flexDirection: "row",
//               height: "100%",
//             }}
//           >
//             <Typography
//               sx={{
//                 color: "#D2122E",
//                 fontSize: { xs: "25px", sm: "25px", md: "33px", lg: "33px" },
//                 fontFamily: "Poppins, sans-serif",
//                 fontWeight: "600",
//                 marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
//                 marginBottom: { xs: "3px", sm: "3px", md: "15px", lg: "15px" },
//                 lineHeight: { xs: "1.2", sm: "1.2", md: "37px", lg: "37px" },
//                 paddingLeft: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
//                 paddingRight: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
//               }}
//             >
//               {SingleBlog?.title}
//             </Typography>
//           </Box>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={2.9}
//           lg={2.9}
//           // sx={{ backgroundColor: "green" }}
//         ></Grid>
//       </Grid>

//       {/* IMAGE */}

//       <Grid
//         container
//         sx={
//           {
//             // backgroundColor: "green",
//           }
//         }
//       >
//         <Grid
//           xs={12}
//           sm={12}
//           md={0.6}
//           lg={0.6}
//           // sx={{ backgroundColor: "orange" }}
//         ></Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={8.5}
//           lg={8.5}
//           sx={
//             {
//               // backgroundColor: "aqua",
//             }
//           }
//         >
//           {/* IMAGE */}
//           <Box
//             sx={{
//               marginTop: {
//                 xs: "15px",
//                 sm: "15px",
//                 md: "5px",
//                 lg: "5px",
//               },
//             }}
//           >
//             <Box
//               component="img"
//               sx={{
//                 width: {
//                   xs: "100%",
//                   sm: "100%",
//                   md: "100%",
//                   lg: "100%",
//                 },
//                 height: {
//                   xs: "100%",
//                   sm: "100%",
//                   md: "100%",
//                   lg: "100%",
//                 },
//                 borderRadius: { xs: "10px", sm: "10px", md: "5px", lg: "5px" },
//                 paddingRight: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
//                 paddingLeft: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
//               }}
//               alt="ArticleImage"
//               src={SingleBlog?.photo}
//             />
//           </Box>

//           {/* DESCRIPTION */}
//           <Box>
//             <Typography
//               sx={{
//                 marginTop: {
//                   xs: "15px",
//                   sm: "15px",
//                   md: "20px",
//                   lg: "20px",
//                 },
//                 marginBottom: {
//                   xs: "10px",
//                   sm: "10px",
//                   md: "0px",
//                   lg: "0px",
//                 },
//                 overflow: "hidden",
//                 lineHeight: { xs: "26px", sm: "26px", md: "26px", lg: "26px" },
//                 fontSize: { xs: "18px", sm: "18px", md: "16px", lg: "16px" },
//                 backgroundColor: "#fff",
//                 fontFamily: "Poppins, sans-serif",
//                 fontWeight: "500",
//                 paddingLeft: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
//                 paddingRight: {
//                   xs: "20px",
//                   sm: "20px",
//                   md: "0px",
//                   lg: "0px",
//                 },
//               }}
//               // dangerouslySetInnerHTML={createMarkup(SingleBlog?.description)}
//               dangerouslySetInnerHTML={createMarkup(SingleBlog?.description)}
//             />
//           </Box>

//           {/* RELATED ARTICLE TITLE */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: {
//                 xs: "center",
//                 sm: "center",
//                 md: "flex-start",
//                 lg: "flex-start",
//               },
//               marginBottom: {
//                 xs: "30px",
//                 sm: "30px",
//                 md: "15px",
//                 lg: "15px",
//               },
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: { xs: "40px", sm: "40px", md: "33px", lg: "33px" },
//                 backgroundColor: "#fff",
//                 fontFamily: "Poppins, sans-serif",
//                 fontWeight: "600",
//                 color: "#D2122E",
//                 width: "100%",
//                 // backgroundColor: "blue",
//               }}
//             >
//               Related Blogs
//             </Typography>
//           </Box>

//           {/* RELATED BLOGS */}
//           <Grid container>
//             {Related &&
//               Related?.data?.map((item) => (
//                 <Grid
//                   item
//                   xs={12}
//                   sm={12}
//                   md={4}
//                   lg={4}
//                   // sx={{ backgroundColor: "green" }}
//                 >
//                   <Box
//                     sx={{
//                       marginTop: {
//                         xs: "0px",
//                         sm: "0px",
//                         md: "20px",
//                         lg: "20px",
//                       },
//                       marginBottom: {
//                         xs: "0px",
//                         sm: "0px",
//                         md: "20px",
//                         lg: "20px",
//                       },
//                       paddingLeft: {
//                         xs: "0px",
//                         sm: "0px",
//                         md: "10px",
//                         lg: "10px",
//                       },
//                       paddingRight: {
//                         xs: "0px",
//                         sm: "0px",
//                         md: "10px",
//                         lg: "10px",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                       },
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         border: " 1px solid #C02222",
//                         boxShadow: "6",
//                         marginLeft: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "0px",
//                           lg: "0px",
//                         },
//                         marginRight: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "0px",
//                           lg: "0px",
//                         },
//                         marginBottom: {
//                           xs: "20px",
//                           sm: "20px",
//                           md: "0px",
//                           lg: "0px",
//                         },
//                         borderRadius: "10px",
//                         transition: "transform 0.1s, background-color 0.3s",
//                         "&:hover": {
//                           backgroundColor: "#D8D8D8",
//                           transform: "scale(1.05)",
//                         },
//                       }}
//                       onClick={() => {
//                         getBlogsByTitle(item?.engtitle);
//                         navigate(`/blog/${item?.engtitle}`);
//                       }}
//                     >
//                       <Box
//                         component="img"
//                         sx={{
//                           height: {
//                             xs: "250px",
//                             sm: "25px",
//                             md: "200px",
//                             lg: "200px",
//                           },
//                           width: "100%",
//                           borderTopLeftRadius: "10px",
//                           borderTopRightRadius: "10px",
//                         }}
//                         alt="The house from the offer."
//                         src={item?.photo}
//                       />
//                       <Box
//                         sx={{
//                           width: "100%",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           // backgroundColor:"yellow",
//                           paddingRight: {
//                             xs: "15px",
//                             sm: "15px",
//                             md: "10px",
//                             lg: "10px",
//                           },
//                           paddingLeft: {
//                             xs: "15px",
//                             sm: "15px",
//                             md: "10px",
//                             lg: "10px",
//                           },
//                           marginTop: {
//                             xs: "10px",
//                             sm: "10px",
//                             md: "10px",
//                             lg: "10px",
//                           },
//                           marginBottom: {
//                             xs: "10px",
//                             sm: "10px",
//                             md: "10px",
//                             lg: "10px",
//                           },
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontFamily: "Poppins, sans-serif",
//                             fontSize: {
//                               xs: "20px",
//                               sm: "20px",
//                               md: "15px",
//                               lg: "15px",
//                             },

//                             // backgroundColor: "green",
//                             fontWeight: "600",
//                             display: "-webkit-box",
//                             overflow: "hidden",
//                             WebkitBoxOrient: "vertical",
//                             WebkitLineClamp: 3,
//                             color: "#C02222",
//                             lineHeight: {
//                               xs: "22px",
//                               sm: "22px",
//                               md: "20px",
//                               lg: "20px",
//                             },
//                             textTransform: "capitalize",
//                             // padding: "6px",
//                           }}
//                         >
//                           {item.title}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </Box>
//                 </Grid>
//               ))}
//           </Grid>
//         </Grid>

//         {/* Advertisement */}
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={2.5}
//           lg={2.5}
//           sx={
//             {
//               // backgroundColor: "pink",
//               // marginTop:"10px"
//             }
//           }
//         >
//           <Fullpageadvertisement />
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.4}
//           lg={0.4}
//           // sx={{ backgroundColor: "orange" }}
//         ></Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Fullblog;

// --------------------------------------------------------------------------------------------------------------

// import React, { useEffect } from "react";

// // MUI
// import { Grid, Typography, Box } from "@mui/material";

// // REACT_ROUTER-DOM
// import { useLocation, useNavigate, useParams } from "react-router-dom";

// // IMAGES
// import Fullpageadvertisement from "../../FullPageAdvertisement/Fullpageadvertisement";

// // CSS
// import "./Fullblog.css";

// function createMarkup(htmlContent) {
//   return { __html: htmlContent };
// }

// const Fullblog = () => {
//   useEffect(() => {}, []);

//   // Pagination

//   return (
//     <Box sx={{ marginTop: { xs: "60px", sm: "60px", md: "64px", lg: "64px" } }}>
//       {/* IMAGE */}
//       <Grid
//         container
//         sx={
//           {
//             // backgroundColor: "green",
//           }
//         }
//       >
//         <Grid
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "orange" }}
//         ></Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={7.5}
//           lg={7.5}
//           sx={
//             {
//               // backgroundColor: "aqua",
//             }
//           }
//         >
//           <Box>
//             <Typography
//               sx={{
//                 color: "#D2122E",
//                 fontSize: { xs: "21px", sm: "21px", md: "30px", lg: "30px" },
//                 fontFamily: "Poppins, sans-serif",
//                 fontWeight: "400",
//                 marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
//                 marginBottom: { xs: "3px", sm: "3px", md: "15px", lg: "15px" },
//                 lineHeight: { xs: "1.2", sm: "1.2", md: "40px", lg: "40px" },
//                 paddingLeft: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
//                 paddingRight: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
//                 // width:"100%"
//               }}
//             >
//               {/* {SingleBlog?.title} */}
//             </Typography>
//           </Box>

//           {/* IMAGE */}
//           <Box
//             sx={{
//               marginTop: {
//                 xs: "15px",
//                 sm: "15px",
//                 md: "5px",
//                 lg: "5px",
//               },
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Box
//               component="img"
//               sx={{
//                 width: {
//                   xs: "100%",
//                   sm: "100%",
//                   md: "650px",
//                   lg: "650px",
//                 },
//                 height: {
//                   xs: "100%",
//                   sm: "100%",
//                   md: "450px",
//                   lg: "450px",
//                 },
//                 borderRadius: { xs: "10px", sm: "10px", md: "5px", lg: "5px" },
//                 paddingRight: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
//                 paddingLeft: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
//               }}
//               alt="ArticleImage"
//               // src={SingleBlog?.photo}
//             />
//           </Box>

//           {/* DESCRIPTION */}
//           <Box>
//             <Typography
//               sx={{
//                 marginTop: {
//                   xs: "15px",
//                   sm: "15px",
//                   md: "20px",
//                   lg: "20px",
//                 },
//                 marginBottom: {
//                   xs: "10px",
//                   sm: "10px",
//                   md: "0px",
//                   lg: "0px",
//                 },
//                 overflow: "hidden",
//                 lineHeight: { xs: "26px", sm: "26px", md: "26px", lg: "26px" },
//                 fontSize: { xs: "18px", sm: "18px", md: "16px", lg: "16px" },
//                 backgroundColor: "#fff",
//                 fontFamily: "Poppins, sans-serif",
//                 fontWeight: "500",
//                 paddingLeft: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
//                 paddingRight: {
//                   xs: "20px",
//                   sm: "20px",
//                   md: "0px",
//                   lg: "0px",
//                 },
//               }}
//               // dangerouslySetInnerHTML={createMarkup(SingleBlog?.description)}
//             />
//           </Box>
//         </Grid>

//         {/* Advertisement */}
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={2.5}
//           lg={2.5}
//           sx={
//             {
//               // backgroundColor: "pink",
//               // marginTop:"10px"
//             }
//           }
//         >
//           <Fullpageadvertisement />
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.7}
//           lg={0.7}
//           // sx={{ backgroundColor: "orange" }}
//         ></Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Fullblog;

import React, { useEffect } from "react";

// MUI
import { Grid, Typography, Box } from "@mui/material";

import { Helmet } from "react-helmet";

// REACT_ROUTER-DOM
import { useLocation } from "react-router-dom";

// IMAGES
import Fullpageadvertisement from "../../FullPageAdvertisement/Fullpageadvertisement";

// CSS
import "./Fullblog.css";

function createMarkup(htmlContent) {
  return { __html: htmlContent };
}

const Fullblog = () => {
  useEffect(() => {}, []);

  const location = useLocation();
  const { blog } = location.state || {};

  if (!blog) {
    return <Typography>No blog data available.</Typography>;
  }

  // Pagination

  return (
    <>
      <Helmet>
        <title>{blog?.seo_title}</title>
        <meta name="description" content={blog?.seo_description} />
      </Helmet>
      <Box
        sx={{ marginTop: { xs: "60px", sm: "60px", md: "64px", lg: "64px" } }}
      >
        {/* IMAGE */}
        <Grid
          container
          sx={
            {
              // backgroundColor: "green",
            }
          }
        >
          <Grid
            xs={12}
            sm={12}
            md={0.5}
            lg={0.5}
            // sx={{ backgroundColor: "orange" }}
          ></Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={8.5}
            lg={8.5}
            sx={
              {
                // backgroundColor: "aqua",
              }
            }
          >
            <Box>
              <Typography
                sx={{
                  color: "#D2122E",
                  fontSize: { xs: "21px", sm: "21px", md: "30px", lg: "30px" },
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                  marginTop: { xs: "10px", sm: "10px", md: "20px", lg: "20px" },
                  marginBottom: {
                    xs: "3px",
                    sm: "3px",
                    md: "15px",
                    lg: "15px",
                  },
                  lineHeight: { xs: "1.2", sm: "1.2", md: "35px", lg: "35px" },
                  paddingLeft: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
                  paddingRight: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                  // width:"100%"
                }}
              >
                {/* {SingleBlog?.title} */}
                {blog?.blog_title}
              </Typography>
            </Box>

            {/* IMAGE */}
            <Box
              sx={{
                marginTop: {
                  xs: "15px",
                  sm: "15px",
                  md: "5px",
                  lg: "5px",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                  },
                  // height: {
                  //   xs: "100%",
                  //   sm: "100%",
                  //   md: "450px",
                  //   lg: "450px",
                  // },
                  borderRadius: {
                    xs: "10px",
                    sm: "10px",
                    md: "5px",
                    lg: "5px",
                  },
                  paddingRight: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                  paddingLeft: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
                }}
                alt="ArticleImage"
                src={blog?.image}
              />
            </Box>

            {/* DESCRIPTION */}
            <Box>
              <Typography
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
                    md: "0px",
                    lg: "0px",
                  },
                  overflow: "hidden",
                  lineHeight: {
                    xs: "26px",
                    sm: "26px",
                    md: "26px",
                    lg: "26px",
                  },
                  fontSize: { xs: "18px", sm: "18px", md: "17px", lg: "17px" },
                  backgroundColor: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                  paddingLeft: { xs: "20px", sm: "20px", md: "0px", lg: "0px" },
                  paddingRight: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
                // dangerouslySetInnerHTML={createMarkup(blog?.description)}
              >
                {blog?.description}
              </Typography>
            </Box>
          </Grid>

          {/* Advertisement */}
          <Grid
            item
            xs={12}
            sm={12}
            md={2.5}
            lg={2.5}
            sx={
              {
                // backgroundColor: "pink",
                // marginTop:"10px"
              }
            }
          >
            <Fullpageadvertisement />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={0.5}
            lg={0.5}
            // sx={{ backgroundColor: "orange" }}
          ></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Fullblog;
