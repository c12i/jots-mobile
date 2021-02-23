import { gql } from '@apollo/client'

const GET_NOTES = gql`
    query Notes {
        notes {
            id
            createdAt
            content
            favoriteCount
            author {
                username
                id
                avatar
            }
        }
    }
`

const GET_NOTE = gql`
    query Note($id: ID!) {
        note(id: $id) {
            id
            createdAt
            content
            favoriteCount
            author {
                username
                id
                avatar
            }
        }
    }
`

export { GET_NOTES, GET_NOTE }
