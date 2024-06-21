import React from 'react'
import { Text, View ,Image,StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Navbar() {
  const navigation = useNavigation();  
  return (
    <View>
        <View style={styles.navbar}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} >
            <View><Image style={styles.icon} source={require("../assets/home.png")} ></Image></View>
            </TouchableOpacity>
           
              <TouchableOpacity onPress={()=>{navigation.navigate('FeedScreen')}}>
            <View><Image  style={styles.icon} source={require("../assets/feeds.png")} ></Image></View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('UploadEventScreen')}}>
            <View><Image  style={styles.icon} source={require("../assets/add.png")} ></Image></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Profile2')}}>
            <View><Image  style={styles.icon} source={require("../assets/user.png")} ></Image></View>
            </TouchableOpacity>
       
        </View>
       
    </View>
  )
}
const styles = StyleSheet.create({
    icon:{
    width:30,
    height:30,
    },
    navbar:{
        backgroundColor:'orange',
        width:"100%",
        height:70,
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        padding:10
    }
});
