import React, {Component, useEffect, useState} from "react";
import {StyleSheet, Dimensions, View, SafeAreaView, Text, TextInput, Button, TouchableOpacity, ScrollView} from "react-native";
import Todo from "./Todo";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'

// safe area stops going an app elements to the top nothch on iphone
const App = () => {

    const chartConfig = {
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2 // optional, default 3
    }

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState();
    const [total, setTotal] = useState(0)
    const [gigs, setGigs] = useState([
        {
            description: "Freelance",
            amount: 434,
        }
    ]);

    useEffect(() => {
        setTotal(gigs.reduce((total, gig) => total+Number(gig.amount), 0));
    }, [gigs]);

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
            <Text>Total Income: ${total} 🤑</Text>
            <TextInput style={styles.input} defaultValue={description} onChangeText={text => setDescription(text)} placeholder="Enter the description you did 🚀"/>

            <TextInput style={styles.input} keyboardType='numeric' defaultValue={amount} onChangeText={text => setAmount(text)} placeholder="Enter the amount you go from the job in $USD 🚀"/>
            <Button disabled={!amount && !description} title="Add Gig 🚀" onPress={addGig}/>
      {/*     disabled if there is nothing in the state of amount and in the state of description*/}

          {gigs.map(gig => (
              <View>
                  <Text>{gig.description}</Text>
                  <Text>${gig.amount}</Text>
              </View>
          ))}


          <View>
              <Text>
                  Bezier Line Chart
              </Text>
              <LineChart
                  data={{
                      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                      datasets: [{
                          data: [
                              Math.random() * 100,
                              Math.random() * 100,
                              Math.random() * 100,
                              Math.random() * 100,
                              Math.random() * 100,
                              Math.random() * 100
                          ]
                      }]
                  }}
                  width={Dimensions.get('window').width} // from react-native
                  height={220}
                  yAxisLabel={'$'}
                  chartConfig={{
                      backgroundColor: '#e26a00',
                      backgroundGradientFrom: '#fb8c00',
                      backgroundGradientTo: '#ffa726',
                      decimalPlaces: 2, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      style: {
                          borderRadius: 16
                      }
                  }}
                  bezier
                  style={{
                      marginVertical: 8,
                      borderRadius: 16
                  }}
              />
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 50,
        fontWeight: "bold",
    },
    input: {
        marginBottom: 30,
        margin: 20,
        height: 40,
        borderColor: "lightgray",
        borderWidth: 1,
    },

});

export default App;
