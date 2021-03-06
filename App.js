import React from "react";
import ShowProducts from "./src/components/showProducts/showProducts";
import { NativeBaseProvider, Box, Button } from "native-base";
import { styles } from "./src/components/showProducts/style";
import { NavigationContainer } from "@react-navigation/native";
import Details from "./src/components/ProductDetails/ProductDetails";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cateqory from "./src/components/CategoryProduct/cateqory";
import Cart from "./src/components/Cart/cart";
import Navbar from "./src/components/NavigationBar/navbar";
import Login from './src/components/login/login'
import Signup from './src/components/signUp/signUp'
const Stack = createNativeStackNavigator();
export default function App() {

  return (


    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: "#694fad" }}
          initialRouteName="Login" screenOptions={{
            headerTitleStyle: { color: 'orange' },
            headerStyle: { backgroundColor: '#4a4a4a', },
            headerShown:false,
          }} >

          <Stack.Screen name="Jumia home" component={ShowProducts} />
          <Stack.Screen name="category" component={Cateqory} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="details" component={Details} styles={styles.sec}  />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} /> 
        </Stack.Navigator>

      </NavigationContainer>

      {/* <NavigationContainer>
      <Navbar/> 
    </NavigationContainer>   */}
    </NativeBaseProvider>


  );
}
