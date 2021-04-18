import React from "react";
import { Row, Col } from "shards-react";
import { library } from '@fortawesome/fontawesome-svg-core'
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  library.add(fab)
  return (
    <Row className="Footer1">
      <Col className="socialMediaContainer" sm="12" md="4" lg="3">
          <h1 className="footerTextBold">Child Creativty Lab</h1>
            <FontAwesomeIcon className="footerTextBold" icon={['fab', 'instagram']} />
            <FontAwesomeIcon className="footerTextBold" icon={['fab', 'youtube']} />
            <FontAwesomeIcon className="footerTextBold" icon={['fab', 'twitter']} />
            <FontAwesomeIcon className="footerTextBold" icon={['fab', 'facebook']} />
          <h1 className="footerText">&#169; 2021 Child Creativty Labs</h1>
      </Col>
      <Col className="websiteContainer" sm="12" md="4" lg="3">
        <h1 className="footerTextBold">Donate</h1>
        <h1 className="footerTextBold">Store</h1>
        <h1 className="footerTextBold">About Us</h1>
        <h1 className="footerTextBold">Website</h1>
      </Col>
      <Col className="contactContainer" sm="12" md="4" lg="6">  
        <div className="addressFooter">
          <h1 className="footerText">1901 Carnegie Ave. Suite 1A</h1>
          <h1 className="footerText">Santa Ana, CA 92705</h1>
          <h1 className="footerText">(714) 352-4380</h1>
          <h1 className="footerText">info@childcreativitylab.org</h1>
        </div>
      </Col>
    </Row>
  );
};

export default Footer;
