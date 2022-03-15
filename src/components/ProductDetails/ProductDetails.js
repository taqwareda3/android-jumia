import { Text } from "react-native";
import { Box, HStack, View, VStack, Spinner, Center } from 'native-base';
import { Image } from "native-base";
import { styles } from "../showProducts/style";
import { Icon } from "react-native-elements";
import { useContext, useEffect } from "react";
const Details = ({ route, navigation }) => {
     const { id,img, Name, Price, Category, Description, Quantity, Rank } = route.params;

     return (<>

          {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(id)}</Text>
      <Text>itemId: {JSON.stringify(Name)}</Text>
      
       
    </View> */}
       
          <VStack>
               <View style={styles.imgView}>

               <Image
                source={{ uri:(img) }}
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
     {/* <Box style={styles.icons}>
          <Text style={styles.font}>User Reviews</Text>
          <Icon name='md-arrow-forward' type="ionicon" style={styles.font} size={25} color={'#ffac1c'} />
     </Box> */}

</View>
</Box>
              </Center>
          </VStack>
     </>);
}

export default Details;