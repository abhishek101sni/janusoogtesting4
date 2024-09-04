// import React from "react";

// // Carosuel
// import Carousel from "react-grid-carousel";

// // MUI
// import { Grid, Typography, Button, Box } from "@mui/material";

// // REACT_ROUTER_DOM
// import { Link } from "react-router-dom";

// // IMAGES
// import add1 from "../../../assets/images/add1.webp";
// import add2 from "../../../assets/images/add2.webp";
// import add3 from "../../../assets/images/add3.webp";
// import add4 from "../../../assets/images/add4.webp";

// // CSS
// import "./Cardcarousel.css";

// // CARD
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import { CardActionArea } from "@mui/material";

// // REDUX
// import { useSelector } from "react-redux";
// import {
//   getProducts,
//   getProductsByState,
// } from "../../../redux/actions/Outdoor";

// // REACT-ROUTER_DOM
// import { useNavigate } from "react-router-dom";

// const Cardcarousel = () => {
//   React.useEffect(() => {
//     getProducts();
//   }, []);

//   const { products } = useSelector((state) => state.OutdoorReducer);

//   const navigate = useNavigate();
//   return (
//     <>
//       <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.5}
//           lg={0.5}
//           // sx={{ backgroundColor: "red" }}
//         ></Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={11}
//           lg={11}
//           // sx={{ backgroundColor: "green" }}
//         >
//           <Box
//             sx={{
//               marginTop: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
//               marginBottom: { xs: "30px", sm: "30px", md: "50px", lg: "50px" },
//             }}
//           >
//             <Carousel
//               cols={3}
//               rows={1}
//               gap={50}
//               loop={true}
//               showDots={false}
//               dotColorActive="#C02222"
//               dotColorInactive="#ccc"
//               style={{ padding: "10px" }}
//             >
//               {products &&
//                 products.reverse().map(
//                   (item, index) =>
//                     (
//                       <Carousel.Item>
//                         <Card
//                           sx={{
//                             maxWidth: "400px",
//                             maxHeight: 700,
//                             borderRadius: "190px 190px 0 0",
//                             border: "2px solid #C02222",
//                             background:
//                               "linear-gradient(to bottom, #C02222 85%, #000)",
//                           }}
//                           // onClick={() => {
//                           //   navigate(
//                           //     `/${
//                           //       item?.category?.toLowerCase()
//                           //         ? item?.category?.toLowerCase()
//                           //         : item?.code
//                           //     }/${item?.url ? item?.url : item?.address}/`,
//                           //     { state: { id: item._id } }
//                           //   );
//                           //   console.log("hello world");
//                           // }}
//                           onClick={() => {
//                             navigate(
//                               `/${
//                                 item?.urlcat?.toLowerCase()
//                                   ? item?.urlcat?.toLowerCase()
//                                   : item?.urlcat
//                               }/${item?.url ? item?.url : item?.address}/`,
//                               { state: { id: item._id } }
//                             );
//                             console.log("hello world");
//                           }}
//                         >
//                           <CardActionArea>
//                             <CardMedia
//                               component="img"
//                               height="300"
//                               image={item?.image}
//                               alt="green iguana"
//                               sx={{ backgroundColor: "grey" }}
//                             />
//                             <CardContent sx={{ height: "120px" }}>
//                               <Typography
//                                 sx={{
//                                   fontFamily: "Poppins, sans-serif",
//                                   fontSize: "16px",
//                                   fontWeight: "600",
//                                   color: "#fff",
//                                   display: "-webkit-box",
//                                   overflow: "hidden",
//                                   WebkitBoxOrient: "vertical",
//                                   WebkitLineClamp: 2,
//                                 }}
//                               >
//                                 {item?.address}
//                               </Typography>
//                               <Typography
//                                 variant="body2"
//                                 color="#fff"
//                                 sx={{ marginTop: "5px" }}
//                               >
//                                 City: {item?.city}
//                                 <br />
//                                 State: {item?.state}
//                                 <br />
//                               </Typography>
//                             </CardContent>
//                           </CardActionArea>
//                         </Card>
//                       </Carousel.Item>
//                     )
//                 )}
//               {/* <Carousel.Item width="20%">
//                 <Card
//                   sx={{
//                     maxWidth: 360,
//                     maxHeight: 800,
//                     borderRadius: "150px 150px 0 0",
//                     border: "1px solid #C02222",
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       height="250"
//                       image={add2}
//                       alt="green iguana"
//                     />
//                     <CardContent sx={{ height: "180px" }}>
//                       <Typography
//                         sx={{
//                           fontFamily: "Poppins, sans-serif",
//                           fontSize: "16px",
//                           fontWeight: "600",
//                         }}
//                       >
//                         Above Sukh Sagar Hotel Bagalkot
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         State: Karnataka
//                         <br />
//                         District: Shivamogga
//                         <br />
//                         City: Shivamogga
//                         <br />
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Carousel.Item> */}

//               {/* <Carousel.Item width="20%">
//                 <Card
//                   sx={{
//                     maxWidth: 360,
//                     maxHeight: 800,
//                     borderRadius: "150px 150px 0 0",
//                     border: "1px solid #C02222",
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       height="250"
//                       image={add3}
//                       alt="green iguana"
//                     />
//                     <CardContent sx={{ height: "180px" }}>
//                       <Typography
//                         sx={{
//                           fontFamily: "Poppins, sans-serif",
//                           fontSize: "16px",
//                           fontWeight: "600",
//                         }}
//                       >
//                         Above Harsha Show Room Towards Shivappa Nayaka Circle
//                         Shivamogga
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         State: Karnataka
//                         <br />
//                         District: Shivamogga
//                         <br />
//                         City: Shivamogga
//                         <br />
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Carousel.Item> */}

//               {/* <Carousel.Item width="20%">
//                 <Card
//                   sx={{
//                     maxWidth: 360,
//                     maxHeight: 800,
//                     borderRadius: "150px 150px 0 0",
//                     border: "1px solid #C02222",
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       height="250"
//                       image={add4}
//                       alt="green iguana"
//                     />
//                     <CardContent sx={{ height: "180px" }}>
//                       <Typography
//                         sx={{
//                           fontFamily: "Poppins, sans-serif",
//                           fontSize: "16px",
//                           fontWeight: "600",
//                         }}
//                       >
//                         A.A Circle Shivamogga
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         State: Karnataka
//                         <br />
//                         District: Bagalkot
//                         <br />
//                         City: Bagalkot
//                         <br />
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Carousel.Item> */}
//               {/* <Carousel.Item>
//                 <Card
//                   sx={{
//                     maxWidth: 360,
//                     maxHeight: 800,
//                     borderRadius: "150px 150px 0 0",
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       height="250"
//                       image={add1}
//                       alt="green iguana"
//                     />
//                     <CardContent sx={{ height: "180px" }}>
//                       <Typography
//                         sx={{
//                           fontFamily: "Poppins, sans-serif",
//                           fontSize: "16px",
//                           fontWeight: "600",
//                         }}
//                       >
//                         A.A Circle B.H Road Near Shivappa Nayaka Shoping Complex
//                         Shivamogga
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         State: Karnataka <br />
//                         District: Shivamogga
//                         <br />
//                         City: Shivamogga
//                         <br />
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Carousel.Item> */}

//               {/* <Carousel.Item width="20%">
//                 <Card
//                   sx={{
//                     maxWidth: 360,
//                     maxHeight: 800,
//                     borderRadius: "150px 150px 0 0",
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       height="250"
//                       image={add2}
//                       alt="green iguana"
//                     />
//                     <CardContent sx={{ height: "180px" }}>
//                       <Typography
//                         sx={{
//                           fontFamily: "Poppins, sans-serif",
//                           fontSize: "16px",
//                           fontWeight: "600",
//                         }}
//                       >
//                         Above Sukh Sagar Hotel Bagalkot
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         State: Karnataka
//                         <br />
//                         District: Shivamogga
//                         <br />
//                         City: Shivamogga
//                         <br />
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Carousel.Item> */}

//               {/* <Carousel.Item width="20%">
//                 <Card
//                   sx={{
//                     maxWidth: 360,
//                     maxHeight: 800,
//                     borderRadius: "150px 150px 0 0",
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       height="250"
//                       image={add3}
//                       alt="green iguana"
//                     />
//                     <CardContent sx={{ height: "180px" }}>
//                       <Typography
//                         sx={{
//                           fontFamily: "Poppins, sans-serif",
//                           fontSize: "16px",
//                           fontWeight: "600",
//                         }}
//                       >
//                         Above Harsha Show Room Towards Shivappa Nayaka Circle
//                         Shivamogga
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         State: Karnataka
//                         <br />
//                         District: Shivamogga
//                         <br />
//                         City: Shivamogga
//                         <br />
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Carousel.Item> */}

//               {/* <Carousel.Item width="20%">
//                 <Card
//                   sx={{
//                     maxWidth: 360,
//                     maxHeight: 800,
//                     borderRadius: "150px 150px 0 0",
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       height="250"
//                       image={add4}
//                       alt="green iguana"
//                     />
//                     <CardContent sx={{ height: "180px" }}>
//                       <Typography
//                         sx={{
//                           fontFamily: "Poppins, sans-serif",
//                           fontSize: "16px",
//                           fontWeight: "600",
//                         }}
//                       >
//                         A.A Circle Shivamogga
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         State: Karnataka
//                         <br />
//                         District: Bagalkot
//                         <br />
//                         City: Bagalkot
//                         <br />
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Carousel.Item> */}
//             </Carousel>
//           </Box>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={0.5}
//           lg={0.5}
//           // sx={{ backgroundColor: "yellow" }}
//         ></Grid>
//       </Grid>
//     </>
//   );
// };

// export default Cardcarousel;

import React from "react";

// Carosuel
import Carousel from "react-grid-carousel";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT_ROUTER_DOM
import { Link } from "react-router-dom";

// IMAGES
import add1 from "../../../assets/images/add1.webp";
import add2 from "../../../assets/images/add2.webp";
import add3 from "../../../assets/images/add3.webp";
import add4 from "../../../assets/images/add4.webp";

// CSS
import "./Cardcarousel.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CARD
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

// REDUX
import { useSelector } from "react-redux";
import {
  getProducts,
  getProductsByState,
} from "../../../redux/actions/Outdoor";

// REACT-ROUTER_DOM
import { useNavigate } from "react-router-dom";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , borderRadius:"20px" ,marginTop:"-1px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , borderRadius:"20px",marginTop:"-1px" }}
      onClick={onClick}
    />
  );
}


const Cardcarousel = () => {
  React.useEffect(() => {
    getProducts();
  }, []);

  const { products } = useSelector((state) => state.OutdoorReducer);

  const navigate = useNavigate();

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          // dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <>
      <Grid container sx={{ backgroundColor: "#F5F5F5" }}>
        <Grid
          item
          xs={1.5}
          sm={1.5}
          md={0.5}
          lg={0.5}
          // sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={9}
          sm={9}
          md={11}
          lg={11}
          // sx={{ backgroundColor: "green" }}
        >
          <Box
            sx={{
              marginTop: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
              marginBottom: { xs: "40px", sm: "40px", md: "50px", lg: "50px" },
              
            }}
          >
            <Slider {...settings}>
              {products &&
                products.reverse().map((item, index) => (
                  <Box sx={{display:"flex" , justifyContent:"center" , alignItems:"center",
                  marginleft:{xs:"0px" , sm:"0px" , md:"20px" , lg:"20px"}
                  }}>
                    <Card
                      sx={{
                        marginLeft:{xs:"0px" , sm:"0px" , md:"20px" , lg:"20px"},
                        maxWidth: "350px",
                        maxHeight: 700,
                        // borderRadius: "190px 190px 0 0",
                        border: "2px solid #C02222",
                        background:
                          "linear-gradient(to bottom, #C02222 85%, #000)",
                      }}
                      onClick={() => {
                        navigate(
                          `/${
                            item?.urlcat?.toLowerCase()
                              ? item?.urlcat?.toLowerCase()
                              : item?.urlcat
                          }/${item?.url ? item?.url : item?.address}/`,
                          { state: { id: item._id } }
                        );
                        console.log("hello world");
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="300"
                          image={item?.image}
                          alt="green iguana"
                          sx={{ backgroundColor: "grey" }}
                        />
                        <CardContent sx={{ height: "120px" }}>
                          <Typography
                            sx={{
                              fontFamily: "Poppins, sans-serif",
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "#fff",
                              display: "-webkit-box",
                              overflow: "hidden",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 2,
                            }}
                          >
                            {item?.address}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="#fff"
                            sx={{ marginTop: "5px" }}
                          >
                            City: {item?.city}
                            <br />
                            State: {item?.state}
                            <br />
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                ))}
            </Slider>
          </Box>
        </Grid>
        <Grid
          item
          xs={1.5}
          sm={1.5}
          md={0.5}
          lg={0.5}
          // sx={{ backgroundColor: "yellow" }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Cardcarousel;
