import React from 'react';
import FaqModule from './FaqModule';
import './FaqSection.css';

const question1 = 'Who is Child Creativity Lab?';
const answer1 = 
  'Child Creativity Lab is a non-profit organization that brings its STEAM (Science, Technology, Engineering, Art, Mathematics) programs to elementary-aged children. Using upcycled materials, our STEAM Challenge kits meet Next Generation Science Standards.';

const question2 = 'Where are the instructions to complete the challenge? What should my finished project look like?';
const answer2 =
  'There are no building instructions or an example of what your finished project should look ilke. There are no right or wrong answers - like a real engineer, you will use your creativity to solve the challenge.';

const question3 = 'What are codes used for?';
const answer3 = "Codes are used to unlock companion video lessons for Child Creativity Lab's STEAM Challenge kits.";

const question4 = 'Do I have to watch the video before starting the project?';
const answer4 = 'We recommend watching the video before you start so that you can better understand the STEM concepts that will help you build.';

const question5 = 'Where do I get a code?';
const answer5 = 'Codes can be found inside your STEAM Challenge kit.';

const question6 = 'How long does my code last for?';
const answer6 =
  'Codes expire two weeks after activation.';

const question7 = 'Can I leave my lesson and come back to it later?';
const answer7 =
  'Yes. During a code\'s active period, you may re-enter it as many times as desired. However, after expiration, the code will no longer be able to be used.';

const question8 = 'My code doesn’t work. What do I do?';
const answer8 = 'Please email us at help@childcreativitylab.org';

const FaqSection = () => {
  return (
    <div className='faqSection'>
      <h1 className='title'>Frequently Asked Questions</h1>
      <FaqModule question={question1} answer={answer1} />
      <FaqModule question={question2} answer={answer2} />
      <FaqModule question={question3} answer={answer3} />
      <FaqModule question={question4} answer={answer4} />
      <FaqModule question={question5} answer={answer5} />
      <FaqModule question={question6} answer={answer6} />
      <FaqModule question={question7} answer={answer7} />
      <FaqModule question={question8} answer={answer8} />
    </div>
  );
};

export default FaqSection;
