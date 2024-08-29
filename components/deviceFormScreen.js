import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

function DeviceFormScreen() {
  const [deviceName, setDeviceName] = useState('');
  const [deviceDetails, setDeviceDetails] = useState('');

  const handleSubmit = () => {
    console.log(`Device Name: ${deviceName}, Device Details: ${deviceDetails}`);
    Alert.alert("Thông báo", "Dữ liệu đã được thêm vào");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Device Form</Text>
      <TextInput
        placeholder="Tên thiết bị"
        style={styles.input}
        value={deviceName}
        onChangeText={setDeviceName}
      />
      <TextInput
        placeholder="Chi tiết thiết bị"
        style={styles.input}
        value={deviceDetails}
        onChangeText={setDeviceDetails}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',  // Added to center the content
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default DeviceFormScreen;