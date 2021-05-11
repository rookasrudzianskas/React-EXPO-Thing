import React, {Component, useState} from "react";
import {StyleSheet, View, SafeAreaView, Text, TextInput, Button, TouchableOpacity, ScrollView} from "react-native";
import Todo from "./Todo";

// safe area stops going an app elements to the top nothch on iphone
const App = () => {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState();
    const [gigs, setGigs] = useState([
        {
            description: "Freelance",
            amount: 4342343,
        }
    ]);

    const addGig = () => {
      //   it sets to the previous things, and the new updated ones
      setGigs([...gigs, {
          description: description,
          amount: amount,
      }]);

      setDescription("");
      setAmount("");
    }


  return (
      // safe area
      <SafeAreaView>
        {/* divs, in here it is views*/}
          <View>
              <Text style={styles.titleText}>Lets build amazing app</Text>
          </View>
            <Text>Total Income: 3432$ 🤑</Text>
            <TextInput style={styles.app__input} defaultValue={description} onChangeText={text => setDescription(text)} placeholder="Enter the description you did 🚀"/>

            <TextInput style={styles.app__input} keyboardType='numeric' defaultValue={amount} onChangeText={text => setAmount(text)} placeholder="Enter the amount you go from the job in $USD 🚀"/>
            <Button disabled={!amount && !description} title="Add Gig 🚀" onPress={addGig}/>
      {/*     disabled if there is nothing in the state of amount and in the state of description*/}

          {gigs.map(gig => (
              <View>
                  <Text>{gig.description}</Text>
                  <Text>${gig.amount}</Text>
              </View>
          ))}
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 50,
        fontWeight: "bold",
    },
    app__input: {
        margin: 20,
        height: 40,
        borderColor: "lightgray",
        borderWidth: 1,
    },

});

export default App;
