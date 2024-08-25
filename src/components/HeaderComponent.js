import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { WIDTH } from '../constants/Dimension';

const HeaderComponent = (props) => {
    const { headerText, appIcon, style } = props;
    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity style={styles.iconContainer}>
                <Icon name="arrow-back" size={28} color="#000" />
            </TouchableOpacity>
            <Text style={styles.title}>{headerText}</Text>
            <Image
                source={appIcon}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        // marginHorizontal: WIDTH * 0.05, /
    },
    iconContainer: {
        width: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    logo: {
        width: WIDTH * 0.07,
        height: WIDTH * 0.07,
    },
};

export default HeaderComponent;
