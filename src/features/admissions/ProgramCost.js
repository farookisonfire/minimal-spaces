import React from 'react';
import PropTypes from 'prop-types';
import ProgramCostTable from './ProgramCostTable';
import ProgramCostIncluded from './ProgramCostIncluded';
import ProgramCostNotIncluded from './ProgramCostNotIncluded';

const ProgramCost = ({selectedProgram}) => (
  <div className="program-cost">
    <ProgramCostTable selectedProgram={selectedProgram}/>
    <ProgramCostIncluded />
    <ProgramCostNotIncluded />
  </div>
);

ProgramCost.propTypes = {
  selectedProgram: PropTypes.string.isRequired
};

export default ProgramCost;