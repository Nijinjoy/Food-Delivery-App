import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { WIDTH } from '../constants/Dimension';
import colors from '../constants/Colors';

const TextInputComponent = ({ placeholder, secureTextEntry }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={!isPasswordVisible}
                style={styles.textInput}
            />
            {secureTextEntry && (
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
                    <Icon name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="black" />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: WIDTH * 0.02,
        paddingHorizontal: WIDTH * 0.02,
        backgroundColor: colors.lightgrey
    },
    textInput: {
        flex: 1,
        paddingVertical: WIDTH * 0.025,
        backgroundColor: colors.lightgrey
    },
    iconContainer: {
        paddingLeft: WIDTH * 0.02,
    },
});

export default TextInputComponent;
