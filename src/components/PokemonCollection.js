import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = (props) => {

  const pokemonMap = () => {
    return (props.pokemon.map(pokeObj => <PokemonCard key = {pokeObj.id} pokemon={pokeObj}/>))
  }

    return (
      <Card.Group itemsPerRow={6}>
        {pokemonMap()}
      </Card.Group>
    )
}

export default PokemonCollection
