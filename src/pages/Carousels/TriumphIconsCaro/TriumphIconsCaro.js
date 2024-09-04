import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Box } from "@mui/material";



// images
import icici from "../../../assets/images/Triumphs/png230x90/icici.png";
import toi from "../../../assets/images/Triumphs/png230x90/toifull.png";
import geniefie from "../../../assets/images/Triumphs/png230x90/geniefie.png";
import malasia from "../../../assets/images/Triumphs/png230x90/malasia.png";
import dominos from "../../../assets/images/Triumphs/png230x90/dominos.png";
import digividya from "../../../assets/images/Triumphs/png230x90/digividyapeeth.png";
import amarujala from "../../../assets/images/Triumphs/png230x90/amarujala.png";
import nippo from "../../../assets/images/Triumphs/png230x90/nippo.png";
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";

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

const TriumphIconsCaro = () => {
  var settings = {
    // dots: false,
    // infinite: false,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,
    // rows: 2,
    // autoplay: /true,
    responsive: [
      {
        breakpoint: 104,
        settings: {
          slidesToShow: 0,
          slidesToScroll: 0,
          infinite: true,
          // dots: true,
          rows: 0,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
          rows: 2,
          infinite: true,
          autoplay: true,
          // dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
          infinite: true,
          autoplay: true,
          // dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        },
      },
    ],
  };
  return (
    <Grid container 
    sx={{ marginTop: {xs:"-155px", lg:"0px"} }}
    >
      <Grid
        item
        xs={1.5}
        sm={1.5}
        md={1}
        lg={1}
        // sx={{ backgroundColor: "red" }}
      ></Grid>
      <Grid
        item
        xs={9}
        sm={9}
        md={10}
        lg={10}
        sx={
          {
            // backgroundColor: "grey"
          }
        }
      >
        <div style={{marginBottom:"30px"}} >
          <Slider {...settings}>
            <Box>
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "100px",
                    sm: "100px",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "70px",
                    sm: "70px",
                    md: "0px",
                    lg: "0px",
                  },
                  marginTop: "5px",
                }}
                alt="iciciLogo"
                src={icici}
              />
            </Box>
            <Box>
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "100px",
                    sm: "100px",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "50px",
                    sm: "50px",
                    md: "0px",
                    lg: "0px",
                  },
                  borderRadius: "10px",
                  marginTop: "5px",
                  marginTop: "15px",
                  marginLeft: "1.5px",
                }}
                alt="iciciLogo"
                src={toi}
              />
            </Box>
            <Box>
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "100px",
                    sm: "100px",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "70px",
                    sm: "70px",
                    md: "0px",
                    lg: "0px",
                  },
                  marginLeft: "30px",
                }}
                alt="iciciLogo"
                src={geniefie}
              />
            </Box>

            <Box>
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "110px",
                    sm: "110px",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "85px",
                    sm: "85px",
                    md: "0px",
                    lg: "0px",
                  },
                  marginLeft: "15px",
                }}
                alt="iciciLogo"
                src={dominos}
              />
            </Box>
           
            <Box>
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "120px",
                    sm: "120px",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "70px",
                    sm: "70px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
                alt="iciciLogo"
                src={malasia}
              />
            </Box>
           
            <Box>
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "140px",
                    sm: "140px",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "70px",
                    sm: "70px",
                    md: "0px",
                    lg: "0px",
                  },
                  marginTop: "10px"
                }}
                alt="iciciLogo"
                src={digividya}
              />
            </Box>

            <Box>
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "130px",
                    sm: "130px",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "70px",
                    sm: "70px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
                alt="iciciLogo"
                src={nippo}
              />
            </Box>
          
            <Box>
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "100px",
                    sm: "100px",
                    md: "0px",
                    lg: "0px",
                  },
                  height: {
                    xs: "70px",
                    sm: "70px",
                    md: "0px",
                    lg: "0px",
                  },
                  marginLeft: "15px",
                  marginLeft: "30px",
                  marginTop: "10px",
                }}
                alt="iciciLogo"
                src={amarujala}
              />
            </Box>
          </Slider>
        </div>
      </Grid>
      <Grid
        item
        xs={1.5}
        sm={1.5}
        md={1}
        lg={1}
        // sx={{ backgroundColor: "green" }}
      ></Grid>
    </Grid>
  );
};

export default TriumphIconsCaro;
