import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

const Device=({imageName,deviceName,num_device,kWh})=>{

    // Xử lý `linkImage` để lấy đúng tham chiếu ảnh cục bộ
    const getImageSource = (imageName) => {
        switch (imageName) {
            case 'light':
                return require('../assets/light.png');
            case 'microwaveOven':
                return require('../assets/microwaveOven.png');
            case 'smartDoor':
                return require('../assets/smartDoor.png');
            case 'washingMachine':
            return require('../assets/washingMachine.png');
            // Thêm các trường hợp khác nếu cần
            default:
                return require('../assets/light.png'); // Hình ảnh mặc định nếu không khớp
        }
    };

    return(
        <View style={styles.view}>
            <Image style={{width:60,height:60}} source={getImageSource(imageName)}/>
            <View style={styles.deviceName}>
                <Text style={{fontSize:14,fontWeight:'bold',color:'#424242'}}>{deviceName}</Text>
                <Text style={{fontSize:14,fontWeight:'600',color:'#ABABAB'}}>{num_device}</Text>
            </View>
            <View style={styles.consumption}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'#424242'}}>{kWh}</Text>
                <Text style={{fontSize:14,fontWeight:'600',color:'#ABABAB'}}>kWh</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        height:60,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    deviceName:{
        flexDirection:'column',
        justifyContent:'space-between',
        height:60,
        width:200

    },
    consumption:{
        flexDirection:'column',
        justifyContent:'space-between',
        height:60,
    }
})

export default Device