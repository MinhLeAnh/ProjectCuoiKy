import React from "react";
import { ScrollView,View,StyleSheet,TouchableOpacity,Text,Image } from "react-native";
import Auto from "../components/auto";
import Device from "../components/device";

const AutomationScreen=()=>{
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
                    <Text style={{color:'#fff',fontSize:24,fontWeight:'bold'}}>Automation</Text>
                    <Image style={{width:24,height:24}} source={require("../assets/plus.png")}/>
                </View>

                <View style={styles.autoGroup}>
                    <Auto imageName='sunny' name="Get up"/>
                    <Auto imageName='moon' name="Goodnight"/>
                    <Auto imageName='moon' name="Goodnight"/>
                </View>

                <View style={[styles.autoGroup,{marginTop:0}]}>
                    <Auto imageName='room' name="Room A"/>
                    <Auto imageName='room' name="Room B"/>
                    <View style={{opacity:0}}>
                        <Auto imageName='room' name="Room"/>
                    </View>
                </View>

                <View style={{marginTop:20}}>
                    <View style={styles.chart_group}>
                        <Text style={styles.small_title}>Consumption</Text>
                        <TouchableOpacity style={styles.button_touchable}>
                            <Text style={{color:'#fff',fontSize:14,fontWeight:500}}>Months</Text>
                            <Image style={{width:20,height:20}} source={require("../assets/down.png")}/>
                        </TouchableOpacity>
                    </View>
                    <Image style={{resizeMode:'contain',width:331,height:239,marginHorizontal:5,marginTop:0}} source={require("../assets/chart1.png")}/>
                </View>

                <View style={styles.consumption_container}>
                    <Text style={styles.small_title}>Device Power Consumption</Text>
                    <Device imageName='light' deviceName='Light' num_device='21 devices' kWh='326'/>
                    <Device imageName='microwaveOven' deviceName='Microwave oven' num_device='1 device' kWh='126'/>
                    <Device imageName='smartDoor' deviceName='Smart Door' num_device='1 device' kWh='79'/>
                    <Device imageName='washingMachine' deviceName='Washing machine' num_device='1 device' kWh='365'/>
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
        marginTop:30,
    },
    autoGroup:{
        flexDirection:'row',
        marginTop:35,
        justifyContent:'space-between'
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
    consumption_container:{
        height:380,
        justifyContent:'space-between',
        marginVertical:20,
        paddingBottom:20
    },
    small_title:{
        fontSize:16,fontWeight:'bold',
        color:'#424242'
    },


})

export default AutomationScreen