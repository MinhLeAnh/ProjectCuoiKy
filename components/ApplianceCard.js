import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, Switch } from 'react-native';

const ApplianceCard = ({ imageSource, title, subtitle }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: imageSource }}
        style={styles.icon}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Switch
      trackColor={{false: '#BDBDBD', true: '#2774FF'}}
      thumbColor={isEnabled ? '#F1F3FC' : '#F1F3FC'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch} // Optional: Style the switch if needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 200, // Increased height for better layout
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginHorizontal: 10,
    padding: 15, // Added padding for better spacing
    marginLeft: -15,
    marginRight: 50,
  },
  icon: {
    width: 80, // Adjusted size for better appearance
    height: 80,
    marginBottom: 10,
    marginTop: 20, // Added marginTop for spacing
  },
  title: {
    color: 'blue', // Title color
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: 'black', // Changed to black for better contrast
    fontSize: 14,
    textAlign: 'center', // Center align subtitle
    marginBottom: 10, // Added margin for spacing
  },
  switch: {
    marginTop: 5, // Added margin to position the switch nicely
    alignSelf: 'flex-end', 
  },
});

export default ApplianceCard;