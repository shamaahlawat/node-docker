import React from 'react';

export default class Links extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="social-icon-container">
        <span className="social-icons"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></span>
        <span className="social-icons"><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></span>
        <span className="social-icons"><i className="fa fa-github fa-2x" aria-hidden="true"></i></span>
      </div>
    );
  }
}
