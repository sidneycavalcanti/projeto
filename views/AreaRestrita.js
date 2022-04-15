import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {css} from '../assets/css/Css';

export default function AreaRestrita(props) {
  return (
    <View style={css.pagehome}>
      <Text> Home Screen Area Restrita do Sistema {props.route.params.id}</Text>
    </View>
  );
}