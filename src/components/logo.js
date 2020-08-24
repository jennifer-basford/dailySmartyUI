import React, { Component } from "react";

import DS_Logo from "../../static/assets/ds_circle_logo.png";

class Logo extends Component {
  render() {
    const size = {
      height: this.props.size ? this.props.size : 105,
      width: this.props.size ? this.props.size : 105,
    };
    return (
      <div className="logo-main">
        <img style={size} src={DS_Logo} />
      </div>
    );
  }
}

export default Logo;
