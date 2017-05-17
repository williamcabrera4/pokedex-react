import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PokemonCard from '../components/PokemonCard';


const PokemonQuery = gql`
  query PokemonQuery($id: ID!) {
    Pokemon(id: $id) {
      id
      url
      name
    }
  }
`;

const PokemonCardWithRouter = withRouter(PokemonCard);

const PokemonCardWithQuery = graphql(PokemonQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.params.pokemonId,
    },
  }),
})(PokemonCardWithRouter);

export default PokemonCardWithQuery;
