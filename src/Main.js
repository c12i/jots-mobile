import React from 'react'
import { Image, ActivityIndicator, Button } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
    flex: 1;
    justify-content: center;
`

const H1 = styled.Text`
    font-size: 48px;
    font-weight: bold;
`

const P = styled.Text`
    margin: 24px 0;
    font-size: 18px;
`

const Main = () => {
    return (
        <StyledView>
            <H1>Jots</H1>
            <P>This is my app</P>
            <ActivityIndicator size="large" />
            <Button title="Press Me!" />
            <Image source={require('../assets/images/hello-world.jpg')} />
        </StyledView>
    )
}

export default Main
