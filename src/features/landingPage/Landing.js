import React, {Component} from 'react';
import Navbar from '../navbar/Navbar';
import Header from './LandingHeader';

class Landing extends Component {
  render() {
    return(
      <div className="landing">
        <Navbar />
        <Header/>
      </div>
    );
  }
}

export default Landing;
