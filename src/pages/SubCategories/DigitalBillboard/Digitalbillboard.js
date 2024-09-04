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
import "./Digitalbillboard.css";

// REACT-HELMET
import { Helmet } from "react-helmet";
import Cards from "../../Card/Cards";

// REACT-ROUTER_DOM
import { useNavigate } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import {
  unipoleBanner,
  blackRightArrow,
  noMediaFound,
} from "../../../DesignData/Images/Images";
import Whatoutdoor from "../../Category/Outdoor/OutdoorComponents/WhatOutdoor/Whatoutdoor";
import Faq from "../../FAQ/Faq";

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

  const [visibleCount, setVisibleCount] = useState(9);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [stateData, setStateData] = useState(null);
  const [cityData, setCityData] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [filterData, setFilterData] = useState("");

  // Dropdown
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedState(event.target.value);

    fetch(
      "https://www.januskoncepts.in/janusoohadmin/api/stateandcity/location.php?state_id=" +
        event.target.value
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log("cityData", responseJson);
        // setSelectedState(event.target.value)
        setCityData(responseJson);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setLoading(false);
      });
  };

  // fetch filter data
  const handleFilter = () => {
    fetch(
      `https://www.januskoncepts.in/janusoohadmin/api/fetchstatewise/api.php?state_id=${selectedState}&city_id=${selectedCity}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("hello filterdata", data);
        // If no data is returned, set data to an empty array
        setData(data.length > 0 ? data : []);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  useEffect(() => {
    setLoading(true);

    // Fetch Product from the API
    fetch(
      "https://www.januskoncepts.in/janusoohadmin/api/api_product/fetchproduct.php"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("hello unipole", data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setLoading(false);
      });

    // Fetch state and city
    fetch(
      "https://www.januskoncepts.in/janusoohadmin/api/stateandcity/location.php"
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log("state and city", responseJson);
        setStateData(responseJson);
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
                        DIGITAL BILLBOARD
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
                            value={selectedState}
                            onChange={handleSelectChange}
                            style={{
                              border: "2px dashed red",
                              width: "210px",
                              marginRight: "5px",
                              height: "42px",
                              borderRadius: "5px",
                              color: "red",
                              outline: "none",
                            }}
                          >
                            <option style={{ color: "red" }}>State</option>
                            {stateData &&
                              stateData.map((item) => (
                                <option
                                  key={item?.id}
                                  style={{
                                    color: "red",
                                    fontFamily: "Inter, sans-serif",
                                  }}
                                  value={item?.id}
                                >
                                  {item?.name.charAt(0).toUpperCase() +
                                    item?.name.slice(1).toLowerCase()}
                                </option>
                              ))}
                          </select>
                        </Box>

                        {/* City */}
                        <Box>
                          <select
                            id="dropdown"
                            value={selectedCity}
                            onChange={(event) => {
                              setSelectedCity(event.target.value);
                            }}
                            style={{
                              border: "2px dashed red",
                              width: "210px",
                              marginRight: "5px",
                              height: "42px",
                              borderRadius: "5px",
                              color: "red",
                              outline: "none",
                            }}
                          >
                            <option style={{ color: "red" }}>City</option>
                            {cityData &&
                              cityData.map((item) => (
                                <option
                                  key={item?.id}
                                  style={{ color: "red" }}
                                  value={item?.id}
                                >
                                  {item?.city}
                                </option>
                              ))}
                          </select>
                        </Box>

                        <Box>
                          <button
                            style={{
                              border: "none",
                              opacity: selectedState && selectedCity ? 1 : 0.5,
                            }}
                            onClick={handleFilter}
                            disabled={!selectedState || !selectedCity}
                          >
                            <Box sx={SearchBarbutton}>
                              <Typography sx={searchBarButtonText}>
                                Submit
                              </Typography>
                            </Box>
                          </button>
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
                        DIGITAL BILLBOARD
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
                      value={selectedState}
                      onChange={handleSelectChange}
                      style={{
                        border: "2px dashed red",
                        width: "160px",
                        height: "42px",
                        borderRadius: "5px",
                      }}
                    >
                      <option style={{ color: "red" }}>State</option>
                      {stateData &&
                        stateData?.map((item) => (
                          <option style={{ color: "red" }} value={item?.id}>
                            {item?.name?.charAt(0).toUpperCase() +
                              "" +
                              item?.name?.slice(1).toLowerCase()}
                          </option>
                        ))}
                    </select>
                  </Box>

                  {/* City */}
                  <Box sx={{ padding: "10px" }}>
                    <select
                      id="dropdown"
                      value={selectedCity}
                      onChange={(event) => {
                        setSelectedCity(event.target.value);
                      }}
                      style={{
                        border: "2px dashed red",
                        width: "160px",
                        height: "42px",
                        borderRadius: "5px",
                      }}
                    >
                      <option value="" style={{ color: "red" }}>
                        City
                      </option>
                      <option style={{ color: "red" }}>City</option>
                      {cityData &&
                        cityData?.map((item) => (
                          <option style={{ color: "red" }} value={item?.id}>
                            {item?.city}
                          </option>
                        ))}
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
                  <Box>
                    <button
                      style={{
                        border: "none",
                        opacity: selectedState && selectedCity ? 1 : 0.5,
                      }}
                      onClick={handleFilter}
                      disabled={!selectedState || !selectedCity}
                    >
                      <Box sx={SearchBarbuttonMobile}>
                        <Typography sx={searchBarButtonText}>Submit</Typography>
                      </Box>
                    </button>
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
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {data &&
                  data.filter((item) => item?.sub_category_name === "digital billboard")
                    .length > 0 ? (
                    <>
                      {data
                        ?.filter(
                          (item) => item?.sub_category_name === "digital billboard"
                        )
                        ?.slice(0, visibleCount)
                        ?.map((item) => (
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
                                { state: { data: item } }
                              );
                            }}
                          />
                        ))}
                    </>
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "red",
                      }}
                    >
                      <Box
                        component="img"
                        src={noMediaFound}
                        sx={{
                          width: "250px",
                          height: "250px",
                          alignItems: "center",
                        }}
                      />
                    </Box>
                  )}
                </Grid>

                {/* View more */}
                {data?.filter((item) => item?.sub_category_name === "digital billboard")
                  .length > 9 && (
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
                )}
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

            {/* What about outdoor */}
            <Whatoutdoor />
          </>
        )}
      </Box>
    </>
  );
};

export default Unipole;
