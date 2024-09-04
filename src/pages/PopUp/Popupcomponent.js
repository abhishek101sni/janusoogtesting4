// import React, { useEffect, useState } from "react";

// // MATERIAL-UI
// import { Typography, Grid, Box, Button } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import SendIcon from "@mui/icons-material/Send";

// // IMAGES
// import closebtn from "../../assets/images/close.png";
// import call from "../../assets/images/call.png";
// import mail from "../../assets/images/mail.png";

// // REDUX
// // post-----
// import { submitenquiry } from "../../redux/actions/Outdoor";
// // get-----
// import { getProductsById } from "../../redux/actions/Outdoor";

// // REACT-ROUTER-DOM
// import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

// MATERIAL-UI
import { Typography, Grid, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

// IMAGES
import closebtn from "../../assets/images/close.png";
import call from "../../assets/images/call.png";
import mail from "../../assets/images/mail.png";

// REDUX
import { submitenquiry } from "../../redux/actions/Outdoor";

// REACT-ROUTER-DOM
import { useLocation } from "react-router-dom";

// TOASTIFY
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Popupcomponent.css";

const Popupcomponent = ({ ProductId, ...props }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        left: "0px",
        top: "0px",
        backgroundColor: "rgba(0,0,0,0.5)",
        width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
        height: { xs: "100%", sm: "100%", md: "100vh", lg: "100vh" },
        display: "flex",
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "center",
          lg: "center",
        },
        alignItems: { xs: "center", sm: "center", md: "center", lg: "center" },
        zIndex:"99"
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#fff",
          border: "1px solid #999",
          borderRadius: "4px",
          marginTop: { xs: "10px", sm: "10px", md: "60px", lg: "60px" },
          overflow: "auto",
          width: { xs: "95%", sm: "95%", md: "500px", lg: "500px" },
          height: { xs: "400px", sm: "400px", md: "500px", lg: "500px" },
          paddingLeft: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
          paddingRight: { xs: "0px", sm: "0px", md: "0px", lg: "0px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={closebtn}
            onClick={props.handleClose}
            style={{
              width: "15px",
              height: "15px",
              marginLeft: "40px",
            }}
          />
        </Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{
                paddingLeft: { xs: "18px", sm: "18px", md: "15px", lg: "15px" },
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "25px",
                    lg: "25px",
                  },
                  fontWeight: "700",
                  Family: "Poppins, sans-serif",
                }}
              >
                Request a Call
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={11}
            lg={11}
            sx={{ backgroundColor: "#fff" }}
          >
            <Box
              sx={{
                paddingLeft: { xs: "10px" },
                paddingRight: { xs: "10px" },
                marginTop: { xs: "0px", sm: "0px", md: "10px", lg: "10px" },
              }}
            >
              <TextField
                id="standard-basic"
                label="Name*"
                variant="standard"
                value={name}
                sx={{ width: "100%" }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={11}
            lg={11}
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              },
              justifyContent: { md: "space-between", lg: "space-between" },
              marginTop: { xs: "0px", sm: "0px", md: "20px", lg: "20px" },
            }}
          >
            <Box
              sx={{
                paddingLeft: { xs: "10px" },
                paddingRight: { xs: "10px" },
              }}
            >
              <TextField
                id="standard-basic"
                label="Email*"
                variant="standard"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                sx={{
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                }}
              />
            </Box>
            <Box
              sx={{ paddingLeft: { xs: "10px" }, paddingRight: { xs: "10px" } }}
            >
              <TextField
                id="standard-basic"
                label="Phone*"
                variant="standard"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                sx={{
                  width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={11}
            lg={11}
            sx={{ backgroundColor: "#fff" }}
          >
            <Box
              sx={{
                paddingLeft: { xs: "10px" },
                paddingRight: { xs: "10px" },
                marginTop: { xs: "0px", sm: "0px", md: "20px", lg: "20px" },
              }}
            >
              <TextField
                id="standard-basic"
                label="Write a message*"
                variant="standard"
                sx={{ width: "100%" }}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
          <Grid item xs={12} sm={12} md={11} lg={11}>
            <Box
              sx={{
                marginTop: { xs: "20px", sm: "20px", md: "40px", lg: "40px" },
                paddingLeft: { xs: "10px", sm: "10px", md: "10px", lg: "10px" },
                paddingRight: {
                  xs: "10px",
                  sm: "10px",
                  md: "10px",
                  lg: "10px",
                },
              }}
            >
              <Box
                sx={{
                  bgcolor: "#C02222",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "35px",
                  borderRadius: "5px",
                }}
                onClick={() => {
                  if (
                    name.trim() === "" ||
                    email.trim() === "" ||
                    phone.trim() === "" ||
                    message.trim() === ""
                  ) {
                    toast.error("Please fill all required fields!");
                  } else if (!/\S+@\S+\.\S+/.test(email)) {
                    toast.error("Please enter a valid email address!");
                  } else if (!/^\d{10}$/.test(phone)) {
                    toast.error("Please enter a valid 10-digit phone number!");
                  } else {
                    const submissionData = {
                      name,
                      email,
                      phone,
                      message,
                      ProductId,
                    };

                    submitenquiry(submissionData, props.handleClose);
                    toast.success("Message sent successfully!");
                    resetForm();
                  }
                }}
              >
                <Button
                  sx={{
                    color: "#fff",
                    paddingLeft: "10px",
                    textTransform: "none",
                  }}
                  endIcon={<SendIcon />}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "16px" },
                    }}
                  >
                    Submit
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
          <Grid item xs={12} sm={12} md={11} lg={11}>
            <Box
              sx={{
                marginTop: { xs: "20px", sm: "20px", md: "40px", lg: "40px" },
                paddingLeft: { xs: "10px", sm: "10px", md: "10px", lg: "10px" },
                paddingRight: {
                  xs: "10px",
                  sm: "10px",
                  md: "10px",
                  lg: "10px",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "35px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: { xs: "0px", sm: "0px", md: "5px", lg: "5px" },
                  }}
                >
                  <img src={call} style={{ width: "15px", height: "15px" }} />
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "12px",
                        sm: "12px",
                        md: "15px",
                        lg: "15px",
                      },
                      paddingLeft: { xs: "5px" },
                      color: "#C02222",
                    }}
                  >
                    +971 50 2446 913
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: { xs: "0px", sm: "0px", md: "5px", lg: "5px" },
                    paddingLeft: { xs: "20px", sm: "20px", md: "25px", lg: "25px" },
                  }}
                >
                  <img src={mail} style={{ width: "15px", height: "15px" }} />
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "12px",
                        sm: "12px",
                        md: "15px",
                        lg: "15px",
                      },
                      paddingLeft: { xs: "5px" },
                      color: "#C02222",
                    }}
                  >
                    info@domain.com
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={0.5} lg={0.5}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Popupcomponent;

