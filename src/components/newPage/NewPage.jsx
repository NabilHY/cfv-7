import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './newPage.css';

const NewPage = () => {
  const [selectedBox, setSelectedBox] = useState('');

  const handleBoxSelect = (box) => {
    setSelectedBox(box);
  };

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedBox);
    history.push('/survey'); 
};

  return (
    <div className="NewPage">
      <p>
        To help us learn more and better understand you as a user, please fill out your name, gender, and age group. This is
        a quick and shortened test version of our games. Please select the best response for each of the following Your score may
        be displayed against other players. Best of luck
      </p>
      <form onSubmit={handleSubmit}>
        <div className="BoxContainer">
          <button type="submit" className={`Box ${selectedBox === 'box1' ? 'selected' : ''}`} onClick={() => handleBoxSelect('box1')}>
            <p>Respond with empathy and kindness
                “I can see you're trying to make a
                joke, but that comment hurt my.
                feelings. Can we talk about why you
                          said that?"
            </p>
          </button>
          <button type="submit" className={`Box ${selectedBox === 'box2' ? 'selected' : ''}`} onClick={() => handleBoxSelect('box2')}>
                      <p>
                        Respond assertively
                        "That's not a nice thing to say. | don't
                        appreciate being made fun of, and I'd
                        like you to stop.”
            </p>
          </button>
          <button type="submit" className={`Box ${selectedBox === 'box3' ? 'selected' : ''}`} onClick={() => handleBoxSelect('box3')}>
                      <p>
                          React emotionally
                            "That's so mean! Why would you say
                            that? You're just being a jerk."
                      </p>
          </button>
          <button type="submit" className={`Box ${selectedBox === 'box4' ? 'selected' : ''}`} onClick={() => handleBoxSelect('box4')}>
                      <p>
                      Non-reaction
                        Complete shutting down emotionally
                        and withdraw from the situation
                        without any attempt at
                        communication
            </p>
          </button>
          <button type="submit" className={`Box ${selectedBox === 'box5' ? 'selected' : ''}`} onClick={() => handleBoxSelect('box5')}>
                      <p>
                        React with aggression or violence
                        Physically lashing out at the person
                        who made fun of you.
            </p>
          </button>
        </div>
      </form>
      <div className="EmojiContainer">
        <span role="img" aria-label="Emoji 1">
        😌
        </span>
        <span role="img" aria-label="Emoji 2">
        🙂
        </span>
        <span role="img" aria-label="Emoji 3">
        🫤
        </span>
        <span role="img" aria-label="Emoji 4">
        😞
        </span>
        <span role="img" aria-label="Emoji 5">
        😠
        </span>
      </div>
    </div>
  );
};

export default NewPage;
