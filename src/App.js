import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Travel from './components/travel/Travel';
import { HashRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Place from './components/travel/place/Place';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Header/>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/travel' component={Travel}></Route>
          <Route path='/travel/:place' component={Place}></Route>
          <Route path='/about' component={About}></Route>
        </HashRouter>
      </div>
    );
  }
}

export default App;
