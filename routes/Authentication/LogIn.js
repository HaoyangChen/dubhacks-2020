import React from 'react';
import { Text, View } from 'react-native';
import * as firebase from 'firebase';

export default function LogIn({ navigation }) {
    const checkIfUserLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user) => {});
    };

    return (
        <View>
            <Text>This is log in page</Text>
        </View>
    );
}
