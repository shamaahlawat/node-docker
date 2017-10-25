import React from 'react';

export default class Header extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div className="image-container">
        <img src={'/public/images/sandesh.jpg'} />
      </div>
    );
  }
}
