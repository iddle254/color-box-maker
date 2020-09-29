import React, { Component } from 'react';
import uuid from 'uuid';

class NewBoxForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: '', height: '', backgroundColor: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
      }

    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = {...this.state, id:uuid()};
        this.props.onSubmit(newBox);
        this.reset();
    }
    reset = () => {
        this.setState({width: '', height: '', backgroundColor: ''});
    }

    render() {
        return (
            <div>
        <h1>Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='Height'>Height</label>
          <input
            type='text'
            id='Height'
            name='height'
            value={this.state.height}
            onChange={this.handleChange}
          />
          <label htmlFor='Width'>Width</label>
          <input
            type='text'
            id='Width'
            name='width'
            value={this.state.width}
            onChange={this.handleChange}
          />
          <label htmlFor='Background'>Background</label>
          <input
            type='text'
            name='backgroundColor'
            id='Background'
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>            
        )
    }
}

export default NewBoxForm