import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from '../Constants/Constants';

export default function AccountScreen(props) {
    return (
        <View style={styles.container}>
          <Text>Hello AccountScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Constants.styles.brandYellow,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
},
});