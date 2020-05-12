import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Item = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onRemoveItem.bind(this, props.item.id)}>
      <View style={styles.listItem} >
        <Text>{props.item.value}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10, // Examaple of being based on CSS but not CSS
    backgroundColor: 'white',
    shadowColor: '#343a40',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 10
  }
})

export default Item