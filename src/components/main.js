import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Resume from './resume';
import LandingPage from './landingpage';
import Projects from './projects';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;