import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Constants from '../Constants/Constants'

export default function HomeScreen({ user, navigation }) {
    return (
        <View style={styles.container}>
            <Text>Hello Home Screen</Text>
            <Button title='Account' onPress={() => navigation.navigate('AccountScreen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Constants.styles.primaryColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
});