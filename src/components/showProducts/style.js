import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        textinput:{
          height:20,
          borderWidth:1,
         width:100,
          marginTop:20,
          borderColor:'#ffac1c',
          backgroundColor:'white' 
        },
        textinput:{

            height:10,

         

            borderRadius:12,

          },

          inputview:{

              width:'70%',

              borderColor:'#ffac1c',

              backgroundColor:'white',

              borderRadius:12,

              marginLeft:8,

             

          },
        listTab:{
            flex:1,
           backgroundColor:'#ffac1c',
          
        },
        btnTab:{
       width:Dimensions.get('window').width/3.5,
       flexDirection:'row',
       borderWidth:0.5,
       borderColor:'#ffac1c',
       justifyContent:'center'
        },
        img:{
            width:100,
            height:100,
            
        },
        prod:{
            borderRadius:4,
            margin:15,
            alignItems:'center',
            paddingTop:'5%',
            backgroundColor:'white',
            overflow:'hidden'
        },
        main:{
            backgroundColor:'#f3f3f3',
            paddingHorizontal:'1%',
            
        },
        title:{
            
            height:23,
            width:155,
            fontWeight:'bold',
            alignItems:'center',
            textAlign:'center'
        },
        rates:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginVertical:15
        },
        font:{
            fontSize:16,
            fontWeight:'bold'
        },
        flow:{
            position:'absolute',
            zIndex:1,
            justifyContent:'flex-end',
            width:'100%',
            display:'flex',
            flexDirection:'row',
            paddingEnd:5
        },
        innerImage:{
            width:250,
            height:250,
            justifyContent:'center',
            marginHorizontal:10,
            borderRadius:8,
            marginVertical:15,
        },
        imgView:{
            
            
            alignItems:'center',
            backgroundColor:'#f8f8f8'
        },
        loading:{
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',
            height:'100%'
        },
        icons:{
            display:'flex',
            flexDirection:'row'
        },
        block:{
            paddingTop:10
        },
        review:{
            paddingLeft:4,
            fontSize:14,
            color:'#ffac1c'
        },
        info:{
            paddingHorizontal:10
        },
        inrTitle:{
            fontSize:20,
            fontWeight:'bold'
        },
        addbtn:{
            backgroundColor:'#ffac1c',
            color:'#fff'
        },
        brdr:{
            borderBottomWidth:15,
            borderColor:'#ffac1c'
        }
     
    }
)

/**
 *        

 */