import React from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const DataClient = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cj65436uqmnfi0160tx7tv3z9' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
})

DataProvider.propTypes = {
  children: PropTypes.node
}
export default function DataProvider (props) {
  return (
    <ApolloProvider client={DataClient}>
      {props.children}
    </ApolloProvider>
  )
}
