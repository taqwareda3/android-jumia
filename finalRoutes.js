
import React, {useContext, useState, useEffect} from 'react'
import {AuthContext} from './src/components/loginsignup/authProvider'
import { NavigationContainer } from "@react-navigation/native";
import HomeRoute from "./route";
import auth from '@react-native-firebase/auth'
import LoginRoutes from "./src/components/loginsignup/routes";
import {AuthProvider} from './src/components/loginsignup/authProvider'
export default function FinalRoute(){
 const {user, setUser} = useContext(AuthContext)
  const [init, setInit] = useState(true);
  const onAuthStateChanged = (user)=>{
    setUser(user)
    if(init){
      setInit(false)
    }
  }
  useEffect(()=>{
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged)
    return subscribe;
  },[])


if(!init)

return(
    <AuthProvider>
    <NavigationContainer>
        {user?<HomeRoute/>:<LoginRoutes/>}
        
    </NavigationContainer>
    </AuthProvider>
)

}


