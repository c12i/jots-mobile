import React from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
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

const NoteFeed = ({ navigation, notes }) => {
    return (
        <View>
            <FlatList
                data={notes}
                keyExtractor={({ id }) => String(id)}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Note', { id: item.id })
                        }
                    >
                        <FeedView>
                            <Note note={item} />
                        </FeedView>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NoteFeed
