import React from 'react';
import PropTypes from 'prop-types';
import HealthInnovationCircles from './HealthInnovationCircles';
import ProgramCost from './ProgramCost';
import ProgramDates from './ProgramDates';
import ApplyNow from './ApplyNow';
import Footer from '../footer/Footer';

const HealthInnovation = ({selectedProgram, programs}) => (
  <div>
    <div className="admissions-programs-header">
      <h1>Health Innovation</h1>
      <p>Designed for university undergraduate and postgraduate students pursuing a career in health, Health Innovation is our fastest growing program. The mission of OHS Health Innovation is to <strong>democratize healthy living</strong>, and to this end members of the OHS Health Innovation team engage intimately with many levels of the local community on pressing issues related to community health. These engagements include youth mentorship, field work, visitation with local organizations and instutions, and seminars.</p>
    </div>
    <HealthInnovationCircles />
    <ProgramCost selectedProgram={selectedProgram}/>
    <ProgramDates selectedProgram={selectedProgram} programs={programs}/>
    <ApplyNow />
    <Footer />
</div>
);

HealthInnovation.propTypes = {
  selectedProgram: PropTypes.string.isRequired,
  programs: PropTypes.array.isRequired
};

export default HealthInnovation;