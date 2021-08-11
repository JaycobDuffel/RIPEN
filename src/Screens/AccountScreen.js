import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AuthContext from '../Context/AuthContext';
import Constants from '../Constants/Constants';

export default function AccountScreen(props) {

    const { setUser } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text>Hello AccountScreen</Text>
            <Button title="Logout" onPress={() => setUser(null)} />
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