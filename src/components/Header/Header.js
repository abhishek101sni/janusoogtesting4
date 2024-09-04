import React, { useState } from "react";

// MUI
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Button,
  Menu,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

// REACT_ROUTER_DOM
import { Link, useNavigate } from "react-router-dom";

// IMAGES
// import janusLogo from "../../assets/images/janusLogo.png";
import janusLogo from "../../assets/images/Header/janus-ooh-logo.png"
import newjanuslogo from "../../assets/images/Header/newJanusLogo.png"

import dropdownicon from "../../assets/images/dropDownIcon.png";

// light
import homeIcon4 from "../../assets/images/Side-Drawer-icons/light/home.png";
import aboutUsIcon4 from "../../assets/images/Side-Drawer-icons/light/group.png";
import servicesIcon4 from "../../assets/images/Side-Drawer-icons/light/customer.png";
import contactUsIcon4 from "../../assets/images/Side-Drawer-icons/light/phone-call.png";
import blogIcon4 from "../../assets/images/Side-Drawer-icons/light/blog.png";

// CSS
import "./Header.css";

const buttonHoverStyle = {
  "&:hover": {
    cursor: "pointer",
    color: "red",
  },
};

const drawerWidth = 240;
const navItems = [
  {
    to: "/",
    name: "HOME",
  },
  {
    to: "/about-us/",
    name: "ABOUT US",
  },
  {
    // to: "/sports",
    name: "OUR SERVICES",
  },
  {
    to: "/contact-us/",
    name: "CONTACT US",
  },
  // {
  //   to: "/blogs",
  //   name: "BLOGS",
  // },
];

function Header(props) {
  // dropdwon
  const [anchorEl, setAnchorEl] = useState(false);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  // dropdwon

  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <Link
        to={"/"}
        style={{
          flexGrow: 1,
          display: { xs: "none", sm: "block" },
          textDecoration: "none",
          color: "#fff",
          ...buttonHoverStyle,
        }}
      >
        <Box sx={{ marginTop: "20px" }}>
          <Box
            component="img"
            sx={{
              width: {
                xs: "90px",
                sm: "90px",
                md: "70px",
                lg: "70px",
              },
              height: {
                xs: "70px",
                sm: "70px",
                md: "50px",
                lg: "50px",
              },
              // marginLeft: { xs: "15px", sm: "15px", md: "43px", lg: "43px" },
              marginTop: { xs: "5px", sm: "5px", md: "25px", lg: "55px" },
            }}
            alt="janusLogo"
            src={newjanuslogo}
          />
        </Box>
      </Link>
      <Box sx={{ marginTop: "30px" }}>
        {/* Home */}
        <Box sx={{ borderTop: "1px solid #000" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "20px",
              marginTop: "7px",
              marginBottom: "7px",
            }}
          >
            <Box>
              <img
                src={homeIcon4}
                style={{ width: "23px", height: "23px", marginTop: "5px" }}
              />
            </Box>
            <Box sx={{ marginLeft: "15px" }}>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "400",
                    fontFamily: "Inter, sans-serif",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  HOME
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>

        {/* About us  */}
        <Box sx={{ borderTop: "1px solid #000" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "20px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            <Box>
              <img
                src={aboutUsIcon4}
                // src={aboutUsIcon2}
                // src={aboutUsIcon3}
                style={{ width: "23px", height: "23px", marginTop: "5px" }}
              />
            </Box>
            <Box sx={{ marginLeft: "15px" }}>
              <Link to={"/about-us"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "400",
                    fontFamily: "Inter, sans-serif",
                    // marginLeft: "4px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  ABOUT US
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Services  */}
        <Box sx={{ borderTop: "1px solid #000" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "20px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            <Box>
              <img
                src={servicesIcon4}
                style={{ width: "23px", height: "23px", marginTop: "5px" }}
              />
            </Box>
            <Box sx={{ marginLeft: "15px" }}>
              <Link to={"/our-service"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "400",
                    fontFamily: "Inter, sans-serif",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  OUR SERVICES
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Services  */}
        <Box sx={{ borderTop: "1px solid #000" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "20px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            <Box>
              <img
                src={blogIcon4}
                style={{ width: "23px", height: "23px", marginTop: "5px" }}
              />
            </Box>
            <Box sx={{ marginLeft: "15px" }}>
              <Link to={"/blogs/"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "400",
                    fontFamily: "Inter, sans-serif",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  BLOGS
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Contact us  */}
        <Box
          sx={{ borderTop: "1px solid #000", borderBottom: "1px solid #000" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "20px",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            <Box>
              <img
                src={contactUsIcon4}
                style={{ width: "23px", height: "23px", marginTop: "5px" }}
              />
            </Box>
            <Box sx={{ marginLeft: "15px" }}>
              <Link to={"/contact-us/"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "400",
                    fontFamily: "Inter, sans-serif",
                    marginLeft: "4px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }}
                >
                  CONTACT US
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: {
            xs: "rgb(8,8,8)",
            sm: "rgb(8,8,8)",
            md: "rgb(8,8,8, 0.4)",
            lg: "rgb(8,8,8, 0.4)",
          },
          // backdropFilter:"blur(30px)",
          // boxShadow:"0px 0px 30px rgba(227,228,237,0.37)",
          // border:"2px solid (255, 255, 255, 0.18)"
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
                lg: "space-between",
              },
            }}
          >
            {/* Janus Logo */}
            <Box
              sx={{
                marginLeft: {
                  xs: "0px",
                  sm: "0px",
                  md: "40px",
                  lg: "40px",
                },
              }}
            >
              <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "60px",
                      sm: "60px",
                      md: "70px",
                      lg: "70px",
                    },
                    height: {
                      xs: "40px",
                      sm: "40px",
                      md: "50px",
                      lg: "50px",
                    },
                    // marginLeft: {
                    //   xs: "100px",
                    //   sm: "100px",
                    //   md: "45px",
                    //   lg: "45px",
                    // },
                  }}
                  alt="janusLogo"
                  src={newjanuslogo}
                />
              </Link>
            </Box>

            {/* Menu Contents */}
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",

                  marginRight: {
                    xs: "0px",
                    sm: "0px",
                    md: "40px",
                    lg: "40px",
                  },
                }}
              >
                {/* Home*/}
                <Box>
                  <Link to="" style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        ...buttonHoverStyle,
                      }}
                    >
                      HOME
                    </Typography>
                  </Link>
                </Box>

                {/* About us */}
                <Box sx={{ paddingLeft: "30px" }}>
                  {/* <Button component={Link} to="/about-us/"> */}
                  <Link to="/about-us/" style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",  
                        ...buttonHoverStyle,
                      }}
                    >
                      ABOUT US
                    </Typography>
                  </Link>
                  {/* </Button> */}
                </Box>

                {/* Our Services - Dropdown starts */}
                <Box sx={{ paddingLeft: "30px" }}>
                  <Box
                    sx={{ display: "flex", flexDirection: "row" }}
                    onClick={() => navigate("/our-service")}
                  >
                    <Box>
                      <Typography
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        sx={{
                          color: "#fff",
                          fontSize: "16px",
                          fontWeight: "500",
                          fontFamily: "Inter, sans-serif",
                          ...buttonHoverStyle,
                        }}
                        onMouseOver={handleOpenMenu}
                      >
                        OUR SERVICES
                      </Typography>
                    </Box>
                    <Box>
                      <img
                        src={dropdownicon}
                        style={{
                          width: "10px",
                          height: "5px",
                          marginLeft: "5px",
                          marginBottom: "2px",
                        }}
                      />
                    </Box>
                  </Box>

                  <Menu
                    sx={{ marginTop: "9px" }}
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    MenuListProps={{ onMouseLeave: handleCloseMenu }}
                  >
                    <Box sx={{ width: "250px", borderRadius: "0px" }}>
                      {/* outdoor Advertising */}
                      <Box
                        sx={{
                          marginTop: "5px",
                          borderBottom: "1px solid #D3D3D3",
                        }}
                      >
                        <Link
                          to={"/outdoor-advertising-agency/"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              paddingBottom: "5px",
                            }}
                          >
                            Outdoor Advertisement
                          </Typography>
                        </Link>
                      </Box>
                      {/* outdoor ADVERTISMENT */}
                      {/* <Box
                      sx={{
                        marginTop: "5px",
                        borderBottom: "1px solid #D3D3D3",
                      }}
                    >
                      <Link
                        to={"/outdoor-advertising-agency/"}
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          sx={{
                            marginLeft: "20px",
                            paddingTop: "1px",
                            paddingBottom: "1px",
                            color: "#000",
                            "&:hover": {
                              color: "red",
                              cursor: "pointer",
                            },
                            fontSize: "15px",
                            fontWeight: "600",
                            fontFamily: "Inter, sans-serif",
                            paddingBottom: "5px",
                          }}
                        >
                          Outdoor Advertising
                        </Typography>
                      </Link>
                    </Box> */}

                      {/* metro*/}
                      <Box sx={{ borderBottom: "1px solid #D3D3D3" }}>
                        <Link
                          to={"/metro-advertising-agency/"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              paddingTop: "7px",
                              paddingBottom: "7px",
                            }}
                          >
                            Metro Advertising
                          </Typography>
                        </Link>
                      </Box>

                      {/* Airport branding */}
                      <Box sx={{ borderBottom: "1px solid #D3D3D3" }}>
                        <Link
                          to={"/airport-branding-advertising-agency/"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              paddingTop: "7px",
                              paddingBottom: "7px",
                            }}
                          >
                            Airport Branding
                          </Typography>
                        </Link>
                      </Box>

                      {/* MALL-BRANDING */}
                      <Box sx={{ borderBottom: "1px solid #D3D3D3" }}>
                        <Link
                          to={"/mall-branding-advertising-agency/"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              paddingTop: "7px",
                              paddingBottom: "7px",
                            }}
                          >
                            Mall Branding
                          </Typography>
                        </Link>
                      </Box>

                      {/* INFLIGHT-BRANDING */}
                      <Box sx={{ borderBottom: "1px solid #D3D3D3" }}>
                        <Link
                          to={"/inflight-branding-advertising-agency/"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              paddingTop: "7px",
                              paddingBottom: "7px",
                            }}
                          >
                            Inflight Branding
                          </Typography>
                        </Link>
                      </Box>

                      {/* TRANSIT-MEDIA */}
                      <Box sx={{ borderBottom: "1px solid #D3D3D3" }}>
                        <Link
                          to={"/transit-media-advertising-agency/"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              paddingTop: "7px",
                            }}
                          >
                            Transit Media
                          </Typography>
                        </Link>
                      </Box>
                      {/* All Hoarding */}
                      <Box sx={{}}>
                        <Link
                          to={"/all-outdoor/"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              paddingTop: "7px",
                            }}
                          >
                            All Hoardings
                          </Typography>
                        </Link>
                      </Box>

                      {/* All Hoarding Advertising */}
                      <Box sx={{ borderTop: "1px solid #D3D3D3" }}>
                        <Link
                          to={"/outdoor-hoarding-advertising/"}
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              marginLeft: "20px",
                              paddingTop: "1px",
                              paddingBottom: "1px",
                              color: "#000",
                              "&:hover": {
                                color: "red",
                                cursor: "pointer",
                              },
                              fontSize: "15px",
                              fontWeight: "600",
                              fontFamily: "Inter, sans-serif",
                              paddingTop: "7px",
                            }}
                          >
                            All Hoardings Advertising
                          </Typography>
                        </Link>
                      </Box>
                    </Box>
                  </Menu>
                </Box>
                {/* Dropdown  ends*/}

                {/* Blogs */}
                <Box sx={{ paddingLeft: "30px" }}>
                  {/* <Button component={Link} to="/blogs/"> */}
                  <Link to="/blogs/" style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        ...buttonHoverStyle,
                      }}
                    >
                      BLOGS
                    </Typography>
                  </Link>
                  {/* </Button> */}
                </Box>

                {/* Contact us */}
                <Box sx={{ paddingLeft: "30px" }}>
                  <Link to="/contact-us/" style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "500",
                        fontFamily: "Inter, sans-serif",
                        ...buttonHoverStyle,
                      }}
                    >
                      CONTACT US
                    </Typography>
                  </Link>
                  {/* </Button> */}
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Header;
