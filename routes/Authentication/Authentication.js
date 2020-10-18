import React, { useContext } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../data/color.json';
import ContainedIconButton from '../../components/ContainedIconButton';
import colorData from '../../data/color.json';
import { color } from 'react-native-reanimated';

import * as firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import { AppContext } from './../../context/ContextProvider';
import { googleConfig } from '../../config/googleSignIn.config';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Authentication = ({ navigation }) => {
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
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/login_graphics.png')}
                style={styles.loginGraphics}
            />
            <View style={styles.safeArea}>
                <Text style={styles.tapTitle}>
                    Tap on a button below to log in with your email
                </Text>
                <Text style={styles.newMemberText}>
                    If you are a new member, you will be guided to create an
                    account.
                </Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={signInWithGoogle}
                >
                    <ContainedIconButton
                        iconName="google"
                        btnText="Continue with Gmail"
                        textColor={colorData.neutralColor.lightest}
                        btnColor={colorData.brandColor.primary}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <ContainedIconButton
                        iconName="yahoo"
                        textColor={colorData.neutralColor.lightest}
                        btnText="Continue with Yahoo"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => navigation.navigate('Fill Form')}
                >
                    <ContainedIconButton
                        iconName="phone"
                        textColor={colorData.neutralColor.lightest}
                        btnText="Continue with Phone"
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.neutralColor.lightest,
    },
    safeArea: {
        marginHorizontal: 24,
    },
    loginGraphics: {
        height: '35%',
        width: width,
        resizeMode: 'stretch',
    },
    tapTitle: {
        fontSize: 28,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        fontWeight: 'bold',
        lineHeight: 48,
        textAlign: 'center',
        marginTop: 24,
        color: colors.neutralColor.darkest,
    },
    newMemberText: {
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto-Regular',
        lineHeight: 31,
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 32,
        color: colors.neutralColor.darkest,
    },
    buttonStyle: {
        marginTop: 16,
    },
});

export default Authentication;

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
                console.log('checkpoint 1');
                // Sign in with credential from the Google user.
                firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then((result) => {
                        console.log('checkpoint 2');

                        // Set the user in our global state
                        login(googleUser.id);
                        // Then navigate user to dashboard
                        navigation.navigate('Home Page');
                    })
                    .catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorMessage);
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
            } else {
                console.log('User already signed-in Firebase.');
                navigation.navigate('Home Page');
            }
        });
}
function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        // console.log(providerData);
        // console.log(googleUser);
        for (var i = 0; i < providerData.length; i++) {
            if (
                providerData[i].providerId ===
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.user.id
            ) {
                // We don't need to re-auth the Firebase connection.
                return true;
            }
        }
    }
    return false;
}
