import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Tabs} from 'expo-router';
import React from 'react';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({color}) => <Ionicons name="home-outline" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({color}) => <FontAwesome name="user-o" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
