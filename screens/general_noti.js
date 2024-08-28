import * as React from 'react';
import { StyleSheet, Text, View,Image,ScrollView, TouchableOpacity } from 'react-native';
import Notification from '../components/notification';

const GeneralNoti = ()=>{
    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.add_noti_group}>
                    <Image style={{width:18,height:18}} source={require('../assets/plus1.png')} />
                    <Text style={{color:'#fff',fontSize:14,fontWeight:600}}>Add Notification</Text>
                </TouchableOpacity>
                <Notification imageName='user0' actName='Party at Home' description='A food, B light & sound, C contact friend, D clean' date='18.05.2023' time='18:00'></Notification>
                <Notification imageName='user2' actName='Garden clean' description='A cut the grass, B by drinks, C cut the grass, D clean ' date='17.05.2023' time='15:00' borderTop='true'></Notification>
                <Notification imageName='user3' actName='Reserving Read Book Room' date='18.05.2023' time='18:00' borderTop='true'></Notification>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView:{
        backgroundColor:'#E7EDF4'
    },
    container:{
        marginHorizontal:16,
        marginTop:32
    },
    add_noti_group:{
        flexDirection:'row',
        backgroundColor:'#254BEC',
        alignSelf:'center',
        paddingHorizontal:10,
        paddingVertical:8,
        justifyContent:'space-between',
        borderRadius:30,
        width:153,
        marginBottom:22
    },
})
export default GeneralNoti