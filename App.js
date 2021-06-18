import React from "react";
import Homepage from "./Homepage";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from "./LoginPage";

const Stack = createStackNavigator();


const App = () => {

    return (
        // safe area
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Home" component={Homepage} />
                    <Stack.Screen name="Login" component={LoginPage} options={{
                        title: "Sign in or Sign up"
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
    )
};
export default App;
