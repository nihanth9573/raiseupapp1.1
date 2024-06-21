import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const eventsData = [
  { id: '1', name: 'CBIT-ELUSINM', date: '24-05-2024', description: 'A grand music event at CBIT', qrUrl: 'https://example.com/qr1.jpg' },
  { id: '2', name: 'IARE', date: '25-05-2024', description: 'Tech fest at IARE', qrUrl: 'https://example.com/qr2.jpg' },
  { id: '3', name: 'IIT_H', date: '26-05-2024', description: 'Cultural fest at IIT Hyderabad', qrUrl: 'https://example.com/qr3.jpg' },
  // Add more events as needed
];

export default function EventScreen() {
  const navigation = useNavigation();
    const payButtonFunction = ()=>{
      navigation.navigate('SuccessScreen', {
        transactionId: '1234567890',
        date: '24-05-2024',
        upiId: 'user@upi',
        });
    }
    
  const route = useRoute();
  const { id } = route.params;
  const event = eventsData.find(e => e.id === id);

  const [shares, setShares] = useState(0);

  const handleSharesChange = (value) => {
    const intValue = parseInt(value, 10);
    if (!isNaN(intValue)) {
      setShares(intValue);
    }
  }
  if (!event) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Event Details</Text>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Event not found</Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Event Details</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: event.qrUrl }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{event.name}</Text>
        <Text style={styles.date}>Date: {event.date}</Text>
        <Text style={styles.description}>{event.description}</Text>
        <View style={styles.qrSection}>
          <Text style={styles.qrTitle}>QR Code</Text>
          <Image source={{ uri: event.qrUrl }} style={styles.qrImage} />
        </View>
        <View style={styles.sharesSection}>
          <Text style={styles.sharesTitle}>Select Number of Shares</Text>
          <TextInput
            style={styles.sharesInput}
            keyboardType="numeric"
            onChangeText={handleSharesChange}
            value={shares.toString()}
            placeholder="Enter number of shares"
          />
          <Text style={styles.totalCost}>Total Cost: {shares * 10}</Text>
        </View>
        <TouchableOpacity onPress={payButtonFunction} style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay with UPI</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'orange',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  qrSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  qrTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  qrImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  sharesSection: {
    marginBottom: 20,
  },
  sharesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sharesInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  totalCost: {
    fontSize: 18,
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
