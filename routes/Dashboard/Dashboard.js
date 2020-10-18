import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import colorData from '../../data/color.json';

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
});

export default Dashboard;
