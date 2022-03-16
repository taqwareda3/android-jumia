import React, { useContext, useEffect } from "react";
import ShowProducts from "./src/components/showProducts/showProducts";
import { NativeBaseProvider, Box } from "native-base";
import { styles } from "./src/components/showProducts/style";
import { NavigationContainer } from "@react-navigation/native";
// import { HomeComponent } from "./home";
import Details from "./src/components/ProductDetails/ProductDetails";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HomeRoute() {
  

  return (


      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: "#694fad" }}
            initialRouteName="Jumia home" screenOptions={{
             headerTitleStyle:{color:'orange'},
              headerStyle: { backgroundColor: '#4a4a4a',  },
            }} SearchBar>
            <Stack.Screen name="Jumia home" component={ShowProducts} />
            <Stack.Screen name="details" component={Details} styles={styles.sec} />
            
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>



    // <>
    //   <NativeBaseProvider>
    //     <ShowProducts />
    //   </NativeBaseProvider>
    // </>
  );
}
