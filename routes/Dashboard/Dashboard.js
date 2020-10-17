import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as firebase from 'firebase';

export default function Dashboard({ navigation }) {
    // This will run every time user log in or log out
    // It also fetch user authentication status
    const checkIfUserLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) navigation.navigate('Authentication');
        });
    };

    useEffect(() => {
        // Run the authentication check-up
        checkIfUserLoggedIn();
    }, []);

    return (
        <View>
            <Text>Dashboard route</Text>
        </View>
    );
}
