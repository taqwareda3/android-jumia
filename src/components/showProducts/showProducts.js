import { async } from "@firebase/util";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../../core/config";
import { Text } from "react-native";
import {Box, HStack, Image, View, VStack, Spinner} from 'native-base';
import { styles } from "./style";
import { Icon } from "react-native-elements";




const showProducts = () => {
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

  return <>
<VStack>
        <View style={styles.imgView}>
          <Image source={{uri:state.details.image}} style={styles.innerImage} />
        </View>
        <Box style={styles.info}>

        
        <View>
          <Text style={styles.inrTitle}>{state.details.title}</Text>
          <Text>{`category: ${state.details.category}`}</Text>
        </View>
          <View style={styles.rates}>
            <Box style={styles.icons}>
              <Text style={styles.font} >{`Rating: ${state.details.rating.rate}`}</Text>
              <Icon name='star' type="ionicon" style={styles.font}  size={20} color={'#ffac1c'}/>
            </Box>

            <Box style={styles.icons}>
              <Icon name="ios-share" type="ionicon" style={styles.font}  size={35} color={'#ffac1c'}/>
              <Icon name="heart-outline" type="ionicon" style={styles.font}  size={35} color={'#ffac1c'}/>
            </Box>
          </View>  
         <View>
           <Text style={styles.font}> Description:</Text>
          <Text>{state.details.description}</Text>
        </View>
        <View style={styles.block}>
          <Box  style={styles.icons}>
            <Text style={styles.font}>User Reviews</Text>
            <Icon name='md-arrow-forward' type="ionicon" style={styles.font}  size={25} color={'#ffac1c'}/>
          </Box>
          <Text style={styles.review}>({state.details.rating.count} review)</Text>
        </View>
        </Box>
      </VStack>
  </>;
};

export default showProducts;
