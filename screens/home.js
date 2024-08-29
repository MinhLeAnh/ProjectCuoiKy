import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image, TextInput, Text, ScrollView, Switch, TouchableOpacity} from 'react-native';
import ApplianceCard from '../components/ApplianceCard'
import { format } from 'date-fns';

const HomeScreen=({navigation})=>{
  const currentDate = new Date();
    const formattedDate = format(currentDate, "EEE, MMM do");
  const { height } = Dimensions.get('window');
  const quarterHeight = height / 3;
  const [isGetUpEnabled, setIsGetUpEnabled] = useState(false);
  const [isGoodnightEnabled, setIsGoodnightEnabled] = useState(false);
  const [isGoOutEnabled, setIsGoOutEnabled] = useState(false);


  const toggleGetUpSwitch = () => setIsGetUpEnabled(previousState => !previousState);
  const toggleGoodnightSwitch = () => setIsGoodnightEnabled(previousState => !previousState);
  const toggleGoOutSwitch = () => setIsGoOutEnabled(previousState => !previousState);
const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Tháng bắt đầu từ 0
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const date = new Date();
    return(
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Image
          style={[styles.backgroundImage, { height: quarterHeight }]}
          source={{ uri: 'https://cdn.glitch.global/e1f47b5b-76bb-4e95-b20a-104ea0ac95cf/small%20BG%20(2).png?v=1724588577818' }}
          resizeMode="cover"
        />
<View style={[styles.header, { top: 30 }]}>
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


        <View style={styles.greetingContainer}>
        <Text style={{color:'#fff',fontSize:24,fontWeight:'bold'}}>Hi, Hoang Trang</Text>
          <Image 
            source={{ uri: 'https://cdn.glitch.global/e1f47b5b-76bb-4e95-b20a-104ea0ac95cf/1.png?v=1724839518973' }} 
            style={styles.greetingImage} 
          />
        </View>

        <View style={[styles.switchCardContainer,{top:20}]}>
          <View style={styles.card}>
            <Image 
              style={[styles.icon,{top:10}]}
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
               style={[styles.icon,{top:10}]} 
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
              style={[styles.icon,{top:10}]} 
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
  style={[styles.icon1, { borderRadius: 30, top: 25 }]} 
  source={{ uri: 'https://cdn.glitch.global/e1f47b5b-76bb-4e95-b20a-104ea0ac95cf/image%202.png?v=1724837885592' }} 
/>
        </View>

       <View style={styles.quickAccessContainer}>
<Text style={styles.newText}>Quick access</Text>
<View style={styles.applianceCardContainer}>
  <ApplianceCard
    imageSource="https://cdn.glitch.global/e95dc807-4f61-453c-a5e3-93f2903db206/air%20condition%20(1).png?v=1724299608493"
    title="Air condition"
    titleColor="blue"
    subtitle="A Bed Room"
    subtitleColor="white"
    width={300}
    height={100}
  />
  <ApplianceCard
    imageSource="https://cdn.glitch.global/e95dc807-4f61-453c-a5e3-93f2903db206/coffee%20machine%20(1).png?v=1724250534464"
    title="Coffee machine"
    titleColor="blue"
    subtitle="Kitchen"
    subtitleColor="white"
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
  backgroundImage: {
    width: '120%',
    position: 'absolute',
  },
  icon1: {
    width: 70, // Điều chỉnh kích thước hình ảnh theo ý muốn
    height: 100,
    borderRadius: 50, // Thay đổi giá trị này để điều chỉnh độ bo tròn của góc
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
   subtitle: {
    color: 'white', // Màu trắng cho văn bản phụ
    fontSize: 14,
  },
  switchCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginLeft: -15,
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
  },
  greetingImage: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginRight: -20,
  },
  card: {
    width: 105,
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
    marginRight: 20,
  },
  icon: {
    width: 75,
    height: 84,
    marginBottom: 10,
  },
  icon1: {
    width: '100%',
    height: 204,
    marginBottom: 10,
    marginLeft:0,
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