import React, {useState, useEffect} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import Page from './views/Page';
import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const [product, setProduct] = useState('luva');
  const [quantity, setQuantity] = useState(0);

  useEffect (() => {
    if (quantity > 0) {
      Alert.alert('Novo produto foi adicionado');
    }
  }, [quantity]);

  const props = {
    empresa: 'webdesign em foco',
    name: 'Sidney',
    produto: product,
    quantidade: quantity,
  };

  return (
    <View style={css.container}>
      <Text>
        {' '}
        pega caraca o cara da {product} de pedreiro obrigado meu Deus
      </Text>
      <Page {...props}/>
      <Button
        title="Adicionar Produtos"
        onPress={() => setQuantity(quantity + 1)}
        />
    </View>
  );
}
