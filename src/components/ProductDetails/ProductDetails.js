import { Text } from "react-native";
import { Box, HStack, View, VStack, Spinner, Center, Container, Button, ScrollView } from 'native-base';
import { Image } from "native-base";
import { styles } from "../showProducts/style";
import { Icon } from "react-native-elements";
import { useContext, useEffect } from "react";
import { db } from "../../../core/config";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore"
const Details = ({ route, navigation }) => {
     const { id, img, Name, Price, Category, Description, Quantity, Rank } = route.params;
     var flag = true;
     const add = ({navigation}) => {

          flag = false

          const data = {

               "Name": Name,
               "Image": img,
               "Price": Price,
               "Category": Category,
               "Quantity": Quantity,
               " Description": Description,
               "subtotal": 1,
               "id": id



          }
          const mt = collection(db, "users/5xKF4exe3kpuSXTS4lc4/cart")
          addDoc(mt, data)
     }

     return (<>

          {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(id)}</Text>
      <Text>itemId: {JSON.stringify(Name)}</Text>
      
       
    </View> */}
          <ScrollView>
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
                              width: "100%", textAlign: "center", fontWight: 900, fontSize: 100,
                              borderRadius: 10
                         }}
                         onPress={() => {
                              navigation.navigate('Jumia home')
                         }}
                    >
                         <Text>Home</Text>
                    </TouchableHighlight>
               </View>
               <VStack>
                    <View style={{ display: 'flex', flexDirection: 'column', zIndex: 4, backgroundColor: 'orange', paddingBottom: 10 }}>

                         <Center>
                              <View style={styles.inputview}>


                              </View>

                         </Center>




                    </View>
                    <View style={styles.imgView}>

                         <Image
                              source={{ uri: (img) }}
                              style={styles.innerImage}
                         />
                    </View>
                    <Center>
                         <Box style={styles.info}>


                              <View>
                                   <Text style={styles.inrTitle}>{(Name)}</Text>
                                   <Text>Category {(Category)} </Text>
                              </View>
                              <View style={styles.rates}>
                                   <Box style={styles.icons}>
                                        <Text style={styles.font} >{`Avaliable Quantity: ${(Quantity)}`}</Text>

                                   </Box>

                                   {/* <Box style={styles.icons}>
          <Icon name="ios-share" type="ionicon" style={styles.font} size={35} color={'#ffac1c'} />
          <Icon name="heart-outline" type="ionicon" style={styles.font} size={35} color={'#ffac1c'} />
     </Box> */}
                              </View>
                              <View>
                                   <Text style={styles.font}> Description:</Text>
                                   <Text>{(Description)}</Text>
                              </View>
                              <View style={styles.block}>
                                   <Container>
                                        {flag == true ?
                                             (<Button style={styles.addbtn}

                                                  onPress={add}

                                             >ADD TO CARD</Button>)

                                             : <Button

                                             >ADDed  successfully</Button>
                                        }

                                   </Container>

                              </View>
                         </Box>
                    </Center>
               </VStack>
          </ScrollView>
     </>);
}

export default Details;