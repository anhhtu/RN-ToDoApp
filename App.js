import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./Components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Today's tasks</Text>

        <View style={styles.tasks}>
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
        </View>
      </View>
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
});
