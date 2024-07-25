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
import EventScreen from './ALLScreen/EventScreen';
import SuccessScreen from './ALLScreen/SuccessPage';
import SelectUser from './ALLScreen/SelectUser';
import CreaterLoginScreen from "./ALLScreen/CreaterLogin";
import DashboardScreen from './ALLScreen/DashBoardScreen';
import CreaterSignup from './ALLScreen/CreateSingupScreen';
import ExploreScreen from './ALLScreen/ExploreScreen';
import InnovaterPScreens from './ALLScreen/InnovatorProfileScreen';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome" >
        <Stack.Screen name="welcome"  options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="UserSelection"  options={{ headerShown: false }} component={SelectUser} />
        <Stack.Screen name="DashBoardScreen"  options={{ headerShown: false }} component={DashboardScreen} />

        <Stack.Screen name="Signup"  options={{ headerShown: false }} component={SelectUser} />
        <Stack.Screen name="login"  options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="CreaterLoginScreen"  options={{ headerShown: false }} component={CreaterLoginScreen} />
        <Stack.Screen name="CreaterSignupScreen"  options={{ headerShown: false }} component={CreaterSignup} />
        <Stack.Screen name="ExploreScreen"  options={{ headerShown: false }} component={ExploreScreen} />
        <Stack.Screen name="InnovatorProfileScreen"  options={{ headerShown: false }} component={InnovaterPScreens} />
        <Stack.Screen name="SearchScreen"  options={{ headerShown: false }} component={FeedScreen} />



        <Stack.Screen name="signup"  options={{ headerShown: false }} component={Signup} />
        <Stack.Screen name="Home"  options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="DetailScreen"  options={{ headerShown: false }} component={DetailScreen} />
        <Stack.Screen name="Profile"  options={{ headerShown: false }} component={ProfileScreen} />
        <Stack.Screen name="Profile2"  options={{ headerShown: false }} component={ProfileScreen2} />
        <Stack.Screen name="UploadEventScreen"  options={{ headerShown: false }} component={UploadEvent} />
        <Stack.Screen name="FeedScreen"  options={{ headerShown: false }} component={FeedScreen} />
        <Stack.Screen name="EventScreen"  options={{ headerShown: false }} component={EventScreen} />
        <Stack.Screen name="SuccessScreen" options={{ headerShown: false }}  component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
