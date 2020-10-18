import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import * as firebase from 'firebase';

import { AppContext } from './../../context/ContextProvider';
import * as firebase from 'firebase';
import * as Google from 'expo-google-app-auth';

import { googleConfig } from '../../config/googleSignIn.config';

export default function LogIn({ navigation }) {
    const { login } = useContext(AppContext);

    const signInWithGoogle = async () => {
        try {
            const { type, accessToken, user } = await Google.logInAsync(
                googleConfig,
            );
            if (type === 'success') {
                const { id, name, email } = user;
            } else if (type === 'cancel') {
                navigation.navigate('Register');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <View>
            <Text>This is log in page</Text>
            <Button title="Sign in with Google" onPress={signInWithGoogle} />
        </View>
    );
}
