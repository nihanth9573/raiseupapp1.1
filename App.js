import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Compoents/WelcomeScreen';
import LoginScreen from './Compoents/LoginScreen';
import Signup from './Compoents/SingUpScreen';
import HomeScreen from './ALLScreen/HomeScreen';
import DetailScreen from './ALLScreen/HomeScreen';
import ProfileScreen from './ALLScreen/ProfileScreen';
import UploadEvent from './ALLScreen/UploadEvent';
import FeedScreen from './ALLScreen/FeedScreen';
import ProfileScreen2 from './ALLScreen/ProfileScreen2';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FeedScreen" >
        <Stack.Screen name="welcome"  options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="login"  options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="signup"  options={{ headerShown: false }} component={Signup} />
        <Stack.Screen name="Home"  options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="DetailScreen"  options={{ headerShown: false }} component={DetailScreen} />
        <Stack.Screen name="Profile"  options={{ headerShown: false }} component={ProfileScreen} />
        <Stack.Screen name="Profile2"  options={{ headerShown: false }} component={ProfileScreen2} />
        <Stack.Screen name="UploadEventScreen"  options={{ headerShown: false }} component={UploadEvent} />
        <Stack.Screen name="FeedScreen"  options={{ headerShown: false }} component={FeedScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
