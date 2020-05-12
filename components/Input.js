import React, {useState} from 'react'
import { StyleSheet, View, Button, TextInput, Modal, StatusBar } from "react-native";

const Input = props => {
  const [enteredItem, setEnteredItem] = useState('')

  const itemInputHandler = (enteredText) => {
    setEnteredItem(enteredText)
  }

  const addItemHandler = () => {
    props.onAddItem(enteredItem)
    setEnteredItem('')
  }

  return (
    <Modal style={styles.modal} visible={props.visible} animationType="slide">
      <StatusBar  barStyle="dark-content" />
      <View style={styles.spacer}></View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter something"
            style={styles.input}
            onChangeText={itemInputHandler}
            value={enteredItem}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Add"
                onPress={addItemHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                color="red"
                title="Cancel"
                onPress={props.onCancel}
              />
            </View>
          </View>
        </View>
      <View style={styles.spacer}></View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  spacer: {
    flex: 1
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 20,
    paddingTop: 60,
    paddingBottom: 60,
    shadowColor: '#343a40',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 10
  },
  input: {
    textAlign: 'center',
    borderBottomColor: '#343a40',
    borderBottomWidth: 1,
    width: '80%',
    marginBottom: 20
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    // Column is the default in React Native
    justifyContent: 'space-between'
  },
  button: {
    // Button Components need to be wrapped in a View for styling
    width: '40%',
    backgroundColor: 'white'
  }
})

export default Input