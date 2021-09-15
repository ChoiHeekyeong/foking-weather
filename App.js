import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "091094b197eb0c1fe26181e783d176a4";

export default class extends React.Component{
  state = {
    isLoading:true
  };
  

  getWeather = async(latitude,longitude) => {
    const {
      data:{
        main : {temp},
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading:false,
        condition:weather[0].main,
        temp,
      });

      

  }




  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords:{latitude,longitude}
      } = await Location.getCurrentPositionAsync();
      //API를 통해 날씨 가져오기
      this.getWeather(latitude,longitude);
      // this.setState({isLoading:false});

    } catch (error) {
      Alert.alert("can't find you.","so sad");
    }
   
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading,temp, condition} = this.state;
    return isLoading ? (
    <Loading/>
    ) : (
    <Weather temp={Math.round(temp)} condition={condition}/>
    );
  }
}


