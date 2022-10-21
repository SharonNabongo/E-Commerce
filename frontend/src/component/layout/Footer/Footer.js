import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>Your need at our Hearts</p>

        <p>Copyrights 2022 &copy;@NabongoSharon</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://twitter.com/NabongoSharon?t=uSQXkSqRHCPQNYL7qQ&s=09">Twitter</a>
        <a href="https://www.linkeddin.com/in/sharon-nabongo-877687248">LinkedIn</a>
        <a href="http://www.snapchat.com/add/shaar_sharon?share_id=sSFIG37oWyY&locale=en-US">Snapchat</a>
      </div>
    </footer>
  );
};

export default Footer;
