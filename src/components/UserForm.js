import React, { useState } from 'react'
import styled from 'styled-components/native'

const FormView = styled.View`
    padding: 20px;
`

const StyledInput = styled.TextInput`
    border: 1px solid gray;
    font-size: 18px;
    padding: 8px;
    margin-bottom: 24px;
    border-radius: 5px;
    width: 100%;
`

const FormLabel = styled.Text`
    font-size: 18px;
    font-weight: bold;
    padding: 2px;
`

const FormButton = styled.TouchableOpacity`
    background: #333;
    width: 100%;
    padding: 8px;
    color: #fff;
    border-radius: 5px;
`

const ButtonText = styled.Text`
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`

const UserForm = ({ navigation, signIn }) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = () => {
        signIn({ variables: { input: { username, password } } })
    }

    return (
        <FormView>
            <FormLabel>Username</FormLabel>
            <StyledInput
                onChangeText={(text) => setUsername(text)}
                textContentType="username"
                value={username}
                autoCompleteType="username"
                autoFocus={true}
                autoCapitalize="none"
            />
            <FormLabel>Password</FormLabel>
            <StyledInput
                onChangeText={(text) => setPassword(text)}
                value={password}
                textContentType="password"
                secureTextEntry={true}
            />
            <FormButton title="Log In" onPress={handleSubmit}>
                <ButtonText>Submit</ButtonText>
            </FormButton>
        </FormView>
    )
}

export default UserForm
