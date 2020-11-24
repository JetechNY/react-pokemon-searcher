import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {pokemon:[], searchTerm:""}

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(data => this.setState({pokemon: data}));
    }

  addPokemon = (pokeObj) => {
    fetch(`http://localhost:3000/pokemon/`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
              name: pokeObj.name,
              hp: pokeObj.hp,
              sprites: {
                front: pokeObj.frontUrl,
                back: pokeObj.backUrl
              }
            })
        })
        .then(r => r.json())
        .then(data => this.setState({pokemon: [...this.state.pokemon, data]}))
  }

  filteredPokemon = () => this.state.pokemon.filter(pokeObj => pokeObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

  handleChange = (e) => this.setState({searchTerm: e.target.value})

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange}/>
        <br />
        <PokemonCollection pokemon={this.filteredPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
