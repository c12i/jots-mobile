import React from 'react'
import { useMutation } from '@apollo/client'
import styled from 'styled-components/native'
import * as SecureStore from 'expo-secure-store'

import UserForm from '../components/UserForm'
import Loader from '../components/Loader'
import { SIGN_IN } from '../gql/mutation'

const ErrorText = styled.Text`
    color: #f5222d;
    text-align: center;
    padding-top: 50px;
`

const SignIn = ({ navigation }) => {
    const storeToken = () => {
        SecureStore.setItemAsync('token', '0x434d')
            .then(() => {
                navigation.navigate('App')
            })
            .catch(console.error)
    }

    const [signIn, { error, loading }] = useMutation(SIGN_IN, {
        onCompleted: (data) => {
            storeToken(data.signIn.token)
        },
        onError: (err) => console.error(err)
    })

    if (loading) return <Loader />

    return (
        <React.Fragment>
            {error && <ErrorText>Error: {error.message}</ErrorText>}
            <UserForm signIn={signIn} navigation={navigation} />
        </React.Fragment>
    )
}

SignIn.navigationOptions = {
    title: 'Sign In'
}

export default SignIn
