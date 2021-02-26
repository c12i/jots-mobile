import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from 'apollo-link-context'
import * as SecureStore from 'expo-secure-store'
import getEnvVars from '../../config'

const { API_URI: uri } = getEnvVars()

const cache = new InMemoryCache()
const httpLink = createHttpLink({ uri })

const authLink = setContext(async (_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: (await SecureStore.getItemAsync('token')) || ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache
})

export default client
