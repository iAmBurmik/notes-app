'use client';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './client';
import client from './client';

export default function ApolloProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
