import React from "react";

// Image
import {
  triumphsbgimg,

} from "../../../../DesignData/Images/Images";
// MUI
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
} from "../../../../DesignData/MaterialUi/material-ui";

import "./Triumphs2.css";

// react-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// json
import { TriumphsData2 } from "../../../../assets/json/newDesign/TriumphsData2";

const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundImage: `url(${triumphsbgimg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  sideGridBgColor: {
    // backgroundColor: "yellow",
  },
  MainGridBgColor: {
    // backgroundColor: "pink",
  },
}));

const MarginBtwnTypo = {
  marginTop: {
    xs: "10px",
    sm: "10px",
    md: "0px",
    lg: "0px",
  },
};
const MainMargins = {
  marginTop: {
    xs: "30px",
    sm: "30px",
    md: "60px",
    lg: "60px",
  },
  marginBottom: {
    xs: "30px",
    sm: "30px",
    md: "60px",
    lg: "60px",
  },
  // border: "2px solid red",
};
const MainTitle = {
  fontSize: {
    xs: "30px",
    sm: "30px",
    md: "32px",
    lg: "32px",
  },
  color: "#FF1F2F",
  lineHeight: "30px",
  fontWeight: {
    xs: "500",
    sm: "500",
    md: "400",
    lg: "400",
  },
  textAlign: {
    xs: "center",
    sm: "center",
    md: "left",
    lg: "left",
  },
  fontFamily: "Inter, sans-serif",
};
const Description = {
  marginTop: {
    xs: "15px",
    sm: "15px",
    md: "10px",
    lg: "10px",
  },
  fontSize: {
    xs: "18px",
    sm: "18px",
    md: "16px",
    lg: "16px",
  },
  lineHeight: {
    xs: "22px",
    sm: "22px",
    md: "22px",
    lg: "22px",
  },
  color: "#000000",
  fontWeight: {
    xs: "500",
    sm: "500",
    md: "400",
    lg: "400",
  },
  textAlign: {
    xs: "center",
    sm: "center",
    md: "left",
    lg: "left",
  },
  padding: {
    xs: "0px 10px 0px 10px",
    sm: "0px 10px 0px 10px",
    md: "0px 0px 0px 0px",
    lg: "0px 0px 0px 0px",
  },
  fontFamily: "Inter, sans-serif",
  display:{
    xs:"none",
    sm:'none',
    md:"block",
    lg:"block"
  }
};

const Triumphs2 = () => {
  const classes = useStyles();

  // Carosuel setting
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Grid container className={classes.bgImage}>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>

        {/* Content */}
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
            <Box>
              <Typography sx={MainTitle}>TRIUMPHS</Typography>
            </Box>
            {/* Description */}
            <Box sx={MarginBtwnTypo}>
              <Typography sx={Description}>
                Showcasing the success stories of clients who've experienced our
                creative <br/>
                prowess, surpassing ordinary online marketing impact.
              </Typography>
              <Typography sx={{
                marginTop: "15px",
                fontSize: "16px",
                color: "#000",
                lineHeight: "22px",
                fontWeight: "500",
                textAlign: "center",
                padding: "0px 10px 0px 10px",
                display: {
                  md: "none",
                  lg: "none",
                },
                fontFamily: "Inter, sans-serif",
                display: {
                  md: "none",
                  lg: "none",
                },
              }}>
                Showcasing the success stories of clients who've experienced our
                creative prowess, surpassing ordinary online marketing impact.
              </Typography>
            </Box>
            {/* Triumphs Carousel */}
            <Box>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  sx={{
                    //  backgroundColor: "yellow" ,
                    marginTop: "30px",
                  }}
                >
                  <Slider {...settings}>
                    {TriumphsData2.map((item, index) => (
                      <Box>
                        <Box
                          component="img"
                          key={index}
                          src={item.image}
                          sx={{
                            width: {
                              xs: "100%",
                              sm: "200px",
                              md: "200px",
                              lg: "200px",
                            },
                            // height: {
                            //   xs: "100px",
                            //   sm: "100px",
                            //   md: "120px",
                            //   lg: "120px",
                            // },
                            // backgroundColor: "green",
                            padding: {
                              xs: "0px 80px 0px 80px",
                              sm: "0px 80px 0px 80px",
                              md: "0px 0px 0px 0px",
                              lg: "0px 0px 0px 0px",
                            },
                            filter: "grayscale(100%)",
                            border:"0px"
                          }}
                        />
                      </Box>
                    ))}
                  </Slider>
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
    </>
  );
};

export default Triumphs2;
