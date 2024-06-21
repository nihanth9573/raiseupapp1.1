import React from 'react'
import { View,Text, Image,StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import Navbar from './Navbar';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen2() {
    const navigation = useNavigation();
  return (
    <View>
        
        <View style={{backgroundColor:'#666666',width:"100%",height:180}}>
            <ImageBackground source={require('../assets/banner.jpg')} style={{height:'100%'}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}} >
            <Image source={require('../assets/left-arrow-white.png')} style={{width:40,height:40,marginTop:40,marginLeft:40}}/> 
            </TouchableOpacity>
            </ImageBackground>
           
        </View>
        <View style={{backgroundColor:"white",width:100,height:100,borderRadius:100,marginLeft:"9%",
            position:'relative',bottom:40}}>
        </View>
        <View style={{ position:'relative',bottom:100,marginLeft:"37%"}}>
            <Text style={{fontSize:30,fontStyle:"normal",fontWeight:'bold'}}>Sannith Kumar</Text>
        </View>
        <View style={{backgroundColor:'#f6f6f6',height:450, position:'relative',bottom:70}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
        <View style={styles.viewSection}>
            <Text style={styles.text}>Personl Information</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
            <Image source={require('../assets/right-arrow.png')} style={styles.icon}/>  
            </TouchableOpacity>
        </View>
        </TouchableOpacity>
        <View style={styles.viewSection}>
            <Text style={styles.text}>Events</Text>
            <Image source={require('../assets/right-arrow.png')} style={styles.icon}/>  
        </View>
        <View style={styles.viewSection}>
            <Text style={styles.text}>Setting</Text>
            <Image source={require('../assets/right-arrow.png')} style={styles.icon}/>  
        </View>
        <View style={styles.viewSection}>
            <Text style={styles.text}>Privacy and Secuitry</Text>
            <Image source={require('../assets/right-arrow.png')} style={styles.icon}/>  
        </View>
        <View style={styles.viewSection}>
            <Text style={styles.text}>Help</Text>
            <Image source={require('../assets/right-arrow.png')} style={styles.icon}/>  
        </View>
        <View style={styles.viewSection}>
            <Text style={styles.text}>Report Problem</Text>
            <Image source={require('../assets/right-arrow.png')} style={styles.icon}/>  
        </View>
        
        <View style={styles.viewSection}>
            <Text style={styles.text}>Log out</Text>  
        </View>
        </View>
     
    </View>
  )
}
const styles = StyleSheet.create({
    list:{
        width:'100%',
        height:50,
        backgroundColor:'#f6f6f6'
    },
    list2:{
        width:'100%',
        height:50,
        backgroundColor:'#fffff'
    },
    viewSection:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:50,
        padding:20
    },
    icon:{
        width:20,
        height:20,
        marginTop:10
    },
    text:{
        fontSize:24
    }
})