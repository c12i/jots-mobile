import React from 'react'
import { Text } from 'react-native'
import { useQuery } from '@apollo/client'

import NoteFeed from '../components/NoteFeed'
import Loader from '../components/Loader'
import Refreshable from '../components/Refreshable'
import { GET_NOTES } from '../gql/query'

const Feed = ({ navigation }) => {
    const { data, loading, error, refetch } = useQuery(GET_NOTES)

    if (loading) return <Loader />

    if (error) return <Text>Error: {error.message}</Text>

    return (
        <Refreshable action={refetch}>
            <NoteFeed navigation={navigation} notes={data.notes} />
        </Refreshable>
    )
}

Feed.navigationOptions = {
    title: 'Feed'
}

export default Feed
