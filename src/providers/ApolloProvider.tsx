import React, {ReactChild, ReactChildren} from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

interface ApolloProps {
  children: ReactChild | ReactChildren;
}

const client = new ApolloClient({
  uri: 'https://gql-swapi.herokuapp.com',
  cache: new InMemoryCache(),
});

export default function ({children}: ApolloProps): JSX.Element {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
