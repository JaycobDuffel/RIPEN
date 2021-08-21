import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function Button( props ) {


  return (
    <TouchableOpacity onPress={ props.onPress }>
      <View style={ styles.button }>
        <Text style={ styles.buttonText}>
          { props.text }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginBottom: '1rem',
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: '#2A9D8F',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius:2,
    shadowColor: '#027B6C',

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
})