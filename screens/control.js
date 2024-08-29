import React, { useState } from 'react';
import { View, Text, TextInput, Image, Switch, StyleSheet, ScrollView, ImageBackground, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { format } from 'date-fns';

const { height } = Dimensions.get('window');


const ControlScreen=({navigation})=>{
  const currentDate = new Date();
  const formattedDate = format(currentDate, "EEE, MMM do");

  const [isAirConditionOn, setAirConditionOn] = useState(true);
  const [isLightOn, setLightOn] = useState(false);
  const [isAirPurifierOn, setAirPurifierOn] = useState(false);
  const [isDryerOn, setDryerOn] = useState(true);
  const [activeTab, setActiveTab] = useState(null);
  
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  };

  const handlePress = (tabName) => {
    setActiveTab(tabName);
  };

  const handleAddDevicePress = () => {
  navigation.navigate('AddDevice');
};

  const date = new Date();
    return(
      <ScrollView style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://cdn.glitch.global/e95dc807-4f61-453c-a5e3-93f2903db206/small%20BG%20(1).png?v=1724121352528' }} 
        style={styles.backgroundImage}
      >
        <View style={[styles.header, { top: 20 }]}>
  <View style={styles.headerItem}>
    <Image 
      source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/sun%201.png?v=1723971975457' }} 
      style={styles.headerIcon} 
    />
    <Text style={styles.headerText}>28°C</Text>
  </View>
  
  <View style={styles.headerItem}>
    <Image 
      source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/humidity%201.png?v=1723971957461' }} 
      style={styles.headerIcon} 
    />
    <Text style={styles.headerText}>70%</Text>
  </View>
  
  <View style={styles.headerItem}>
    <Image
      source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/calendar%201.png?v=1723971861159' }}
      style={styles.headerIcon}
    />
    <Text style={styles.headerText}>{formattedDate}</Text>
  </View>

  <View style={{ flex: 1, alignItems: 'flex-end' }}>
    <Image
      source={{ uri: 'https://cdn.glitch.global/e1f47b5b-76bb-4e95-b20a-104ea0ac95cf/avatar.png?v=1724838593017' }}
      style={{ width: 40, height: 40, borderRadius: 20 }}
    />
  </View>
</View>
        
        <View style={[styles.greetingContainer,{ top: -5 }]}>
          <Text style={styles.greetingText}>Control</Text>
          <Image 
              source={{ uri: 'https://cdn.glitch.global/e1f47b5b-76bb-4e95-b20a-104ea0ac95cf/1.png?v=1724839518973' }} 
              style={styles.greetingImage} 
            />
        </View>

        <View style={[styles.searchContainer,{ top: -2 }]}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
          />
        </View>
<Text style={[styles.welcomeText,{top:3}]}>Welcome to "Smart Living"! Take control as you begin your seamless journey of home automation</Text>

        
        <TouchableOpacity style={[styles.addButton,{top:-50}]} onPress={handleAddDevicePress}>
          <Image 
            source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/Icon.png?v=1724122137830' }} 
            style={styles.addButtonIcon} 
          />
          <Text style={styles.addButtonText}>Add device</Text>
        </TouchableOpacity>

      </ImageBackground>

      <View style={[styles.tabContainer,{ top: 30 }]}>
        <TouchableOpacity 
          style={styles.tabItem} 
          activeOpacity={0.7} 
          onPress={() => handlePress('My home')}
        >
          <Text style={[styles.tabText, activeTab === 'My home' && styles.activeTabText]}>My home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tabItem} 
          activeOpacity={0.7} 
          onPress={() => handlePress('Kitchen')}
        >
          <Text style={[styles.tabText, activeTab === 'Kitchen' && styles.activeTabText]}>Kitchen</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tabItem} 
          activeOpacity={0.7} 
          onPress={() => handlePress('Bathroom')}
        >
          <Text style={[styles.tabText, activeTab === 'Bathroom' && styles.activeTabText]}>Bathroom</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.tabItem} 
          activeOpacity={0.7} 
          onPress={() => handlePress('Living room')}
        >
          <Text style={[styles.tabText, activeTab === 'Living room' && styles.activeTabText]}>Living room</Text>
        </TouchableOpacity>
      </View>
       <View style={[styles.deviceContainer, { top: 40 }]}>
      <View style={styles.deviceCard}>
        <TouchableOpacity onPress={() => navigation.navigate('AirConditionScreen')}>
          <Image
            source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/Group.png?v=1724123021439' }}
            style={styles.deviceImage}
          />
          <Text style={[styles.deviceText, { color: 'blue' }]}>Air condition</Text>
          <Text style={styles.roomText}>A Bedroom</Text>
          <View style={styles.switchContainer}>
            <Switch
              trackColor={{ false: '#BDBDBD', true: '#2774FF' }}
              thumbColor={isAirConditionOn ? '#F1F3FC' : '#F1F3FC'}
              value={isAirConditionOn}
              onValueChange={setAirConditionOn}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.deviceCard}>
        <TouchableOpacity onPress={() => navigation.navigate('LightOnScreen')}>
          <Image
            source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/light.png?v=1724123146398' }}
            style={styles.deviceImage}
          />
          <Text style={[styles.deviceText, { color: 'blue' }]}>Light</Text>
          <Text style={styles.roomText}>1 device</Text>
          <View style={styles.switchContainer1}>
            <Switch
              trackColor={{ false: '#BDBDBD', true: '#2774FF' }}
              thumbColor={isLightOn ? '#F1F3FC' : '#F1F3FC'}
              value={isLightOn}
              onValueChange={setLightOn}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.deviceCard}>
        <Image
          source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/Group%20(1).png?v=1724123170527' }}
          style={styles.deviceImage}
        />
        <Text style={[styles.deviceText, { color: 'blue' }]}>Air purifier</Text>
        <Text style={styles.roomText}>4 devices</Text>
        <View style={styles.switchContainer2}>
          <Switch
            trackColor={{ false: '#BDBDBD', true: '#2774FF' }}
            thumbColor={isAirPurifierOn ? '#F1F3FC' : '#F1F3FC'}
            value={isAirPurifierOn}
            onValueChange={setAirPurifierOn}
          />
        </View>
      </View>

      <View style={styles.deviceCard}>
        <Image
          source={{ uri: 'https://cdn.glitch.global/5a6efdf7-d4b8-4112-941b-f26399be50d4/Group%20(2).png?v=1724123172651' }}
          style={styles.deviceImage}
        />
        <Text style={[styles.deviceText, { color: 'blue' }]}>Dryer</Text>
        <Text style={styles.roomText}>C Bedroom</Text>
        <View style={styles.switchContainer3}>
          <Switch
            trackColor={{ false: '#BDBDBD', true: '#2774FF' }}
            thumbColor={isDryerOn ? '#F1F3FC' : '#F1F3FC'}
            value={isDryerOn}
            onValueChange={setDryerOn}
          />
        </View>
      </View>
    </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backgroundImage: {
    height: height / 3,
    padding: 10,
  },
 header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Đảm bảo Text nằm bên phải của Image
  },
  headerIcon: {
    width: 20,
    height: 20,
    marginRight: 10, // Khoảng cách giữa Image và Text
  },
  headerText: {
    fontSize: 16,
    color: '#fff',
    marginRight: 20, 
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
   greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  greetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: -20,
    color:'white',
  },
  greetingImage: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginRight: -20,
  },
  searchContainer: {
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  welcomeText: {
    marginBottom: 10,
    fontSize: 14,
    color: '#fff', // Ensure text is readable on the background
  },
  addButton: {
    backgroundColor: '#fefcfa',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: 'row',  // Arrange icon and text in a row
    alignItems: 'center',  // Center align the icon and text vertically
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 100,
    marginTop: 40,
    width: 120,
    height: 35 
  },
   switchContainer: {
    alignItems: 'flex-end',
    marginTop: 5, // Optional: Adjust the vertical alignment if needed
    marginRight: -15,
  },
  switchContainer1: {
    alignItems: 'flex-end',
    marginTop: 5, // Optional: Adjust the vertical alignment if needed
    marginRight: -35,
  },
  switchContainer2: {
    alignItems: 'flex-end',
    marginTop: 5, // Optional: Adjust the vertical alignment if needed
    marginLeft: 80,
  },
  switchContainer3: {
    alignItems: 'flex-end',
    marginTop: 5, // Optional: Adjust the vertical alignment if needed
    marginRight: -87,
  },
  addButtonIcon: {
    width: 15,  // Adjust size as needed
    height: 15, // Adjust size as needed
    marginRight: 5, // Space between the icon and text
  },
  addButtonText: {
    color: 'black',  // Corrected the color property
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabItem: {
    backgroundColor: '#fefcfa',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  tabText: {
    fontSize: 16,
    color: 'black', // Default color when not pressed
  },
  activeTabText: {
    color: '#007bff', // Color when tab is pressed
  },
  deviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  deviceCard: {
    backgroundColor: '#ffffff',
    width: '45%',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  deviceImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  deviceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  navigationContainer: {
    height: 80,
    justifyContent: 'flex-end',
  },
  roomText: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 10,
  },
});
export default ControlScreen