import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Input.scss';

export class Input extends Component {
  state = {
    data: {
      username: '',
    },
  };

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        username: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className='Input-Main-Container'>
          <div className='Input__Container'>
            <h3>Ingresa tu username de Platzi</h3>

            <span>https://platzi.com/p/{this.state.data.username}</span>
            <input
              placeholder='Ingresa tu username de Platzi'
              type='text'
              name='username'
              id='username'
              onChange={this.handleChange}
            />

            <Link to='/ds'>
              <button>Comenzar</button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
