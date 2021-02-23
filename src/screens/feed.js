import React from 'react'
import { View, Text, Button } from 'react-native'

const Feed = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Button
                title="Continue reading"
                onPress={() => navigation.navigate('Note')}
            />
            <Text>hello from feed</Text>
        </View>
    )
}

Feed.navigationOptions = {
    title: 'Feed'
}

export default Feed
