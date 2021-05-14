import React from "react";
import Homepage from "./Homepage";
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


const App = () => {

    return (
        // safe area
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Homepage} />
                </Stack.Navigator>
            </NavigationContainer>
    )
};
export default App;
