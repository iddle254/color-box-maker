import React, { Component } from 'react'

class Box extends Component {
    render() {
        const { backgroundColour, height, width } = this.props;
        return (
            <div>
                <div style={{ backgroundColor: backgroundColour, height:`${height}em`, width:`${width}em` }}
                />              
                <button onClick={this.props.removeBox}>X</button>
            </div>                        
        )
    }
}

export default Box