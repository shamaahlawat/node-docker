import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import axios from 'axios';
import Header from './components/header';
import Info from './components/info.js';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: {},
    };
  }

  profileData() {
    return axios.get('/resume')
      .then( data => {
        this.setState({
          resume: data.data
        });
      });
  }

componentWillMount() {
  this.profileData();
}

  render() {
    // const { resume: { info } } = this.state;
    const info = this.state.resume.info;
    return (
      <div className="resume-overview">
        <div className="row header">
          <div className="small-4 columns left-panel">
            <Header />
          </div>
          <div className="small-8 columns right-panel">
            <Info data={info} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Resume />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
