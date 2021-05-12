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
import moment from "moment";

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
    const [labels, setLabels] = useState([]);
    const [dataPoints, setDataPoints] = useState('');
    // amount state
    const [amount, setAmount] = useState();
    // total state
    const [total, setTotal] = useState(0);
    // data to get the real data chat
    const [data, setData] = useState([
      //  this would be thhe key and the value, so the newdate is the key and the value iss 2000
      //  432423432432: 2000
      //  this is the array of objects
      //  with moment, we get the data and subtract, the days from the array, so basically means, removing them
        {[moment()]: 2000},
        {[moment().subtract(1, 'days')]: 2500},
    ])
    // works state is array of objects
    const [gigs, setGigs] = useState([
        {
            description: "Freelance",
            amount: 434,
            timestamp: new Date(),
        },
        {
            description: "Freelance",
            amount: 434,
            timestamp: new Date(),
        },
    ]);
    console.log("DEBUG 👉", data)


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
          timestamp: new Date(),
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
              {/*We have to make the data structure like this, to make our chart to readjust the changes in useEffect*/}
              {/*
                [
                {Date, 299},
                {Date2, 434
                */}

              <Text>
                  Bezier Line Chart
              </Text>
              <LineChart
                  data={{
                      labels: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
                      datasets: [{
                          data: [
                              // we take the first elemet from the gigs array (state)
                              Math.random() * 100,
                              Math.random() * 100,
                              Math.random() * 100,
                              Math.random() * 100,
                              Math.random() * 100,
                          ]
                      }
                      ]
                  }}
                  width={Dimensions.get('window').width} // from react-native
                  height={220}
                  yAxisLabel={'$'}
                  // yAxisSuffix="k"
                  yAxisInterval={1}
                  chartConfig={{
                      backgroundColor: '#e26a00',
                      backgroundGradientFrom: 'green',
                      backgroundGradientTo: 'blue',
                      decimalPlaces: null, // optional, defaults to 2dp
                      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                      style: {
                          borderRadius: 16
                      },
                      propsForDots: {
                          r: 6,
                          strokeWidth: "2",
                          stroke: '#ffa726'
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
