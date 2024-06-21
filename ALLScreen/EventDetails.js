import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [place, setPlace] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Event Name:', eventName);
    console.log('Place:', place);
    console.log('Time:', time);
    console.log('Description:', description);
    console.log('Cost:', cost);
    // You can perform form validation and submit data to backend
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Event Name"
        value={eventName}
        onChangeText={text => setEventName(text)}
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
        placeholder="Description"
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#FF5733', // Orange shade
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  descriptionInput: {
    height: 80,
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

export default EventForm;
