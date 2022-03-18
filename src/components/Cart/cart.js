import { async } from "@firebase/util";
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, setDoc, updateDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../../core/config";
import { Text, TouchableHighlight, TouchableOpacity } from "react-native";
// import { Button } from "native-base";
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
     Input,
     Button
} from "native-base";
import { styles } from "../showProducts/style";
const Cart = ({navigation}) => {
     const [cart, setCart] = useState([]);
     const getCartData = () => {
          const cartRef = collection(db, "users/5xKF4exe3kpuSXTS4lc4/cart");
          getDocs(cartRef).then((snap) => {
               const data = snap.docs.map((res) => {
                    return {
                         idd: res.id,
                         ...res.data(),
                    };
               });

               setCart(data);

          });
     };

     const remove = (id) => {
          const mydoc = doc(db, "users", `5xKF4exe3kpuSXTS4lc4/cart/${id}`)
          deleteDoc(mydoc)
     }
     const inCremint = (id, sub, item) => {
          console.log(item)
          let subt = item.subtotal + 1
          let m = { ...item, subtotal: subt }
          const mydoc = doc(db, "users", `5xKF4exe3kpuSXTS4lc4/cart/${id}`)
          updateDoc(mydoc, m)
          console.log("update")

     }
     const deCremint = (id, sub, item) => {
          console.log(item)
          let subt = item.subtotal - 1
          let m = { ...item, subtotal: subt }
          const mydoc = doc(db, "users", `5xKF4exe3kpuSXTS4lc4/cart/${id}`)
          updateDoc(mydoc, m)
          console.log("update")

     }

     // const add = (data) => {
     //      const col = collection(db,"Orders")
     //      addDoc(col,data)



     // }
     const checkOut = (cart, id) => {

          let subs = 0;

          for (const item of cart) subs += item.Price * item.subtotal;

          let total = subs;
          var today = new Date();

          let Product = cart.map((e) => ({

               Product_Id: doc(db, 'Products/' + e.id),

               Total_Price: e.subtotal * e.Price,

               Product_Quntity: e.subtotal,



               deliveredstatus: 'pending',

          }))

          console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkk", Product)

          const col = collection(db, "Orders")
          addDoc(col,
               ({
                    Product: Product,

                    Total: total,

                    buyer: doc(db, 'users/' + id),


                    date:

                         today.getMonth() +

                         1 +

                         '/' +

                         today.getDate() +

                         '/' +

                         today.getFullYear(),

               }));


          cart.map((e) => {

               remove(e.idd)
          })


     }

     useEffect(() => {
          getCartData();
     }, [cart]);
     return (<>
          <VStack>
               <View style={{ backgroundColor: 'orange' }}>


                    <TouchableHighlight
                         style={{
                              width:"100%",textAlign:"center",fontWight:900,fontSize:100,
              borderRadius:10, paddingTop:30
                         }}
                         onPress={() => {
                              navigation.navigate('cart')
                         }}
                    >
                         <Text>CART ITEMS</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                         style={{
                              display: 'flex', flexDirection: 'column', zIndex: 4, backgroundColor: 'orange', paddingBottom: 10
                         }}
                         onPress={() => {
                              navigation.navigate('Jumia home')
                         }}
                    >
                         <Text>Home</Text>
                    </TouchableHighlight>
               </View>
               <Center>
                    <FlatList
                         numColumns={1}
                         data={cart}
                         renderItem={({ item }) => (
                              <Box >

                                   <View style={styles.imgView} >

                                        <Image
                                             source={{ uri: item.Image }}
                                             style={styles.img}
                                        />
                                   </View>

                                   <Box style={styles.info}>


                                        <View>
                                             <Text style={styles.inrTitle}>{(item.Name)}</Text>

                                        </View>
                                        <View style={styles.rates}>
                                             <Box style={styles.icons}>
                                                  <Text style={styles.font} >{`Selected Quantity: ${(item.subtotal)}`}</Text>
                                                  <Button onPress={() => inCremint(item.idd, item.subtotal, item)} style={styles.subtotalBtn}>+</Button>
                                                  <Button onPress={() => deCremint(item.idd, item.subtotal, item)} style={styles.subtotalBtn}>-</Button>

                                             </Box>


                                        </View>


                                        <Button style={styles.addbtn}

                                             onPress={() => checkOut(cart, '5xKF4exe3kpuSXTS4lc4')}

                                        >check Out</Button>






                                        <Button style={styles.addbtn}

                                             onPress={() => remove(item.idd)}

                                        >Remove Item</Button>

                                   </Box>

                              </Box>

                         )}
                    />
               </Center>
          </VStack>

     </>);
}

export default Cart;