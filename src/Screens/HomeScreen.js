import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AuthContext from '../Context/AuthContext';
import Constants from '../Constants/Constants'

export default function HomeScreen() {

    const { user } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text>Hello {user.name}</Text>
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