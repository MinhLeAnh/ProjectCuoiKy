import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, StyleSheet, Image, TextInput, Button } from 'react-native';
// Define the `DeviceFormScreen` component
function DeviceFormScreen() {
    return (
      <View style={[styles.container, { top: -200 }]}>
        <Text style={styles.title}>Add Device Form</Text>
        <TextInput placeholder="Device Name" style={styles.input} />
        <TextInput placeholder="Device Details" style={styles.input} multiline />
        <Button title="Submit" onPress={() => { /* Handle form submission */ }} />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    backButton: {
      paddingRight: 10,
    },
    backButtonText: {
      fontSize: 24,
      color: '#000',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
    },
    addIcon: {
      paddingLeft: 10,
    },
    addIconImage: {
      width: 24,
      height: 24,
    },
    card: {
      marginBottom: 20,
      borderRadius: 15,
      overflow: 'hidden',
    },
    image: {
      height: 150,
      justifyContent: 'flex-end',
    },
    imageStyle: {
      borderRadius: 15,
    },
    overlay: {
      padding: 15,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: 15,
    },
    roomName: {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
    },
    deviceCount: {
      fontSize: 14,
      color: '#fff',
    },
    addButton: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 10,
      right: 10,
    },
    addButtonImage: {
      width: 20,
      height: 20,
      marginBottom: 3,
    },
    addButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 12,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 20,
      borderRadius: 5,
    },
  });  

export default DeviceFormScreen