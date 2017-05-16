import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  color: #7F7F7F;
  font-size: 32px;
  font-weight: 300;
`;

class Pokedex extends React.Component {

  render() {
    const { data } = this.props;
    const { loading, error, Trainer } = data;

    if (loading) {
      return (<div>Loading</div>);
    }

    if (error) {
      console.error(error);
      return (<div>An unexpected error occurred</div>);
    }

    return (
      <div className='w-100 bg-light-gray min-vh-100'>
        <Title className='tc pa5'>
          Hey {Trainer.name}, there are 0 Pokemons in your pokedex
        </Title>
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