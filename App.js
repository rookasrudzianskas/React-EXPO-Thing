import React, {Component, useState} from "react";
import {StyleSheet, View, SafeAreaView, Text, TextInput, Button, TouchableOpacity} from "react-native";
import Todo from "./Todo";

// safe area stops going an app elements to the top nothch on iphone
const App = () => {

    const [input, setInput] = useState();
    const [todos, setTodos] = useState();

    const addTodo = () => {
        setTodos([input, ...todos]);
        setInput("");
    };

  return (
      // safe area
      <SafeAreaView>
        {/* divs, in here it is views*/}
          <View>
              <Text style={styles.titleText}>Lets build amazing app</Text>
          </View>

          {/*{todos.map(todo => (*/}
          {/*    <Todo title={todo} />*/}
          {/*))}*/}
            <TextInput style={styles.app__input} value={input} onChangeText={text => setInput(text)} placeholder="Rookas"/>
            <TouchableOpacity title="Add TODO" onPress={addTodo}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    firstLabel: {
        fontSize: 30,
        fontWeight: "bold",
    },
    app__input: {
        borderRadius: 999,
        margin: 20,
        height: 40,
        borderColor: "red",
        borderWidth: 1,
    },

});

export default App;
