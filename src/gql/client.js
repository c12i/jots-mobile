import { ApolloClient, InMemoryCache } from '@apollo/client'
import getEnvVars from '../../config'

const { API_URI: uri } = getEnvVars()

const cache = new InMemoryCache()

const client = new ApolloClient({ uri, cache })

export default client
