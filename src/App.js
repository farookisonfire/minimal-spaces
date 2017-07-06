import React, {Component} from 'react';
import Landing from './features/landing/Landing';
import Navbar from './features/navbar/Navbar';

class App extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <Landing />
      </div>
    );
  }
}

export default App;