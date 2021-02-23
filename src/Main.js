import React from 'react'
import { ApolloProvider } from '@apollo/client'

import client from './gql/client'
import Screens from './screens'

const Main = () => {
    return (
        <ApolloProvider client={client}>
            <Screens />
        </ApolloProvider>
    )
}

export default Main
