import React from 'react';

export default class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  componentWillReceiveProps(nextProps, prevProps) {
    this.setState({
      data: nextProps.data
    });
  }

  render() {
    const data = this.state.data;
    const style = {
      width: this.state.data.level * 10 + '%'
    };
    return(
    <div className="progress-bar-container">
      <label>{data.title}</label>
      <div className="progress" role="progressbar" tabIndex="0" aria-valuenow="50" aria-valuemin="0" aria-valuetext="50 percent" aria-valuemax="100">
        <div className="progress-meter" style={style}>
          <p className="progress-meter-text">{data.level * 10}%</p>
        </div>
      </div>
    </div>
    );
  }
}
