import { View, StyleSheet, StatusBar, Platform, TextInput, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { appicon } from '../assets/images';
import { HEIGHT, WIDTH } from '../constants/Dimension';
import colors from '../constants/Colors';
import ButtonComponent from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation()

    const handleSendCode = () => {
        navigation.navigate("OtpScreen")
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View style={styles.safeArea}>
                <HeaderComponent appIcon={appicon} />
                <View style={styles.contentContainer}>
                    <Text style={styles.headerText}>Forgot password?</Text>
                    <Text style={styles.descriptionText}>
                        Don't worry! It happens. Please enter the email associated with your account.
                    </Text>

                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email address"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <ButtonComponent
                        buttonValue="Send Code"
                        iconName="send"
                        backgroundColor="black"
                        onPress={handleSendCode}
                        buttonContainerStyle={{ marginTop: 20 }}
                        buttonTextStyle={{ fontSize: 16 }}
                    />
                </View>
            </View>

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Remember password?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={[styles.footerText, { fontWeight: 'bold', marginLeft: 5 }]}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ForgotPasswordScreen;

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
        fontWeight: 'bold',
    },
    descriptionText: {
        fontSize: 15,
        marginTop: HEIGHT * 0.01,
    },
    label: {
        fontSize: 15,
        fontWeight: '500',
        marginTop: HEIGHT * 0.04,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.bordercolor,
        borderRadius: WIDTH * 0.02,
        padding: 10,
        marginTop: HEIGHT * 0.01,
        fontSize: 15,
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
