import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { appicon } from '../assets/images';
import { HEIGHT, WIDTH } from '../constants/Dimension';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';

const PasswordScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View style={styles.safeArea}>
                <HeaderComponent appIcon={appicon} />
                <View style={styles.contentContainer}>
                    <Text style={styles.headerText}>Reset password</Text>
                    <Text style={styles.descriptionText}>
                        Please type something you'll remember
                    </Text>
                </View>
                {/* Wrapper for Labels and TextInputs positioned at the bottom */}
                <View style={styles.bottomContainer}>
                    <Text style={styles.labelText}>New Password</Text>
                    <TextInputComponent
                        placeholder="Must be 8 characters"
                        secureTextEntry={true}
                    />

                    <Text style={styles.labelText}>Confirm Password</Text>
                    <TextInputComponent
                        placeholder="Repeat password"
                        secureTextEntry={true}
                    />
                </View>
                <ButtonComponent
                    buttonValue="Reset password"
                    // iconName="send"
                    backgroundColor="black"
                    // onPress={onNavigate}
                    buttonContainerStyle={{ marginTop: 20 }}
                    buttonTextStyle={{ fontSize: 16 }}
                />
            </View>
        </View>
    );
};

export default PasswordScreen;

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
    bottomContainer: {
        marginTop: HEIGHT * 0.04,
        justifyContent: 'flex-end',
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
    labelText: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: HEIGHT * 0.01,
        marginBottom: HEIGHT * 0.008,
    },
});
