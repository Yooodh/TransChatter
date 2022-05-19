import {StatusBar} from 'expo-status-bar'
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import uuid from 'react-uuid'

export default function Chat() {

  const [enteredGoal, setEnteredGoal] = useState({
    key: '',
    text: ''
  })
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal({
      key: '',
      text: enteredText
    })
  }

  const addGoalHandler = () => {
    const enteredGoalWithKey = {
      key: uuid(),
      text: enteredGoal.text
    }
    setCourseGoals(currentGoals => [...currentGoals, enteredGoalWithKey])
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput value={enteredGoal.text} onChangeText={goalInputHandler} style={styles.textInput} placeholder='입력'/>
        <Button onPress={addGoalHandler} title='전송' />
      </View>
      <FlatList data={courseGoals} renderItem={(data) => <View style={styles.goalItem}><Text style={styles.goalText}>{data.item.text}</Text></View>}  />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%'
  },
  row: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginBorrom: 30
  },
  goalItem: {
    backgroundColor:'gray',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 7,
    borderRadius: 7,
  },
  goalText: {
    color: 'white'
  }
});