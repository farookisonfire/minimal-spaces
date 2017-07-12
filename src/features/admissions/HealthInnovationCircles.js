import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

const HealthInnovationCircles = () => (
  <div className="admissions-programs-youth-empowerment-circles">
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
        <Icon circular size='huge' name='hand rock' />
        <h4>Empower Future Health Professionals</h4>
        <p>Help aspiring young learners cultivate knowledge and skills needed to achieve their goals.</p>
      </Grid.Column>
      <Grid.Column>
        <Icon circular size='huge' name='hospital' />
        <h4>Contextualize Community Health</h4>
        <p>Develop a global perspective on health and healthcare through immersion and dialogue.</p>
      </Grid.Column>
      <Grid.Column>
        <Icon circular size='huge' name='heartbeat' />
        <h4>Innovate Health Care Solutions</h4>
        <p>Learn how innovation can alleviate social pressure, inequalities, and stigma in health care.</p>
      </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default HealthInnovationCircles;