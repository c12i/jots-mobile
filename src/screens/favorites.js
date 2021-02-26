import React from 'react'
import { View } from 'react-native'
import { useQuery } from '@apollo/client'
import styled from 'styled-components/native'

import Loader from '../components/Loader'
import NoteFeed from '../components/NoteFeed'
import { MY_FAVORITES } from '../gql/query'

const Center = styled.Text`
    text-align: center;
    padding: 10px;
`

const Favorites = ({ navigation }) => {
    const { data, loading, error } = useQuery(MY_FAVORITES)

    if (loading) return <Loader />

    if (error) return <Center>Error: {error.message}</Center>

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            {data.me.favorites.length > 0 ? (
                <NoteFeed notes={data.me.favorites} navigation={navigation} />
            ) : (
                <Center>No notes yet</Center>
            )}
        </View>
    )
}

Favorites.navigationOptions = {
    title: 'Favorites'
}

export default Favorites
