import React from 'react';
import './introMessage.css';

const IntroMessageOne = ({ onFinish }) => {
  return (
    <div className="intro-message intro-message-1">
        <p>
            Calmflict was created to help users develop and improve their emotional intelligence. A critical skill for building stronger
            relationships, managing stress, and achieving success in both personal and professional settings.
            EQ is the ability to identify, understand, and manage one's own motions, as well as the emotions of others. People with
            high EQ tend to have better communication skills, more effective conflict resolution abilities, and stronger leadership
            qualities. By improving EQ, individuals can enhance their performance in the workplace, improve their personal
            relationships, reduce stress and anxiety.
        </p>
      <style>
        {`.intro-message-1 {
          animation-name: fade-in;
        }
        
        .intro-message-1.fade-out {
          animation-name: fade-out;
        }`}
      </style>
    </div>
  );
};

export default IntroMessageOne;