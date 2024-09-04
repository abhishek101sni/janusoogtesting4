import React, { useState } from "react";
import { Box, Typography, Grid } from "../../DesignData/MaterialUi/material-ui";

// Accordian
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange3 = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box sx={{ margin: "40px 10px 0px 10px" }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={5.5} lg={5.7}>
            {/* 1 */}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange3("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: expanded === "panel1" ? "18px" : "14px",
                    fontWeight: expanded === "panel1" ? "600" : "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What is an advertising agency
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Advertising agencies manage a business's branding and online
                  media buying activities and help companies develop their
                  brands and gain tactical benefits. These agencies step in,
                  refer to the strategic goals outlined by the client, take the
                  creative media, and identify the best ad space based on the
                  media strategy. Advertising companies start with identifying
                  companies' positions, brand architecture, and brand statements
                  and providing the brands with a visual identity and distinct
                  voice. Agencies use various tools and media options to uplift
                  brands and get considerable reach and awareness.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* 2 */}
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange3("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: expanded === "panel2" ? "18px" : "14px",
                    fontWeight: expanded === "panel2" ? "600" : "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What is the media ant ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Haystack Marketing Services Pvt. Ltd. operates under the brand
                  name 'The Media Ant' The Media Ant is a media and advertising
                  company launched in 2012 to bring accessibility and
                  transparency to the media buying field. Since then, The Media
                  Ant's mission has found resonance with many in the industry
                  and grown more substantial. After ten successful years in the
                  ad industry, INS officially accredited The Media Ant. This
                  event marks the acknowledgement of their credibility,
                  competence, and authenticity in the advertising world. What is
                  a Media Buying Agency? Why do Media Buying with The Media Ant?
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* 3 */}
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange3("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: expanded === "panel3" ? "18px" : "14px",
                    fontWeight: expanded === "panel3" ? "600" : "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  What is the a media buying agency
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is a reputable advertising agency in India that
                  provides the best media planning and buying experiences to
                  help businesses achieve strategic advantages and brand growth.
                  As the best media buying agency, we are passionate about
                  bringing out the best in the companies we work with, and we
                  have been entrusted with it over the years. Our work with our
                  clients starts with identifying their position, brand
                  architecture, and brand statement and providing the brands
                  with a visual identity and distinct voice. We are the best
                  advertising agency that uses various tools and media options.
                  Our team shares a creative edge that will enable us to uplift
                  your brand and get considerable reach and awareness. Why do
                  Media Buying with The Media Ant?
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* 4 */}
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange3("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: expanded === "panel4" ? "18px" : "14px",
                    fontWeight: expanded === "panel4" ? "600" : "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Why do media buying whit the media ant ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is a media planning and media buying agency that
                  nurtures and helps businesses achieve strategic advantages and
                  promote their brands and services. As the best media buying
                  agency, The Media Ant experts are passionate about bringing
                  the best to the companies they work with and have been
                  entrusted with that responsibility over the years. The Media
                  Ant works with clients by identifying their position, brand
                  architecture, and brand statement and providing them with a
                  visual identity and distinct voice. As a media buying agency,
                  The Media Ant lets their brands and clients create a
                  meaningful and better experience in the industry and with
                  their target audience. For the past ten years, The Media Ant
                  has created digital experiences for the brand and clients by
                  leveraging their ad campaigns and digital marketing to
                  increase consumer engagement.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={12} md={0.8} lg={0.6}></Grid>
          <Grid item xs={12} sm={12} md={5.5} lg={5.7}>
            {/* 5 */}
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange3("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: expanded === "panel5" ? "18px" : "14px",
                    fontWeight: expanded === "panel5" ? "600" : "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  How do you book an ad on the media ant ?
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Planning an advertising strategy is a complicated procedure.
                  Making an effective plan and making an informed choice about
                  the best media option and time slots at the most affordable
                  advertising rates frequently requires a paid service
                  membership. We understand this can be difficult for first-time
                  or new advertisers; hence, The Media Ant is there to take care
                  of everything, from getting advertising data to negotiating
                  advertising rates. You can trust The Media Ant with end-to-end
                  planning and execution of your ad campaigns. To get the best
                  advertising rates and place your advertisement, you have to
                  follow these simple steps: Select the media option on the
                  website. You could see thousands of advertising options on
                  each media option. You can filter the platform of your choice
                  by selecting categoryoptions based on genre, advertising
                  option, languages, location,network or type etc. You can also
                  sort the advertising rates for different options based on top
                  search, category, and language or choose from a library of
                  sample ads. Once you select a particular card, you can click
                  on it to find all the advertising options within the card and
                  the advertising rates for the same. Select the advertising
                  option and the advertising rate suitable for you. After that,
                  click the submit button and request an express quote. Best
                  Advertising Agency in India Magazine Advertising Agency
                  Television Advertising Agency
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* 6 */}
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange3("panel6")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: expanded === "panel6" ? "18px" : "14px",
                    fontWeight: expanded === "panel6" ? "600" : "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Best advertising agency in india
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is a 10-year-old company in the AdTech space
                  that aims to disrupt the traditional process of executing ad
                  campaigns through a physical media agency and replace it with
                  a self-serve advertising platform. The platform should work
                  equally well for both online and offline media. The Media Ant
                  will empower any advertiser, irrespective of their budget and
                  level of marketing understanding, to go ahead and launch a
                  campaign. It is the winner of various startup awards and is
                  used by more than a million users yearly. Magazine Advertising
                  Agency Television Advertising Agency
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* 7 */}
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange3("panel7")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: expanded === "panel7" ? "18px" : "14px",
                    fontWeight: expanded === "panel7" ? "600" : "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Magazine advertising agency
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant, one of the best advertising agencies, also
                  specializes in developing and carrying out magazine
                  advertising campaigns for various brands. The Media Ant
                  collaborates with clients to build a plan that suits the
                  brand's objectives and target market, which can help brands
                  produce magazine ads in a vast selection of periodicals in
                  many different areas, such as lifestyle, business, fashion,
                  sports, and more. Television Advertising Agency
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* 8 */}
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange3("panel8")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  sx={{
                    color: "black",
                    fontSize: expanded === "panel8" ? "18px" : "14px",
                    fontWeight: expanded === "panel8" ? "600" : "500",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Television advertising agency
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  The Media Ant is the one-stop destination for all your
                  television advertising needs. The Media Ant has a broad
                  network of publishers, advertisers, and media sources,
                  allowing businesses to reach a large audience. Additionally,
                  the company has an experienced staff of professionals who can
                  help you plan your television advertising campaign and buy the
                  media suitable for your television advertising campaign.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Faq;
