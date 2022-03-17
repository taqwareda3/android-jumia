import { async } from "@firebase/util";
import { collection, doc, Firestore, getDocs } from "firebase/firestore";
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
     Input,
     Button
} from "native-base";
import { styles } from "../showProducts/style";
const Cart = () => {
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

    const remove= (id)=>{
         console.log(id);
         console.log("ssssssssss");
     collection(db,`users/5xKF4exe3kpuSXTS4lc4/cart`).doc(id).delete();
         
    }
     useEffect(() => {
          getCartData();
     }, []);
     return (<>
          <VStack>
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
                                                  

                                             </Box>


                                        </View>
                                        
                                        <Button style={styles.addbtn}

                                           onPress={()=>remove(item.idd)}

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