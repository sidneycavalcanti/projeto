import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Page from './views/Page';
import {css} from './assets/css/Css';

export default function App (){
  const [product] = useState('luva');
  const [quantity] = useState(0);


const props={
  empresa:'webdesign em foco',
  name: 'Sidney',
  produto: product,
  quantidade: quantity,
};


  return(
  <View style={css.container}>
      <Text> pega caraca o cara da {product} de pedreiro obrigado meu Deus</Text>
      <Page {...props}/>
      <Button title='teste' onPress={()=> setQuantidade(quantity + 1)}/>
  </View>);
}


