import React, { Component } from "react";

import { Link } from "react-router-dom";

import DS_Logo from "../../static/assets/ds_circle_logo.png";

class Logo extends Component {
  render() {
    const size = {
      height: this.props.size ? this.props.size : 105,
      width: this.props.size ? this.props.size : 105,
    };
    return (
      <div className="logo-main">
        <Link to="/">
          <img style={size} src={DS_Logo} />
        </Link>
      </div>
    );
  }
}

export default Logo;
