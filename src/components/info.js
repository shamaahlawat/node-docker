import React from 'react';
import axios from 'axios';

export default class Info extends React.Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
        hasProps: false,
        info: {}
    }
  }

  componentWillMount() {
    this.setState({
      hasProps: false,
      info: this.props.data
    });
  }


  componentWillReceiveProps(nextProps, prevProps) {
    this.setState({
      hasProps: true,
      info: nextProps.data
    });
  }

  render() {
    if (this.state.hasProps) {
      const firstName = this.state.info.first_name;
      const lastName = this.state.info.last_name;
      const designation = this.state.info.designation;
      return (
        <div className="info-container">
          <div className="name">
          <h1 className="first-name">{firstName}</h1>
          <h1 className="last-name">{lastName}</h1>
          </div>
          <span className="desg">{designation}</span>
        </div>
      );
    } else {
      return (
        <div>No props</div>
      );
    }
  }
}
