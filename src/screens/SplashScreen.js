import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, withSpring, interpolate } from 'react-native-reanimated';
import { splashlogo } from '../assets/images';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = () => {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(50);
    const scale = useSharedValue(0.8);
    const bounce = useSharedValue(1);

    useEffect(() => {
        // Animate splash icon and text
        opacity.value = withTiming(1, {
            duration: 1500,
            easing: Easing.out(Easing.exp),
        });
        translateY.value = withTiming(0, {
            duration: 1500,
            easing: Easing.out(Easing.exp),
        });
        scale.value = withSpring(1, {
            damping: 2,
            stiffness: 100,
        });

        // Bounce effect
        bounce.value = withSpring(1.2, {
            damping: 2,
            stiffness: 150,
        });

        // Reset bounce value after the bounce completes
        bounce.value = withTiming(1, {
            duration: 1000,
            easing: Easing.out(Easing.exp),
        });
    }, []);

    const animatedIconStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                { translateY: translateY.value },
                { scale: scale.value },
            ],
        };
    });

    const animatedTextStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [
                { translateY: translateY.value },
                { scale: bounce.value },
            ],
        };
    });

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#d4f4dd', '#a9f3c8']} // Gradient colors
                style={StyleSheet.absoluteFillObject} // Cover the entire container
            />
            <Animated.View style={[styles.imageContainer, animatedIconStyle]}>
                <Image
                    source={splashlogo}
                    style={styles.image}
                />
            </Animated.View>
            <Animated.Text style={[styles.text, animatedTextStyle]}>
                Welcome to Foodie
            </Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default SplashScreen;
