import React, { Component } from 'react'
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            properties: []                        
        };
        this.create = this.create.bind(this);
    }
    remove(id) {
        this.setState({
            properties: this.state.properties.filter(box => box.id !== id)
        });
    }

    create(newBox) {
        this.setState({
            properties: [...this.state.properties, newBox]
        });
    }

    render() {
        const {properties} = this.state;
        const boxes = properties.map(box => (
            <Box id={box.id} key={box.id} width={box.width} height={box.height} backgroundColour={box.backgroundColor} removeBox={() => this.remove(box.id) }/>
        )
        );
        return (
            <div>
                <NewBoxForm onSubmit={this.create}/>
                {boxes}                               
            </div>           
        )
    }
}

export default BoxList