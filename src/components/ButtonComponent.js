import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { WIDTH } from '../constants/Dimension';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ButtonComponent = (props) => {
    const { buttonValue, iconName, backgroundColor = "green", onPress, buttonContainerStyle, buttonTextStyle } = props;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, buttonContainerStyle, { backgroundColor }]}>
            {iconName && <Icon name={iconName} size={24} color="white" style={styles.icon} />}
            <Text style={[styles.buttonText, buttonTextStyle]}>{buttonValue}</Text>
        </TouchableOpacity>
    );
}

export default ButtonComponent;

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: WIDTH * 0.04,
        borderRadius: WIDTH * 0.02,
        flexDirection: 'row',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
    },
    icon: {
        marginRight: WIDTH * 0.02,
    },
});
