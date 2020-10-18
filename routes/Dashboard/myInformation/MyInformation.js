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
import colorData from '../../../data/color.json';
import { color } from 'react-native-reanimated';
import ContainedIconButton from '../../../components/ContainedIconButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MyInformation = () => {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.cardBtnStyle}>
                <Image
                    source={require('../../../assets/myinformation/personalIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardText}>Manage Appointments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardBtnStyle}>
                <Image
                    source={require('../../../assets/myinformation/practitionerIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardText}>Practitioners</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardBtnStyle}>
                <Image
                    source={require('../../../assets/myinformation/emergencyIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardText}>Emergency Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardBtnStyle}>
                <Image
                    source={require('../../../assets/myinformation/insuranceIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardText}>Insurance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardBtnStyle}>
                <Image
                    source={require('../../../assets/myinformation/paymentIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardText}>Payment</Text>
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

export default MyInformation;
