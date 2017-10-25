import React from 'react';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const NavList = Object.keys(this.props.navigation).map( (navLink, index) => {
      return (
        <li key={index}>
          <a className='smoothscroll'>{this.props.navigation[navLink]}</a>
        </li>
      );
    });
    return (
      <nav className="nav-wrap opaque">
        <ul className="nav-list">
          {NavList}
        </ul>
      </nav>
    );
  }
}
