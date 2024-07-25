import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <ScrollView style={styles.topSection}>
        {/* Logo and Heading */}
        <View style={styles.header}>
          <Image source={require('../assets/logo.jpg')} style={styles.logo} />
          <Text style={styles.dashboardHeading}>Dashboard</Text>
        </View>
        
        {/* Menu */}
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CurrentActiveEvents')}>
            <Text style={styles.menuText}>Current Active Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Revenue')}>
            <Text style={styles.menuText}>Revenue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Insights')}>
            <Text style={styles.menuText}>Insights</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ScheduledEvents')}>
            <Text style={styles.menuText}>Scheduled Events</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Teams')}>
            <Text style={styles.menuText}>Teams</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Planning')}>
            <Text style={styles.menuText}>Planning</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UploadEventScreen')}>
            <Text style={styles.menuText}>New Event</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('NewEvent')}>
            <Text style={styles.menuText}>Budget Manager</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Fixed Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('DashBoardScreen')}>
          <Image source={require('../assets/home.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('ExploreScreen')}>
          <Image source={require('../assets/explore.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('SearchScreen')}>
          <Image source={require('../assets/search.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('InnovatorProfileScreen')}>
          <Image source={require('../assets/profile.png')} style={styles.footerIcon} />
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  topSection: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  dashboardHeading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2F3CAA',
    marginTop: 10,
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2F3CAA',
    padding: 15,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
});

export default DashboardScreen;
