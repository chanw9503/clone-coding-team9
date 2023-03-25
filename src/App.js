import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header/Header';
import Router from './shared/Router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
