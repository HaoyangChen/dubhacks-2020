import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from 'react-native';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colorData from '../../../data/color.json';
import { color } from 'react-native-reanimated';
import ContainedIconButton from '../../../components/ContainedIconButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Stack = createStackNavigator();

const PaymentSettings = ({ notification }) => {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.cardBtnStyle}>
                <Image
                    source={require('../../../assets/settings/textsizeIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardText}>Adjust Text Size</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardBtnStyle}>
                <Image
                    source={require('../../../assets/settings/notificationIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardBtnStyle}>
                <Image
                    source={require('../../../assets/settings/paymentIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardText}>Payment Settings</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 21,
    },
    cardBtnStyle: {
        backgroundColor: colorData.brandColor.primaryLighter,
        width: '100%',
        height: Math.floor(width / 2 - 15),
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 40,
        borderRadius: 8,
        marginTop: 24,
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
        width: '50%',
        color: colorData.neutralColor.lightest,
    },
});

export default PaymentSettings;
