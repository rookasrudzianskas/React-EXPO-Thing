import React from "react";
import {Button, Text, View} from "react-native";




const LoginPage = ({navigation}) => {

    return (
        <View>
            <Text>I am Login</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    )
};
export default LoginPage;
