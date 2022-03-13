import { async } from "@firebase/util";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../../core/config";
import { Text } from "react-native";
import {
  Center,
  ScrollView,
  Image,
  FlatList,
  VStack,
  Spinner,
  View,
} from "native-base";
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

  return (
    // <View>
    //   <FlatList
    //   data={products}
    //   renderItem={({item})=>{
    //     <Image source={{
    //       uri: `${item.Image}`
    //     }} alt="Alternate Text" size="xl" />
    //   }}
    //    >

    //   </FlatList>
    // </View>
    <View style={styles.container}>
      {console.log(products)}
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <>
            <Text style={styles.item}>{item.Name}</Text>
            <View style={styles.imgView}>
              <Image
                source={{ uri: item.Image }}
                style={styles.innerImage}
              />
            </View>
          </>
        )}
      />
    </View>
  );
};

export default showProducts;
