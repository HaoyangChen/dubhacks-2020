import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import colorData from '../data/color.json';

const width = Dimensions.get('window').width;

const CardButton = (params) => {
    return (
        <TouchableOpacity style={styles.cardBtnStyle}>
            <Image
                source={require('../assets/homepage/iconAppointment.png')}
                style={styles.cardBtnIcon}
            />
            <Text style={styles.cardText}>{params.cardText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardBtnStyle: {
        backgroundColor: colorData.brandColor.primaryLighter,
        width: Math.floor(width / 2 - 15),
        height: Math.floor(width / 2 - 15),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBtnIcon: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'normal',
        lineHeight: 31,
        textAlign: 'center',
        marginTop: 10,
        color: colorData.neutralColor.lightest,
    },
});

export default CardButton;
