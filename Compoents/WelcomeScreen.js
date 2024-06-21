import React from 'react'
import { Image, Text, View ,StyleSheet, TouchableOpacity} from 'react-native'

export default function WelcomeScreen({ navigation }) {
  return (
   <View style={{backgroundColor:'#ffffff'}}>
        <Image source={require('../assets/logo.jpg')}style={{width:300,height:300,marginHorizontal:50,marginTop:50}}/>
        <View style={{marginTop:50,width:'90%',marginHorizontal:20,
    padding:10,alignContent:'center',justifyContent:'center',borderRadius:10}} >
        <Text style={{fontSize:30,color:'black',width:"100%",textAlign:'center'}}>
            Welcome to the
         </Text>
        </View>
        <View style={{width:'90%',backgroundColor:'#Be5125',marginHorizontal:20,
    padding:10,alignContent:'center',justifyContent:'center',borderRadius:10}} >
        <Text style={{fontSize:30,color:'white',width:"100%",textAlign:'center'}}>
            COLCONNECT
         </Text>
        </View>
        <View style={{backgroundColor:'black',width:"100%",height:250,marginTop:100,borderTopRightRadius:50,borderTopLeftRadius:50,elevation:5}}>
            <TouchableOpacity   onPress={() => navigation.navigate('login')} style={{backgroundColor:'orange',borderRadius:20,width:250,padding:10,marginHorizontal:80,marginTop:80}}>
                <Text style={{color:'white',fontSize:20,textAlign:'center'}}>Let's Get Started</Text>
            </TouchableOpacity>
        </View>
   </View>
  )
}
const styles = StyleSheet.create({
    container: {
     flex:1
    },
  });
  
