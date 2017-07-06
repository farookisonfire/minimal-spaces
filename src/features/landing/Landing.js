import React, {Component} from 'react';
import CanvasViz from './CanvasViz';
import HeaderPrimary from './HeaderPrimary';
import HeaderSecondary from './HeaderSecondary';
import HeaderTertiary from './HeaderTertiary';

class Landing extends Component {
  render() {
    return(
      <div>
        <CanvasViz />
        <HeaderPrimary />
        <HeaderSecondary />
        <HeaderTertiary />
      </div>
    );
  }
}

export default Landing;