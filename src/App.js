import React, { Component } from 'react';
import superagent from 'superagent';

//import pokemons from './data.json';
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
    superagent.get('http://localhost:8080/get-pokemons')
    .end((err,res) => {
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
