import React from 'react'
import { Text } from 'react-native'
import Markdown from 'react-native-markdown-renderer'
import styled from 'styled-components/native'
import { format } from 'date-fns'

const NoteView = styled.ScrollView`
    padding: 10px;
`

const BoldText = styled.Text`
    font-weight: 600;
`

const Note = ({ note }) => {
    return (
        <NoteView>
            <Text>
                Note by <BoldText>{note.author.username}</BoldText> / Published{' '}
                {format(new Date(note.createdAt), 'MMM do yyyy')}
            </Text>
            <Markdown>{note.content}</Markdown>
        </NoteView>
    )
}

export default Note
