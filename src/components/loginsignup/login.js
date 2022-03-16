import { async } from "@firebase/util";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../../core/config";
import { Text, TextInput } from "react-native";
import auth from '@react-native-firebase/auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
import {styles} from "./syles"

const Login = () => {


const [email,setemail]=useState('');
const [password,setpassword]=useState('');
 const handleSignup=()=>{
  auth.createUserWithEmailAndPassword(email,password).then(
    userCredentials=>{
      const user = userCredentials.user;
      console.log(user.email)
    }
  ).catch(err=>alert(err.message))
 }
  return (
    <KeyboardAwareScrollView 
      style={styles.container}
    //   behavior="padding"
    //   {...(Platform.OS === 'ios' && { behavior: 'padding' })}
    // 
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
          onPress={()=>{handleSignup}}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </Button>
          <Button style={styles.buttonfo}
          onPress={()=>{}}
          >
             <Text style={styles.facebooklogin}>Facebook Login</Text>
          </Button>
           <Button style={[styles.button, styles.buttonOutline]}
          onPress={()=>{}}
          >
             <Text style={styles.buttonOutLineText}>REGISTER</Text>
          </Button>
         
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
