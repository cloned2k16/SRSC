import React, { Component } from    'react';
import logo                 from    './logo.svg';
import                              './BrandIdentity.css';


class BrandIdentity extends Component {
    constructor() {
        super();
        this.state = { focused: 0 };
    }

    render                      () {
        return (
            <div id="brandId" ><img id='logo' src={logo} alt='&reg; Brandname'/><ul id='brandLabel'><li>Brandname</li></ul></div>
        );

    }
};

export default BrandIdentity;
