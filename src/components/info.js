import React from 'react';
import axios from 'axios';
import Loader from './loader.js';

export default class Info extends React.Component {
  constructor (props) {
    super(props);
    console.log(props);
    this.state = {
        hasProps: true,
        info: props.data
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
       <div></div>
      );
    } else {
      return (
        <div>No props</div>
      );
    }
  }
}
