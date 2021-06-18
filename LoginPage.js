import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";




const LoginPage = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        // checks for the login data
        if(username === "rokas" && password === "admin") {
            navigation.navigate('Home');
        }

    };

    return (
        <View>
            <Text>I am Login</Text>

            <TextInput
                style={styles.input}
                value={username}
                type="text"
                placeholder="Enter a username"
                onChangeText={text => setUsername(text)}
            />

            <TextInput
                style={styles.input}
                value={password}
                secureTextEntry={true}
                placeholder="Enter a password"
                onChangeText={text => setPassword(text)}
            />
            <Button title="Login" onPress={login}/>
        </View>
    )
};
export default LoginPage;

const styles = StyleSheet.create({
    input: {
        marginBottom: 30,
        margin: 20,
        height: 40,
        borderColor: "lightgray",
        borderWidth: 1,
    }
});
//something
// git add
