import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';

import AutomationScreen from './screens/automation';
import ControlScreen from './screens/control';
import HomeScreen from './screens/home';
import UserScreen from './screens/user';
import general_noti from './screens/general_noti'
import HomeIcon from './assets/HomeIcon.svg';
import UserIcon from './assets/UserIcon.svg';
import AutomationIcon from './assets/AutomationIcon.svg';
import ControlIcon from './assets/ControlIcon.svg';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import SplashScreen2 from './screens/SplashScreen2';
import AirConditionScreen from './screens/AirConditionScreen';
import LightOnScreen from './screens/LightOnScreen';
import AddDeviceScreen from './components/addDeviceScreen';
import AddRoomScreen from './components/addRoomScreen';
import DeviceFormScreen from './components/deviceFormScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
function MyBottomTab(){//điều hướng toàn app sử dụng MaterialBottomTabNavigator
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Control" component={ControlScreen} />
      <Tab.Screen name="Automation" component={AutomationScreen} />
      <Tab.Screen name="User" component={UserScreen} />
  </Tab.Navigator>
  )
}



function App() {
  return (//navigation container duy nhất
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#E7EDF4', // Background color for the header
            height:200,
          },
          headerTintColor: '#424242', // Color of the header text
          headerTitleStyle: {
            fontWeight: 'bold', // Font styling for the header title
            fontSize:20
          },
          headerBackImageSource: require('./assets/left1.png'), // Đường dẫn đến ảnh

          headerTitleAlign:'center'
          
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SplashScreen2" component={SplashScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RealApp" component={MyBottomTab} options={{ headerShown: false }} />
        <Stack.Screen name="UserScreen" component={UserScreen} options={{headerShown:false}} /> 
        <Stack.Screen name="GeneralNotificationScreen" component={general_noti} options={{ title: 'General Notifications' }} />
        <Stack.Screen name="AirConditionScreen" component={AirConditionScreen} options={{headerShown:false}} />
        <Stack.Screen name="LightOnScreen" component={LightOnScreen} options={{headerShown:false}} />
        <Stack.Screen name="AddDevice" component={AddDeviceScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DeviceForm" component={DeviceFormScreen} options={{ title: 'Add Device' }}/>
        <Stack.Screen name="AddRoom" component={AddRoomScreen} options={{ title: 'Add Room' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

