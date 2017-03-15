import React from 'react';
import { Link }  from 'react-router';

export default class Custom extends React.Component {
  render() {
    return (
        <p className="App-intro">
          This is our custom Component
          <br/>
          <Link to="/">Home</Link>
        </p>
    );
  }
}
