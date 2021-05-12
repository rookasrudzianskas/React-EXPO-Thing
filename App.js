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
        { date: moment().format('LL'), amount: 2000},
        { date: moment().subtract(1, 'days').format('LL'), amount: 1500},
        { date: moment().subtract(1, 'days').format('LL'), amount: 2500},
        { date: moment().subtract(1, 'days').format('LL'), amount: 3500},
        { date: moment().subtract(2, 'days').format('LL'), amount: 4500},
        { date: moment().subtract(2, 'days').format('LL'), amount: 5500},
    ])

    const [transformedData, setTransformedData] = useState([]); // transformed data as the piece of data
    //every time I add something new, the useEffect is going to be fired

    useEffect(() => {
    //    whenever the data changes, this code runs
        setTransformedData(transformData(groupBy(data, "date")))
    }, [data])

    //==========================================================================

    // grouping is going to make, that if we have the same days and the amounts added at that day is going to have sum of all the previrous amounts,
    // Like following and form make it to smaller aray
    // {[moment().subtract(1, 'days')]: 1500},
    // {[moment().subtract(2, 'days')]: 4500},

    // passing array as the first argument, and length
    // and groups by the
    // this one connects the same dates, to one object
    const groupBy = (array, key) =>
             array.reduce((rv, x) => {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
//
//     console.log(groupBy(['one', 'two', 'three'], 'length'));
//
// // => {3: ["one", "two"], 5: ["three"]}
    //==========================================================================

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

    //==========================================================================

    // we just get the date from the data object
    const getDates = () => transformedData.map(pair => pair.date);
    //==========================================================================

    //==========================================================================

    const getAmounts = () => transformedData.map(pair => pair.amount);
    // we just get the amount from the data object
    //==========================================================================


    const transformData = (groupedData) => {
        const transformedArray = [];
        // for each pair, sum up the amount, and return it
        Object.entries(groupedData).forEach(entry => {
            // entry is what holds all our amounts
            // takes the second value, the amount
            // this is going to get us the total
            const total = entry[1].reduce((total, pair) => total + pair.amount, 0);
            transformedArray.push({date: moment(entry[0]).format('DD'), amount: total })
        })
        // takes one and the second value, we make comparison, and the winner takes 1st place
        const sortedArray = transformedArray.sort((a, b) => a['date'] - (b['date']))
        // this will give me array of key and value pairs
        return sortedArray;
    }


    console.log("DEBUG 👉", data);
    console.log("The datess 🔥", getDates());
    console.log("The amountss 🚀", getAmounts());
    console.log("The GROUPED VALUES 🤙", Object.entries(groupBy(data, 'date')));
    console.log("The total grouped values 👽", transformData(groupBy(data, 'date')));


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
                      labels: getDates(),
                      datasets: [{
                          data: getAmounts()
                      }
                      ]
                  }}
                  width={Dimensions.get('window').width} // from react-native
                  height={220}
                  yAxisLabel={'$'}
                  yAxisSuffix="k"
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
