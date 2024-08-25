import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import { HEIGHT } from '../constants/Dimension';

const LabeledInputComponent = ({ label, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInputComponent
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: HEIGHT * 0.03,
    },
    label: {
        marginBottom: HEIGHT * 0.007,
    },
});

export default LabeledInputComponent;
