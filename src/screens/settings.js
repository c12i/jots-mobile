import React from 'react'
import { View, Button } from 'react-native'
import * as SecureStore from 'expo-secure-store'

const Settings = ({ navigation }) => {
    const signOut = () => {
        SecureStore.deleteItemAsync('token')
            .then(() => navigation.navigate('Auth'))
            .catch(console.error)
    }

    return (
        <View style={{ paddingTop: 30 }}>
            <Button title="Sign Out" onPress={signOut} />
        </View>
    )
}

Settings.navigationOptions = {
    title: 'Settings'
}

export default Settings
