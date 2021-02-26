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

const MY_NOTES = gql`
    query MyNotes {
        me {
            id
            username
            notes {
                id
                content
                favoriteCount
                createdAt
                author {
                    id
                    username
                    avatar
                }
            }
        }
    }
`

const MY_FAVORITES = gql`
    query MyFavorites {
        me {
            id
            username
            favorites {
                id
                content
                favoriteCount
                createdAt
                author {
                    id
                    username
                    avatar
                }
            }
        }
    }
`

export { GET_NOTES, GET_NOTE, MY_NOTES, MY_FAVORITES }
