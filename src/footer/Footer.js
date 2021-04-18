import React from "react";
import { Row, Col } from "shards-react";
import { library } from '@fortawesome/fontawesome-svg-core'
import "footer/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  library.add(fab)
  return (
    <Row className="Footer1">
      <Col className="socialMediaContainer" sm="12" md="4" lg="3">
        <h2 className="footerTextBold">Child Creativty Lab</h2>
        <a href="https://www.facebook.com/childcreativitylab/"><FontAwesomeIcon className="footerTextBold" icon={['fab', 'facebook']} /></a>
        <a href="https://www.instagram.com/childcreativitylab/?hl=en"><FontAwesomeIcon className="footerTextBold" icon={['fab', 'instagram']} /></a>
        <a href="https://www.youtube.com/user/Childcreativity/featured"><FontAwesomeIcon className="footerTextBold" icon={['fab', 'youtube']} /></a>
        <a href="https://twitter.com/childcreativity?lang=en"><FontAwesomeIcon className="footerTextBold" icon={['fab', 'twitter']} /></a>
        <h2 className="footerText">&#169; 2021 Child Creativty Labs</h2>
      </Col>
      <Col className="websiteContainer" sm="12" md="4" lg="3">
        <a href="https://www.childcreativitylab.org/checkout/donate?donatePageId=5b1612e8352f539abbc6378f"><h2 className="footerTextBold">Donate</h2></a>
        <a href="https://www.childcreativitylab.org/shop"><h2 className="footerTextBold">Store</h2></a>
        <a href="https://www.childcreativitylab.org/about-us"><h2 className="footerTextBold">About Us</h2></a>
        <a href="https://www.childcreativitylab.org/home"><h2 className="footerTextBold">Website</h2></a>
      </Col>
      <Col className="contactContainer" sm="12" md="4" lg="6">  
        <div className="addressFooter">
          <h2 className="footerText">1901 Carnegie Ave. Suite 1A</h2>
          <h2 className="footerText">Santa Ana, CA 92705</h2>
          <h2 className="footerText">(714) 352-4380</h2>
          <h2 className="footerText">info@childcreativitylab.org</h2>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
