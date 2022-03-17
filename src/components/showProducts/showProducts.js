import { async } from "@firebase/util";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../../core/config";
import { Button } from "native-base";
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

} from "native-base";
import { styles } from "./style";
import { Icon } from "react-native-elements";

const showProducts = ({ navigation }) => {
  const [products, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [FilterDocs, setFilterDocs] = useState([]);
  const [search, setsearch] = useState('');


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
  const getCategory = () => {
    const CategoryRef = collection(db, "Category");
    getDocs(CategoryRef).then((snap) => {
      const data = snap.docs.map((res) => {
        return {
          id: res.id,
          ...res.data(),
        };
      });

      setCategory(data);
      // console.log(data);
    });
  }
  useEffect(() => {
    getCategory();
  }, []);
  useEffect(() => {
    getProduct();
  }, []);
  useEffect(() => {
    setFilterDocs(products)
  }, [products]);

  const filterSearch = (text) => {
    if (text) {
      const newData = products.filter((item) => {
        const itemData = item.Name ?
          item.Name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;

      })
      setFilterDocs(newData);
      setsearch(text);
    } else {
      setFilterDocs(products)
      setsearch(text)
    }
  }


  if (FilterDocs) {
    return (

      <ScrollView stickyHeaderIndices={[0]}>
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
                  navigation.navigate('Jumia home' )
                }}
              >
                <Text>Home</Text>
              </TouchableHighlight>
        </View>
        <View style={{ position: 'sticky', width: '100', display: 'flex', flexDirection: 'column', paddingTop: 40, zIndex: 4, backgroundColor: 'orange', paddingBottom: 10, }}>

          <Center>
            <View style={styles.inputview}>

              <Input
                style={styles.textinput}
                value={search}
                placeholder="Search Here"

                onChangeText={(text) => filterSearch(text)}
              />

            </View>

          </Center>




          <FlatList

            numColumns={3}
            data={category}
            renderItem={({ item }) => (
              <TouchableHighlight
                style={styles.btnTab}
                onPress={() => {
                  navigation.navigate('category', {
                    id: item.id,
                    Category: item.name
                  });
                }}
              >
                <Text>{item.name}</Text>
              </TouchableHighlight>
            )}
          />

        </View>
        {console.log(category)}




        {/* <View style={styles.listTab}>
              {
                category.map(e=>{
                  <TouchableOpacity style={styles.btnTab}>
                  <Text>${e.name}</Text>
                </TouchableOpacity>
                })
              }
             
            </View> */}
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
      </ScrollView>

    );
  }



  return <HStack justifyContent="center" marginTop={50} space={2} alignItems="center">
    <Spinner accessibilityLabel="Loading posts" />
    <Heading color="black" fontSize="md">
      Loading
    </Heading>
  </HStack>;
};

export default showProducts;
