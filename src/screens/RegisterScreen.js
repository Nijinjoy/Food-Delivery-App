import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Platform, TouchableOpacity, Text } from 'react-native';
import { HEIGHT, WIDTH } from '../constants/Dimension';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';
import HeaderComponent from '../components/HeaderComponent';
import { appicon } from '../assets/images';
import colors from '../constants/Colors';

const inputFields = [
    { label: 'Username', placeholder: 'Enter your username', secureTextEntry: false },
    { label: 'Email', placeholder: 'Enter your email', secureTextEntry: false },
    { label: 'Password', placeholder: 'Enter your password', secureTextEntry: true },
];

const RegisterScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <HeaderComponent
                headerText="Register"
                appIcon={appicon}
            />
            <View style={styles.subContainer}>
                <View>
                    <Text style={styles.header}>Create your account</Text>
                    {inputFields.map((field, index) => (
                        <View style={styles.inputContainer} key={index}>
                            <TextInputComponent
                                label={field.label}
                                placeholder={field.placeholder}
                                secureTextEntry={field.secureTextEntry}
                            />
                        </View>
                    ))}
                    <View style={styles.buttonContainer}>
                        <ButtonComponent buttonValue="Register" />
                    </View>

                    <View style={styles.orContainer}>
                        <Text style={styles.orText}>or sign up with</Text>
                    </View>

                    <View style={styles.socialButtonsContainer}>
                        <ButtonComponent
                            buttonValue="Google"
                            iconName="google"
                            backgroundColor="#DB4437"
                            style={styles.socialButton}
                        />
                        <ButtonComponent
                            buttonValue="Facebook"
                            iconName="facebook"
                            backgroundColor="#4267B2"
                            style={styles.socialButton}
                        />
                        <ButtonComponent
                            buttonValue="Twitter"
                            iconName="twitter"
                            backgroundColor="#1DA1F2"
                            style={styles.socialButton}
                        />
                    </View>
                </View>

                <View style={styles.signInContainer}>
                    <Text style={styles.signInText}>Already have an account? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signInLink}>Sign in here</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    subContainer: {
        flex: 1,
        marginHorizontal: WIDTH * 0.05,
        marginTop: HEIGHT * 0.04,
        justifyContent: 'space-between',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 27,
        marginBottom: HEIGHT * 0.02
    },
    inputContainer: {
        marginTop: HEIGHT * 0.03,
    },
    buttonContainer: {
        marginTop: HEIGHT * 0.05,
    },
    orContainer: {
        alignItems: 'center',
        marginVertical: HEIGHT * 0.03,
    },
    orText: {
        marginHorizontal: WIDTH * 0.02,
        fontSize: 16,
        color: 'gray',
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        marginTop: HEIGHT * 0.02,
        justifyContent: 'space-between',
    },
    socialButton: {
        flex: 1,
        marginHorizontal: WIDTH * 0.02,
    },
    signInContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: HEIGHT * 0.04,
        marginBottom: HEIGHT * 0.02,
    },
    signInText: {
        fontSize: 16,
        color: 'gray',
    },
    signInLink: {
        fontSize: 16,
        color: '#4285F4',
        fontWeight: 'bold',
    },
});
