import React, { useRef, useEffect } from 'react';
import './introMessage.css';

const IntroMessageTwo = ({ onFinish }) => {
  const messageRef = useRef(null);

  useEffect(() => {
    const messageTimer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => {
      clearTimeout(messageTimer);
    };
  }, [onFinish]);

  return (
    <div className="intro-message intro-message-2" ref={messageRef}>
      <p>
        About calmflict
        I created calmflict to improve growing up I was told I had poor EQ and through the years I always
        believed that. Now that I am finally able to understand and express my emotions I think we need a tool to
        teach others that were once like me.
        If everyone showed kindness and empathy -Waymond
        Elevate Labs is on a mission to improve people's minds. Since 2014, we've helped over 50 million people
        improve their communication and math skills with Elevate, which won Apple's App of the Year award. With
        Balance, we've created an innovative, personalized meditation experience that helps people improve their
        stress, sleep, and more. We're a fully distributed company of voracious learners and passionate doers,
        driven by our vision to help billions of people lead healthy, joyful, and productive lives.
      </p>
      <style>
        {`.intro-message-2 {
          animation-name: fade-in;
        }
        
        .intro-message-2.fade-out {
          animation-name: fade-out;
        }`}
      </style>
    </div>
  );
};

export default IntroMessageTwo;