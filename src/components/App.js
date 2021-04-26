import React from 'react';
import Apple from './apple'
import UseReducerTest from './useReuderTest'
import ToDo from './todo'
import { RootStore, RootStoreProvider } from '../stores/RootStore'

const store = new RootStore()

function App() {
  return (
    <RootStoreProvider store={store}>
      <ToDo />
      <UseReducerTest />
      <Apple />
    </RootStoreProvider>
  );
}

export default App;
