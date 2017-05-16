import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Pokedex from '../components/Pokedex';
import env from '../../../env';

const trainerName = env.trainerName;

const TrainerQuery = gql`
  query TrainerQuery {
    Trainer(name: "${trainerName}") {
      name
    }
  }
`;

const PokedexWithQuery = graphql(TrainerQuery)(Pokedex);

export default PokedexWithQuery;