import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Image } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import DateTimePicker from '@react-native-community/datetimepicker'; 

const LightOnScreen = ({navigation}) => {
  const [brightness, setBrightness] = useState(100);
  const [isOn, setIsOn] = useState(true);
  const [color, setColor] = useState('White');
    const [fromTime, setFromTime] = useState(new Date());
  const [toTime, setToTime] = useState(new Date());
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);


  const handleBrightnessChange = (change) => {
    if (isOn) {
      setBrightness((prev) => Math.max(0, Math.min(100, prev + change)));
    }
  };
   const showTimePicker = (type) => {
    if (type === 'from') {
      setShowFromPicker(true);
    } else if (type === 'to') {
      setShowToPicker(true);
    }
  };

  const onTimeChange = (event, selectedDate, type) => {
    if (type === 'from') {
      setShowFromPicker(false);
      setFromTime(selectedDate || fromTime);
    } else if (type === 'to') {
      setShowToPicker(false);
      setToTime(selectedDate || toTime);
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://cdn.glitch.global/134d6c6c-3859-45eb-b0ba-b042e212630b/817a2b81-537c-43f0-aeca-2b60d0e8cac6.png?v=1724502020518' }} 
        style={styles.image}
      />
      
      <Text style={styles.title}>Smart Light</Text>
      <View style={styles.switchContainer}>
        <Switch
          value={isOn}
          onValueChange={setIsOn}
          trackColor={{false: '#BDBDBD', true: '#2774FF'}}
          thumbColor={setIsOn ? '#F1F3FC' : '#F1F3FC'}
        />
      </View>
      <Text style={[styles.brightnessText, { opacity: isOn ? 1 : 0.3 }]}>
        {`${brightness}%`}
      </Text>
      <Text style={styles.brightnessLabel}>Brightness</Text>
      <View style={styles.colorContainer}>
        {['Blue', 'White', 'Yellow'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.colorButton, color === item && styles.activeColorButton, { opacity: isOn ? 1 : 0.3 }]}
            onPress={() => isOn && setColor(item)}
          >
            <View style={[styles.colorDot, { backgroundColor: item.toLowerCase() }]} />
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => console.log('Add Button Pressed')} // Thay đổi hành động khi nhấn nút cộng nếu cần
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Half-circle for Brightness Control */}
      <View style={styles.semiCircleContainer}>
        <Svg height="250" width="250" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke={isOn ? "#0051E3" : "#ccc"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${
              brightness * 1.4
            }, 282.6`}
            fill="transparent"
            transform="rotate(90 50 50)"
          />
        </Svg>
      </View>

      {/* Add + and - buttons for brightness control */}
      <View style={styles.brightnessControl}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleBrightnessChange(5)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleBrightnessChange(-5)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

       {/* Schedule Section */}
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleText}>Schedule</Text>
        <View style={styles.timeContainer}>
          <TouchableOpacity onPress={() => showTimePicker('from')}>
            <Text style={styles.timeText}>
              From: {fromTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </TouchableOpacity>
          {showFromPicker && (
            <DateTimePicker
              value={fromTime}
              mode="time"
              display="default"
              onChange={(e, selectedDate) => onTimeChange(e, selectedDate, 'from')}
            />
          )}
          <TouchableOpacity onPress={() => showTimePicker('to')}>
            <Text style={styles.timeText}>
              To: {toTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </TouchableOpacity>
          {showToPicker && (
            <DateTimePicker
              value={toTime}
              mode="time"
              display="default"
              onChange={(e, selectedDate) => onTimeChange(e, selectedDate, 'to')}
            />
          )}
        </View>
      </View>

      <TouchableOpacity style={[styles.scheduleButton, { opacity: isOn ? 1 : 0.3 }]} onPress={()=> navigation.goBack()}>
        <Text style={styles.scheduleButtonText}>Set Schedule</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E7EDF4',
    paddingTop: 80,
  },
  image: {
    width: 152,
    height: 285,
    position: 'absolute',
    top: 0,
    left: 20,
    opacity: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#040d30',
    textAlign: 'center',
  },
  switchContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
    marginRight: 10,
  },
  brightnessText: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 10,
    color: '#040d30',
    top: 250,
    left: 30,
  },
  brightnessLabel: {
    fontSize: 16,
    textAlign: 'left',
    color: '#999',
    top: 250,
    left: 60,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  colorButton: {
    padding: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    left: 60,
    top: -90,
  },
  activeColorButton: {
    borderColor: '#0051E3',
  },
  colorDot: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: '#424242',
    borderColor: '#ccc', // Màu viền của nút cộng
    top: -89,
    left: 60, 
  },
  addButtonText: {
    fontSize: 24,
    color: 'white',
  },
   scheduleContainer: {
    alignItems: 'left',
    marginVertical: 10,
    //backgroundColor: '#E7EDF4',
    padding: 10,
  },
  scheduleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#040d30',
    top: 280,
  },
  scheduleButton: {
    marginTop: 30,
    backgroundColor: '#424242',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 13,
    alignItems: 'center',
    alignSelf: 'center',
    top: 280,
    width: 229,
  },
  scheduleButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
   timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    top: 300,
  },
  timeText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },

  semiCircleContainer: {
    position: 'absolute',
    width: 150,
    height: 75,
    top: 350,
    right: 0,
  },
  brightnessControl: {
    position: 'absolute',
    top: 255,
    left: 334,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 138,
    top: -95,
    right: 5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LightOnScreen;
