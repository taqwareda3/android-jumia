import { async } from "@firebase/util";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db , auth } from "../../../core/config";
import { Text, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {
  Center,
  ScrollView,
  Image,
  FlatList,
  VStack,
  Spinner,
  View,
  KeyboardAvoidingView,
  Button,
} from "native-base";
// import styles from "./loginStyle";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationContainer } from "@react-navigation/native";
const Login = ({navigation}) => {

const [email,setemail]=useState('');
const [password,setpassword]=useState('');


function Login()
{ console.log(email,password)
  signInWithEmailAndPassword(auth,email,password)
  .then((e)=>{
    const user = e.user
    console.log(user)
    alert("Logged In!")
    
       AsyncStorage.setItem('@storage_Key', e.user.uid)
    
    
    setemail("");
  setpassword("");
   navigation.navigate({name:'Jumia home'})
  })
  .catch(err=>{
    console.log(err)
    alert("wrong Email or Password!")
  })
  
}
// const storeData = async () => {
//   try {
//     await AsyncStorage.setItem('@storage_Key', user.)
//   } catch (e) {
// console.log(e)  }
// }
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <Text style={styles.buttonOutLineText}>Login</Text>
        <TextInput style={styles.input} 
        onChangeText={(text) => {setemail(text)}} value={email}
         placeholder="Email" />
        <TextInput style={styles.input} 
        
          onChangeText={(text) => {setpassword(text)}}
          value={password}
          placeholder="Password"
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
          <Button style={styles.button}
          onPress={()=>{Login()}}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </Button>
           <Button style={[styles.button, styles.buttonOutline]}
          onPress={()=>{navigation.navigate({name:'Signup'})}}
          >
             <Text style={styles.buttonOutLineText}>REGISTER</Text>
          </Button>
          {/* <Button style={styles.buttonfo}
          onPress={()=>{}}
          >
             <Text style={styles.buttonOutLineText}>Facebook</Text>
          </Button> */}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
const styles =  StyleSheet.create({
  container:{
    flex: 1, paddingHorizontal:60,paddingVertical:100, backgroundColor:'rgb(245,245,245)',
  },
  inputContainer:{
width:'80%'
  },
  input:{ backgroundColor:'white',
  paddingHorizontal:15,
  paddingVertical:10,
  borderRadius:10,
  marginTop:5,

  },
  buttonContainer:{
width:'60%',
justifyContent:'center',
alignItems:'center',
marginTop:40,
  },
  button:{
  backgroundColor:'rgb(246,139,30)',
  width:'100%',
  padding:15,
  borderRadius:10,
  alignItems:'center'
  },
  buttonfo:{
    // backgroundColor:'#3b5998',
    backgroundColor:'rgb(52,79,136)',
    width:'100%',
    padding:15,
    borderRadius:10,
    alignItems:'center'
    },
  buttonOutline:{
backgroundColor:'rgb(245,245,245)',
marginTop:5,
borderColor:'rgb(246,139,30)',
borderWidth:2,
  },
  buttonOutLineText:{
    color:'rgb(246,139,30)',
    fontWeight:'700',
    fontSize:16
  },
  buttonText:{
color:'white',
fontWeight:'700',
fontSize:16
  },
})