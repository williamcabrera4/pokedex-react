import { ApolloClient, createNetworkInterface } from 'apollo-client'
import env from '../../../env'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    url: env.graphQlServer,
  }),
});

export default client;