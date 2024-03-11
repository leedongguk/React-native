/**
 * @format
 */
import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import Greeting from './components/Greeting'
import Box from './components/Box'
import Counter from './components/Counter'

const App2 = () => {
  const name = 'JSX';
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };

  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count+1);
  const onDecrease = () => setCount(count-1);
  return(
<SafeAreaView style={style.full}>
  <View>
  <Text>Hello dongguk</Text>
    {/* 0311
    <Greeting name={name}/>
    <Box rounded={true} size="large" color="blue"/>
    <Button title="t" onPress={onPress} />
  {visible ? <Box rounded={true} size="large" color="blue" /> : null}*/}
  


  </View>
  <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease}/>
</SafeAreaView>
  );

};

const style = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'cyan'
  },
});

export default App2;
