import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth'
import { Firestore } from 'firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';

export const AuthContext = createContext()

 const AuthProvider = ({children})=>{
 const [user, setUser] = useState(null)
    return(
        <AuthContext.Provider
        value={{
            user, 
            setUser,
            login: async(email,password)=>{
                try{
                   await auth().signInWithEmailAndPassword(email, password)
                 } catch(e){
                     console.log(e)
                 }
            },
            register: async(email, password)=>{
                try{
                    await auth().createUserWithEmailAndPassword(email, password)
                    .then(()=>{
                        firebase().collection('users').doc(auth().currentUser.uid)
                        .set({
                            firstname:"",
                            lastname:"",
                            email: email,
                            password: password,
                            phone:""
                        })
                        .catch(err=>{
                            console.log("error creating user", err)
                        })
                    })
                } catch(e){
                    console.log(e)
                }
            },
            logout: async ()=>{
                try{
                    await auth().signOut()
                } catch (e){
                    console.log(e)
                }
            }
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;