import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SplashScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.glitch.global/134d6c6c-3859-45eb-b0ba-b042e212630b/Cool%20Kids%20Fresh%20Air.png?v=1724080692715' }} 
        style={styles.image}
      />
      <Text style={styles.title}>Connecting Your Home {'\n'} Simplifying Your Life</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>GET STARTED</Text>
        <Icon name="chevron-forward-outline" size={20} color="#FFF" />
      </TouchableOpacity>
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
    width: 327.60,
    height: 260,
    marginTop: 170,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#040d30',
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
});

export default SplashScreen2;
