import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import AuthContext from '../Context/AuthContext';
import Constants from '../Constants/Constants'

export default function HomeScreen({ navigation }) {

    const authContext = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text>Hello HomeScreen {authContext.user.firstName}</Text>
            <Button title='Account' onPress={() => navigation.navigate('AccountScreen')} />
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