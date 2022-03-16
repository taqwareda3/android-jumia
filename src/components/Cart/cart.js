import { async } from "@firebase/util";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../../core/config";
import { Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  Center,
  ScrollView,
  Image,
  FlatList,
  VStack,
  Spinner,
  View,
  Box,
  HStack,
  Input
} from "native-base";
import { styles } from "../showProducts/style";
const Cart = () => {
     const[cart,setCart]=useState([]);
     const getCartData = () => {
          const cartRef = collection(db, "users/5xKF4exe3kpuSXTS4lc4/cart");
          getDocs(cartRef).then((snap) => {
            const data = snap.docs.map((res) => {
              return {
                id: res.id,
                ...res.data(),
              };
            });
      
            setCart(data);
            // console.log(data);
          });
        };


        useEffect(() => {
          getCartData();
        }, []);
     return (<>
    
     </>  );
}
 
export default Cart;