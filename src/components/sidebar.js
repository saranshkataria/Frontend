import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let self = this;
    let props = this.props;
    return (
      <div className="side-menu sidebar-inverse">
        <nav className="navbar navbar-default" role="navigation">
          <div className="side-menu-container">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">
                <span className="icon fa fa-paper-plane"></span>
                <div className="title">Flat Admin V.2</div>
              </Link>
              <button type="button" className="navbar-expand-toggle pull-right visible-xs">
                <i className="fa fa-times icon"></i>
              </button>
            </div>
            <ul className="nav navbar-nav">
              {
                props.links.map(function (crr, i) {
                  return (
                    <li key={i}>
                      <Link to={crr.link}>
                        <span className={`icon fa ${crr.icon}`}></span>
                        <span className="title" style={{ fontFamily: "Roboto !important" }}>{ crr.text }</span>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </nav>
      </div>
    );
  }
}
