import React, { useEffect, useState } from "react";

// MATERIAL-UI
import { Typography, Grid, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

// IMAGES
import sampleImg from "../../assets/images/add4.webp";

// REACT-ROUTER-DOM
import { useLocation, useParams } from "react-router-dom";

// REDUX
import { getProductsById } from "../../redux/actions/Outdoor";

// REACT-HELMET
import { Helmet } from "react-helmet";

// PAGES
import Popupcomponent from "../PopUp/Popupcomponent";

// TOASTI-FY
import { ToastContainer, toast } from "react-toastify";
import { getProductDetails } from "../../redux/actions/Individual";

const Individual = () => {
  const [Data, setData] = useState(null);

  const { param1, param2 } = useParams();

  useEffect(() => {
    getProductDetails(param2).then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  return <h1>{Data?.state}</h1>;
};

export default Individual;
