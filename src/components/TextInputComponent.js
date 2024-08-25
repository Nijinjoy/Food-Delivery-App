import React, { useState, useEffect } from 'react';
import { View, TextInput, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons for the eye icon
import { WIDTH } from '../constants/Dimension';

const TextInputComponent = ({ label, placeholder, secureTextEntry }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = useState(secureTextEntry);

    const labelAnimation = new Animated.Value(value || isFocused ? 1 : 0);

    useEffect(() => {
        Animated.timing(labelAnimation, {
            toValue: value || isFocused ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isFocused, value]);

    const labelStyle = {
        position: 'absolute',
        left: 10,
        top: labelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [15, -10],
        }),
        fontSize: labelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 12],
        }),
        color: labelAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ['#999', '#000'],
        }),
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={showPassword}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={text => setValue(text)}
                style={styles.textInput}
            />
            {secureTextEntry && (
                <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Icon
                        name={showPassword ? 'eye' : 'eye-off'}
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: WIDTH * 0.05,
        position: 'relative',
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 5,
        // paddingHorizontal: 40, 
        fontSize: 16,
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -12 }],
    },
});

export default TextInputComponent;

