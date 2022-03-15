import { async } from "@firebase/util";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../../core/config";
import { Text,TouchableHighlight } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  Center,
  ScrollView,
  Image,
  FlatList,
  VStack,
  Spinner,
  View,
  Box
} from "native-base";
import { styles } from "./style";
import { Icon } from "react-native-elements";

const showProducts = ({navigation}) => {
  const [products, setProduct] = useState([]);
  const getProduct = () => {
    const productRef = collection(db, "Products");
    getDocs(productRef).then((snap) => {
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

  return (
        
     <Center>
      <FlatList
       numColumns={2}
       style={styles.main}
        data={products}
        renderItem={({ item }) => (
          <TouchableHighlight
          onPress={()=>{
            navigation.navigate('details',{
                id:item.id,
                img:item.Image,
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
                <Text style={styles.title}>{item.Name}</Text>
                <View style={styles.rates}>
              <Text style={styles.price}>{`Price: ${item.Price} EGP`}</Text>
            </View>
            </Box>
                    </TouchableHighlight>
        )}
      />
      </Center>
 
  );
};

export default showProducts;
