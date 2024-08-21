import React from "react";
import { ScrollView,View,StyleSheet,TouchableOpacity,Text,Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BriefNotification from "../components/brief_notifications";
import general_noti from "./general_noti"


const UserScreen=({navigation})=>{
    return(
        <ScrollView style={styles.scrollView}>
            <View style={styles.smallBg}>
                <Image style={styles.smallBg_Image} source={require("../assets/small_BG.png")}/>
            </View>
            
            <View style={styles.container}>
                <View style={{zIndex:1}}>
                    <View style={styles.weather_avt}>
                        <View style={styles.weather}>
                            <Image style={styles.weatherImage} source={require("../assets/sun.png")}/>
                            <Text style={styles.text}>28°C</Text>
                            <Image style={styles.weatherImage} source={require("../assets/humidity.png")}/>
                            <Text style={styles.text}>70%</Text>
                            <Image style={styles.weatherImage} source={require("../assets/calendar.png")}/>
                            <Text style={styles.text}>Wed, May 24th</Text>
                        </View>
                        <Image style={{width:32,height:32}} source={require("../assets/avatar.png")}/>
                    </View>
                </View>
                
                <View style={styles.big_title}>
                    <Text style={{color:'#fff',fontSize:24,fontWeight:'bold'}}>Hi, Hoang Trang</Text>
                    <Image style={{width:24,height:24}} source={require("../assets/setting.png")}/>
                </View>

                <Text style={{color:'#fff',fontSize:14,fontWeight:600}}>All members</Text>
                <View style={styles.allUsers}>
                    <Image style={{width:40,height:40}} source={require("../assets/avatar.png")}/>
                    <Image style={{width:40,height:40}} source={require("../assets/user1.png")}/>
                    <Image style={{width:40,height:40}} source={require("../assets/user2.png")}/>
                    <Image style={{width:40,height:40}} source={require("../assets/user3.png")}/>
                    <Image style={{width:24,height:24}} source={require("../assets/plus_circle.png")}/>
                </View>

                <View style={styles.general_notifications}>
                    <View style={styles.general_noti_line}>
                        <Text style={styles.small_title}>General notifications</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('GeneralNotificationScreen')}>
                            <Image style={{width:24,height:24}} source={require("../assets/edit.png")}/>
                        </TouchableOpacity>
                    </View>   
                    <BriefNotification imageName='user0' actName='Party at Home' description='A food, B light & sound, C contact friend, D clean' date='18.05.2023' time='18:00' borderTop='true'></BriefNotification>
                    <BriefNotification imageName='user2' actName='Garden clean' description='A cut the grass, B by drinks, C cut the grass, D clean ' date='17.05.2023' time='15:00' borderTop='true'></BriefNotification>
                    <BriefNotification imageName='user3' actName='Reserving Read Book Room' date='18.05.2023' time='18:00' borderTop='true'></BriefNotification>
                </View>

                <View style={{marginTop:30}}>
                    <View style={styles.chart_group}>
                        <Text style={styles.small_title}>Usage time</Text>
                        <TouchableOpacity style={styles.button_touchable}>
                            <Text style={{color:'#fff',fontSize:14,fontWeight:500}}>Days</Text>
                            <Image style={{width:20,height:20}} source={require("../assets/down.png")}/>
                        </TouchableOpacity>
                    </View>
                    <Image style={{resizeMode:'contain',width:331,height:239,marginHorizontal:5,marginTop:0}} source={require("../assets/chart2.png")}/>
                </View>

            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    scrollView:{
        backgroundColor:'#E7EDF4'
    },
    container:{
        marginHorizontal:16
    },
    smallBg:{
        position:'absolute',
        zIndex:0,
        alignSelf:'center',
    },
    smallBg_Image:{
        resizeMode:'contain',
        height:291,
    },
    weather:{
        flexDirection:'row',
        alignItems: 'flex-end', 
    },
    weatherImage:{
        height:24,
        width:24
    },
    weather_avt:{
        flexDirection:'row',
        marginTop:45,
        justifyContent:'space-between',
        alignItems:'center'
    },
    text:{
        color:'#fff',
        fontSize:12,
        marginHorizontal:8,
    },
    big_title:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:30,
    },
    small_title:{
        fontSize:16,fontWeight:'bold',
        color:'#424242'
    },
    allUsers:{
        marginTop:20,marginBottom:40,
        flexDirection:'row',
        width:270,
        justifyContent:'space-between',
        alignItems:'center'
    },
    general_notifications:{
        backgroundColor:'#fff',
        borderRadius:16,
        paddingTop:16,
        marginTop:16,
    },
    general_noti_line:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:16,marginBottom:8
    },
    chart_group:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    button_touchable:{
        flexDirection:'row',
        backgroundColor:'#254BEC',
        width:97,height:32,
        justifyContent:'space-between',
        borderRadius:42,
        alignItems:'center',
        paddingHorizontal:10
    },
})

export default UserScreen