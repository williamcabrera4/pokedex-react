import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Pokedex from '../components/Pokedex';
import env from '../../../env';

const trainerName = env.trainerName;

const TrainerQuery = gql`
  query TrainerQuery($trainerName: String!) {
    Trainer(name: $trainerName) {
      id
      name
      ownedPokemons {
        id
        name
        url
      }
    }
  }
`;

const PokedexWithQuery = graphql(TrainerQuery, {
  options: {
    variables: {
      trainerName,
    },
  },
})(Pokedex);

export default PokedexWithQuery;