import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./components/index";
import Firstpage from "./components/auth/firstpage.js";
import Register from "./components/auth/register.js";
import Login from "./components/auth/login.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen name="login" component={Login} /> 
        <Stack.Screen name="homepage" component={Homepage} /> 
        <Stack.Screen name="firstpage" component={Firstpage} /> 
        <Stack.Screen name="register" component={Register} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

