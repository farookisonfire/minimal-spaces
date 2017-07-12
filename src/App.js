import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './features/landing/Landing';
import Navbar from './features/navbar/Navbar';
import About from './features/about/About';
import Admissions from './features/admissions/Admissions';


class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route path='/learn' component={About} />
          <Route path='/admissions' component={Admissions} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;