import React from 'react';
import landingImage from 'images/landing-image.png';
import 'landing/Landing.css';
import CodeUnlock from 'landing/CodeUnlock';

const Landing = () => {
  return (
    <div className='landing-container'>
      <section className='landing-header'>
        <div className='landing-header-container'>
          <div className='landing-header-input-container'>
            <h1 className='landing-header-input-text'>Enter your code to unlock a lesson!</h1>
            <CodeUnlock />
          </div>
          <img src={landingImage} alt='' />
        </div>
      </section>
      <section className='faq'>
        <h1>Frequently Asked Questions</h1>
      </section>
      <section>
        <h1>About CCL Lesson Unlocker</h1>
        <p>
          When you purchase a learning kit from Child Creativity Lab, it comes with a unique code.
          By entering that code on this website, you will have access to your lesson!
        </p>
        <p>
          To browse for learning kits, please <a href='/'>visit our online store.</a>
        </p>
        <p>
          To learn more about Child Creativity Lab, please <a href='/'>visit our website.</a>
        </p>
      </section>
    </div>
  );
};

export default Landing;
