import React from 'react';
import Form from '../form/Form'
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
          <p>
            To help us learn more and better understand you as a user, please fill out your name, gender, and age group.
            This is a quick and shortened test version of our games. Please select the best response for each of the following Your score may be displayed against other players. Best of luck
        </p>
      <Form />
    </div>
  );
};

export default LandingPage;