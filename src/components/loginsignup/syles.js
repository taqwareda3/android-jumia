import { StyleSheet } from "react-native";
export const styles =  StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'rgb(245,245,245)',
      paddingHorizontal:30,
      paddingTop:80
    },
    buttonfo:{
      // backgroundColor:'#3b5998',
      backgroundColor:'rgb(52,79,136)',
      width:'100%',
      padding:15,
      borderRadius:10,
      marginTop:5,
      marginBottom:15,
      alignItems:'center'
      },
    buttonOutline:{
        backgroundColor:'rgb(245,245,245)',
        marginTop:5,
        borderColor:'rgb(246,139,30)',
        borderWidth:2,
    },
    facebooklogin:{
        fontWeight:'700',
        marginTop:5,
        color:'white'
    },
   
      inputContainer:{
    width:'80%'
      },
      input:{ 
          backgroundColor:'white',
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
      buttonOutLineText:{
        color:'rgb(246,139,30)',
        fontWeight:'700',
        fontSize:20
      },
      buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:16
      },
   
  })