import React from "react";
import {View, Text} from 'react-native';
import {css} from '../assets/css/Css';

export default function Page (props)

{
  return (
    <View style={css.textPage}>
      <Text > 
        Web infor {props.empresa} e o {props.name}  e o cara da {props.produto} na {props.quantidade}
      </Text>
    </View>
  )
};
