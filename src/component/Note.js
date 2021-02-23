import React from 'react'
import { ScrollView, Text } from 'react-native'
import styled from 'styled-components/native'

const NoteView = styled.ScrollView`
    padding: 10px;
`

const Note = ({ note }) => {
    return (
        <NoteView>
            <Text>{note.content}</Text>
        </NoteView>
    )
}

export default Note
