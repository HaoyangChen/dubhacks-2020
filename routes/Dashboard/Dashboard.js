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
import colorData from '../../data/color.json';
import { color } from 'react-native-reanimated';
import ContainedIconButton from '../../components/ContainedIconButton';
import { Card } from 'react-native-paper';

const width = Dimensions.get('window').width;

const Dashboard = ({ navigation }) => {
    // This will run every time user log in or log out
    // It also fetch user authentication status
    // const checkIfUserLoggedIn = () => {
    //     firebase.auth().onAuthStateChanged((user) => {
    //         if (!user) navigation.navigate('Authentication');
    //     });
    // };

    // useEffect(() => {
    //     // Run the authentication check-up
    //     checkIfUserLoggedIn();
    // }, []);

    return (
        <ScrollView style={styles.container}>
            <View style={[styles.homeHeaderStyle]}>
                <Text style={styles.titleStyle}>Welcome, John Doe</Text>
                <Text style={styles.subTitleStyle}>
                    How can we help you today?
                </Text>
            </View>
            <TouchableOpacity style={[styles.listItem, styles.cardTop]}>
                <View style={[styles.listItemLeft]} />
                <View style={[styles.listItemRight]}>
                    <Text style={[styles.fontCardTitle, styles.cardTitle]}>
                        Take Diabetic Medication
                    </Text>
                    <Text
                        style={[
                            styles.fontCardTitle,
                            styles.boldFont,
                            styles.rightTitle,
                        ]}
                    >
                        10:30 AM
                    </Text>
                    <View style={styles.leftRight}>
                        <Text style={[styles.fontTime, styles.rightText]}>
                            March 13, 2020
                        </Text>
                        <ContainedIconButton
                            iconName="check"
                            btnColor={colorData.brandColor.accent}
                            textColor={colorData.neutralColor.darkest}
                            btnText="Complete"
                            width="60%"
                            height={44}
                        />
                    </View>
                </View>
                {/* </View> */}
            </TouchableOpacity>
            <View style={styles.cardBtnWrapper}>
                <TouchableOpacity style={styles.cardBtnStyle}>
                    <Image
                        source={require('../../assets/homepage/iconAppointment.png')}
                        style={styles.cardBtnIcon}
                    />
                    <Text style={styles.cardText}>Manage Appointments</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cardBtnStyle}
                    onPress={() => navigation.navigate('My Information')}
                >
                    <Image
                        source={require('../../assets/homepage/iconManage.png')}
                        style={styles.cardBtnIcon}
                    />
                    <Text style={styles.cardText}>Manage My Information</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardBtnStyle}>
                    <Image
                        source={require('../../assets/homepage/iconDoctor.png')}
                        style={styles.cardBtnIcon}
                    />
                    <Text style={styles.cardText}>
                        Chat with Doctor or Nurse
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cardBtnStyle}
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Image
                        source={require('../../assets/homepage/iconSetting.png')}
                        style={styles.cardBtnIcon}
                    />
                    <Text style={styles.cardText}>Change Settings</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 28,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'bold',
        lineHeight: 48,
        textAlign: 'center',
    },
    subTitleStyle: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'normal',
        lineHeight: 31,
        textAlign: 'center',
        color: colorData.brandColor.primaryLighter,
    },
    homeHeaderStyle: {
        backgroundColor: colorData.neutralColor.lightest,
        paddingBottom: 20,
    },
    cardTop: {
        marginTop: 20,
    },
    listItem: {
        width: width - 50,
        borderRadius: 10,
        marginBottom: 16,
        flexDirection: 'row',
        shadowColor: 'green',
        elevation: 8,
        shadowColor: 'rgba(31, 31, 31, 0.1)',
        backgroundColor: '#ffffff',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        marginLeft: '5%',
        marginRight: '5%',
    },
    listItemLeft: {
        width: 8,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: colorData.brandColor.accent,
    },
    listItemRight: {
        paddingVertical: 16,
        paddingLeft: 12,
    },
    rightTitle: {
        color: '#1F1F1F',
        lineHeight: 22,
        fontSize: 17,
        marginTop: 5,
    },
    rightText: {
        color: '#707070',
        fontSize: 13,
        lineHeight: 18,
        marginTop: 2,
    },
    listItemWarning: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemWarningText: {
        color: '#C13F30',
        fontSize: 13,
        lineHeight: 18,
        marginLeft: 5,
    },
    leftRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fontCardTitle: {
        fontSize: 22,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'normal',
        lineHeight: 37,
    },
    boldFont: {
        fontWeight: 'bold',
    },
    fontTime: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'normal',
        lineHeight: 31,
        color: colorData.neutralColor.darker,
    },
    // Card Button
    cardBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignContent: 'space-around',
    },
    cardBtnStyle: {
        backgroundColor: colorData.brandColor.primaryLighter,
        width: Math.floor(width / 2 - 35),
        height: Math.floor(width / 2 - 35),
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    cardBtnIcon: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
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

export default Dashboard;
