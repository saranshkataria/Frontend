import React, { Component } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

export default class Events extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row content-container">
        <Navbar />
        <Sidebar
          links={[
            { icon: "fa-dashboard", text: "Dashboard", link: "events" },
            { icon: "fa-bar-chart", text: "Analytics", link: "analytics" },
            { icon: "fa-cog", text: "Settings", link: "settings" },
            { icon: "fa-sign-out", text: "Logout", link: "logout" },
          ]}
        />

        {/* Main Content */}
        <div className="container-fluid">
            <div className="side-body padding-top">
                <div className="row no-margin-bottom">
                    <div className="col-sm-6 col-xs-12">
                      <h2>Hey</h2>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
