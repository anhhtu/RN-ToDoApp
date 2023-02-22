import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.task}>
      <View style={styles.leftInTask}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.taskText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
    task: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    leftInTask: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        borderRadius: 5,
        opacity: 0.6,
        marginRight: 15,
    },

    taskText: {
        maxWidth: '80%',
    },

    circular: {
        width: 15,
        height: 15,
        borderRadius: 10,
        borderColor: '#55BCF6',
        borderWidth: 2,
    },
});

export default Task;
