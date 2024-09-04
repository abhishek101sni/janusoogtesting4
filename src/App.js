import React, { useEffect, useState } from "react";
import axios from "axios";

// MUI
import {
  Box,
  Modal,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// PAGES
import Navigation from "./navigation/Navigation";
// REDUX
import { Provider } from "react-redux";
import store from "./redux/store";
import { Contacticons } from "./pages/ContactIcons/Contacticons";
import Example from "./pages/Example";

const App = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append("phone", phone);

    axios
      .post(
        "https://www.januskoncepts.in/janusoohadmin/api/email_phone/phone.php",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log("hello response", response);
        if (response.data) {
          toast.success("Thanks, our expert will contact you soon", {
            position: "top-right",
            autoClose: 3000,
          });
          setPhone("");
          setOpen(false);
        } else {
          toast.error(`Submission failed: ${response.data}`, {
            position: "top-right",
            autoClose: 3000,
          });
          console.log("hello response data message");
        }
      })
      .catch((error) => {
        toast.error("An error occurred while submitting your phone number.", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <Provider store={store}>
      <Box>
        {/* <Modal
          open={open}
          onClose={handleClose}
          sx={{
            border: "none",
          }}
          BackdropProps={{
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.85)", // Adjust opacity as needed
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: {
                xs: "300px",
                sm: "300px",
                md: "400px",
                lg: "400px",
              },
              bgcolor: "white",
              p: 4,
              pt: 2,
              border: "none",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 1,
                top: 1,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>

            <Typography
              id="modal-description"
              sx={{
                mt: 2,
                fontFamily: "Poppins, sans-serif",
                fontSize: {
                  xs: "15px",
                  sm: "15px",
                  md: "20px",
                  lg: "20px",
                },
                fontWeight: {
                  xs: "500",
                  sm: "500",
                  md: "600",
                  lg: "600",
                },
                color: "#C02222",
                textAlign: "center",
              }}
            >
              Connect instantly by submitting your contact no.
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Phone Number"
                margin="normal"
                placeholder="+91 1234512345"
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ width: "100%", backgroundColor: "#C02222" }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Modal> */}
        <Navigation />
        <Contacticons />
        {/* <Example/> */}
      </Box>
    </Provider>
  );
};

export default App;
