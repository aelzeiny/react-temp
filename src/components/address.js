import React, { Component } from 'react';

class Address extends Component {
    constructor(props) {
        super(props);

        this.address = props.address;
        this.city = props.city;
        this.state = props.state;
    }

    render() {
        return (
            <div style={{border: "solid 3px black"}}>
                <p>{this.address}</p>
                <p>{this.city}</p>
                <p>{this.state}</p>
            </div>
        );
    }
}

export default Address;