import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import FAQ from 'faq/FaqSection';
import landingImage from 'images/landing-image.png';
import CodeUnlock from 'landing/CodeUnlock';
import 'landing/Landing.css';

const Landing = () => {
  return (
    <div className='landing-container'>
      <section className='landing-header'>
        <div className='landing-header-container'>
          <div className='landing-header-input-container'>
            <h1 className='landing-header-input-text'>Enter the code to unlock your STEAM lesson!</h1>
            <CodeUnlock />
          </div>
          <img className="landing-image" src={landingImage} alt='' />
        </div>
      </section>
      <section className='faq'>
        <FAQ></FAQ>
      </section>
      <section className='about'>
        <h1 className="landing-section-title">About CCL STEAM Video Player</h1>
        <p>
          When you purchase a STEAM Challenge kit from Child Creativity Lab, it comes with a unique code.
          By entering that code on this website, you will have access to your STEAM video lesson!
        </p>
        <p>
          To browse for more STEAM Challenge kits, please <a href='/' className="landing-link">visit our online store.</a>
        </p>
        <p>
          To learn more about Child Creativity Lab, please <a href='/' className="landing-link">visit our website.</a>
        </p>
      </section>
      <section className='contact'>
        <h1 className="landing-section-title">Contact Child Creativity Lab</h1>
        {/* <p>
          <FontAwesomeIcon icon={faPhone} className='lesson-icon light-blue-icon' />
          (714) 352-4380
        </p> */}
        <p>
          <FontAwesomeIcon icon={faEnvelope} className='lesson-icon light-blue-icon' />
          help@childcreativitylab.org
        </p>
      </section>
    </div>
  );
};

export default Landing;
