import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet,FlatList,Image,TextInput, Button, TouchableOpacity } from 'react-native';


import Navbar from './Navbar';

export default function FeedScreen() {
  const [location,setLocation]  = useState('select location');
  const [loc_press,setPress] = useState(false);
  

  const handleInputChange=(TextInput)=>{
    setLocation(TextInput)
  }
  const handleFindEvent=()=>{
    setPress(false);
  }
  const data = [
    { id: '1', title: 'CBIT-ELUSINM', url: 'https://www.shutterstock.com/shutterstock/photos/1423222013/display_1500/stock-vector-music-event-poster-design-template-on-colorful-background-with-flowing-shape-illustration-for-web-1423222013.jpg' },
    { id: '2', title: 'IARE', url: 'https://www.shutterstock.com/shutterstock/photos/1423222013/display_1500/stock-vector-music-event-poster-design-template-on-colorful-background-with-flowing-shape-illustration-for-web-1423222013.jpg' },
    { id: '3', title: 'IIT_H', url: 'https://www.shutterstock.com/shutterstock/photos/1423222013/display_1500/stock-vector-music-event-poster-design-template-on-colorful-background-with-flowing-shape-illustration-for-web-1423222013.jpg' },
    { id: '4', title: 'IIT_H', url: 'https://www.shutterstock.com/shutterstock/photos/1423222013/display_1500/stock-vector-music-event-poster-design-template-on-colorful-background-with-flowing-shape-illustration-for-web-1423222013.jpg' },
    { id: '5', title: 'IIT_H', url: 'https://www.shutterstock.com/shutterstock/photos/1423222013/display_1500/stock-vector-music-event-poster-design-template-on-colorful-background-with-flowing-shape-illustration-for-web-1423222013.jpg' },
    { id: '6', title: 'IIT_H', url: 'https://www.shutterstock.com/shutterstock/photos/1423222013/display_1500/stock-vector-music-event-poster-design-template-on-colorful-background-with-flowing-shape-illustration-for-web-1423222013.jpg' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.url && <Image style={styles.image} source={{ uri: item.url }} />}
      <Text style={{fontSize:24}}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
   <View style={{height:150,backgroundColor:'orange'}}>
        <View style={{backgroundColor:'#e0e0e0',marginHorizontal:20,padding:10,borderRadius:10,flexDirection:'row',
            marginTop:70
            }}>
            <View><Image source={require('../assets/search.png')} style={{width:30,height:30}}></Image></View>
            <TextInput  style={{width:"80%",color:'white'}}
            placeholder='Enter The Event Wanna Go...'></TextInput>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity onPress={()=>{setPress(true)}}>
          <View style={{flexDirection:'row'}}>
          <Image source={require('../assets/location-white.png')} style={{width:20,height:20,marginTop:5}}/>
          <Text style={{color:'white',marginTop:5}}>{location}</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{flexDirection:'row'}}>
          <Image source={require('../assets/date.png')} style={{width:20,height:20,marginLeft:40,marginTop:5}}/>
          <Text style={{color:'white',marginTop:5}}> 24-05-2024</Text>
        </View>
          </TouchableOpacity> 
        
        </View>
     
   </View>
      

   {loc_press?
        <View>
            <View style={{backgroundColor:'grey',height:"40%",width:"80%",marginTop:60,borderRadius:10,elevation:5,marginHorizontal:40,justifyContent:'center'}}>
              <Text style={{color:"white",fontSize:24,textAlign:'center',margin:20}}>Select Location</Text>
              <TextInput  onChangeText={handleInputChange}
        value={location} placeholder='Enter Location' placeholderTextColor="black" height={40} borderRadius={5} padding={10} marginHorizontal={10} backgroundColor="white"></TextInput>
              <View style={{margin:10,}}>
                <Button  onPress={handleFindEvent}title='Find Events'/>
            </View>
            </View>
            
      </View>:
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
        
      </ScrollView>}

      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'stretch', 
  },
  contentContainer: {
    flexGrow: 1, 
    justifyContent: 'center', 
  },
  card: {
    width: '90%',
    height: 'auto',
    backgroundColor: '#f6f6f6',
    marginVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:20
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
});
