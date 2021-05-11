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
        backgroundGradientFrsom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2 // optional, default 3
    }

    // description state
    const [description, setDescription] = useState('');
    // amount state
    const [amount, setAmount] = useState();
    // total state
    const [total, setTotal] = useState(0);
    // works state is array of objects
    const [gigs, setGigs] = useState([
        {
            description: "Freelance",
            amount: 434,
        }
    ]);

    useEffect(() => {
        // we run this once the gigs changes, so the new one is added, it runs down and sets the new Total with reducer
        // it takes the valu to which add, so in this case total and what to add. so what to add is the gig.amount of money from the state
        // and it just returns the new SetTotal with updated value
        setTotal(gigs.reduce((total, gig) => total+Number(gig.amount), 0));
    }, [gigs]);

    const addGig = () => {
      //   it sets to the previous things, and the new updated ones
      //  to keep the old ones, it firstly adds the old ones, and then the new one in the end
      setGigs([...gigs, {
          description: description,
          amount: amount,
      }]);
      // erases what we have typed
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


          <View>

              <Text>
                  Bezier Line Chart
              </Text>
              <LineChart
                  data={{
                      labels: ['25/10/21', '26/10/21', '27/10/21', '28/10/21', '29/10/21'],
                      datasets: [{
                          data: [
                              Math.random() * 100,

                          ]
                      }]
                  }}
                  width={Dimensions.get('window').width} // from react-native
                  height={220}
                  yAxisLabel={'$'}
                  yAxisSuffix="k"
                  yAxisInterval={1}
                  chartConfig={{
                      backgroundColor: '#e26a00',
                      backgroundGradientFrom: '#fb8c00',
                      backgroundGradientTo: '#ffa726',
                      decimalPlaces: 1, // optional, defaults to 2dp
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

            <Text>Total Income: ${total} 🤑</Text>
            {/* this uses onChangePress to set the value to the state. and the value is from the description state*/}
            <TextInput style={styles.input} defaultValue={description} onChangeText={text => setDescription(text)} placeholder="Enter the description you did 🚀"/>

          {/* this uses onChangePress to set the value to the state. and the value is from the amount state*/}
          {/* also we change the keyboard to numeric*/}
            <TextInput style={styles.input} keyboardType='numeric' defaultValue={amount} onChangeText={text => setAmount(text)} placeholder="Enter the amount you go from the job in $USD 🚀"/>
            {/* button is disabled, if thre is noting in amount and description states*/}
            {/* then we press, we get to the addGig function*/}
            <Button disabled={!amount && !description} title="Add Gig 🚀" onPress={addGig}/>
      {/*     disabled if there is nothing in the state of amount and in the state of description*/}
      {/* showing all the jobs with amount of money in here*/}
      {/*    mapping per gigs sate, and outputting gig.something*/}
          {gigs.map(gig => (
              <View>
                  <Text>{gig.description}</Text>
                  <Text>${gig.amount}</Text>
              </View>
          ))}


      </SafeAreaView>
  );
}

// styles
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
