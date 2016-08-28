import React, { Component } from 'react';
import "./../login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper container" style={{ background: "#f5f5f5" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <div className="panel panel-default text-center" style={{ borderRadius: 3.5 }}>
              <div className="panel-body">
                <h1 className="grey-text text-darken-3">Admin Login</h1>
                <form className="form" action="">
                    <button type="submit" id="fb-login-button">
                      <i className="fa fa-facebook-official" aria-hidden="true"></i>
                      <strong>Login</strong> with <strong>Facebook</strong>
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
            {/* <h1>Welcome</h1> */}
        </div>
        <ul className="bg-bubbles">
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      		<li></li>
      	</ul>
      </div>
    );
  }
}
