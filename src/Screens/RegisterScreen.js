import React, { useContext, useState } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import AuthContext from '../Context/AuthContext';
import Constants from '../Constants/Constants';
import Auth from '../Auth/encryption';
import api from '../API/users';

export default function RegisterScreen({ navigation }) {
    const { user, setUser } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (email, username, password) => {

        const hashedPassword = Auth.encode(password)
        const newUser = { id: email, email, username, hashedPassword }
        const result = await api.postUser(newUser)

        if (!result.ok) {
            console.log(result.problem)
        }
        setUser(newUser);
    };

    return (
        <View style={styles.container}>
            <TextInput
                autoFocus
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={(text) => {
                    setUsername(text);
                }}
                placeholderTextColor='grey'
                placeholder="Username"
                style={styles.input}
                value={username}
                />
            <TextInput
                autoFocus
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={(text) => {
                    setEmail(text.toLowerCase());
                }}
                placeholderTextColor='grey'
                placeholder="Email"
                style={styles.input}
                value={email}
                />
            <TextInput
                autoFocus
                autoCapitalize="none"
                secureTextEntry
                onChangeText={(text) => {
                    setPassword(text);
                }}
                placeholderTextColor='grey'
                placeholder="Password"
                style={styles.input}
                value={password}
            />
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}><Text style={styles.buttonText}>Back</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleSubmit(email, username, password)}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: Constants.styles.brandGreen,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        marginHorizontal: 10,
        height: 40,
        width: 90
    },
    buttonText: {
        color: 'white'
    },
    container: {
        backgroundColor: Constants.styles.brandYellow,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        height: 50,
        width: '66%',
        padding: 15,
        marginVertical: 10,
        marginLeft: 10,
    },
});
