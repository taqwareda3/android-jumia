import { async } from "@firebase/util";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
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
     Container
} from "native-base";
import { styles } from "../showProducts/style";
import { Icon } from "react-native-elements";
const Cateqory = ({ route, navigation }) => {
     const [product, setProduct] = useState([]);
     const [FilterDocs, setFilterDocs] = useState([]);
     const [search, setsearch] = useState('');
     const { Category } = route.params;
     const getProduct = () => {
          const productRef = collection(db, "Products");
          const queryData = query(productRef, where("Category", "==", `${Category}`))
          getDocs(queryData).then((snap) => {
               const data = snap.docs.map((res) => {
                    return {
                         id: res.id,
                         ...res.data(),
                    };
               });

               setProduct(data);
               // console.log(data);
          });
     };
     useEffect(() => {
          getProduct();
     }, []);

     useEffect(() => {
          setFilterDocs(product)
        }, [product]);
      
     const filterSearch = (text) => {
          if (text) {
            const newData = product.filter((item) => {
              const itemData = item.Name ?
                item.Name.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
      
            })
            setFilterDocs(newData);
            setsearch(text);
          } else {
            setFilterDocs(product)
            setsearch(text)
          }
        }
    if(product){
     return (
          <>
          <View style={{ backgroundColor: 'orange' }}>
         
       
          <TouchableHighlight
                style={{width:"100%",textAlign:"center",fontWight:900,fontSize:100,
              borderRadius:10 }}
                onPress={() => {
                  navigation.navigate('cart' )
                }}
              >
                <Text>CART ITEMS</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{width:"100%",textAlign:"center",fontWight:900,fontSize:100,
                borderRadius:10 }}
                onPress={() => {
                  navigation.navigate(' ' )
                }}
              >
                <Text>Home</Text>
              </TouchableHighlight>
        </View>
     <Center>
          
          {/* {console.log(product)} */}
          <Input
        style={styles.textinput}
        value={search}
        placeholder="Search Here"

        onChangeText={(text) => filterSearch(text)}
      />
          <FlatList
               numColumns={2}
               style={styles.main}
               data={FilterDocs}
               renderItem={({ item }) => (
                    <TouchableHighlight
                         onPress={() => {
                              navigation.navigate('details', {
                                   id: item.id,
                                   img: item.Image,
                                   ...item,

                              })
                         }}
                    >
                         <Box style={styles.prod}>
                              <View style={styles.flow}>
                                   <Icon
                                        name="star-outline"
                                        type="ionicon"
                                        style={styles.font}
                                        size={23}
                                        color={"#fcca03"}
                                   />
                              </View>
                              <Image
                                   source={{ uri: item.Image }}
                                   style={styles.img}

                              />
                              <Text style={styles.title}>{item.Name.toUpperCase()}</Text>
                              <View style={styles.rates}>
                                   <Text style={styles.price}>{`Price: ${item.Price} EGP`}</Text>
                              </View>
                         </Box>
                    </TouchableHighlight>
               )}
          />
     </Center>
     </>)
  
    };

     
  return <HStack justifyContent="center" marginTop={50} space={2} alignItems="center">
  <Spinner accessibilityLabel="Loading posts" />
  <Heading color="black" fontSize="md">
    Loading
  </Heading>
</HStack>;

}

export default Cateqory;