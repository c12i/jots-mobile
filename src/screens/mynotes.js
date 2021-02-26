import React from 'react'
import { View } from 'react-native'
import { useQuery } from '@apollo/client'
import styled from 'styled-components/native'

import Loader from '../components/Loader'
import NoteFeed from '../components/NoteFeed'
import { MY_NOTES } from '../gql/query'

const Center = styled.Text`
    text-align: center;
    padding: 10px;
`

const MyNotes = ({ navigation }) => {
    const { data, loading, error } = useQuery(MY_NOTES)

    if (loading) return <Loader />

    if (error) return <Center>Error: {error.message}</Center>

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            {data.notes.length > 0 ? (
                <NoteFeed notes={data.notes} navigation={navigation} />
            ) : (
                <Center>No notes yet</Center>
            )}
        </View>
    )
}

MyNotes.navigationOptions = {
    title: 'My Notes'
}

export default MyNotes
