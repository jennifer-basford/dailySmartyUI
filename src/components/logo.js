import React, { Component } from 'react';

import DS_Logo from "../../static/assets/ds_circle_logo.png"

class Logo extends Component {
    render() {
        return (
            <div className="logo-main">
                <img src={DS_Logo}/>
            </div>
        )
    }
}

export default Logo;