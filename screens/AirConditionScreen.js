import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, TextInput, Image } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AirConditionScreen = () => {
  const [temperature, setTemperature] = useState(24);
  const [fanSpeed, setFanSpeed] = useState('1');
  const [mode, setMode] = useState('Cool');
  const [isOn, setIsOn] = useState(true);

  const maxTemp = 37;
  const minTemp = 16;
  const radius = 70;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - ((temperature - minTemp) / (maxTemp - minTemp)) * circumference;

  const adjustTemperature = (amount) => {
    if (!isOn) return;
    const newTemp = temperature + amount;
    if (newTemp >= minTemp && newTemp <= maxTemp) {
      setTemperature(newTemp);
    }
  };

  const handleFanSpeedChange = (text) => {
    const newFanSpeed = parseInt(text, 10);
    if (!isOn) return;
    if (!isNaN(newFanSpeed)) {
      if (newFanSpeed < 0) setFanSpeed('0');
      else if (newFanSpeed > 5) setFanSpeed('5');
      else setFanSpeed(newFanSpeed.toString());
    } else {
      setFanSpeed('0');
    }
  };

  const handleModeChange = (newMode) => {
    if (!isOn) return;
    setMode(newMode);
    if (newMode === 'Hot') {
      setTemperature(33);
      setFanSpeed('0');
    } else if (newMode === 'Auto') {
      setTemperature(26);
      setFanSpeed('2');
    } else {
      setTemperature(24);
      setFanSpeed('1');
    }
  };

  const getIcon = (mode) => {
    switch (mode) {
      case 'Cool':
        return 'snowflake';
      case 'Hot':
        return 'fire';
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Air Condition</Text>
      <View style={styles.switchContainer}>
        <Switch
          value={isOn}
          onValueChange={setIsOn}
          trackColor={{false: '#BDBDBD', true: '#2774FF'}}
          thumbColor={setIsOn ? '#F1F3FC' : '#F1F3FC'}
        />
      </View>
      <View style={styles.temperatureContainer}>
        <Svg height={radius * 2 + strokeWidth} width={radius * 2 + strokeWidth}>
          <Circle
            stroke="#E0E0E0"
            fill="none"
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            stroke={isOn ? "#0051E3" : "#ccc"}
            fill="none"
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </Svg>
        <Text style={[styles.temperatureText, !isOn && styles.disabledText]}>{`${temperature}°C`}</Text>
      </View>
      <View style={styles.tempControl}>
        <TouchableOpacity onPress={() => adjustTemperature(-1)} disabled={!isOn}>
          <Text style={[styles.tempButton, !isOn && styles.disabledText]}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => adjustTemperature(1)} disabled={!isOn}>
          <Text style={[styles.tempButton, !isOn && styles.disabledText]}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.modeContainer}>
        {['Cool', 'Hot', 'Auto'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.modeButton,
              mode === item && styles.activeModeButton,
              !isOn && styles.disabledButton,
            ]}
            onPress={() => handleModeChange(item)}
            disabled={!isOn}
          >
            {item !== 'Auto' ? (
              <Icon
                name={getIcon(item)}
                size={30}
                color={mode === item ? "#FFF" : "#ccc"}
              />
            ) : (
              <Text style={[styles.autoIcon, mode === 'Auto' && styles.activeModeText]}>
                A
              </Text>
            )}
            <Text
              style={[
                styles.modeButtonText,
                mode === item && styles.activeModeText,
                !isOn && styles.disabledText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.timerContainer}>
        <View>
        <Image
          source={{ uri: 'https://cdn.glitch.global/134d6c6c-3859-45eb-b0ba-b042e212630b/Rectangle%2020.png?v=1724487960878' }}
          style={styles.fanImage}
        />
        
        <Text style={[styles.label, !isOn && styles.disabledText]}>Timer</Text></View>
        <Text style={[styles.timerText, !isOn && styles.disabledText]}>00 : 10</Text>
      </View>
      <View style={styles.fanControlContainer}>
        <View>
        <Image
          source={{ uri: 'https://cdn.glitch.global/134d6c6c-3859-45eb-b0ba-b042e212630b/Rectangle%2020.png?v=1724487960878' }}
          style={styles.fanImage}
        />
        <Text style={[styles.label, !isOn && styles.disabledText]}>Fan Speed</Text>
        </View>
        <View style={styles.fanControl}>
          <TextInput
            style={[styles.fanInput, !isOn && styles.disabledText]}
            keyboardType="numeric"
            value={fanSpeed}
            onChangeText={handleFanSpeedChange}
            editable={isOn}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    backgroundColor: '#E7EDF4',
    paddingTop: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#040d30',
    textAlign: 'center',
  },
  switchContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  temperatureContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    position: 'relative',
  },
  temperatureText: {
    fontSize: 36,
    fontWeight: 'bold',
    position: 'absolute',
    textAlign: 'center',
    color: '#040d30',
  },
  tempControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tempButton: {
    fontSize: 36,
    marginHorizontal: 30,
    color: '#040d30',
    backgroundColor: '#ffffff',
    borderRadius: 13,
    height:40,
    width: 40,
    textAlign: 'center',
  },
  modeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  modeButton: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    width: 90,
    height: 90,
    justifyContent: 'center',
  },
  activeModeButton: {
    backgroundColor: '#0051E3',
  },
  modeButtonText: {
    marginTop: 8,
    color: '#ccc',
  },
  activeModeText: {
    color: '#FFF',
  },
  autoIcon: {
    fontSize: 30,
    color: '#ccc',
  },
  label: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 5,
    color: '#040d30',
    textAlign: 'center',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 26,
    top: 30,
    width: '90%',
  },
  fanImage: {
    width: 62,
    height: 25,
  },
  timerText: {
    fontSize: 24,
    color: '#040d30',
  },
  fanControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 26,
    top: 30,
    width: '70%',
  },
  fanInput: {
    fontSize: 24,
    width: 100,
    height: 40,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    color: '#040d30',
  },
  disabledText: {
    color: '#a9a9a9',
  },
  disabledButton: {
    backgroundColor: '#e0e0e0',
  },
});

export default AirConditionScreen;
