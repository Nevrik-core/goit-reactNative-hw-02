import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LogIn from './Screens/auth/LoginScreen';
import SignUp from './Screens/auth/RegistrationScreen';
import PostsScreen from './Screens/PostsScreen';
import CreatePostsScreen from './Screens/CreatePostsScreen';
import ProfileScreen from './Screens/ProfileScreen';


import { View, StyleSheet } from 'react-native';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export function useRoute(isAuth) {
  if (!isAuth) {
    return (
     <AuthStack.Navigator>
        <AuthStack.Screen options={{
          headerShown: false
        }} name='Login' component={LogIn} />
      <AuthStack.Screen options={{
          headerShown: false
        }} name='Register' component={SignUp}/>
      </AuthStack.Navigator>
  )}
 return (<MainTab.Navigator>
        <MainTab.Screen name="Posts" component={PostsScreen} />
        <MainTab.Screen name="Create" component={CreatePostsScreen} />
        <MainTab.Screen name="Profile" component={ProfileScreen}/>
     </MainTab.Navigator>
    )
};