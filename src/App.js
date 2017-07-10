import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './features/landing/Landing';
import Navbar from './features/navbar/Navbar';
import About from './features/about/About';


class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route path='/learn' component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;