import React from 'react';
import FaqModule from './FaqModule';
import './FaqSection.css';

const question1 = 'What are codes used for?';
const answer1 = "Codes are used to unlock companion lessons for Child Creativity Lab's test kits.";

const question2 = 'Where do I get a code?';
const answer2 = 'Codes can be purchased from the official Child Creativity Lab website.';

const question3 = 'How long does my code last for?';
const answer3 =
  'Codes will usually last 2 weeks before expiring. This is to ensure that our intellectual property remains secure.';

const question4 = 'Can I leave my lesson and come back to it later?';
const answer4 =
  'Yes. During a codes active period, you may re-enter it as many times as desired. However, after expiration, the code will no longer be able to be used.';

const question5 = 'My code doesn’t work. What do I do?';
const answer5 = 'Please contact us through phone or email using the information listed below.';

const FaqSection = () => {
  return (
    <div className='faqSection'>
      <h1 className='title'>Frequently Asked Questions</h1>
      <FaqModule question={question1} answer={answer1} />
      <FaqModule question={question2} answer={answer2} />
      <FaqModule question={question3} answer={answer3} />
      <FaqModule question={question4} answer={answer4} />
      <FaqModule question={question5} answer={answer5} />
    </div>
  );
};

export default FaqSection;
