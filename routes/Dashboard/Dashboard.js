import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import * as firebase from 'firebase';
import colorData from '../../data/color.json';
import { color } from 'react-native-reanimated';
import ContainedIconButton from '../../components/ContainedIconButton';

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
        <View>
            <Text style={styles.titleStyle}>Welcome, John Doe</Text>
            <Text style={styles.subTitleStyle}>How can we help you today?</Text>
            <TouchableOpacity style={[styles.listItem]}>
                <View style={[styles.listItemLeft]} />
                <View style={[styles.listItemRight]}>
                    <Text style={[styles.fontRegular, styles.cardTitle]}>
                        Take Diabetic Medication
                    </Text>
                    <Text style={[styles.fontRegular, styles.rightTitle]}>
                        10:30 AM
                    </Text>
                    <View style={styles.leftRight}>
                        <Text style={[styles.fontRegular, styles.rightText]}>
                            March 13, 2020
                        </Text>
                        <ContainedIconButton
                            iconName="check"
                            btnColor={colorData.brandColor.accent}
                            textColor={colorData.neutralColor.darkest}
                            btnText="Complete"
                            height={44}
                        />
                    </View>
                </View>
                {/* </View> */}
            </TouchableOpacity>
        </View>
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
});

export default Dashboard;
