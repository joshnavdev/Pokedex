import React, { Component } from 'react';

class PokemonItem extends Component {
  render(){
    const {pokemonName, photoURL} = this.props;

    return (
      <li>
        <img src={photoURL}/>
        <span>{pokemonName}</span>

      </li>
    );
  }
}

export default PokemonItem;