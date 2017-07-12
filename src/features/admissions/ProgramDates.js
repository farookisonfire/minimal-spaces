import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'semantic-ui-react';

const sortByLength = (programs, length, selectedProgram) => {
  return programs.filter(program => program.length === length && program.value === selectedProgram);
};

  function makeRow(program) {
    return(
      <Table.Row key={program.id}>
        <Table.Cell>{program.date}</Table.Cell>
      </Table.Row>
    );
  }

  function makeTable(programDates, header){
    return (
      <div className="program-dates-tables">
        <Table compact collapsing textAlign='center' basic='very' columns={1}  size="small">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{header}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {programDates.map(makeRow)}
          </Table.Body>
        </Table>
      </div>
    );
  }


const ProgramDates = ({programs, selectedProgram}) => {
  
  const oneWeek = sortByLength(programs, '1 week', selectedProgram);
  const twoWeek = sortByLength(programs, '2 week', selectedProgram);
  const fourWeek = sortByLength(programs, '4 week', selectedProgram);

  return (
    <div>
      <div className="program-dates-header">
        <h1>Dates</h1>
        <p>We are currently accepting applications for 2018. Positions are limited, apply today!</p>
      </div>
      <div className="program-dates-table" style={{textAlign: 'center'}}>
        {oneWeek.length ? makeTable(oneWeek, '1 week') : null}
        {twoWeek.length ? makeTable(twoWeek, '2 week') : null}
        {fourWeek.length ? makeTable(fourWeek, '4 week') : null}
      </div>
    </div>
  );
};

ProgramDates.propTypes = {
  programs: PropTypes.array.isRequired,
  selectedProgram: PropTypes.string.isRequired
};

export default ProgramDates;
