import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function Button( { text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          { text }
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
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