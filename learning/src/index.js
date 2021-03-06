import React from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './containers/Pokedex';
import PokemonPage from './containers/PokemonPage';
import { Router, Route, browserHistory } from 'react-router';
import { ApolloProvider } from 'react-apollo';
import graphQlClient from './graphql/client';
import 'tachyons';
import './index.css';

ReactDOM.render((
    <ApolloProvider client={graphQlClient}>
      <Router history={browserHistory}>
        <Route path='/' component={Pokedex}/>
        <Route path='/view/:pokemonId' component={PokemonPage} />
      </Router>
    </ApolloProvider>
  ),
  document.getElementById('root')
);
