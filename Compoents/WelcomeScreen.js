import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Investor-Entrepreneur Connection App
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserSelection')}
          style={styles.startButton}
        >
          <Text style={styles.startButtonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: '45%',
    marginTop: '15%',
  },
  titleContainer: {
    marginTop: '5%',
    width: '90%',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: 'black',
    width: '100%',
    height: '30%',
    marginTop: '10%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButton: {
    backgroundColor: 'orange',
    borderRadius: 20,
    width: '60%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
