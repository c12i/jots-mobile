import React from 'react'
import { View } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import { useMutation } from '@apollo/client'
import styled from 'styled-components/native'

import UserForm from '../components/UserForm'
import Loader from '../components/Loader'
import { SIGN_UP } from '../gql/mutation'

const ErrorText = styled.Text`
    color: #f5222d;
    text-align: center;
    padding-top: 50px;
`

const SignUp = ({ navigation }) => {
    const storeToken = (token) => {
        SecureStore.setItemAsync('token', token)
            .then(() => {
                navigation.navigate('App')
            })
            .catch(console.error)
    }

    const [signUp, { error, loading }] = useMutation(SIGN_UP, {
        onCompleted: (data) => {
            storeToken(data.signUp.token)
        },
        onError: (err) => console.error(err)
    })

    if (loading) return <Loader />

    return (
        <View>
            {error && <ErrorText>Error: {error.message}</ErrorText>}
            <UserForm
                action={signUp}
                formType="signUp"
                navigation={navigation}
            />
        </View>
    )
}

SignUp.navigationOptions = {
    title: 'Register'
}

export default SignUp
