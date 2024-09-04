import React, { useState, useEffect } from "react";

// MUI
import { Box } from "@mui/material";
// import ;

// HELMET
import { Helmet } from "react-helmet";

// CSS
import "./Home.css";

// PAGES 1
import HomePageBanners from "./HomeComponents2/HomePageBanners/HomePageBanners";
import Explorecity from "./HomeComponents2/ExploreCity/Explorecity";
import Weseethings from "./HomeComponents2/WeSeeThings/Weseethings";
import Triumphs2 from "./HomeComponents2/Triumphs2/Triumphs2";
import Experience2 from "./HomeComponents2/Experience2/Experience2";
import Confused from "./HomeComponents2/Confused/Confused";
import Ourprocess from "./HomeComponents2/OurProcess/Ourprocess";
import Ourservices from "./HomeComponents2/OurServices/Ourservices";
import Blogsection from "./HomeComponents2/BlogSection/Blogsection";
import Topmediaspends from "./HomeComponents2/TopMediaSpends/Topmediaspends";

// PAGES 2

const Home = () => {
  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const texts = ["unipole", "search", "find", "discover"];
  const speed = 150;

  useEffect(() => {
    if (index < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setPlaceholder(placeholder + texts[textIndex][index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setPlaceholder("");
        setIndex(0);
        setTextIndex((prevTextIndex) => (prevTextIndex + 1) % texts.length); // Cycle through texts
      }, 2000);

      return () => clearTimeout(resetTimeout);
    }
  }, [index, placeholder, textIndex]);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .custom-placeholder::placeholder {
        color: green;
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>
          JANUSOOH is the India's largest outdoor advertising agency
        </title>
        <meta
          name="description"
          content={
            "Discover the power of JANUSOOH, India's largest outdoor advertising agency. Elevate your brand's reach with our innovative solutions and unparalleled expertise."
          }
        />
      </Helmet>

      {/* Home 1 */}
      <Box sx={{ marginTop: { xs: "51px", sm: "51px", md: "0px", lg: "0px" } }}>
        <HomePageBanners />
        <Weseethings />
        <Ourservices />
        <Explorecity />
        <Ourprocess />
        <Confused />
        <Blogsection />
        <Experience2 />
        <Topmediaspends />
        <Triumphs2 />
      </Box>
    </>
  );
};

export default Home;
