import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://graphql-demo.dev.aicall.ru/graphq',
  cache: new InMemoryCache(),
});


export default client;