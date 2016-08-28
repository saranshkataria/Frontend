import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top navbar-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-expand-toggle">
              <i className="fa fa-bars icon"></i>
            </button>
            <ol className="breadcrumb navbar-breadcrumb">
              <li className="active">Dashboard</li>
            </ol>
            <button type="button" className="navbar-right-expand-toggle pull-right visible-xs">
              <i className="fa fa-th icon"></i>
            </button>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <button type="button" className="navbar-right-expand-toggle pull-right visible-xs">
              <i className="fa fa-times icon"></i>
            </button>
          </ul>
        </div>
      </nav>
    );
  }
}
