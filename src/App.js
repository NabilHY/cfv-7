import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IntroMessageOne from './components/IntroMessage/IntroMessageOne';
import IntroMessageTwo from './components/IntroMessage/IntroMessageTwo';
import LandingPage from './components/landingPage/LandingPage';
import Form from './components/form/Form';
import NewPage from './components/newPage/NewPage';
import Game from './routes/game/Game';
import { data } from './data/messages/data';

const App = () => {
  const [currentIntro, setCurrentIntro] = useState(1);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setCurrentIntro(2);
    }, 3000);

    return () => {
      clearTimeout(introTimer);
    };
  }, []);

  const handleIntroFinish = () => {
    setCurrentIntro(currentIntro + 1);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {currentIntro === 1 && <IntroMessageOne onFinish={handleIntroFinish} />}
            {currentIntro === 2 && <IntroMessageTwo onFinish={handleIntroFinish} />}
            {currentIntro === 3 && <LandingPage />}
          </Route>
          <Route path="/form">
            <Form onSubmit={handleFormSubmit} />
          </Route>
          <Route path="/results">
            <NewPage formData={formData} />
          </Route>
          <Route path="/survey">
            <Game data={data} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;