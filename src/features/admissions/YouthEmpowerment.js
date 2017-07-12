import React from 'react';
import PropTypes from 'prop-types';
import YouthEmpowermentCircles from './YouthEmpowermentCircles';
import ProgramCost from './ProgramCost';
import ProgramDates from './ProgramDates';
import ApplyNow from './ApplyNow';
import Footer from '../footer/Footer';

const YouthEmpowerment = ({selectedProgram, programs}) => (
<div>
  <div className="admissions-programs-header">
    <h1>Youth Empowerment</h1>
    <p>Designed for university undergrads and graduate students of all academic disciplines, Youth Empowerment is our longest running and most popular program. The program offers OHS members a blended learning experience focused on youth empowerment through academic and extra-curricular mentorship, cultural exploration through guided outings, and cultural insight and global perspective through dialogue and seminar.</p>
  </div>
  <YouthEmpowermentCircles />
  <ProgramCost selectedProgram={selectedProgram}/>
  <ProgramDates selectedProgram={selectedProgram} programs={programs}/>
  <ApplyNow />
  <Footer />
</div>
);

YouthEmpowerment.propTypes = {
  selectedProgram: PropTypes.string.isRequired,
  programs: PropTypes.array.isRequired
};

export default YouthEmpowerment;