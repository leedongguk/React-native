import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

function DateHead({date}) {

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return(
        <>
        <StatusBar backgroundColor="#26a69a" />
        <View style={styles.block}>
            <Text style={styles.dataText}>
               {year}년 {month}월 {day}일   
            </Text>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    block: {
        padding: 16,
        backgroundColor: '#26a69a',
    },
    dataText: {
        fontSize: 24,
        color: 'white',
    },
});

export default DateHead;