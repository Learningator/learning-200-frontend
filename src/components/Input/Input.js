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

  sendUser = async () => {
    await window
      .fetch('3.137.109.12:3000/main', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
          user: 'UlisesSG',
          field: 'DS',
          subfield: 'IA/DS',
        },
      })
      .then((response) => JSON.stringify(response))
      .then((data) => console.log(data));
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


            <Link to="/lp">
              <button type='button' onClick={this.sendUser}>
                Comenzar
              </button>

            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
