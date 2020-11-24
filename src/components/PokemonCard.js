import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: true
  }

  clickFlip = () => {
    this.setState({flipped: !this.state.flipped})
  }

  render() {
    return (
      <Card onClick={this.clickFlip}>
        <div>
          <div className="image">
            <img alt="oh no!" src= { this.state.flipped ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back }/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              HP {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
