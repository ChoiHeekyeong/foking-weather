import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


const weatherOptions={
    Haze:{
        iconName:"weather-fog",
        gradient: ["#FF5F6D","#FFC371"],
        title:"HAZE",
        subtitle:"운전 길 조심하세요",
    },
    Thunderstorm:{
        iconName:"weather-lightning-rainy",
        gradient: ["#1D4350","#A43931"],
        title:"THUNDERSTORM",
        subtitle:"뇌우 주의!!!",
    },
    Drizzle:{
        iconName:"weather-rainy",
        gradient: ["#EECDA3","#EF629F"],
        title:"DRIZZLE",
        subtitle:"약간의 비가 내립니다",
    },
    Rain:{
        iconName:"weather-rainy",
        gradient: ["#2C3E50","#4CA1AF"],
        title:"RAIN",
        subtitle:"비도 오고 그래서 네 생각이 났어",
    },
    Snow:{
        iconName:"weather-snowy",
        gradient: ["#BA5370","#F4E2D8"],
        title:"SNOW",
        subtitle:"Do you wanna bulid a snowman?",
    },
    Atmosphere:{
        iconName:"weather-fog",
        gradient: ["#0B486B","#F56217"],
        title:"뭔데이게",
        subtitle:"뭔지모르겠어요",
    },
    Clear:{
        iconName:"weather-sunny",
        gradient: ["#00d2ff","#928DAB"],
        title:"Clear",
        subtitle:"밖에 나가 놀아요!",
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient: ["#E0EAFC","#4CA1AF"],
        title:"Clouds",
        subtitle:"오늘은 흐려요ㅜㅜ",
    },
    Mist:{
        iconName:"weather-rainy",
        gradient: ["#4B79A1","#283E51"],
        title:"Mist",
        subtitle:"밖에 나가서 미스트 뿌릴래?",
    },
    Dust:{
        iconName:"weather-cloudy",
        gradient: ["#FD746C","#2C3E50"],
        title:"Dust",
        subtitle:"마스크 필수!!!!",
    },
}



export default function Weather({temp,condition}){

    return(

            <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
            >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                size={96}
                name={weatherOptions[condition].iconName}
                color="white"/>
                <Text style={styles.temp}>{temp}도</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>

            </LinearGradient>

    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze","Mist","Dust"
        ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    },
    temp:{

        fontSize:42,
        color:"white",
    },


    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

    title:{
        color:"white",
        fontSize:54,
        fontWeight:"300",
        marginBottom:10,
        


    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize:24,


    }
});