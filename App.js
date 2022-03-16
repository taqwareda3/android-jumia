import React from "react";
import ShowProducts from "./src/components/showProducts/showProducts";
import { NativeBaseProvider, Box } from "native-base";
import { styles } from "./src/components/showProducts/style";
import { NavigationContainer } from "@react-navigation/native";
import Details from "./src/components/ProductDetails/ProductDetails";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cateqory from "./src/components/CategoryProduct/cateqory";
import Cart from "./src/components/Cart/cart";
import Navbar from "./src/components/NavigationBar/navbar";
const Stack = createNativeStackNavigator();
export default function App() {

  return (


    <NativeBaseProvider>
      <NavigationContainer>
        {/* <Stack.Navigator
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: "#694fad" }}
          initialRouteName="Jumia home" screenOptions={{
            headerTitleStyle: { color: 'orange' },
            headerStyle: { backgroundColor: '#4a4a4a', },
          }} SearchBar> */}
          <Stack.Screen name="Jumia home" component={ShowProducts} />
          <Stack.Screen name="category" component={Cateqory} />
          {/* <Stack.Screen name="cart" component={Cart} /> */}
          <Stack.Screen name="details" component={Details} styles={styles.sec} />

        {/* </Stack.Navigator> */}

      </NavigationContainer>

      <NavigationContainer>
        <Navbar />
      </NavigationContainer>
    </NativeBaseProvider>


  );
}
