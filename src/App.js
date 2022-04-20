import React from 'react';
import {
  ApolloProvider,
} from "@apollo/client";
import './App.css';
import { client } from './apollo/client';
import { EpochsTable } from './components/EpochsTable';

function App() {
  return (
    <ApolloProvider client={client}>
      <EpochsTable />
    </ApolloProvider>
  );
}

export default App;
