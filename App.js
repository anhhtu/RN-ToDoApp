import React from "react";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./Components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
    Keyboard.dismiss();
  }
 
  const completeTask = (index) => {
    let newTasksList = [...taskItems];
    newTasksList.splice(index, 1);
    setTaskItems(newTasksList);
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Today's tasks</Text>

        <View style={styles.tasks}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => {completeTask(index)}}>
                  <Task key={index} text={item}/>
                </TouchableOpacity>
              );
            })
          }
          {/* <Task text={"Task 1"} />
          <Task text={"Task 2"} /> */}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.taskInput} placeholder={"Write a task"} value={task} onChangeText={(text) => setTask(text)}/>
        <TouchableOpacity onPress={() => {handleAddTask()}}>
          <View style={styles.addButtonWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BD46",
  },

  wrapper: {
    padding: 30,
    paddingTop: 80,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  tasks: {
    marginVertical: 10,
  },

  writeTaskWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  taskInput: {
    backgroundColor: '#FFF',
    width: 300,
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 30,
  },

  addButtonWrapper: {
    backgroundColor: '#FFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addText: {
    fontSize: 18
  },
  
});
