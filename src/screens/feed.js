import React from 'react'
import NoteFeed from '../component/NoteFeed'

const Feed = ({ navigation }) => {
    return <NoteFeed navigation={navigation} />
}

Feed.navigationOptions = {
    title: 'Feed'
}

export default Feed
