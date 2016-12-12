import React, { Component } from 'react';

import PokemonItem from './PokemonItem';

class PokemonList extends Component{
  render(){
    const {pokemons} = this.props;
    let lastName = '';

    return (
      <ul id="list">
        {
          pokemons.map((pokemon, idx) =>{
            if(lastName == pokemon.name){
              return null;
            }
            lastName = pokemon.name;
            return(
              <PokemonItem 
              key = {idx}
              pokemonName={pokemon.name}
              photoURL={pokemon.ThumbnailImage}
              />
            );
          })
        }
      </ul>
    );  
  }
}

export default PokemonList;