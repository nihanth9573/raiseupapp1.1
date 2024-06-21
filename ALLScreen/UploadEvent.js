import React, { useState } from 'react';
import { View, Button, Image, Alert,Text, TouchableOpacity, TextInput,StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import EventForm from './EventDetails';
import Navbar from './Navbar';

const ImageViewer = ({ selectedImage }) => {
  
  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 300, height: 250 }} />}
    </View>
  );
};

export default function App() {
  const [eventName, setEventName] = useState('');
  const [place, setPlace] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [CollegeName, SetCollegeName] = useState('');
  const [Organiser, SetOrganizer] = useState('');


  const handleSubmit = () => {
   
    console.log('Event Name:', eventName);
    console.log('Place:', place);
    console.log('Time:', time);
    console.log('Description:', description);
    console.log('Cost:', cost);

  };
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission to access camera roll is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'orange',height:100,width:'100%'}}>
      </View>
      <View>
        <Text style={{fontSize:28,fontWeight:'bold',marginHorizontal:20,marginTop:40}}>Upload Your Event For Free</Text>
      </View>
    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
      <TouchableOpacity onPress={pickImageAsync}>
      <ImageViewer selectedImage={selectedImage} />
      {selectedImage?"":<View style={{borderWidth:2,borderColor:'grey',width:"100%",height:100,alignItems: 'center', justifyContent: 'center',}}>
          <Text>Upload Event Post</Text>
      </View>}
      </TouchableOpacity >
      <View>
      <Text style={styles.title}>Event Details</Text>
      <TextInput
        style={styles.input}
        placeholder="EventName"
        value={eventName}
        onChangeText={text => setEventName(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="EventName"
        value={CollegeName}
        onChangeText={text => SetCollegeName(text)}
      /> 
      <TextInput
      style={styles.input}
      placeholder="Orginsied By"
      value={Organiser}
      onChangeText={text => SetOrganizer(text)}
    />
      <TextInput
        style={styles.input}
        placeholder="Place"
        value={place}
        onChangeText={text => setPlace(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        value={time}
        onChangeText={text => setTime(text)}
      />
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Description ,contact Detials,rules...etc"
        multiline
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cost of Tickets"
        value={cost}
        onChangeText={text => setCost(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      </View>
    </View>
    <Navbar/>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FF5733', // Orange shade
  },
  input: {
    height: 40,
    width:300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  descriptionInput: {
    height: 100,
  },
  button: {
    backgroundColor: '#FF5733', // Orange shade
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
