import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AdmissionsHeader from './AdmissionsHeader';
import AdmissionsStep from './AdmissionsStep';
import Programs from './Programs';

class Admissions extends Component {
  constructor()  {
    super();

    this.state = {selectedProgram: 'youthEmpowerment', test: 'test'};
    this.onChange = this.onChange.bind(this);
  }


  onChange(event, data) {
    this.setState({selectedProgram: data.value});
  }
  
  render() {
    return (
      <div>
        <div className="admissions-header-background">
          <div className="admissions-top">
            <AdmissionsHeader />
          </div>
        </div>
        <div>
          <AdmissionsStep />
          <Programs 
            onProgramSelect={this.onChange} 
            selectedProgram={this.state.selectedProgram}
            programs={this.props.programs}/>
        </div>
      </div>
    );
  }
}

Admissions.propTypes =  {
  programs: PropTypes.array.isRequired
};

const mapStateToProps = ({programs}) => {
  return {
    programs
  };
};

export default connect(mapStateToProps)(Admissions);