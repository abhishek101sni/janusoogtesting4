import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
// MUI
import { makeStyles } from "@mui/styles";
import { Box, Grid, Typography } from "../../DesignData/MaterialUi/material-ui";

// CSS
import "./Contactus.css";

// Images
import {
  outdoorBanner,
  ourServicesbanner,
  weSeeThingsBgImage,
  locationIcon,
  CallIcon,
  locationMail,
} from "../../DesignData/Images/Images";

import {
  TopBannerMainTitle,
  MainMargins,
  ContactUsInputStyle,
  MessageInputStyle,
  inputsMargins,
} from "../Styles/Styles";

const useStyles = makeStyles(() => ({
  bgImage: {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${outdoorBanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height:"400px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
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
  aboutOutdoorAdver: {
    backgroundImage: `url(${weSeeThingsBgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  sideGridBgColor: {},
  MainGridBgColor: {},
}));

const Contactus = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://www.januskoncepts.in/janusoohadmin/api/form/form.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      // const data = await response.json();
      // Handle success
      if (response) {
        toast.success("Form submitted successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          city: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Form submission failed. Please try again.");
    }
  };
  return (
    <>
      {/* Banner */}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography sx={TopBannerMainTitle}>
                Contact<span style={{ color: "#FF1F2F" }}> Us</span>
              </Typography>
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

      {/* Form */}
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
            <Grid container>
              {/* Address grid */}
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                // sx={{ backgroundColor: "pink" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // justifyContent: "space-between",
                    height: "100%",
                    marginLeft: {
                      xs: "10px",
                      sm: "10px",
                      md: "0px",
                      lg: "0px",
                    },
                    marginRight: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                  }}
                >
                  {/* Query message */}
                  <Box >
                    <Typography
                      sx={{
                        color: "#FF1F2F",
                        fontSize: {
                          xs: "18px",
                          sm: "18px",
                          md: "16px",
                          lg: "16px",
                        },
                        fontWeight: {
                          xs: "600",
                          sm: "600",
                          md: "500",
                          lg: "500",
                        },
                        lineHeight: {
                          xs: "22px",
                          sm: "22px",
                          md: "22px",
                          lg: "22px",
                        },
                        fontFamily: "Inter, sans-serif",
                      }}
                    >
                      Have questions or need assistance? Reach out to us; your
                      satisfaction is our priority. We're just a message away!
                    </Typography>
                  </Box>
                  <Box sx={{
                    marginTop:{
                      xs:"0px",
                      sm:"0px",
                      md:"10px",
                      lg:"10px"
                    }
                  }}>
                  {/* Address */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "none",
                      },
                      justifyContent: "space-between",
                      marginTop: {
                        xs: "20px",
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                      },
                      // backgroundColor: "green",
                    }}
                  >
                    <Box
                      component="img"
                      src={locationIcon}
                      sx={{
                        width: {
                          xs: "22px",
                          sm: "22px",
                          md: "20px",
                          lg: "20px",
                        },
                        height: {
                          xs: "22px",
                          sm: "22px",
                          md: "20px",
                          lg: "20px",
                        },
                        marginTop: {
                          xs: "4px",
                          sm: "4px",
                          md: "4px",
                          lg: "4px",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        marginLeft: {
                          xs: "5px",
                          sm: "5px",
                          md: "5px",
                          lg: "5px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: {
                            xs: "15px",
                            sm: "15px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontWeight: {
                            xs: "400",
                            sm: "400",
                            md: "500",
                            lg: "500",
                          },
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        66 , Second Floor , Atul Grove Road, Janpath , Connaught
                        place , New Delhi , Delhi 110001
                      </Typography>
                    </Box>
                  </Box>
                  {/* Call */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={CallIcon}
                      sx={{
                        width: {
                          xs: "22px",
                          sm: "22px",
                          md: "20px",
                          lg: "20px",
                        },
                        height: {
                          xs: "22px",
                          sm: "22px",
                          md: "20px",
                          lg: "20px",
                        },
                        marginTop: {
                          xs: "4px",
                          sm: "4px",
                          md: "4px",
                          lg: "4px",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        marginLeft: {
                          xs: "5px",
                          sm: "5px",
                          md: "5px",
                          lg: "5px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: {
                            xs: "15px",
                            sm: "15px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontWeight: {
                            xs: "400",
                            sm: "400",
                            md: "500",
                            lg: "500",
                          },
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        +91 96507-64004
                      </Typography>
                    </Box>
                  </Box>
                  {/* Mail */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={locationMail}
                      sx={{
                        width: {
                          xs: "22px",
                          sm: "22px",
                          md: "20px",
                          lg: "20px",
                        },
                        height: {
                          xs: "22px",
                          sm: "22px",
                          md: "20px",
                          lg: "20px",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        marginLeft: {
                          xs: "5px",
                          sm: "5px",
                          md: "5px",
                          lg: "5px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: {
                            xs: "15px",
                            sm: "15px",
                            md: "14px",
                            lg: "14px",
                          },
                          fontWeight: {
                            xs: "400",
                            sm: "400",
                            md: "500",
                            lg: "500",
                          },
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        birender@januskoncepts.com
                      </Typography>
                    </Box>
                  </Box>
                  </Box>
                </Box>
              </Grid>
              {/* Inputs grid */}
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <form onSubmit={handleSubmit}>
                  {/* name and email */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                      },
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "100%",
                      },
                    }}
                  >
                    {/* Name */}
                    <Box
                      sx={{
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "0px",
                          lg: "0px",
                        },
                      }}
                    >
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Name"
                        className="inputField"
                        autoComplete="off"
                        style={ContactUsInputStyle}
                      />
                    </Box>
                    {/* Email */}
                    <Box
                      sx={{
                        marginTop: {
                          xs: "20px",
                          sm: "20px",
                          md: "0px",
                          lg: "0px",
                        },
                      }}
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="inputField"
                        autoComplete="off"
                        style={ContactUsInputStyle}
                      />
                    </Box>
                  </Box>
                  {/* city and phone */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row",
                        lg: "row",
                      },
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: {
                        xs: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "100%",
                      },
                    }}
                  >
                    {/* city */}
                    <Box sx={inputsMargins}>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="City"
                        className="inputField"
                        autoComplete="off"
                        style={ContactUsInputStyle}
                      />
                    </Box>
                    {/* phone */}
                    <Box sx={inputsMargins}>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Phone"
                        className="inputField"
                        autoComplete="off"
                        style={ContactUsInputStyle}
                      />
                    </Box>
                  </Box>
                  {/* message */}
                  <Box
                    sx={{
                      marginTop: {
                        xs: "20px",
                        sm: "20px",
                        md: "20px",
                        lg: "20px",
                      },
                      padding: {
                        xs: "0px 50px 0px 50px",
                        sm: "0px 50px 0px 50px",
                        md: "0px 0px 0px 0px",
                        lg: "0px 0px 0px 0px",
                      },
                    }}
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Message"
                      className="textareaField"
                      autoComplete="off"
                      style={MessageInputStyle}
                    />
                  </Box>
                  {/* Submit button */}
                  <Box
                    sx={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                        lg: "flex-start",
                      },
                    }}
                  >
                    <button
                      type="submit"
                      style={{
                        width: "100px",
                        backgroundColor: "#FF1F2F",
                        height: "40px",
                        borderRadius: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "13px",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        SUBMIT
                      </Typography>
                    </button>
                  </Box>
                </form>
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

export default Contactus;
