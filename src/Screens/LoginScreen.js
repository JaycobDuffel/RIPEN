import React, { useContext } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

import AuthContext from '../Context/AuthContext';
import Constants from '../Constants/Constants';

export default function LoginScreen({ navigation }) {

    const { setUser } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text>login screen</Text>
            <Button title='Login' onPress={() => setUser({name: 'Jaycob'})} />
            <Button title='No account? Sign up!' onPress={() => navigation.navigate('RegisterScreen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Constants.styles.brandYellow,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%'
    },
});
