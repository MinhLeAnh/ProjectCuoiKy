import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import AutomationScreen from './screens/automation';
import ControlScreen from './screens/control';
import HomeScreen from './screens/home';
import UserScreen from './screens/user';
import general_noti from './screens/general_noti'
import HomeIcon from './assets/HomeIcon.svg';
import UserIcon from './assets/UserIcon.svg';
import AutomationIcon from './assets/AutomationIcon.svg';
import ControlIcon from './assets/ControlIcon.svg';

const Stack = createNativeStackNavigator();
function UserNavigate() {//điều hướng trong trang User sử dụng NativeStackNavigator
  return (
    <Stack.Navigator initialRouteName="UserScreen">
      <Stack.Screen name="UserScreen" component={UserScreen} options={{headerShown:false}} /> 
      <Stack.Screen name="GeneralNotificationScreen" component={general_noti} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
function MyTab(){//điều hướng toàn app sử dụng MaterialBottomTabNavigator
  return(
    <Tab.Navigator
     activeColor="#254BEC"
     barStyle={{ backgroundColor: '#E7EDF4' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let IconComponent;
          let color = focused ? '#254BEC' : '#fff';
          //chỉnh đường dẫn đến Icon tương ứng
          if (route.name === 'Home') {
            IconComponent = HomeIcon;
          } else if (route.name === 'User') {
            IconComponent = UserIcon;
          } else if (route.name === 'Control') {
            IconComponent = ControlIcon;
          } else if (route.name === 'Automation') {
            IconComponent = AutomationIcon;
          }
          return <IconComponent width={24} height={24} fill={color} />;//đổi màu ảnh SVG
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel:'Homeee'}} />
      <Tab.Screen name="Control" component={ControlScreen} />
      <Tab.Screen name="Automation" component={AutomationScreen} />
      <Tab.Screen name="User" component={UserNavigate} />
  </Tab.Navigator>
  )
}

function App() {
  return (//navigation container duy nhất
    <NavigationContainer>
      <MyTab/>
    </NavigationContainer>
  );
}

export default App

