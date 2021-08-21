import React, { useContext, useState } from 'react';
import { TextInput, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import AuthContext from '../Context/AuthContext';
import Constants from '../Constants/Constants';
import Storage from '../Context/Storage';
import logo from '../Assets/Images/logo.png';

export default function LoginScreen({ navigation }) {

    const { setUser } = useContext(AuthContext);
    const [name, setName] = useState('')

    return (
        <View style={styles.container}>
            <Image source={logo} />
            <View style={{ width: '100%', display: 'flex', alignItems: 'center', marginTop: 20 }}>
                <Text style={styles.buttonText}>Enter your name</Text>
                <TextInput style={styles.input} onChangeText={(text) => { setName(text) }} placeholder='Name' />
            </View>
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { setUser({ name: name }); Storage.storeData({name: name}) }}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.buttonText}>
                        Dont have an account? Sign up!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Constants.styles.brandYellow[500],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '50%'
    },
    button: {
        marginVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: Constants.styles.brandBlue,
    },
    buttonText: {
        fontSize: 20
    }
});
