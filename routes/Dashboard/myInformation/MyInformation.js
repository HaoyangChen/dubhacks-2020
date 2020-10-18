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
import colorData from '../../../data/color.json';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MyInformation = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.cardBtnStyle}>
                <Image
                    source={require('../../../assets/myinformation/personalIcon.png')}
                    style={styles.cardBtnIcon}
                />
                <Text style={styles.cardText}>Manage Appointments</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.cardBtnStyle}
                onPress={() => navigation.navigate('Practitioners')}
            >
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
            <TouchableOpacity
                style={[styles.cardBtnStyle, styles.bottomMargin]}
            >
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
        paddingHorizontal: 16,
        backgroundColor: colorData.neutralColor.background,
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
        marginTop: 10,
        width: '50%',
        color: colorData.neutralColor.lightest,
    },
    bottomMargin: {
        marginBottom: 32,
    },
});

export default MyInformation;
