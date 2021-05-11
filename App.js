import React, {Component} from "react";
import {StyleSheet, View, SafeAreaView, Text} from "react-native";
import Todo from "./Todo";

// safe area stops going an app elements to the top nothch on iphone
const App = () => {
  return (
      // safe area
      <SafeAreaView>
        {/* divs, in here it is views*/}
        <View  >
          <Todo title="Go To get bananas"/>
          <Todo title="Go to sleep" />
          <Todo title="Go to sleep"/>
          <Todo title="Go to sleep"/>
          <Todo title="Go to sleep"/>
        </View>

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    firstLabel: {
        fontSize: 30,
        fontWeight: "bold",
    },

});

export default App;
