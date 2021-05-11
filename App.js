import React, {Component, useState} from "react";
import {StyleSheet, View, SafeAreaView, Text, TextInput, Button, TouchableOpacity, ScrollView} from "react-native";
import Todo from "./Todo";

// safe area stops going an app elements to the top nothch on iphone
const App = () => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [gigs, setGigs] = useState([
        {
            description: "Freelance",
            amount: 4342343,
        }
    ]);


  return (
      // safe area
      <SafeAreaView>
        {/* divs, in here it is views*/}
          <View>
              <Text style={styles.titleText}>Lets build amazing app</Text>
          </View>
          <TextInput style={styles.app__input} defaultValue={description} onChangeText={text => setDescription(text)} placeholder="Enter the description you did 🚀"/>

            <TextInput style={styles.app__input} keyboardType='numeric' defaultValue={amount} onChangeText={text => setAmount(text)} placeholder="Enter the amount you go from the job 🚀"/>
            {/*<Button title="Add TODO" onPress={addTodo}/>*/}
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
        borderColor: "lightgray",
        borderWidth: 1,
    },

});

export default App;
