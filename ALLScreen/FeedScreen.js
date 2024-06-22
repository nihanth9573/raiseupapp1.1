import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import Navbar from './Navbar';
import { useNavigation } from '@react-navigation/native';

export default function FeedScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState('select location');
  const [locPress, setLocPress] = useState(false);

  const handleInputChange = (text) => {
    setLocation(text);
  }

  const handleFindEvent = () => {
    setLocPress(false);
  }

  const data = [
    { id: '1', title: 'Fitness app', url: 'https://appsgeyser.com/blog/wp-content/uploads/2023/08/image017-2.jpg' },
    { id: '2', title: 'project-2', url: 'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg' },
    { id: '3', title: 'project-3', url: 'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg' },
    { id: '4', title: 'project-4', url: 'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg' },
    { id: '5', title: 'project-5', url: 'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg' },
    { id: '6', title: 'project-6', url: 'https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('EventScreen',{id:item.id})}>
      <View style={styles.card}>
        {item.url && <Image style={styles.image} source={{ uri: item.url }} />}
        <Text style={{ fontSize: 24 }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{ height: 150, backgroundColor: 'orange' }}>
        <View style={styles.searchBar}>
          <Image source={require('../assets/search.png')} style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput} 
            placeholder='Enter The Project you want to see...' 
            placeholderTextColor='white' 
          />
        </View>
        <View style={styles.locationDateRow}>
          <TouchableOpacity onPress={() => setLocPress(true)}>
            <View style={styles.locationRow}>
              <Image source={require('../assets/location-white.png')} style={styles.locationIcon} />
              <Text style={styles.locationText}>{location}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.dateRow}>
              <Image source={require('../assets/date.png')} style={styles.dateIcon} />
              <Text style={styles.dateText}>24-05-2024</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {locPress ? (
        <View style={styles.locationPicker}>
          <Text style={styles.locationPickerTitle}>Select Location</Text>
          <TextInput 
            onChangeText={handleInputChange}
            value={location} 
            placeholder='Enter Location' 
            placeholderTextColor="black" 
            style={styles.locationInput}
          />
          <View style={styles.findButtonContainer}>
            <Button onPress={handleFindEvent} title='Find Events' />
          </View>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </ScrollView>
      )}

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
  searchBar: {
    backgroundColor: '#e0e0e0',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 70
  },
  searchIcon: {
    width: 30,
    height: 30
  },
  searchInput: {
    width: "80%",
    color: 'white'
  },
  locationDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  locationRow: {
    flexDirection: 'row'
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginTop: 5
  },
  locationText: {
    color: 'white',
    marginTop: 5
  },
  dateRow: {
    flexDirection: 'row'
  },
  dateIcon: {
    width: 20,
    height: 20,
    marginLeft: 40,
    marginTop: 5
  },
  dateText: {
    color: 'white',
    marginTop: 5
  },
  locationPicker: {
    backgroundColor: 'grey',
    height: "40%",
    width: "80%",
    marginTop: 60,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 40,
    justifyContent: 'center'
  },
  locationPickerTitle: {
    color: "white",
    fontSize: 24,
    textAlign: 'center',
    margin: 20
  },
  locationInput: {
    height: 40,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "white"
  },
  findButtonContainer: {
    margin: 10
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#f6f6f6',
    marginVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
});
