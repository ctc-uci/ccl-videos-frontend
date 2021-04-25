import React from 'react';
import FaqModule from './faqModule';
import './faqSection.css'

const question1 = "What is Albert's real name?"
const answer1 = "Albert's real name is... Albert"

const question2 = "How many licks does it take to get to the center of a tootsie pop"
const answer2 = "idk, but more than 2...probably"

const question3 = "How are you doing today?"
const answer3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque massa id magna ullamcorper placerat. Nullam dictum maximus nisi, sed condimentum nisl euismod eu. Praesent nec nisi semper lectus malesuada eleifend."

const question4 = "I am just saying words here to see how the overflow looks okay cool is this enough words yet i honestly dont know, apparently not darn how do i get enough words smh"
const answer4 = "cool"

const question5 = "Can i get a raise?"
const answer5 = "no"

const FaqSection = () => {
    return (
        <div className="faqSection">
            <h1 className="title">Frequently Asked Questions</h1>
            <FaqModule question={question1} answer={answer1} />
            <FaqModule question={question2} answer={answer2} />
            <FaqModule question={question3} answer={answer3} />
            <FaqModule question={question4} answer={answer4} />
            <FaqModule question={question5} answer={answer5} />
        </div>
    );
};


export default FaqSection;