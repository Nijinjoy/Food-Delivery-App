import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { Platform } from 'react-native';
import { HEIGHT, WIDTH } from '../constants/Dimension';
import colors from '../constants/Colors';
import HeaderComponent from '../components/HeaderComponent';
import { appicon } from '../assets/images';
import ButtonComponent from '../components/ButtonComponent';

const OtpScreen = ({ navigation }) => {
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const handleTextChange = (text, index) => {
        if (text.length === 1 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    const onNavigate = () => {
        navigation.navigate("PasswordScreen")
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View style={styles.safeArea}>
                <HeaderComponent appIcon={appicon} />
                <View style={styles.contentContainer}>
                    <Text style={styles.headerText}>Please check your email</Text>
                    <Text style={styles.descriptionText}>
                        We've sent a code to helloworld@gmail.com
                    </Text>

                    <View style={styles.otpContainer}>
                        {inputRefs.map((ref, index) => (
                            <TextInput
                                key={index}
                                ref={ref}
                                style={styles.otpInput}
                                // placeholder="0"
                                keyboardType="number-pad"
                                maxLength={1}
                                textAlign="center"
                                onChangeText={(text) => handleTextChange(text, index)}
                            />
                        ))}
                    </View>

                    <ButtonComponent
                        buttonValue="Verify"
                        // iconName="send"
                        backgroundColor="black"
                        onPress={onNavigate}
                        buttonContainerStyle={{ marginTop: 20 }}
                        buttonTextStyle={{ fontSize: 16 }}
                    />
                </View>
            </View>

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Send code again </Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={[styles.footerText, { fontWeight: 'bold', marginLeft: 5 }]}>00.25</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default OtpScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    safeArea: {
        flex: 1,
        marginHorizontal: WIDTH * 0.05,
    },
    contentContainer: {
        marginTop: 20,
        marginHorizontal: WIDTH * 0.02,
    },
    headerText: {
        fontSize: 27,
        width: WIDTH * 0.7,
        fontWeight: 'bold',
    },
    descriptionText: {
        fontSize: 15,
        marginTop: HEIGHT * 0.01,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: HEIGHT * 0.04,
    },
    otpInput: {
        width: WIDTH * 0.18,
        borderWidth: 1,
        borderColor: colors.bordercolor,
        borderRadius: WIDTH * 0.02,
        padding: 12,
        fontSize: 18,
        textAlign: 'center',
    },
    footerContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 15,
        color: 'black',
    },
});


