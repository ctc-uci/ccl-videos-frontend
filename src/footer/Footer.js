import React from 'react';
import { Row, Col } from 'shards-react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import 'footer/Footer.css';

const Footer = () => {
  library.add(fab);
  return (
    <div className='footer-container'>
      <Row className='footer-row'>
        <Col className='footer-social-media-container' sm='12' md='4' lg='3'>
          <h2 className='footer-text-bold'>Child Creativity Lab</h2>
          <div className='footer-icon-container'>
            <a href='https://www.facebook.com/childcreativitylab/'>
              <FontAwesomeIcon size='2x' className='footer-text-bold' icon={['fab', 'facebook']} />
            </a>
            <a href='https://www.instagram.com/childcreativitylab/?hl=en'>
              <FontAwesomeIcon size='2x' className='footer-text-bold' icon={['fab', 'instagram']} />
            </a>
            <a href='https://www.youtube.com/user/Childcreativity/featured'>
              <FontAwesomeIcon size='2x' className='footer-text-bold' icon={['fab', 'youtube']} />
            </a>
            <a href='https://twitter.com/childcreativity?lang=en'>
              <FontAwesomeIcon size='2x' className='footer-text-bold' icon={['fab', 'twitter']} />
            </a>
          </div>
          <h2 className='footer-text'>&#169; 2021 Child Creativity Lab</h2>
        </Col>
        <Col className='footer-website-container' sm='12' md='4' lg='3'>
          <a href='https://www.childcreativitylab.org/checkout/donate?donatePageId=5b1612e8352f539abbc6378f'>
            <h2 className='footer-text-bold'>Donate</h2>
          </a>
          <a href='https://www.childcreativitylab.org/shop'>
            <h2 className='footer-text-bold'>Store</h2>
          </a>
          <a href='https://www.childcreativitylab.org/about-us'>
            <h2 className='footer-text-bold'>About Us</h2>
          </a>
          <a href='https://www.childcreativitylab.org/home'>
            <h2 className='footer-text-bold'>Website</h2>
          </a>
          <a href='/login'>
            <h2 className='footer-text-bold'>Administrator Portal</h2>
          </a>
        </Col>
        <Col className='footer-contact-container' sm='12' md='4' lg='6'>
          <div>
            <h2 className='footer-text'>1901 Carnegie Ave. Suite 1A</h2>
            <h2 className='footer-text'>Santa Ana, CA 92705</h2>
            {/* <h2 className='footer-text'>(714) 352-4380</h2> */}
            <h2 className='footer-text'>help@childcreativitylab.org</h2>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
