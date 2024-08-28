import * as React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

const Notification=({imageName,actName,description,date,time,borderTop,borderBottom})=>{

    // Xử lý ImageName để lấy đúng tham chiếu ảnh cục bộ
    const getImageSource = (imageName) => {
        switch (imageName) {
            case 'user0':
                return require('../assets/avatar.png');
            case 'user1':
                return require('../assets/user1.png');
            case 'user2':
                return require('../assets/user2.png');
            case 'user3':
            return require('../assets/user3.png');
            // Thêm các trường hợp khác nếu cần
            default:
                return require('../assets/avatar.png'); // Hình ảnh mặc định nếu không khớp
        }
    };

    return(
        <View style={[styles.view,borderTop && styles.borderTop,borderBottom && styles.borderBottom]}>
            <Image style={{width:40,height:40}} source={getImageSource(imageName)}/>
            
            {description ?(
                <View style={styles.name_group}>
                    <Text style={{fontSize:14,fontWeight:'600',color:'#424242',marginVertical:5}}>{actName}</Text>
                    <Text style={{fontSize:14,fontWeight:'600',color:'#ABABAB',lineHeight: 20}}>{description}</Text>
                </View>
            ):(
                <View style={[styles.name_group,{justifyContent:'center'}]}>
                    <Text style={{fontSize:14,fontWeight:'600',color:'#424242',marginVertical:5}}>{actName}</Text>
                </View>
            )}

            <View style={styles.date_group}>
                <Text style={{fontSize:14,fontWeight:'600',color:'#424242',marginVertical:5}}>{date}</Text>
                <Text style={{fontSize:14,fontWeight:'600',color:'#424242'}}>{time}</Text>
            </View>

            <View style={styles.button_group}>
                <TouchableOpacity>
                    <Image style ={{width:24,height:24,marginBottom:16}} source={require('../assets/edit_icon.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style ={{width:24,height:24,marginTop:16}} source={require('../assets/trash_icon.png')}/>                    
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:14,
    },
    name_group:{
        flexDirection:'column',
        justifyContent:'space-between',
        paddingHorizontal:4,
        width:174,

    },
    date_group:{
        flexDirection:'column',
        justifyContent:'space-between',
    },
    borderTop:{
        borderTopColor:'#E0E3E7',
        borderTopWidth:0.5
    },
    borderBottom:{
        borderBottomColor:'#E0E3E7',
        borderBottomWidth:0.5,
    }
})

export default Notification