import React, { useState } from 'react'
import { View,Text, Image, TouchableOpacity,
     TextInput, ScrollView,FlatList,StyleSheet } from 'react-native'
import Navbar from './Navbar';
import ToggleMenu from './ToggleMenu';

export default function DetailScreen({navigation}) {
    const [toggleMenu,setToggleMenu] = useState(false);
    const handleToggle=()=>{
      setToggleMenu(!toggleMenu)
    }
    const data = [
        { id: '1', title: 'CBIT',url:'https://www.shutterstock.com/shutterstock/photos/1423222013/display_1500/stock-vector-music-event-poster-design-template-on-colorful-background-with-flowing-shape-illustration-for-web-1423222013.jpg' },
        { id: '2', title: 'IARE' },
        { id: '3', title: 'IIT_H' },
      ];
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image style={styles.image} source={require("../assets/bg_image.jpg")}></Image>
            <Text>{item.title}</Text>
        </View>
      );
  return (
  <View>
       {toggleMenu?<View style={{zIndex:10}}>
       <View style={{backgroundColor:"black",width:'70%',height:'100%',paddingLeft:40}}>
    <View>
      <TouchableOpacity onPress={handleToggle}>
      <Image source={require('../assets/cross.png')} style={{width:40,height:40,marginLeft:1,marginTop:40,marginBottom:30}}/>
      </TouchableOpacity>
      <View style={styles.menuIcon}>
        <Text style={styles.menutext}>
        Setting
        </Text>
      </View>
      {/* <View style={{backgroundColor:'white',height:1,width:"80%"}}>

      </View> */}
      <View style={styles.menuIcon2}>
        <Text style={styles.menutext}>
        Privacy 
        </Text>
      </View>
      <View style={styles.menuIcon}>
        <Text style={styles.menutext}>
        Terms and Condition
        </Text>
      </View>
      <View style={styles.menuIcon2}>
        <Text style={styles.menutext}>
        Account 
        </Text>
      </View>
      <View style={styles.menuIcon}>
        <Text style={styles.menutext}>
        Services 
        </Text>
      </View>
      <View style={styles.menuIcon2}>
        <Text style={styles.menutext}>
        Report Problem 
        </Text>
      </View>
   
    </View>
  
   </View>
        </View>:
        ""}
  <View style={{backgroundColor:'orange',height:400}}>
        <View>
        <TouchableOpacity onPress={handleToggle}>
        <View style={{width:50,height:50,borderRadius:10,marginLeft:30,marginTop:30,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/menu-white.png')} style={{width:"90%",height:"90%"}}></Image>
            </View>
        </TouchableOpacity>
    
        
       </View>
    
        <View style={{marginTop:40,marginLeft:30}}>
            <Text style={{fontSize:40,color:'white'}}>Hello!!</Text>
            <Text style={{fontSize:25,color:'white'}}>Get All Events Near You</Text>
        </View>
        <View style={{backgroundColor:'#e0e0e0',marginHorizontal:20,padding:10,borderRadius:10,flexDirection:'row',
            marginTop:30
            }}>
            <View><Image source={require('../assets/search.png')} style={{width:30,height:30}}></Image></View>
            <TextInput  style={{width:"80%",color:'white'}}
            placeholder='Enter The Event Wanna Go...'></TextInput>
        </View>
  </View>
  <View>
    <Text style={{position:'relative',bottom:80,color:'white',fontSize:24,marginLeft:40}}>
            Trending
    </Text>
  <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.flatlist}
      />
  </View>
  <View style={{flexDirection:'row',marginHorizontal:20,position:'relative',bottom:50}}>
  <Text style={{fontSize:24,fontWeight:'bold',color:'orange'}}>Events NearYou</Text>
  </View>
  
  <View>
  <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.flatlist2}
      />
  </View>
  <View>
    <Navbar/>
  </View>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      card: {
        width: 200,
        height: 150,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

      },
      image:{
        width:'100%',
        height:"80%",
        borderRadius:10,
      },
      flatlist:{
        position:'relative',
        bottom:80,
      },
      flatlist2:{
        position:'relative',
        bottom:40,
      },
      menutext:{
       color:'white',
       fontSize:20,
      },
      menuIcon:{
        padding:10,
      },
      menuIcon2:{
        padding:10,
      }
  });