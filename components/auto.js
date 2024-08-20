import * as React from 'react';
import { useState } from 'react';
import { Switch,StyleSheet, Text, View,Image } from 'react-native';

const Auto=({imageName,name})=>{

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    // Xử lý `linkImage` để lấy đúng tham chiếu ảnh cục bộ
    const getImageSource = (imageName) => {
        switch (imageName) {
            case 'sunny':
                return require('../assets/sunny.png');
            case 'moon':
                return require('../assets/moon.png');
            case 'goOut':
                return require('../assets/goOut.png');
            case 'room':
            return require('../assets/room.png');
            // Thêm các trường hợp khác nếu cần
            default:
                return require('../assets/room.png'); // Hình ảnh mặc định nếu không khớp
        }
    };

    return(
        <View style={styles.view}>
            <Image style={{width:113,height:145,zIndex:0,position:'absolute'}} source={require("../assets/auto_bg.png")}/>
            <View style={styles.foreground}>
                <Image style={{width:32,height:32,top:40}} source={getImageSource(imageName)}/>
                <Text style={{top:41,color:'#424242',fontSize:14}}>{name}</Text>
                <Switch
                    trackColor={{false: '#BDBDBD', true: '#2774FF'}}
                    thumbColor={isEnabled ? '#F1F3FC' : '#F1F3FC'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{top:34}}
                 />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        alignItems:'center',
        width:111,height:145,
    },
    foreground:{
        alignItems:'center'
    }
})

export default Auto