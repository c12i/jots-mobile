import React, { useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'

import Loader from '../components/Loader'

const AuthLoading = ({ navigation }) => {
    const checkLoadingState = async () => {
        const userToken = await SecureStore.getItemAsync('async')
        navigation.navigate(userToken ? 'App' : 'Auth')
    }

    useEffect(() => {
        checkLoadingState()
    })
    return <Loader />
}

export default AuthLoading
