import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image, TextInput, Text, ScrollView, Switch, TouchableOpacity} from 'react-native';
import ApplianceCard from '../components/ApplianceCard'

const HomeScreen=({navigation})=>{
    const { height } = Dimensions.get('window');
  const quarterHeight = height / 3;
  const [isGetUpEnabled, setIsGetUpEnabled] = useState(false);
  const [isGoodnightEnabled, setIsGoodnightEnabled] = useState(false);
  const [isGoOutEnabled, setIsGoOutEnabled] = useState(false);
  const [sound, setSound] = useState(null);

  const toggleGetUpSwitch = () => setIsGetUpEnabled(previousState => !previousState);
  const toggleGoodnightSwitch = () => setIsGoodnightEnabled(previousState => !previousState);
  const toggleGoOutSwitch = () => setIsGoOutEnabled(previousState => !previousState);
    return(
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Image
            style={[styles.backgroundImage, { height: quarterHeight }]}
            source={{ uri: 'https://cdn.glitch.global/e1f47b5b-76bb-4e95-b20a-104ea0ac95cf/small%20BG%20(2).png?v=1724588577818' }}
            resizeMode="cover"
          />

          <View style={styles.inputContainer}>
            <View style={styles.textInputWrapper}>
              <TextInput
                style={styles.textInput}
                placeholder=" "
                placeholderTextColor="#888"
              />
            </View>
          </View>

          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText}>Hi, </Text>
          </View>

          <View style={styles.switchCardContainer}>
            <View style={styles.card}>
              <Image 
                style={styles.icon} 
                source={{ uri: 'https://cdn.glitch.global/e95dc807-4f61-453c-a5e3-93f2903db206/auto%20set%20up.png?v=1724144482271' }} 
              />
              <Switch 
                trackColor={{false: '#BDBDBD', true: '#2774FF'}}
                thumbColor={isGetUpEnabled ? '#F1F3FC' : '#F1F3FC'}
                onValueChange={toggleGetUpSwitch} 
                value={isGetUpEnabled} 
              />
            </View>

            <View style={styles.card}>
              <Image 
                style={styles.icon} 
                source={{ uri: 'https://cdn.glitch.global/e95dc807-4f61-453c-a5e3-93f2903db206/auto%20set%20up%20(2).png?v=1724078095921' }} 
              />
              <Switch 
                trackColor={{false: '#BDBDBD', true: '#2774FF'}}
                thumbColor={isGoodnightEnabled ? '#F1F3FC' : '#F1F3FC'}
                onValueChange={toggleGoodnightSwitch} 
                value={isGoodnightEnabled} 
              />
            </View>

            <View style={styles.card}>
              <Image 
                style={styles.icon} 
                source={{ uri: 'https://cdn.glitch.global/e95dc807-4f61-453c-a5e3-93f2903db206/auto%20set%20up%20(1).png?v=1724077898757' }} 
              />
              <Switch 
                trackColor={{false: '#BDBDBD', true: '#2774FF'}}
                thumbColor={isGoOutEnabled ? '#F1F3FC' : '#F1F3FC'}
                onValueChange={toggleGoOutSwitch} 
                value={isGoOutEnabled} 
              />
            </View>
          </View>

          <View style={styles.quickAccessContainer}>
            <Text style={styles.newText}>Landscape</Text>
            <Image 
              style={[styles.icon1,{top:25}]} 
              source={{ uri: 'https://cdn.glitch.global/e1f47b5b-76bb-4e95-b20a-104ea0ac95cf/camera%20cctv.png?v=1724587712437' }} 
            />
          </View>

          <View style={styles.quickAccessContainer}>
            <Text style={styles.newText}>Quick access</Text>
            <View style={styles.applianceCardContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate('AirConditionScreen')}>
                <ApplianceCard
                  imageSource="https://cdn.glitch.global/e95dc807-4f61-453c-a5e3-93f2903db206/air%20condition%20(1).png?v=1724299608493"
                  title="Air condition"
                  width={300}
                  height={100}
                />
              </TouchableOpacity>
              
              <ApplianceCard
                imageSource="https://cdn.glitch.global/e95dc807-4f61-453c-a5e3-93f2903db206/coffee%20machine%20(1).png?v=1724250534464"
                title="Coffee machine"
                width={300}
                height={100}
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
      padding: 10,
    },
    backgroundImage: {
      width: '100%',
      position: 'absolute',
    },
    inputContainer: {
      alignItems: 'center',
      marginTop: 50,
    },
    textInputWrapper: {
      width: '80%',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      color: '#000',
    },
    switchCardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      marginTop: 20,
    },
    greetingContainer: {
      alignItems: 'flex-start',
      marginTop: 20,
    },
    greetingText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    card: {
      width: 85,
      height: 120,
      backgroundColor: 'white',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
      marginRight: 20,
    },
    icon: {
      width: 64,
      height: 74,
      marginBottom: 10,
    },
    icon1: {
      width: '100%',
      height: 204,
      marginBottom: 10,
      marginLeft:10,
    },
    newText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    quickAccessContainer: {
      alignItems: 'flex-start',
      marginTop: 35,
    },
    applianceCardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    navigationContainer: {
      height: 80,
      justifyContent: 'flex-end',
    },
    scrollViewContent: {
      flexGrow: 1,
    },
  });

export default HomeScreen