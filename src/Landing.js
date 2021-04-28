import React from 'react';
import { InputGroup, InputGroupAddon, FormInput, Button } from 'shards-react';
import FAQ from 'faq/FaqSection'
import landingImage from 'images/landing-image.png';
import 'Landing.css';

const Landing = () => {
  return (
    <div className='landing-container'>
      <section className='landing-header'>
        <div className='landing-header-container'>
          <div className='landing-header-input-container'>
            <h1 className='landing-header-input-text'>Enter your code to unlock a lesson!</h1>
            <InputGroup className='landing-header-input'>
              <FormInput placeholder='ABCDEFG' />
              <InputGroupAddon type='append'>
                <Button theme='success'>Start</Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <img src={landingImage} alt='' />
        </div>
      </section>
      <section className='faq'>
        <FAQ></FAQ>
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
