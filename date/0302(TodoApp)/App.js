import React from 'react';
import {SafeAreaView, KeyboardAvoidingView,StyleSheet, Platform} from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
function App() {

  const today = new Date();
  return(
    <SafeAreaView edges={['bottom']} style={styles.block}> 
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding': undefined} style={styles.avoid}>
        <DateHead date={today}/>
        <Empty />
        <AddTodo />
        </KeyboardAvoidingView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1.
  },
});

export default App;
