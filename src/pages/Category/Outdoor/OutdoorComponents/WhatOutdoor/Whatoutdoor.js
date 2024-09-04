import React from "react";

// MUI
import { makeStyles } from "@mui/styles";
import {
  Box,
  Grid,
  Typography,
} from "../../../../../DesignData/MaterialUi/material-ui";

import { ourServicesbanner } from "../../../../../DesignData/Images/Images";

import { OutdoorContent } from "../../../../../assets/json/newDesign/OutdoorContent";

import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  OurServicsBanner: {
    backgroundImage: `url(${ourServicesbanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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
};
const WhatOutdoorMainTitle = {
  fontSize: {
    xs: "30px",
    sm: "30px",
    md: "32px",
    lg: "32px",
  },
  color: "white",
  lineHeight: {
    xs: "40px",
    sm: "40px",
    md: "30px",
    lg: "30px",
  },
  fontWeight: {
    xs: "500",
    sm: "500",
    md: "400",
    lg: "400",
  },
  fontFamily: "Inter, sans-serif",
  textAlign: {
    xs: "center",
    sm: "center",
    md: "left",
    lg: "left",
  },
};
const WhatAboutDescription = {
  margin: {
    xs: "10px 10px 0px 10px",
    sm: "10px 10px 0px 10px",
    md: "20px 0px 0px 0px",
    lg: "20px 0px 0px 0px",
  },
  fontSize: {
    xs: "20px",
    sm: "20px",
    md: "16px",
    lg: "16px",
  },
  lineHeight: {
    xs: "30px",
    sm: "30px",
    md: "22px",
    lg: "22px",
  },
  color: "white",
  fontWeight: {
    xs: "20px",
    sm: "20px",
    md: "400",
    lg: "400",
  },
  textAlign: "left",
  fontFamily: "Inter, sans-serif",
};

const Whatoutdoor = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.OurServicsBanner}>
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
            {/* title and description */}
            <Box
              sx={{
                display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                flexDirection: "column",
              }}
            >
              {/* DeskTop */}
              <Box>
                <Typography sx={WhatOutdoorMainTitle}>
                  WHAT{" "}
                  <span style={{ color: "#FF1F2F" }}>
                    OUTDOOR ADVERTISING INCLUDES?
                  </span>
                </Typography>
              </Box>
              <Box>
                <Typography sx={WhatAboutDescription}>
                  Outdoor advertising includes billboards, street furniture,
                  transit advertising, guerilla marketing, vehicle wraps, and
                  more. These techniques help every brand get high visibility
                  and mind recall. When considering OOH advertising, various
                  factors come into play, like the best outdoor advertising
                  agency, their experience, offerings, and more. Along with all
                  these, outdoor advertising costs also play an important role.
                  Janus Alive thrives on providing the best out-of-house
                  advertising services to its clients for higher impact and
                  engagement. Reach out to us for better plans and services.
                </Typography>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                {OutdoorContent.map((item, index) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      margin: {
                        xs: "0px 10px 10px 10px",
                        sm: "0px 10px 10px 10px",
                        md: "0px 10px 10px 0px",
                        lg: "0px 10px 10px 0px",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      sx={{
                        height: "20px",
                        width: "30px",
                      }}
                    />
                    <Link to={item.link} style={{ textDecoration: "none" }}>
                      <Typography
                        sx={{
                          color: "white",
                          marginLeft: "10px",
                          cursor: "pointer",
                          fontSize: "16px",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: "400",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Link>
                  </Box>
                ))}
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
    </>
  );
};

export default Whatoutdoor;
