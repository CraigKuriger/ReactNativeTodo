import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button, StatusBar } from "react-native";
import Header from './components/Header';
import Input from './components/Input';
import Item from './components/Item';

export default function App() {
  const [items, setItems] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addItemHandler = (goalTitle) => {
    setItems(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle}
    ])
    setIsAddMode(false)
  }

  const removeItemHandler = (goalId) => {
    setItems(currentGoals => 
      currentGoals.filter(goal => goal.id !== goalId)  
    )
  }

  const cancelHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <StatusBar  barStyle="light-content" />
      <Header title='Gangster Cows' />
      <Button title="Add New" onPress={() => setIsAddMode(true)} />
      <Input
        visible={isAddMode}
        onAddItem={addItemHandler}
        onCancel={cancelHandler}
      />
      <FlatList style={styles.flatList} data={items} renderItem={itemData => 
        <Item
          item={itemData.item}
          onRemoveItem={removeItemHandler}
        />
      }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  flatList: {
    padding: 20
  }
});
