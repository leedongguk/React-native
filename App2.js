/**
 * @format
 */
import React from 'react';
import {SafeAreaView, View, Text } from 'react-native';
import Greeting from './components/Greeting'
import Box from './components/Box'

const App2 = () => {
  const name = 'JSX';
  return(
<SafeAreaView>
  <View>
  <Text>Hello dongguk</Text>
    <Greeting name={name}/>
    <Box rounded={true} size="large"/>
  </View>
</SafeAreaView>
  );

};

export default App2;
