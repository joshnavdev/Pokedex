/* eslint-disable */
import React, { Component } from 'react';
import superagent from 'superagent';
import PokemonItem from './PokemonItem';
import PokemonList from './PokemonList';


class App extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      pokemonData: [],
      pokemonDataFilter: [],
      pokemonName: '',
    };

    this.changeName = this.changeName.bind(this);

  }

  componentDidMount(){
    console.log('RENDERED');
    superagent.get('http://192.168.1.36:8080/get-pokemons').end((err,res) => {
      console.log(res.body);
      this.setState({
        pokemonData: res.body
      });
  });
  }

  changeName(ev){
    const pokemonName = ev.target.value;
    const {pokemonData} = this.state;
    let pokemonFilter;

    pokemonFilter = pokemonData.filter(pokemon => 
      !!~pokemon.name.toLowerCase().indexOf(pokemonName)
    );

    this.setState({
      pokemonName: pokemonName,
      pokemonDataFilter: pokemonFilter,
    });
  }

  render(){

    return(
      <div>
        <h1>Pokedex</h1>
        <input type="text" onChange={this.changeName}/>
        <hr/>
        <PokemonList pokemons={this.state.pokemonDataFilter}/>
      </div>
    );
  }
}




export default App;
