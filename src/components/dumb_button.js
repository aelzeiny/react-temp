import React, { Component } from "react";


class Article extends Component {
    constructor(props) {
        super(props);
        this.coolBoy = props.coolBoy;
    }

    render(){
        return (
            <marquee> { this.coolBoy } is awesome for teaching me this stuff </marquee>
        );
    }
}

export default Article;