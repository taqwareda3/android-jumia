import { async } from "@firebase/util";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import { db } from "../../../core/config";
import { Text, TextInput } from "react-native";
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
import {AuthContext} from '../loginsignup/authProvider'
import {styles} from "./syles"
const Signup = () => {
 
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const [Fname,setFname]=useState('');
const [Lname,setLname]=useState('');
const [phone,setphone]=useState('');

const {register} = useContext(AuthContext)
  return (
   
   
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
  >
    <View style={styles.inputContainer}>
      <Text style={styles.buttonOutLineText}>Register</Text>
      <TextInput style={styles.input} 
      onChangeText={(text) => {setFname(text)}} value={Fname}
       placeholder="First Name" />
      <TextInput style={styles.input} 
        onChangeText={(text) => {setLname(text)}}
        value={Lname}
        placeholder="Last Name"
        
      />
       <TextInput style={styles.input} 
        onChangeText={(text) => {setphone(text)}}
        value={phone}
        placeholder="Phone"
        
      />
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
       
         <Button style={[styles.button, styles.buttonOutline]}
        onPress={()=>{register(email,password)}}
        >
           <Text style={styles.buttonOutLineText}>REGISTER</Text>
        </Button>
      </View>
    </View>
  </KeyboardAvoidingView>
  );
};

export default Signup;
