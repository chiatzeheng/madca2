import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./components/index";
import Firstpage from "./components/auth/firstpage.js";
import Register from "./components/auth/register.js";
import Login from "./components/auth/login.js";
import { AppContextProvider } from "./context/GlobalContext";
import FirstRoute from "./components/screens/settings.js";
import SecondRoute from "./components/screens/homepage";
import ThirdRoute from "./components/screens/profile";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
         <Stack.Screen name="firstpage" component={Firstpage} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="homepage" component={Homepage} />
          <Stack.Screen name="settings" component={FirstRoute} />
          <Stack.Screen name="home" component={SecondRoute} />
          <Stack.Screen name="profile" component={ThirdRoute} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default App;

