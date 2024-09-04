import React, { useState } from "react";

// MUI
import { makeStyles } from "@mui/styles";
import { Box, Grid, Typography } from "../../DesignData/MaterialUi/material-ui";

import { locationicon, rightarr } from "../../DesignData/Images/Images";

const Searchbar = () => {
  // Dropdown
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // ---
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: "410px",
          width: "700px",
          marginLeft: "67px",
          height: "50px",
          backgroundColor: "#FFFFFF",
          borderRadius: "5px",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            width: "325px",
            height: "42px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "2px dashed #FF1F2F",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRight: "2px dashed #FF1F2F",
              height: "42px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={locationicon}
              sx={{
                width: "20px",
                height: "25px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "42px",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Typography sx={{ color: "#FF1F2F", marginLeft: "15px" }}>
              Search Your Location
            </Typography>
          </Box>
        </Box>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleSelectChange}
          style={{
            border: "2px dashed red",
            width: "250px",
            marginRight: "5px",
            height: "42px",
            borderRadius: "5px",
          }}
        >
          <option value="" style={{ color: "red", backgroundColor: "red" }}>
            Select Your Media Type
          </option>
          <option value="option1">Outdoor Advertising</option>
          <option value="option2">Metro Advertising</option>
          <option value="option3">Airport Branding</option>
          <option value="option3">Mall Branding</option>
          <option value="option3">Inflight Branding</option>
          <option value="option3">Transit Media</option>
          <option value="option3">All Hoardings</option>
          <option value="option3">All Hoardings Advertising</option>
        </select>
        {selectedOption && <p>You selected: {selectedOption}</p>}

        <Box
          sx={{
            width: "100px",
            height: "42px",
            backgroundColor: "red",
            borderRadius: "5px",
            marginRight: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: "400",
              fontSize: "18px",
            }}
          >
            Search
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Searchbar;
