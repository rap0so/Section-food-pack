import ApolloClient, { PresetConfig } from 'apollo-boost';

const clientOptions: PresetConfig = {
  uri: process.env.REACT_APP_GRAPHQL_URL,
};

const apolloClient = new ApolloClient(clientOptions);

export default apolloClient;
