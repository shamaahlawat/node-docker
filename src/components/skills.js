import React from 'react';
import ProgressBar from './progress-bar.jsx';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillsList: props.data
    };
  }

  render() {
    const skillsList = this.state.skillsList.map( (skill, index) => {
      return (
          <ProgressBar key={index} data={skill} />
      );
    });

    return (
      <div className="skills-container">
        <h1 className="section-heading">Skills</h1>
        {skillsList}
      </div>
    );
  }
}
