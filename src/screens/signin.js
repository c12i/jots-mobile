import React from 'react'
import { View, Text, Button } from 'react-native'
import * as SecureStore from 'expo-secure-store'

const SignIn = ({ navigation }) => {
    const storeToken = () => {
        SecureStore.setItemAsync('token', '0x434d')
            .then(() => {
                navigation.navigate('App')
            })
            .catch(console.error)
    }
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>hello from signin page</Text>
            <Button title="Sign in!" onPress={storeToken} />
        </View>
    )
}

SignIn.navigationOptions = {
    title: 'Sign In'
}

export default SignIn
