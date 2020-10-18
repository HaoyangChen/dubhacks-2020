import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import * as firebase from 'firebase';

import { AppContext } from './../../context/ContextProvider';
import * as Google from 'expo-google-app-auth';

import { googleConfig } from '../../config/googleSignIn.config';

export default function LogIn({ navigation }) {
    const { login } = useContext(AppContext);

    const signInWithGoogle = async () => {
        try {
            const result = await Google.logInAsync(googleConfig);
            if (result.type === 'success') {
                // The app has passed through this point
                // So the API key should not be the issue
                onSignIn(result, navigation, login);
            } else if (result.type === 'cancel') {
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

// This is how we manually handle the Google Sign-in flow
// We pass the accessToken and idToken to firebase for checking if the user already authenticated with Firebase
// If not we create a credential using firebase and user tokenId + accessToken
// and use that credential to authenticate with firebase
function onSignIn(googleUser, navigation, login) {
    // console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase
        .auth()
        .onAuthStateChanged(function (firebaseUser) {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
            if (!isUserEqual(googleUser, firebaseUser)) {
                // Build Firebase credential with the Google ID token.
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    googleUser.idToken,
                    googleUser.accessToken,
                );
                // Sign in with credential from the Google user.
                firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then((result) => {
                        console.log('result here');
                        // Set the user in our global state
                        login(googleUser.id);
                        // Then navigate user to dashboard
                        navigation.navigate('Home Page');
                    })
                    .catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
            } else {
                console.log('User already signed-in Firebase.');
            }
        });
}
function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        for (var i = 0; i < providerData.length; i++) {
            if (
                providerData[i].providerId ===
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()
            ) {
                // We don't need to re-auth the Firebase connection.
                return true;
            }
        }
    }
    return false;
}
