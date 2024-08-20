import React from "react";
import { ScrollView,View,StyleSheet,TouchableOpacity,Text,Image } from "react-native";

const UserScreen=()=>{
    return(
        <ScrollView >
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

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
        fontSize:16,fontWeight:'bold'
    },
    allUsers:{
        marginTop:20,marginBottom:40,
        flexDirection:'row',
        width:270,
        justifyContent:'space-between',
        alignItems:'center'
    }
})

export default UserScreen