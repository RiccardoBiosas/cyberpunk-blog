import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Homepage from './containers/homepage'
import Navbar from './shared/navbar'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Homepage} />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
