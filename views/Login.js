import { useLinkProps } from '@react-navigation/native';
import { Divider, Input } from '@rneui/base';
import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/Css';

export default function Login() {

  const [display, setDisplay] = useState('none');
  const [user, setUser] = useState('null');
  const [password, setPassword] = useState('null');
  const [login, setLogin] = useState('null');

  //Envio do formulario de login
  async function sendForm()
  {
    let response = await fetch('http://10.0.0.124:3000/login',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user,
        password: password,
      })
    });
    let json= await response.json();
    if(json === 'error'){
      setDisplay('flex');
      setTimeout(()=>{
        setDisplay('none');
      },5000);
    }
  }

  return (
    <View style={css.container}>
      <View>
        <Image 
          style={css.button} 
          source={require('../assets/img/buttonLogin.png')}
        />
      </View>
      <View>
        <Text style={css.login_msg(display)}> 
          Usuario ou senha invalidos!
        </Text>
      </View>
      
      <TextInput 
        style={css.inputView}
        placeholder="Usuario:"
        placeholderTextColor="#003f5c"
        onChangeText={text => setUser(text)}

      />
      <TextInput 
        style={css.inputView}
        placeholder="Senha:"
        secureTextEntry={true}
        placeholderTextColor="#003f5c"
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity 
        style={css.loginBtn} 
        onPress={()=> 
        sendForm()}>
        <Text>
          Entrar
        </Text>
      </TouchableOpacity>

    </View>
  );
}