import React from 'react';
import {View, StyleSheet} from 'react-native';


function Box(props){
    return <View style={[styles.box, props.rounded && styles.rounded, sizes[props.size],{
        backgroundColor:props.color,

    },]} />;
}

Box.defaultProps = {
    size: 'mdedium',
    color: 'black',
};


const styles = StyleSheet.create({
    box: {
        backgroundColor: 'black',
    },
    rounded: {
        borderRadius: 16,
    },
    small: {
        width: 32,
        height: 32,
    },
    medium: {
        width:64,
        height: 64,
    },
    large: {
        width: 128,
        height: 128,
    },
});

const sizes = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
};

export default Box;