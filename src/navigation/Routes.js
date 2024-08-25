import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoardingScreen from '../screens/OnBoardingScreen'
import RegisterScreen from '../screens/RegisterScreen'
import SplashScreen from '../screens/SplashScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import OtpScreen from '../screens/OtpScreen'
import PasswordScreen from '../screens/PasswordScreen'


const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ForgotPasswordScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='SplashScreen' component={SplashScreen} />
                <Stack.Screen name='OnBoardingScreen' component={OnBoardingScreen} />
                <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
                <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
                <Stack.Screen name='OtpScreen' component={OtpScreen} />
                <Stack.Screen name='PasswordScreen' component={PasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes
