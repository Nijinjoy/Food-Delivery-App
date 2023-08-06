import { View, Text, StatusBar, Image, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../constants'
import { logo } from '../assets/images'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.lightblue} />
            <View style={styles.Logo}>
                <Image source={logo} resizeMode='contain' style={styles.logo} />
                <Text style={styles.logoText}>Food Court</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightblue
    },
    logo: {
        width: 200,
        height: 100
    },
    Logo: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1
    },
    logoText: {
        fontSize: 40,
        color: colors.lightblack,
        fontFamily: 'cursive',
        fontWeight: 'bold'
    }
})
export default SplashScreen