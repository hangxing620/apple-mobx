import React, { createContext, useContext } from 'react'
import AppleStore from './AppleStore'
import TodoStore from './TodoStore'

class RootStore {
  constructor() {
    this.todoStore = new TodoStore()
    this.appleStore = new AppleStore()
  }
}

const ctxConText = createContext()

function RootStoreProvider({ store, children }) {
  return <ctxConText.Provider value={store}>
    {children}
  </ctxConText.Provider>
}

function useRootStore() {
  return useContext(ctxConText)
}

export {
  RootStore,
  RootStoreProvider,
  useRootStore
}