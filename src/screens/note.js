import React from 'react'
import { View, Text } from 'react-native'

const NoteScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    return (
        <View style={{ padding: 10 }}>
            <Text>hello from note {id}</Text>
        </View>
    )
}

export default NoteScreen
