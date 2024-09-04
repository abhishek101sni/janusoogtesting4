import React from "react";

import { Typography, Box } from "@mui/material";

import { makeStyles } from "@mui/styles";


import JanusAdvertisement from "../../assets/images/JanusAdvertisement.jpeg";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: "1rem",
    minWidth: "275",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Fullpageadvertisement = () => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      sx={{
        display: "flex",
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "flex-end",
          lg: "flex-end",
        },
        paddingLeft: {
          xs: "10px",
          sm: "10px",
          md: "20px",
          lg: "20px",
        },
        paddingRight: {
          xs: "10px",
          sm: "10px",
          md: "0px",
          lg: "0px",
        },
        paddingTop:{
          xs: "10px",
          sm: "10px",
          md: "0px",
          lg: "0px",
        },
        paddinBottom:{
          xs: "10px",
          sm: "10px",
          md: "20px",
          lg: "20px",
        }
      }}
    >
      <a
        href="https://www.januskoncepts.com"
        // href="https://www.youtube.com/uttaranchalwasi"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Box
          sx={{
            backgroundColor: "#F0F0F0",

            marginTop: {
              xs: "10px",
              sm: "10px",
              md: "0px",
              lg: "0px",
            },
            marginBottom: {
              xs: "40px",
              sm: "40px",
              md: "0px",
              lg: "0px",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "10px",
                  md: "9px",
                  lg: "9px",
                },
                fontWeight: "600",
                textAlign: "center",
                color: "black",
              }}
            >
              ADVERTISEMENT
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              width: {
                xs: "200px",
                sm: "200px",
                md: "100%",
                lg: "100%",
              },
              height: {
                xs: "200px",
                sm: "200px",
                md: "100%",
                lg: "100%",
              },
            }}
            alt="redTriangleArrow"
            src={JanusAdvertisement}
          />
        </Box>
      </a>
    </Box>
  );
};

export default Fullpageadvertisement;
