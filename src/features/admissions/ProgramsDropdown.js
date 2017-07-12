import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const programs = [
  {key: 'youthEmpowerment', value: 'youthEmpowerment', text: 'Youth Empowerment'},
  {key: 'healthInnovation', value: 'healthInnovation', text: 'Health Innovation'},
  {key: 'education', value: 'education', text: 'Education'},
]

const ProgramsDropdown = ({onProgramSelect}) => (
 <div className="admissions-programs-dropdown">
    <Dropdown onChange={onProgramSelect} defaultValue='youthEmpowerment' search selection options={programs} />
 </div>
);

ProgramsDropdown.propTypes = {
  onProgramSelect: PropTypes.func.isRequired
};

export default ProgramsDropdown;
