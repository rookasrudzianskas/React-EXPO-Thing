import React, {Component} from "react";
import {StyleSheet, View, SafeAreaView, Text} from "react-native";


const Todo = ({ title='Takes dog out on', }) => {
    return (
        <View>
            <Text>✅ { title }</Text>
        </View>
    );
}

const styles = StyleSheet.create({


});

export default Todo;
