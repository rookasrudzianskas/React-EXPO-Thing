import React, {Component} from "react";
import {StyleSheet, View, SafeAreaView, Text} from "react-native";

// safe area stops going an app elements to the top nothch on iphone
const App = () => {
  return (
      // safe area
      <SafeAreaView>
        {/* divs, in here it is views*/}
        <View  >
          <Text style={styles.firstLabel}>I am TODO app</Text>
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
