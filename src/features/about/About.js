import React, {Component} from 'react';
import AboutHeader from './AboutHeader';
import AboutCircles from './AboutCircles';
import AboutStatistics from './AboutStatistics';
import AboutMedia from './AboutMedia';

class About extends Component {
  render() {
    return(
      <div>
        <div className="about-top">
          <AboutHeader />
          <AboutCircles />
        </div>
        <div className="about-mid">
          <AboutStatistics />
        </div>
        <div className="about-bottom">
          <AboutMedia />
        </div>
      </div>
      
    );
  }
}

export default About;