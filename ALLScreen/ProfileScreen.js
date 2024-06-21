import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Dummy user data
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1234567890',
  collegeId: '123456789',
  collegeName: 'Example University',
  location: 'City, Country',
  // Add more user details as needed
};

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Edit Icon */}
      <TouchableOpacity style={styles.editIconContainer}>
        <Image style={{width:30,height:40}} source={require('../assets/edit_icon.png')}></Image>
        <Text>Edit</Text>
      </TouchableOpacity>
      <View>
      <View style={[styles.container, styles.orangeBackground]}>
      <View style={styles.header}>
        <Image source={user.profileImage} style={styles.profileImage} />
        <Text style={styles.headerText}>{user.name}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>Email: {user.email}</Text>
        <Text style={styles.userInfoText}>Phone: {user.phone}</Text>
        <Text style={styles.userInfoText}>Phone: {user.phone}</Text>
        <Text style={styles.userInfoText}>Phone: {user.phone}</Text>
        <Text style={styles.userInfoText}>Phone: {user.phone}</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>
    </View>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  
container: {
    padding: 20,
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    marginLeft: 10,
    fontFamily: 'Arial', // Change to your preferred font
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginBottom: 20,
  },
  userInfoText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Arial',
    margin:20
  },
  editButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  editButtonText: {
    color: '#FFA500',
    fontSize: 16,
    fontFamily: 'Arial', // Change to your preferred font
  },
  
});

