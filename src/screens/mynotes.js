import React from 'react'
import { View } from 'react-native'
import { useQuery } from '@apollo/client'
import styled from 'styled-components/native'

import Loader from '../components/Loader'
import NoteFeed from '../components/NoteFeed'
import Refreshable from '../components/Refreshable'
import { MY_NOTES } from '../gql/query'

const Center = styled.Text`
    text-align: center;
    padding: 10px;
`

const MyNotes = ({ navigation }) => {
    const { data, loading, error, refetch } = useQuery(MY_NOTES)

    if (loading) return <Loader />

    if (error) return <Center>Error: {error.message}</Center>

    return (
        <View>
            <Refreshable action={refetch}>
                {data.me.notes.length > 0 ? (
                    <NoteFeed notes={data.me.notes} navigation={navigation} />
                ) : (
                    <Center>No notes yet</Center>
                )}
            </Refreshable>
        </View>
    )
}

MyNotes.navigationOptions = {
    title: 'My Notes'
}

export default MyNotes
