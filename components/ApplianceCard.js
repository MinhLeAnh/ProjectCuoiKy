// ApplianceCard.js
import React, { useState } from 'react';
import { View, StyleSheet, Image,  Text, Switch } from 'react-native';

const ApplianceCard = ({ imageSource, title, location }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageSource }} style={styles.icon} />
      <Text>{title}</Text>
      <Text>{location}</Text>
      <Switch
        trackColor={{false: '#BDBDBD', true: '#2774FF'}}
        thumbColor={isEnabled ? '#F1F3FC' : '#F1F3FC'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
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
  },
  icon: {
    width: 64,
    height: 74,
    marginBottom: 10,
  },
});

export default ApplianceCard;
