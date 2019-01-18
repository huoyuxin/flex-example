import React, {Component, Fragment} from 'react';
import './App.css';

export default class App extends Component {
  render(){
    return (
      <Fragment>
        <div className="container">
          <div className="b"></div>
          <div className="c"></div>
        </div>
        <div className="container">
          <div className="a"></div>
          <div className="b"></div>
          <div className="c"></div>
        </div>
        <div className="container">
          <div className="a"></div>
          <div className="b"></div>
          <div className="c"></div>
          <div className="d"></div>
        </div>
        <div className="title">
        unequal grid
        </div>
        <div className="unequal">
          <div className="a"></div>
          <div className="b"></div>
          <div className="c special"></div>
          <div className="d"></div>
        </div>
      </Fragment>
    )
  }
}
