import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styled from 'styled-components/native'

import Note from './Note'

const FeedView = styled.View`
    height: 100;
    overflow: hidden;
    margin-bottom: 10px;
`

const Separator = styled.View`
    height: 1;
    width: 100%;
    background-color: #ced0ce;
`

const notes = [
    { id: 0, content: 'Giant Steps' },
    { id: 1, content: 'Tomorrow Is The Question' },
    { id: 2, content: 'Tonight At Noon' },
    { id: 3, content: 'Out To Lunch' },
    { id: 4, content: 'Green Street' },
    { id: 5, content: 'In A Silent Way' },
    { id: 6, content: 'Lanquidity' },
    { id: 7, content: 'Nuff Said' },
    { id: 8, content: 'Nova' },
    { id: 9, content: 'The Awakening' }
]

const NoteFeed = () => {
    return (
        <View>
            <FlatList
                data={notes}
                keyExtractor={({ id }) => String(id)}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={({ item }) => (
                    <FeedView>
                        <Note note={item} />
                    </FeedView>
                )}
            />
        </View>
    )
}

export default NoteFeed