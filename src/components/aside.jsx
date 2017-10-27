import React from 'react';
import Links from './links.js'
import Contact from './contact.js';

export default class Aside extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hasProps: true,
      data: props.data
    };
  }

  componentWillReceiveProps(nextProps, prevProps) {
    this.setState({
      hasProps: true,
      data: nextProps.data
    });
  }

  render() {
      const firstName = this.state.data.info.first_name;
      const lastName = this.state.data.info.last_name;
      const desg = this.state.data.info.designation;
      const contact = this.state.data.contact;
      const nameSection = (
        <div className="name">
          <h1 className="first-name no-margin">{firstName}</h1>
          <h1 className="last-name no-margin">{lastName}</h1>
          <h2 className="desg no-margin">{desg}</h2>
        </div>
      );

    return (
      <div>
        <div className="image-container">
          <img src={'/public/images/sandesh.jpg'} />
        </div>
        {nameSection}
        <Links />
        <Contact data={contact} />
      </div>
    );
  }
}
