import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemon: {}
    }
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/56')
    .then((response) => {
      this.setState({pokemon: response.data})
    })
    .catch((err) => {console.log(err)})
  }

  render() {
    if(this.state.pokemon.sprites) {
      return (
        <div className="App">
          <h1>{this.state.pokemon.name}</h1>
          <img
          src={this.state.pokemon.sprites.front_default} />
        </div>
      );
    } else {
      return <h1>Loading...</h1>
    }
    }
  }

  export default App;
