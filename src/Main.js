import React from 'react'
import { StatusBar } from 'react-native'
import { ApolloProvider } from '@apollo/client'

import client from './gql/client'
import Screens from './screens'

const Main = () => {
    return (
        <ApolloProvider client={client}>
            <StatusBar hidden={false} barStyle="dark-content" />
            <Screens />
        </ApolloProvider>
    )
}

export default Main
