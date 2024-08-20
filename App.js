import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import AutomationScreen from './screens/automation';
import ControlScreen from './screens/control';
import HomeScreen from './screens/home';
import UserScreen from './screens/user';
import HomeIcon from './assets/HomeIcon.svg';
import UserIcon from './assets/UserIcon.svg';
import AutomationIcon from './assets/AutomationIcon.svg';
import ControlIcon from './assets/ControlIcon.svg';


const Tab = createMaterialBottomTabNavigator();

function MyTab(){
  return(
    <Tab.Navigator
     activeColor="#254BEC"
     barStyle={{ backgroundColor: '#E7EDF4' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
         
          let IconComponent;
          let color = focused ? '#254BEC' : 'white';

          if (route.name === 'Home') {
            IconComponent = HomeIcon;
          } else if (route.name === 'User') {
            IconComponent = UserIcon;
          } else if (route.name === 'Control') {
            IconComponent = ControlIcon;
          } else if (route.name === 'Automation') {
            IconComponent = AutomationIcon;
          }

          return <IconComponent width={24} height={24} fill={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel:'Homeee'}} />
      <Tab.Screen name="Control" component={ControlScreen} />
      <Tab.Screen name="Automation" component={AutomationScreen} />
      <Tab.Screen name="User" component={UserScreen} />
  </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
