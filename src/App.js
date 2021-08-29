import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/styles.css';




import Rafles from './container/Rafles/RaflesContainer';
class App extends Component {
  // constructor() {
  //   super()
  //   setInterceptor();
  // }

  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Rafles}></Route>                
          </Switch>
      </Router>
    );
  }
}

export default App;
