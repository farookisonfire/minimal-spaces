import React from 'react'
import { Container, Button } from 'semantic-ui-react';

const LandingHeader = () => (
  <Container text className="landing-header-container">
    <p className='landing-header'>Become a Global Mentor.</p>
    <p className='landing-header'>Make Next Summer Transformational.</p>
    <Button inverted color='red'>Apply</Button>
    <Button color='black'>Learn More</Button>  
  </Container>
);

export default LandingHeader;