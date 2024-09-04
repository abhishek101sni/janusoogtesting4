import React from "react";

// React-Router-Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PARENT PAGES
import Home from "../pages/Home/Home";
import Aboutus from "../pages/AboutUs/Aboutus";
import Contactus from "../pages/ContactUs/Contactus";
import Blogs from "../pages/Blogs/Blogs";
import Ourservice from "../pages/OurServices/Ourservice";
import Footer from "../components/Footer/Footer";

// HEADER
import Header from "../components/Header/Header";

// OUR-SERVICES
import Outdoor from "../pages/Category/Outdoor/Outdoor";
import Metro from "../pages/Category/Metro/Metro";
import Airportbranding from "../pages/Category/AirportBranding/Airportbranding";
import Inflightbranding from "../pages/Category/InflightBranding/Inflightbranding";
import Mallmedia from "../pages/Category/MallMedia/Mallmedia";
import Transitmedia from "../pages/Category/TransitMedia/Transitmedia";

//FULL-CARD
import Fullcard from "../pages/FullCard/Fullcard";
import Fullblog from "../pages/Blogs/FullBlog/Fullblog";

// SCROLL-TO-TOP
import Scrolltotop from "../pages/ScrollToTop/Scrolltotop";
import Individual from "../pages/Individual/Individual";
import HoardingIn from "../pages/HoardingsIn/HoardingIn";

// All Outdoor
import Allout from "../pages/Allout/Allout";
import Alloutoptional from "../pages/AllOutOptional/Alloutoptional";
import Alloutoptionalcities from "../pages/AllOutOptional/Alloutoptionalcities/Alloutoptionalcities";

// TYPES
// import Digital from "../pages/Types/Digital/Digital";
// import Unipole from "../pages/Types/Unipole/Unipole";
// import Billboard from "../pages/Types/Billboard/Billboard";
// import Digitalbillboard from "../pages/Types/DigitalBillboard/Digitalbillboard";
// import Ooh from "../pages/Types/Ooh/Ooh";
// import Busadvertising from "../pages/Types/Busadvertising/Busadvertising";
// import Dooh from "../pages/Types/Dooh/Dooh";

import Dooh from "../pages/SubCategories/Dooh/Dooh";
import Unipole from "../pages/SubCategories/Unipole/Unipole";
import Traditionalbillboard from "../pages/SubCategories/TraditionalBillboard/Traditionalbillboard";
import Digitalbillboard from "../pages/SubCategories/DigitalBillboard/Digitalbillboard";
import Ooh from "../pages/SubCategories/Ooh/Ooh";
import Busadvertising from "../pages/SubCategories/BusAdvertising/Busadvertising";

// Types

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Scrolltotop>
        <Routes>
          {/*STATIC URLS---------------------------------------------------------------------------*/}

          {/* Header's Links */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us/" element={<Aboutus />} />
          <Route path="/our-service/" element={<Ourservice />} />
          <Route path="/blogs/" element={<Blogs />} />
          <Route path="/contact-us/" element={<Contactus />} />

          {/* Categories Links */}
          <Route path="/metro-advertising-agency/" element={<Metro />} />
          <Route path="/outdoor-advertising-agency/" element={<Outdoor />} />
          <Route
            path="/airport-branding-advertising-agency/"
            element={<Airportbranding />}
          />
          <Route
            path="/mall-branding-advertising-agency/"
            element={<Mallmedia />}
          />
          <Route
            path="/inflight-branding-advertising-agency/"
            element={<Inflightbranding />}
          />
          <Route
            path="/transit-media-advertising-agency/"
            element={<Transitmedia />}
          />
          <Route
            path="/outdoor-hoarding-advertising/"
            element={<Alloutoptional />}
          />
          <Route path="/all-outdoor/" element={<Allout />} />

          {/* New Subcategories routes */}
          <Route path={"/dooh/"} element={<Dooh />} />
          <Route path={"/unipole/"} element={<Unipole />} />
          <Route path={"/traditional-billboard/"} element={<Traditionalbillboard/>} />
          <Route path={"/digital-billboard/"} element={<Digitalbillboard/>} />
          <Route path={"/ooh/"} element={<Ooh/>} />
          <Route path={"/bus-advertising/"} element={<Busadvertising/>} />



          {/*DYNAMIC URLS---------------------------------------------------------------------------*/}
          <Route path="/:param" element={<HoardingIn />} />
          <Route path="/blog/:param?" element={<Fullblog />} />
          <Route path="/:category?/:seotitle?" element={<Fullcard />} />
          <Route path="/info/:param1?/:param2?" element={<Individual />} />
          <Route
            path={"/:state-outdoor-hoarding-advertising-agencies"}
            element={<Alloutoptionalcities />}
          />
        </Routes>
      </Scrolltotop>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
