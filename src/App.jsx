import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import produkbaru from './screens/teman';
import notivikasi from './screens/pesan';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChatMe" component={HomeScreen} options={{  headerStyle:{backgroundColor:"green"},
          tabBarLabel: 'Pesan', 
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-ellipses-outline" color={color} size={26} /> 
          ),
        }}/>
      <Tab.Screen name="Teman" component={produkbaru} options={{ headerStyle:{backgroundColor:"green"},
          tabBarLabel: 'Teman',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-add-outline" color={color} size={26} />
          ),
        }}/>
      <Tab.Screen name="Saya" component={notivikasi} options={{ headerStyle:{backgroundColor:"green"},
          tabBarLabel: 'Saya',
          tabBarIcon: ({ color }) => (
            <Ionicons name="menu-outline" color={color} size={26} />
            
          ),
        }}/>
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App

const styles = StyleSheet.create({})