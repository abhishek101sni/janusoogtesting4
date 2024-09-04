import React from "react";

// MUI
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
} from "../../../../DesignData/MaterialUi/material-ui";

// Count Up
import CountUp from "react-countup";

// ExperinceData
import { ExperienceData } from "../../../../assets/json/newDesign/ExperienceData";

// Images
import {
  happyClients,
  oohSites,
  peopleImpacted,
} from "../../../../DesignData/Images/Images";

import "./Experience2.css";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { display } from "@mui/system";
import { SectionDescriptionForMobile, SectionMainTitle, SectionMainTitleForDesktop } from "../../../Styles/Styles";

const useStyles = makeStyles(() => ({
  sideGridBgColor: {
    // backgroundColor: "yellow",
  },
  MainGridBgColor: {
    // backgroundColor: "pink",
  },
}));

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
    xs: "28px",
    sm: "28px",
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
    sm:"none",
    md:"block",
    lg:"block"
  }
};
const DescriptionForMobile = {
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
};
const happyClientsBgImage = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${happyClients})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "220px",
  width: "95%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const happyClientsBgImageGrid = {
  display: "flex",
  justifyContent: {
    xs: "center",
    sm: "center",
    md: "flex-start",
    lg: "flex-start",
  },
  alignItems: {
    xs: "center",
    sm: "center",
    md: "flex-start",
    lg: "flex-start",
  },
};
const OohBgImage = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), url(${oohSites})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "220px",
  width: "95%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const OohBgImageGrid = {
  marginTop: {
    xs: "10px",
    sm: "10px",
    md: "0px",
    lg: "0px",
  },
  display: "flex",
  justifyContent: {
    xs: "center",
    sm: "center",
    md: "center",
    lg: "center",
  },
  alignItems: {
    xs: "center",
    sm: "center",
    md: "center",
    lg: "center",
  },
};
const peopleImpactedBgImage = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${peopleImpacted})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "220px",
  width: "95%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const peopleImpactedBgImageGrid = {
  marginTop: {
    xs: "10px",
    sm: "10px",
    md: "0px",
    lg: "0px",
  },
  display: "flex",
  justifyContent: {
    xs: "center",
    sm: "center",
    md: "flex-end",
    lg: "flex-end",
  },
  alignItems: {
    xs: "center",
    sm: "center",
    md: "flex-end",
    lg: "flex-end",
  },
};
const countAndTypoAlign = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const CountStyle = {
  color: "white",
  fontWeight: "400",
  fontSize: {
    xs:"40px",
    sm:"40px",
    md:"50px",
    lg:"50px"
  },
  fontFamily: "Inter, sans-serif",
};
const CountText = {
  fontWeight: "400",
  fontSize: "28px",
  color: "#FFFFFF",
  fontFamily: "Inter, sans-serif",
};

const Experience2 = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.5}
          lg={0.5}
          className={classes.sideGridBgColor}
        ></Grid>

        {/* Content for desktop */}
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          lg={11}
          className={classes.MainGridBgColor}
          // display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
        >
          <Box sx={MainMargins}>
            {/* Title */}
            {/* Desktop */}
            <Typography sx={SectionMainTitleForDesktop}>EXPERIENCE</Typography>
            {/* Mobile */}
            <Typography sx={SectionMainTitle}>EXPERIENCE</Typography>

            {/* Description */}
            <Typography sx={Description}>
              We're a creative force, surpassing standard online marketing. Our
              agency offers an experience
              <br />
              that goes beyond, ensuring exceptional results and impact
            </Typography>

            {/* Mobile */}
            <Typography sx={SectionDescriptionForMobile}>
              We're a creative force, surpassing standard online marketing. Our
              agency offers an experience
              that goes beyond, ensuring exceptional results and impact
            </Typography>
            
            {/* Images */}
            <Grid
              container
              sx={{
                marginTop: {
                  xs: "20px",
                  sm: "20px",
                  md: "40px",
                  lg: "40px",
                },
              }}
            >
              {/* HappyClients */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={happyClientsBgImageGrid}
              >
                <Box sx={happyClientsBgImage}>
                  <Box sx={countAndTypoAlign}>
                    <Typography sx={CountStyle}>
                      <CountUp start={0} end={100} />+
                    </Typography>
                    <Typography sx={CountText}>Happy Clients</Typography>
                  </Box>
                </Box>
              </Grid>
              {/* OOH */}
              <Grid item xs={12} sm={12} md={4} lg={4} sx={OohBgImageGrid}>
                <Box sx={OohBgImage}>
                  <Box sx={countAndTypoAlign}>
                    <Typography sx={CountStyle}>
                      <CountUp start={0} end={10} /> K+
                    </Typography>
                    <Typography sx={CountText}>OOH Sites</Typography>
                  </Box>
                </Box>
              </Grid>
              {/* people impacted */}
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={peopleImpactedBgImageGrid}
              >
                <Box sx={peopleImpactedBgImage}>
                  <Box sx={countAndTypoAlign}>
                    <Typography sx={CountStyle}>
                      <CountUp start={0} end={47} /> CR+
                    </Typography>
                    <Typography sx={CountText}>People Impacted</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
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

export default Experience2;
