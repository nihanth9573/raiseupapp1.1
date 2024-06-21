import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function SuccessScreen({ route }) {
  const { transactionId, date, upiId } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payment Successful</Text>
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/check.png')} style={styles.tickIcon} />
        <Text style={styles.label}>Transaction ID:</Text>
        <Text style={styles.value}>{transactionId}</Text>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{date}</Text>
        <Text style={styles.label}>UPI ID:</Text>
        <Text style={styles.value}>{upiId}</Text>
        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'green',
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  tickIcon: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    marginBottom: 20,
  },
  doneButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
