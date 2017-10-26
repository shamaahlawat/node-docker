import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasProps: false,
      data: {}
    };
  }

  componentWillReceiveProps(nextProps, prevProps) {
    this.setState({
      hasProps: true,
      data: nextProps.data
    });
  }

  render() {
    const phone = this.state.hasProps ? this.state.data.mobile : '';
    const email = this.state.hasProps ? this.state.data.email : '';
    const location = this.state.hasProps ? this.state.data.location : '';
    return (
      <div className="row contact-container">
      <div className="columns large-12 medium-12 small-12">
        <span>{email}</span>
      </div>
        <div className="columns large-12 medium-12 small-12">
          <span>{phone}</span>
        </div>
        <div className="columns large-12 medium-12 small-12">
          <span>{location}</span>
        </div>
      </div>
    );
  }
}
