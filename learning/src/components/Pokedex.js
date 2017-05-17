import React from 'react';
import styled from 'styled-components';
import ApolloComponent from './ApolloComponent';
import PokemonPreview from './PokemonPreview';

const Title = styled.div`
  color: #7F7F7F;
  font-size: 32px;
  font-weight: 300;
`;

class Pokedex extends ApolloComponent {

  apolloRender() {
    const { Trainer } = this.props.data;

    return (
      <div className='w-100 bg-light-gray min-vh-100'>
        <Title className='tc pa5'>
          Hey {Trainer.name}, there are {Trainer.ownedPokemons.length} Pokemons in your pokedex
        </Title>
        <div className='flex flex-wrap justify-center center w-75'>
          {Trainer.ownedPokemons.map((pokemon) =>
            <PokemonPreview key={pokemon.id} pokemon={pokemon} />
          )}
        </div>
      </div>
    );
  }
}

Pokedex.propTypes = {
  data: React.PropTypes.shape({
    loading: React.PropTypes.bool,
    error: React.PropTypes.object,
    Trainer: React.PropTypes.object,
  }).isRequired,
};

export default Pokedex;