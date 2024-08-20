import React from "react";
import { View,StyleSheet,TouchableOpacity,Text } from "react-native";

const HomeScreen=()=>{
    return(
        <View style={styles.screen}>
            <Text>Nothing</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default HomeScreen