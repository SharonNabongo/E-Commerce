import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


import TwitterIcon from "@material-ui/icons/Twitter";
import pic from '../About/img/client-2.png'
const About = () => {
  const visitTwitter = () => {
    window.location = "https://twitter.com/NabongoSharon?t=04c_-pnJd7vBrGqSFw1hgw&s=09";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={pic}
              alt="Founder"
            />
            <Typography>Nabongo Sharon</Typography>
            <Button onClick={visitTwitter} color="primary">
              Visit Twitter
            </Button>
            <span>
              This is a sample wesbite made by @Nabongosharon. 
              where by we have combined website development,payement,shipping and shop management just for you. Imagine owning a thriving online store!
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/sharon-nabongo-877687248"
              target="blank"
            >
              <LinkedInIcon className="LinkedInSvgIcon" />
            </a>

            <a href="https://twitter.com/NabongoSharon?t=04c_-pnJd7vBrGqSFw1hgw&s=09" target="blank">
              <TwitterIcon className="TwitterSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
