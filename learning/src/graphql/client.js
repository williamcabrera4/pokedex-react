import { ApolloClient, createNetworkInterface } from 'apollo-client'
import env from '../../../env'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: env.graphQlServer,
  }),
});

export default client;