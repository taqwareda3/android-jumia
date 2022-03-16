import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Login from "./login";
import Signup from "./signUp";
export default function LoginRoutes() {
return(
    <NavigationContainer>
        <Stack.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: "#694fad" }}
            initialRouteName="signup" screenOptions={{
             headerTitleStyle:{color:'orange'},
              headerStyle: { backgroundColor: '#4a4a4a',  },
            }} SearchBar>
              <Stack.Screen name="login" component={Login}/>
              <Stack.Screen name="signup" component={Signup}/>
              </Stack.Navigator>
    </NavigationContainer>
)}
