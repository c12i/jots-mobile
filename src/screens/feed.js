import React from 'react'
import { Text } from 'react-native'
import { useQuery } from '@apollo/client'

import NoteFeed from '../components/NoteFeed'
import Loader from '../components/Loader'
import { GET_NOTES } from '../gql/query'

const Feed = ({ navigation }) => {
    const { data, loading, error } = useQuery(GET_NOTES)

    if (loading) return <Loader />

    if (error) return <Text>Error: {error.message}</Text>

    return <NoteFeed navigation={navigation} notes={data.notes} />
}

Feed.navigationOptions = {
    title: 'Feed'
}

export default Feed
