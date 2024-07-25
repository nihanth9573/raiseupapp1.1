import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const exploreData = {
  topVenues: [
    { id: '1', title: 'Venue 1', location: 'Location 1', url: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Venue 2', location: 'Location 2', url: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Venue 3', location: 'Location 3', url: 'https://via.placeholder.com/150' },
  ],
  topFoodSuppliers: [
    { id: '1', title: 'Company 1', location: 'Location 1', url: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Company 2', location: 'Location 2', url: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Company 3', location: 'Location 3', url: 'https://via.placeholder.com/150' },
  ],
  topPromotingCompanies: [
    { id: '1', title: 'Company 1', location: 'Location 1', url: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Company 2', location: 'Location 2', url: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Company 3', location: 'Location 3', url: 'https://via.placeholder.com/150' },
  ],
};

const renderListItem = ({ item }) => (
  <View style={styles.card}>
    <Image style={styles.image} source={{ uri: item.url }} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.location}>{item.location}</Text>
  </View>
);

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.topSectionText}>Explore</Text>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
      <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Innovator Hub</Text>
         <TouchableOpacity>
            <Text style={styles.moreText}>more</Text>
         </TouchableOpacity>
        </View>
        <FlatList
          data={exploreData.topVenues}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderListItem}
          contentContainerStyle={styles.flatList}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Promoting Companies</Text>
          <TouchableOpacity>
            <Text style={styles.moreText}>more</Text>
         </TouchableOpacity>
         
        </View>
        <FlatList
          data={exploreData.topFoodSuppliers}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderListItem}
          contentContainerStyle={styles.flatList}
        />

            <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Companies</Text>
          <TouchableOpacity>
            <Text style={styles.moreText}>more</Text>
         </TouchableOpacity>

        </View>
        <FlatList
          data={exploreData.topPromotingCompanies}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={renderListItem}
          contentContainerStyle={styles.flatList}
        />
      </View>

      {/* Fixed Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('DashBoardScreen')}>
          <Image source={require('../assets/home.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('ExploreScreen')}>
          <Image source={require('../assets/explore.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('ScreenScreen')}>
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
    height: 60,
    backgroundColor: '#2F3CAA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSectionText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  flatList: {
    paddingBottom: 10,
  },
  card: {
    width: 150,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  location: {
    fontSize: 14,
    color: '#666',
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
  moreText:{
    color:"#2FACAA"
  }
});

export default ExploreScreen;
