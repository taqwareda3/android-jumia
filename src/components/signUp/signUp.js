import { async } from "@firebase/util";
import { collection, doc, addDoc, getDocs, setDoc } from "firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import { db , auth} from "../../../core/config";
import { Keyboard, Text, TextInput } from "react-native";
//  import {AuthContext} from '../authProvider';
import  { firebase } from "@react-native-firebase/auth";

import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
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
import { StyleSheet } from "react-native";
const Signup = ({navigation}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [phone, setphone] = useState("");


  //  const {register} = useContext(AuthContext)
 
  function register() {

    console.log(Fname, phone);

   

createUserWithEmailAndPassword(auth,email,password)

.then((e)=>{

  alert("done")

  const user = e.user;

  // user.uid

  console.log(user)

  const docRef = setDoc(doc(db, "users", e.user.uid), {

    firstname: Fname,

    lastname: Lname,

    phone: phone,

    email: email,
    password: password
   

  });



})

.catch(err=>{

  console.log(err)

  alert(err)

})

   

    Keyboard.dismiss();

    alert("done");

    setFname("");

    setLname("");

    setemail("");

    setpassword("");

    setphone("");

  }
  return (
    <KeyboardAwareScrollView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Text style={styles.buttonOutLineText}>Register</Text>
        <TextInput
        
          style={styles.input}
          onChangeText={(text) => {
            setFname(text);
          }}
          value={Fname}
          placeholder="First Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setLname(text);
          }}
          value={Lname}
          placeholder="Last Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setphone(text);
          }}
          value={phone}
          placeholder="Phone"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setemail(text);
          }}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setpassword(text);
          }}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        {/* onPress={()=>{register(email,password)}}
         */}
        <View style={styles.buttonContainer}>
          <Button
            style={[styles.button, styles.buttonOutline]}
            onPress={() => {
              register(email, password);
              navigation.navigate({name:'Login'})
            }}
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

export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:60,paddingVertical:100,
    backgroundColor: "rgb(245,245,245)",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "rgb(246,139,30)",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "rgb(245,245,245)",
    marginTop: 5,
    borderColor: "rgb(246,139,30)",
    borderWidth: 2,
  },
  buttonOutLineText: {
    color: "rgb(246,139,30)",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
