import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.glitch.global/134d6c6c-3859-45eb-b0ba-b042e212630b/noto_house.png?v=1724080826302' }}
        style={styles.image}
      />
      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.life]}>Life</Text>
        <Text style={[styles.title, styles.ease]}>Ease</Text>
      </View>
      <Text style={styles.subtitle}>
        No matter how far you go, home will be your destination to return to.{'\n'}Let's make your home comfortable.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SplashScreen2')}>
        <Text style={styles.buttonText}>NEXT</Text>
        <Icon name="chevron-forward-outline" size={20} color="#FFF" />
      </TouchableOpacity>
      
      {/* Slide Bar */}
      <View style={styles.slideBar}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: 234,
    height: 196,
    marginTop: 182,
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  life: {
    color: '#A5B79F',
  },
  ease: {
    color: '#6A8B85', 
  },
  subtitle: {
    textAlign: 'center',
    color: '#000000',
    marginTop: 15,
    paddingHorizontal: 30,
    fontSize: 14,
  },
  button: {
    marginTop: 170,
    backgroundColor: '#254BEC',
    width: 205,
    height: 48,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 16,
  },
  slideBar: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#d3d3d3',
    marginHorizontal: 10,
  },
  activeDot: {
    backgroundColor: '#254BEC',
  },
});

export default SplashScreen;
