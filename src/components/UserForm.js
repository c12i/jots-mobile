import React, { useState } from 'react'
import { Text, View } from 'react-native'
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

const SignUp = styled.TouchableOpacity`
    margin-top: 20px;
`

const Link = styled.Text`
    color: #0077cc;
    font-weight: bold;
`

const UserForm = ({ navigation, action, formType }) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = () => {
        action({
            variables: {
                input:
                    formType === 'signUp'
                        ? { username, password, email }
                        : { username, password }
            }
        })
    }

    return (
        <FormView>
            {formType === 'signUp' && (
                <View>
                    <FormLabel>Email</FormLabel>
                    <StyledInput
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        textContentType="emailAddress"
                        autoCompleteType="email"
                        autoCapitalize="none"
                        autoFocus={true}
                    />
                </View>
            )}
            <FormLabel>Username</FormLabel>
            <StyledInput
                onChangeText={(text) => setUsername(text)}
                textContentType="username"
                value={username}
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
            <FormButton onPress={handleSubmit}>
                <ButtonText>Submit</ButtonText>
            </FormButton>
            {formType !== 'signUp' ? (
                <SignUp onPress={() => navigation.navigate('SignUp')}>
                    <Text>
                        Need an account? <Link>Sign up.</Link>
                    </Text>
                </SignUp>
            ) : (
                <SignUp onPress={() => navigation.navigate('SignIn')}>
                    <Text>
                        Have an account? <Link>Sign in.</Link>
                    </Text>
                </SignUp>
            )}
        </FormView>
    )
}

export default UserForm
