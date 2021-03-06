import React, {useState, useEffect} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Rastreio} from './views';
import {css} from './assets/css/Css';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {

  const Stack = createNativeStackNavigator();

  async function teste(){
    let resData=await AsyncStorage.getItem('usarData');
      console.log(JSON.parse(resData));
  }
  teste();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Bem Vindo',
            headerStyle: {backgroundColor: '#F58634'},
            headerTintColor: '#333',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
            },
          }}
        />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
