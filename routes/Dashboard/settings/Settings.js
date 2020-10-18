import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Platform,
    Dimensions,
} from 'react-native';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import colorData from '../../../data/color.json';
import { color } from 'react-native-reanimated';
import ContainedIconButton from '../../../components/ContainedIconButton';

import AdjustTextSize from './AdjustTextSize';
import Notifications from './Notifications';
import PaymentSettings from './PaymentSettings';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Stack = createStackNavigator();

const Settings = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity
                style={styles.cardBtnStyle}
                onPress={() => navigation.navigate('Adjust Text Size')}
            >
                <Image
                    source={require('../../../assets/settings/textsizeIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardText}>{"Adjust\nText Size"}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.cardBtnStyle}
                onPress={() => {
                    console.log('Notification setting selected');
                    navigation.navigate('Notifications');
                }}
            >
                <Image
                    source={require('../../../assets/settings/notificationIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.cardBtnStyle}
                onPress={() => navigation.navigate('Payment Settings')}
            >
                <Image
                    source={require('../../../assets/settings/paymentIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardText}>Payment Settings</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const SettingsScreenOptions = () => {
    return (
        <Stack.Navigator initialRouteName="Settings">
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Adjust Text Size" component={AdjustTextSize} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Payment Settings" component={PaymentSettings} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        backgroundColor:colorData.neutralColor.background,
    },
    cardBtnStyle: {
        backgroundColor: colorData.brandColor.primaryLighter,
        width: '100%',
        height: 163,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        marginTop: 24,
    },
    cardBtnIcon: {
        width: 60,
        height: 60,
        marginLeft: 28,
        overflow: 'visible',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        fontSize: 28,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'normal',
        lineHeight: 47.6,
        textAlign: 'center',
        width: '50%',
        color: colorData.neutralColor.lightest,
    },
});

export default SettingsScreenOptions;
