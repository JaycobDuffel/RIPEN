import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import Constants from '../Constants/Constants';

export default function RegisterScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>register screen</Text>
            <Button title="Back" onPress={() => navigation.goBack()}/>
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
