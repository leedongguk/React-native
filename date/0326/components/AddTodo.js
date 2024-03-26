import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Image, TouchableOpacity, Platform, TouchableNativeFeedback, Keyboard} from 'react-native';

function AddTodo({onInsert}){
    const [text, setText] = useState('');

    const onPress = () => {
        onInsert(text);
        setText('');
        Keyboard.dismiss();
    };
    
    
    const button = (
        <View style={styles.buttonStyle}>
            <Image source={require('../assets/icons/add_white/add_white.png')} />
        </View>
    );

    console.log(text);

    return (
    <View style={styles.block}>
        <TextInput placeholder="할 일을 입력하세요." style={styles.input}
        value={text}
        onSumbitEditing={onPress}
        returnKeyType="done"
        onChangeText={setText}/>
        
        {Platform.select({
            ios: <TouchableOpacity activeOpacity={0.5} onPress={onPress}>{button}</TouchableOpacity>,
            android: (
                <View style={styles.circleWrapper}>
                <TouchableNativeFeedback onPress={onPress}>{button}</TouchableNativeFeedback>
                </View>    

            ),
        })}
    </View>
);
}

const styles = StyleSheet.create({
    block: {
        height: 64,
        backgroundColor: 'white',
        paddingHorizontal:16,
        borderColor: '#bdbdbd',
        borderTopWidth:1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',

    },
    input: {
        fortSize: 16,
        paddingVertical: 8,
        flex: 1,

    },
    circleWrapper: {
        overflow: 'hidden',
        borderRadius: 24,

    },
    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        backgroundColor: '#26a69a',
        borderRadius: 24,
    },
});

export default AddTodo;